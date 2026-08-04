# 6. Diagnóstico do Produto (app) vs. Estratégia

Levantamento read-only de **tcg-api** (backend, FastAPI/SQLAlchemy/Lambda) e **tcg-app** (frontend, React+AntD+Zustand) em ago/2026, cruzado com o blueprint do [doc 04](04-trilhas-prontas-blueprint.md) e o posicionamento dos docs 01–02. Caminhos relativos às raízes de cada repo.

## 6.1 Veredito

O núcleo do produto **existe e é razoavelmente maduro**: multi-tenant por `company_id`, árvore de conhecimento (Skill→CardClass→CardCategory→Card), trilha de carreira (Trail + `trail_office` ordenado), motor de pontos/ranking robusto (`points.py`), PDI, e análise por **GPT-4o** já rodando. O tema por tenant também existe (`CompanyTheme`, ~70 tokens AntD).

Porém, para entregar a estratégia (pacotes prontos editáveis + planos/tiers + white-label tiered + gamificação com badges), **falta bastante — e há um bloqueador crítico de banco**. A boa notícia: **a parte mais difícil (pacotes prontos) já está desenhada e começou a ser construída** no próprio backend.

## 6.2 O que já existe e está maduro (não reinventar)

| Capacidade | Backend | Frontend |
|---|---|---|
| Multi-tenant | `company_id` em toda tabela; rotas `/{company_id}/...`; `require_auth` | tenant resolvido por **domínio** (`useCompanyDomain` → `/company/domain/{domain}`) |
| Árvore de conhecimento | `Skill→CardClass→CardCategory→Card` (`app/models/`) | builder miller-columns em `KnowledgeTrails.tsx` |
| Trilha + senioridade | `Trail` + `trail_office(sequence)`; `Office.scale` (`IC-JR…MGMT`) + `sequence` | consumida na Home por cargo |
| Pontos & ranking | `Point` + `app/services/points.py` (regras, caps trimestrais, scoreboard de gestor, progresso) | `features/ranking` (leaderboard + scoreboard) |
| PDI | `IndividualPlan` + `IndividualPlanGoal` (goal pode ter `card_id`) | `features/pdi` (kanban read-only) |
| IA (GPT-4o) | `individual_plan.py::get_analysis_by_person_id` — usa Office+Performance+Touchpoint → plano de 3 meses | botão "AI Insights" em `Teams.tsx` (dispara, exibe, persiste) |
| Tema por tenant | `CompanyTheme` (~70 tokens AntD, `logo`, `additional_config`) + `Company.color/icon_link/domain/language` | `company.color`→`ConfigProvider`, logo no header |

## 6.3 A parte mais difícil já começou — "Catálogo de Pacotes"

O backend **já tem spec e plano** para os pacotes prontos: `docs/superpowers/specs/2026-08-04-catalog-packages-design.md` e `docs/superpowers/plans/2026-08-04-catalog-packages-phase1.md` (9 tasks). Estado real do código:

- ✅ **Task 1** — árvore de template global existe: `app/models/template.py` (`TemplatePackage{kind: foundation|area|role, version, published}`, `TemplateSkill{type}`, `TemplateCardClass/Category/Card`, `TemplateOffice{scale}`, `TemplateTrail`, assoc `template_trail_office`, `template_office_card`, `template_level_card`).
- ✅ **Task 2** — colunas de linhagem (`source_template_id`, `source_version`, `is_customized`) em `Skill, CardClass, CardCategory, Card, Office, Trail` + `office_card`; gatilho `is_customized=True` na edição já ligado em `app/services/crud.py:224`.
- ❌ **Tasks 3–8 não feitas** — não existem: `app/models/company_package.py` (registro de posse/paywall), assoc `level_card` viva, `app/services/leveling.py`, **`app/services/catalog.py` (o motor `provision_package` que faz "comprar = instanciar no tenant" — o coração da feature)**, `app/routers/catalog.py` + schema, e `importer/seed_templates.py` (as tabelas de template estão **vazias**, sem conteúdo autorado).
- ❌ **Task 9 não feita — BLOQUEADOR CRÍTICO:** **não existe migração Alembic** para nenhuma tabela `template_*` / `company_package` / `level_card` nem para as colunas de linhagem (grep em `alembic/versions/` = 0). Hoje isso só existe via `Base.metadata.create_all` (funciona em teste SQLite e no `create_all` no import do `main.py`), mas **`alembic upgrade head` num Postgres real NÃO cria essas tabelas/colunas.** Qualquer deploy que dependa de migração quebra. → **Prioridade #1.**

## 6.4 Gaps por pilar da estratégia

### A. Pacotes prontos editáveis — o maior gap de produto
- **Backend:** motor de provisionamento não existe (`catalog.py` ausente); templates vazios; sem migração.
- **Frontend:** **nenhum** conceito de catálogo/adoção/template (grep vazio). Autoria em `KnowledgeTrails.tsx` é **só create** — não há **editar/excluir/reordenar** skills/classes/categorias/cards. Ou seja, mesmo o "então edite" da promessa não tem UI. `Area.tsx`/`Skills.tsx` em settings são stubs vazios.
- **Ação:** terminar Tasks 3–9 no backend; no frontend, construir catálogo + fluxo de adoção + **CRUD completo** de autoria.

