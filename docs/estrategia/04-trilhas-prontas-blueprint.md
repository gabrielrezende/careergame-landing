# 4. Trilhas Prontas — Blueprint de Conteúdo

A parte mais difícil e o maior ativo do CareerGame: pacotes de competências/carreira "adote-e-edite" por área. Este doc dá as taxonomias-base, o licenciamento, o modelo de dados e **2 pacotes 100% prontos** (Backend, CS).

## 4.1 Taxonomias-base (o esqueleto)

Achado estratégico central: **as de licença aberta (ESCO, O\*NET, Lightcast) são seguras para embarcar num produto comercial; a SFIA NÃO é.**

| Taxonomia | O que oferece | Licença | Uso no CareerGame |
|---|---|---|---|
| **SFIA** | 100+ skills de TI/digital em **7 níveis de responsabilidade**, descritos por 5 atributos (Autonomia, Influência, Complexidade, Conhecimento, Business). Rubrica de nível diretamente reutilizável. | **NÃO é grátis** para embarcar em produto comercial (licença anual paga). | **Só referência privada de estrutura.** Não copiar texto SFIA nem anunciar "mapeado a SFIA" sem licença. |
| **O\*NET** | 900+ ocupações com Skills/Knowledge/Abilities/Tasks/Tools. Cobre **todas as áreas** (vendas, mkt, RH, finanças, suporte…). | **CC BY 4.0** — comercial com atribuição. | **Fundação mais segura para o breadth não-tech.** Ingerir tasks/skills e reescrever em cards. |
| **ESCO** (UE) | ~13.900 skills, ~3.000 ocupações, **multilíngue (inclui PT)**, API + download. | **Grátis, formato aberto.** | Puxar **labels de skill em português** direto. |
| **Lightcast Open Skills** | **34.000+ skills** mineradas de vagas reais, atualizadas a cada ~2 semanas. Captura skills *emergentes* (ferramentas, frameworks) que O\*NET/ESCO atrasam 12–18 meses. | **Grátis** após registro, aberta. | Fonte dos **labels concretos de tool/tech** dentro dos cards (ex.: "Kubernetes", "dbt", "Salesforce CPQ"). |
| **LinkedIn Skills** | ~40k skills conhecidos dos usuários. | **Proprietária, sem download.** | Só inspiração. Não scrapear. |

**Estratégia de taxonomia:** basear tracks de tech na *estrutura* da SFIA (7 níveis × 5 atributos) com **texto autoral**; puxar labels de **Lightcast** (tools atuais) + **ESCO** (PT) + **O\*NET** (breadth não-tech). Fica 100% em conformidade e ainda atende a expectativa enterprise.

## 4.2 Modelo de dados de um pacote pronto

```
Package (Área)
  id, area_name, description, source_taxonomy_refs[], language
  Track (cargo dentro da área)
    id, track_name, type: IC | Management, summary
    Level[]  (ordenado)
      level_code        // "L1"/"Jr" ... OU "L5"/"Staff" — rótulo DUPLO
      level_name        // Junior / Pleno / Sênior / Staff / Principal
      responsibility     // 1 linha estilo SFIA (autonomia/influência/complexidade)
      point_threshold    // pontos cumulativos para "estar" nesse nível
      Competency[]  (5–8 por nível)
        id, name, skill_ref (Lightcast/ESCO id), category,
        expected_behavior      // "consegue fazer X" observável
        Card[]  (conhecimento + desafio que constroem/provam a competência)
          card_id, type: Knowledge | Challenge | Assessment,
          title, prompt, difficulty(1-5),
          points, badge_id (nullable),
          evidence_type: quiz | PR-link | artifact | peer-review | manager-signoff
  Badge[]        // marcos/conquistas por track/nível
  Ranking config // como pontos viram leaderboards
```