### B. Níveis de carreira Jr→Principal (rótulo duplo)
- **Backend:** `Level` foi **removido** (13 migrações `remove_level_table`). Hoje "nível" é só `Office.scale` (string livre) + `sequence` (int). Sem `point_threshold`, sem rótulo duplo Jr/Pleno↔L1–L6, sem `responsibility`.
- **Frontend:** `/settings/structure/level` e `/position` são itens de menu **mortos** (sem rota/página). Página `/career` é placeholder literal (`<Card>Career</Card>`).
- **Ação:** promover Level a entidade de 1ª classe (rótulo duplo, threshold, responsabilidade) e reescrever ranking/progresso para ler thresholds; construir a página de carreira.

### C. Card com tipo/pontos/evidência + Badges
- **Backend:** `Card` **não tem** `type` (Knowledge|Challenge|Assessment), `points`, `badge_id`, nem `evidence_type` (quiz|PR-link|artifact|peer-review|manager-signoff). Pontos hoje são regra por evento (`POINT_RULES`), não por card. **Badge não existe** (0 hits) — há ranking, mas nenhum sistema de badges.
- **Frontend:** sem distinção know/challenge; sem badges; sem UI para valor de ponto.
- **Ação:** estender `Card`/`TemplateCard` com os 4 campos; criar modelo `Badge` + tabela de conquista; decidir pontos por-card vs. por-evento.

### D. As 5 categorias fixas de competência
- **Backend:** sem entidade `Competency` e sem enum das 5 categorias (Craft/Execução/Colaboração/Impacto/Liderança). O mais próximo é `CardClass`/`CardCategory` (texto livre por tenant).
- **Ação:** ou uma camada `Competency` (`expected_behavior`, `skill_ref`) ou constranger a categoria às 5 fixas.

### E. Planos / tiers / cobrança (PEPM Starter/Growth/Performance/Enterprise)
- **Backend/Frontend:** **completamente ausente** (0 hits para subscription/tier/billing/stripe). A IA é "gated" só pela presença de uma **chave OpenAI BYO** por tenant (`company.openai_api_key`), **sem metering/quota**. Flags por tenant hoje = só `ranking_enabled`/`ranking_metric`. RBAC é allowlist de letra de perfil (`profile === "A"`), sem abstração de roles/tiers para pendurar o gating.
- **Ação:** camada de subscription/tier + feature-gating + metering de IA em `individual_plan.py`; ligar `CompanyPackage.kind` (area|role|foundation) a preço por pacote.

### F. White-label tiered
- **Backend:** `CompanyTheme` (bom) + `Company.domain` (string única). Sem distinção subdomínio vs. domínio próprio, sem verificação/status de domínio, sem progressão logo→subdomínio→domínio da estratégia.
- **Frontend:** só **1 cor** de acento é customizável; título do header **hardcoded** `"Career Game"` (`Header/index.tsx:106`); editor de branding é stub desabilitado (`/settings/data/theme`); sem upload de logo/paleta secundária/tipografia.
- **Ação:** máquina de estado de domínio + editor de branding real na UI; destravar mais tokens.

## 6.5 Riscos transversais
- **Isolamento multi-tenant por convenção** (filtro manual de `company_id`, sem RLS). `Person` é global por e-mail. Um filtro esquecido vaza dados entre tenants — encarar antes de escalar o discurso de "white-label multi-tenant seguro" (e antes de SOC 2).
- **Frontend desktop-only** (`routes/index.tsx:14` renderiza `<Mobile/>` abaixo de `xl`) — conflita com alcance amplo de mid-market.
- **Dois alvos de deploy** não reconciliados (Firebase Hosting + AWS Amplify no tcg-app; SAM/Lambda no tcg-api).
- **Autoria create-only + telas stub** — maior bloqueador estrutural para um produto self-serve, editável e baseado em pacotes.
- CORS aberto (`allow_origins=["*"]`), `ROUTE_PERMISSIONS` definido mas não usado (`auth.py`).

## 6.6 Roadmap sugerido (ordem)

**Fase 0 — Destravar o que já existe (rápido, alto valor)**
1. **Escrever a migração Alembic** das tabelas `template_*` + `company_package` + `level_card` + colunas de linhagem (Task 9). Sem isso nada de pacotes vai a prod. *(bloqueador #1)*
2. Terminar **Tasks 3–8**: `company_package`, `level_card`, `leveling.py`, **`catalog.py` (provision_package)**, router de catálogo, `seed_templates.py` + **autorar o 1º pacote real** (Foundation ou Backend, do doc 04).

**Fase 1 — Tornar os pacotes usáveis (produto)**
3. Frontend: **catálogo + fluxo de adoção** + **CRUD completo** de autoria (editar/excluir/reordenar) sobre a árvore.
4. Estender `Card`/`TemplateCard` (`type`, `points`, `badge_id`, `evidence_type`); camada `Competency`/5 categorias.

**Fase 2 — Carreira & gamificação**
5. Level como entidade (rótulo duplo, threshold, responsabilidade); reescrever progresso/ranking; construir página `/career`.
6. Sistema de **Badges** + conquista.

**Fase 3 — Monetização & white-label**
7. Subscription/tier + feature-gating + **metering de IA**; ligar pacotes a preço.
8. Máquina de domínio + editor de branding real; destravar tokens de tema.

**Fase 4 — Robustez para escalar**
9. Guard-rail de isolamento (RLS ou filtro central), reconciliar deploy, avaliar responsividade mobile, fechar CORS.

> Observação: os docs em `tcg-api/docs/superpowers/` cobrem **só** o catálogo de pacotes — não há spec de tiers/PEPM nem de white-label tiered no repo. Esses vêm da estratégia (docs 02 e 05 deste dossiê).