**Regras de design:**
- **Rótulo de nível duplo** (Jr/Pleno/Sênior/Staff *e* L1–L6) para a empresa mapear ao que já usa (estilo Radford/Mercer).
- **Competência é a unidade editável**; cards penduram nela. Empresa que adota edita/remove competências e os cards seguem.
- **5 categorias fixas de competência** em todo track (consistência cross-área + comparação apples-to-apples para a IA do PDI): **(1) Craft/Técnica, (2) Execução & Entrega, (3) Colaboração & Comunicação, (4) Impacto de Negócio/Domínio, (5) Liderança & Influência.** O peso migra ao subir (júnior = Craft/Execução; sênior = Impacto/Liderança).
- **Thresholds de pontos** (defaults, ajustar): L1 = 0–300 · L2 = 300–800 · L3 = 800–1.800 · L4 = 1.800–3.500 · L5 = 3.500–6.000 · L6 = 6.000+. Card de conhecimento ≈ 10–30 pts, desafio ≈ 40–120, avaliação/manager-signoff ≈ 100–250. Nível "conquistado" quando cruza o threshold **E** completa os cards obrigatórios (estrelados) daquele nível.

## 4.3 PACOTE A — Backend Engineering (IC)

Área: Tecnologia · Track: Backend (IC) · Jr (L1) → Pleno (L2) → Sênior (L3) → Staff (L4) → Principal (L5). Categorias: [Craft]/[Exec]/[Collab]/[Impact]/[Lead].

### L1 — Junior — 0–400 pts
*Responsabilidade: tarefas bem definidas sob orientação próxima; entrega mudanças pequenas com review.*
1. [Craft] Fundamentos de linguagem & framework. 2. [Craft] Dados relacionais básico (CRUD, PK/FK, índice). 3. [Craft] REST básico (endpoint simples, status corretos). 4. [Exec] Versionamento & higiene de PR. 5. [Exec] Testes unitários. 6. [Collab] Pedir ajuda com eficácia.
- Cards: *Conhecimento* "Quiz de status HTTP & idempotência" (15) · *Desafio* "Adicione GET /orders paginado (link do PR)" (60) · *Desafio* "Testes unitários até 80% de cobertura (artefato)" (50) · Badge: **Primeiro Endpoint**.

### L2 — Pleno — 400–1.200 pts
*Responsabilidade: dono de features ponta-a-ponta com orientação leve.*
1. [Craft] Design de API (contrato versionado, paginação, erros). 2. [Craft] Performance de banco (query plan, índice, evita N+1). 3. [Craft] Assíncrono & mensageria (filas/jobs). 4. [Exec] Observabilidade (logs, métricas, traces). 5. [Exec] Testes de integração & CI. 6. [Collab] Code review. 7. [Impact] Scoping (quebrar feature em tarefas/estimativas).
- Cards: *Desafio* "Diagnostique e corrija um N+1; anexe query plan antes/depois" (90) · *Desafio* "Mova envio de e-mail para worker com retries (PR)" (100) · *Avaliação* "Design review de contrato de API (peer-review)" (150) · Badge: **Dono de Feature**.

### L3 — Sênior — 1.200–2.600 pts
*Responsabilidade: dono de um serviço/domínio; direção técnica local; mentora juniores.*
1. [Craft] System design (serviço: dados, APIs, escala, falhas). 2. [Craft] Confiabilidade & resiliência (timeout, retry, circuit breaker, idempotência). 3. [Craft] Modelagem de dados em escala (partição, cache, consistência). 4. [Craft] Segurança (authn/authz, validação, OWASP Top 10). 5. [Exec] Resposta a incidentes + postmortem. 6. [Collab] Mentoria. 7. [Impact] Decisões de trade-off (build/buy).
- Cards: *Desafio* "Design doc: serviço de billing multi-tenant (artefato + peer-review)" (200) · *Desafio* "Idempotency keys no endpoint de pagamento; prove com teste de concorrência" (150) · *Avaliação* "Lidere postmortem de outage simulada (manager-signoff)" (180) · Badge: **Dono de Domínio** / **Incident Commander**.

### L4 — Staff — 2.600–4.800 pts
*Responsabilidade: liderança técnica cross-times; arquitetura transversal.*
1. [Craft] Arquitetura cross-service. 2. [Craft] Escalabilidade & custo (capacity planning, otimização). 3. [Impact] Estratégia técnica (arquitetura alinhada a metas de 6–12 meses). 4. [Impact] Padrões & plataformas (patterns/libs/guardrails que outros adotam). 5. [Lead] Influência sem autoridade. 6. [Lead] Mentoria de seniores.
- Cards: *Desafio* "Escreva um RFC org-wide (ex.: padrão de schema de eventos) e obtenha 3 sign-offs de times" (250) · *Desafio* "Lidere plano de migração cortando 20% de custo de infra (artefato)" (250) · Badge: **Arquiteto** / **Force Multiplier**.

### L5 — Principal — 4.800+ pts
*Responsabilidade: direção técnica multi-anos da organização; autoridade de indústria.*
1. [Impact] Visão técnica da org. 2. [Impact] Bet-sizing & risco. 3. [Lead] Talento & cultura (barra de contratação, marca técnica). 4. [Lead] Influência externa (talks, standards, open source). 5. [Craft] Âncora de expertise profunda.
- Cards: *Avaliação* "Apresente estratégia técnica de 2 anos à liderança (manager-signoff)" (250) · *Desafio* "Publique post/talk de engenharia (artefato)" (200) · Badge: **Principal / North Star Técnico**.

## 4.4 PACOTE B — Customer Success (CSM)

Área: Customer Success · Track: CSM · Associate (L1) → CSM (L2) → Senior CSM (L3) → CS Lead/Manager (L4) → Director/VP CS (L5). (Adaptado do CS job family da GitLab + ladders de indústria.)

### L1 — Associate CSM — 0–400 pts
*Responsabilidade: apoia carteira pequena sob orientação; foco reativo + onboarding.*
1. [Craft] Domínio do produto. 2. [Craft] Execução de onboarding (checklist padrão). 3. [Exec] Higiene de CRM/CS-tool (atividade, health score, next steps). 4. [Collab] Comunicação com cliente. 5. [Impact] Alfabetização em métricas (churn, adoção, NRR). 6. [Exec] Encaminhamento de escalonamento.
- Cards: *Conhecimento* "Quiz NRR vs GRR vs logo churn" (15) · *Desafio* "Onboarding completo de conta piloto; anexe plano (artefato)" (70) · *Desafio* "Template de QBR (artefato + peer-review)" (60) · Badge: **Primeiro Onboarding**.

### L2 — CSM — 400–1.200 pts
*Responsabilidade: dono de carteira; gestão proativa; conduz renovações.*
1. [Craft] Success planning (plano mútuo atado a metas). 2. [Impact] Ownership de renovação (forecast + risco). 3. [Impact] Estratégia de adoção (feature→ROI). 4. [Craft] Identificação de expansão (upsell/cross-sell). 5. [Collab] Mapeamento de stakeholders. 6. [Exec] Gestão de health. 7. [Collab] Entrega de QBR executivo.
- Cards: *Desafio* "Rode um QBR ao vivo e capture resultados (manager-signoff)" (150) · *Desafio* "Save play para conta em risco; documente resultado (artefato)" (120) · *Avaliação* "Acurácia de forecast de renovação num trimestre (evidência)" (150) · Badge: **Renewal Closer** / **Save Play Hero**.

### L3 — Senior CSM — 1.200–2.600 pts
*Responsabilidade: contas estratégicas/enterprise; vira advisor de negócio; mentora.*
1. [Impact] Planejamento estratégico de conta (roadmap de valor multi-ano). 2. [Impact] Relação executiva (C-level). 3. [Impact] ROI / realização de valor. 4. [Craft] Expansão/negociação complexa. 5. [Collab] Influência cross-funcional. 6. [Lead] Mentoria.
- Cards: *Desafio* "Entregue um executive value review a stakeholder C-level (manager-signoff)" (200) · *Desafio* "Transforme conta detratora em referência/case (artefato)" (220) · Badge: **Trusted Advisor** / **Reference Maker**.

### L4 — CS Lead/Manager — 2.600–4.800 pts (track de gestão)
*Responsabilidade: lidera 5–8 CSMs; dono do NRR do time e do processo.*
1. [Lead] Coaching & performance do time (1:1, PDI, gestão de performance). 2. [Lead] Contratação & onboarding de CSMs. 3. [Impact] Segmentação de carteira & capacity. 4. [Impact] Design de playbook/processo. 5. [Impact] Ownership de métricas do time (NRR, churn, CSAT). 6. [Collab] Parceria com lideranças de Vendas/Produto/Suporte.
- Cards: *Desafio* "Desenhe e implante um playbook de save-play para o time (artefato)" (250) · *Avaliação* "Melhore NRR/acurácia de forecast em 2 trimestres (evidência + manager-signoff)" (250) · Badge: **Team Builder** / **Playbook Author**.

### L5 — Director/VP CS — 4.800+ pts
*Responsabilidade: dono da org de CS, do operating model e da estratégia de retenção/expansão da empresa.*
1. [Impact] Estratégia & operating model de CS. 2. [Impact] Ownership de NRR/GRR da empresa (board). 3. [Lead] Org design & liderança. 4. [Impact] Alinhamento executivo cross-funcional (Vendas/Produto/Finanças). 5. [Lead] Comunicação executiva. 6. [Impact] Receita via CS (engine de expansão/renovação).
- Cards: *Avaliação* "Apresente operating model de CS + plano de NRR à liderança (manager-signoff)" (250) · *Desafio* "Suba um sistema de health-scoring na org inteira (artefato)" (250) · Badge: **CS Leader / Retention Architect**.

## 4.5 Quais 8 pacotes enviar primeiro

Ordem (maximiza a % de mid-market onde o CareerGame cobre a *maioria* do headcount no dia 1, liderando pelas áreas com material público mais rico = mais rápido de autorar e mais crível):

1. **Backend / Software Eng (IC)** — maior headcount tech; ladders públicos ricos (CircleCI, Dropbox, GitLab, Medium); estrutura SFIA pronta. Flagship.
2. **Frontend Eng (IC)** — mesmo comprador, ~zero esforço extra de venda; reusa o modelo de nível de tech.
3. **Customer Success** — enorme no SaaS mid-market, ROI claro (retenção = receita), ladder bem definido (§4.4). Prova de que é horizontal.
4. **Vendas (SDR → AE → AM → Sales Manager)** — toda empresa de receita tem; apetite por progressão estruturada; fontes O\*NET + GitLab.
5. **Suporte (Tier 1 → Lead)** — org de alto volume/turnover onde leveling/gamificação tem o maior payoff de engajamento.
6. **Produto (APM → CPO)** — headcount pequeno mas influência alta; comprador (Head de Produto) costuma ser campeão interno; ladders Intercom/GitLab.
7. **Dados / Analytics Eng** — cresce rápido, overlapa o modelo tech, alta demanda.
8. **Marketing (Specialist → CMO, por sub-disciplina)** — fecha a história "empresa inteira" para o CEO/RH ver cobertura total; fonte O\*NET.

**Por quê:** 1–2 + 4–5 + 8 cobrem Engenharia, Receita (Vendas+CS+Suporte) e Marketing — os departamentos que formam o grosso de um mid-market SaaS/tech, permitindo rollout company-wide por um único comprador. Liderar com Eng + CS estabelece credibilidade nas duas áreas de frameworks públicos mais fortes; Vendas/Suporte/Marketing provam breadth horizontal. RH e Finanças vêm numa segunda onda (O\*NET, menor diferenciação).

## 4.6 Ação de licenciamento (agir)
Autorar seu próprio texto de competência/card. Puxar labels de skill do **Lightcast Open Skills** (grátis), **ESCO** (grátis, PT) e **O\*NET** (CC BY 4.0, todas as áreas não-tech). Usar **SFIA só como referência privada** de estrutura (7 níveis × 5 atributos) — **não** embarcar texto SFIA nem anunciar "mapeado a SFIA" até ter licença comercial.

---

### Fontes
sfia-online.org/en/about-sfia/how-sfia-works · sfia-online.org/en/licensing-sfia · onetonline.org (CC BY 4.0) · esco.ec.europa.eu · lightcast.io/open-skills · progression.fyi · swyx.io/writing/career-ladders · levels.fyi · circleci.com/blog/why-we-re-designed-our-engineering-career-paths-at-circleci · dropbox.github.io/dbx-career-framework · medium.com/s/engineering-growth-framework · dresscode.renttherunway.com/blog/ladder · handbook.gitlab.com/job-families (inclui CS & Sales)
