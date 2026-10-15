# CareerGame — Documento do Produto

> **Leia isto primeiro ao retomar.** Este documento resume o que é o produto, por que
> ele existe, para quem e onde ele parou. O detalhe de cada assunto está nos documentos
> linkados.
>
> **Status:** projeto **pausado em 2026-10-15**. Código e docs congelados na `main` dos três
> repos, com a tag `pausa-2026-10`. **Nenhuma infra no ar** (custo de cloud zero).

---

## 1. Em uma frase

**O CareerGame é uma plataforma white-label que transforma desenvolvimento de carreira em
jogo:** trilhas de skills prontas por área, PDIs guiados por IA e pontos e rankings, no ar
em dias, para empresas de mid-market.

## 2. Por que existe (o motivo)

O PDI (plano de desenvolvimento individual) na maioria das empresas de 200 a 2.000 pessoas
mora numa planilha que ninguém abre. O resultado:

- **Rampa lenta:** quem entra não sabe o que precisa aprender para ficar produtivo.
- **Promoção sem critério:** o colaborador não enxerga o que falta para o próximo nível, e o
  líder decide no feeling.
- **Talento que vai embora:** sem carreira visível, sobra pouco motivo para ficar.
- **RH sem dados:** L&D não consegue mostrar evolução de skills nem prontidão para promoção.

E montar uma arquitetura de carreira do zero (competências por cargo e nível) leva meses de
consultoria. Por isso a maioria nunca termina.

## 3. Missão

> **Tornar o crescimento de carreira visível, guiado e recompensado para cada colaborador,
> e dar ao RH uma arquitetura de carreira pronta em dias, não meses.**

*(Formulação proposta a partir do posicionamento. Valide antes de usar externamente.)*

Princípios que guiaram as decisões até aqui:

1. **Pronto antes de perfeito:** trilhas prontas que você edita, em vez de uma folha em branco.
2. **Gamificação ligada à carreira real:** pontos e rankings medem evolução de cargo, não KPI
   de vendas nem conclusão de curso.
3. **IA que executa, não que conversa:** ela lê o PDI, atribui trilhas e cards e mede o
   progresso.
4. **A marca é do cliente:** white-label multi-tenant, com o ambiente de cada empresa isolado.
5. **Honestidade sobre o momento:** vender como programa de *design partner*, não como produto
   acabado.

## 4. Para quem

| Papel | Quem é | O que ganha |
|---|---|---|
| **Campeão** | Head de L&D / People Development | Arquitetura de carreira pronta e PDI com dados, sem projeto de meses |
| **Comprador econômico** | CHRO / CPO (em empresa menor, o CEO) | Retenção, rampa e mobilidade interna mensuráveis |
| **Líder** | Gestor de time | Vê a evolução do time em tempo real e reconhece quem avança |
| **Colaborador** | Quem quer crescer | Sabe exatamente o que fazer para chegar ao próximo nível, com progresso visível |
| **Canal** | Consultorias e grupos multimarca | Lançam a própria "academia gamificada" com a marca deles |

**ICP inicial:** empresas de **200 a 800 pessoas** em Tech/SaaS, Customer Success,
contact-center e vendas. Começar por BR/LatAm (rede quente, venda em PT) e depois US/EU.
**Fora do alvo por enquanto:** menos de 150 pessoas (o ticket não fecha) e enterprise com mais
de 2.000 (exige SOC 2 e logos que ainda não temos).

## 5. O que o produto atende

| Necessidade do cliente | Como o CareerGame resolve |
|---|---|
| "Não temos framework de carreira" | Pacotes de **trilhas prontas** por área (Backend, Frontend, CS, Vendas, Suporte, Produto, Dados, Marketing), do Júnior ao Principal, editáveis |
| "O PDI não sai do papel" | **IA** lê o PDI (cargo, metas, performance, touchpoints), identifica o gap e propõe um plano de 3 meses |
| "Ninguém engaja" | **Pontos, ranking e marcos** por categoria concluída, com placar do gestor separado do ranking dos colaboradores |
| "Não sei quem está pronto para promoção" | Skills mapeadas por cargo e nível, progresso por pessoa e por time |
| "Quero com a nossa marca" | **White-label:** cor, logo, tema e domínio por empresa; idioma PT/EN por empresa |
| "Acompanhamento 1:1 se perde" | **Touchpoints** (registros de 1:1) e **performance** ligados ao PDI |

### Como funciona (o loop)

**Skills → Cards → Trilhas → Pontos e ranking.** Cada competência vira cards de conhecimento
e desafio; os cards se organizam em trilhas por cargo e senioridade; cada avanço gera pontos e
aparece para o colaborador, o líder e o RH.

## 6. Diferencial (o "wedge")

Nenhum concorrente ocupa ao mesmo tempo: **carreira gamificada + trilhas prontas +
white-label multi-tenant + IA no PDI + preço e velocidade de mid-market + venda via
parceiros.**

- Os players de career-pathing (Gloat, Fuel50, Eightfold) têm IA forte, mas não têm
  gamificação nem trilhas prontas e só vendem para enterprise.
- As engines de gamificação (Centrical, Spinify) miram KPI de vendas, não carreira.
- Os LXP/LMS (Docebo, 360Learning) tratam gamificação como tempero de curso.

**Onde somos fracos (e não devemos competir):** ontologia de skills proprietária,
profundidade de conteúdo, "IA" como diferencial isolado (todo mundo tem) e certificações
enterprise. **Ganhamos em enquadramento, time-to-value, rebrandabilidade e game loop.**

## 7. Modelo de negócio

- **SaaS por colaborador/mês (PEPM), cobrança anual.** Planos Starter US$ 6, **Growth US$ 12
  (âncora)**, Performance US$ 18 e Enterprise sob consulta.
- **Add-ons:** pacotes extras de trilhas e white-label avançado (subdomínio, depois domínio
  próprio, depois SSO/SCIM).
- **Entrada no mercado: programa Founding Design Partner.** Piloto pago de 60 a 90 dias
  (US$ 5–15k, creditável no contrato) para 3 a 5 empresas, com preço travado e roadmap
  co-construído. Em troca: métricas do piloto, logo e depoimento.
- **GTM:** founder-led no início; depois marketplaces de HRIS (BambooHR, HiBob), app no
  Slack/Teams e API unificada de HRIS (Finch ou Merge).

## 8. Onde o produto parou (out/2026)

**Já funciona no código:**
- Multi-tenant por empresa (`company_id`), com o tenant resolvido pelo domínio
- Árvore de conhecimento Skill → Classe → Categoria → Card e trilhas por cargo e senioridade
- Motor de pontos e ranking, placar do gestor e bônus por categoria concluída
- PDI com análise por IA (OpenAI), touchpoints, performance e notificações
- Tema por empresa, modo escuro e i18n PT/EN
- **Catálogo de pacotes, fase 1 (backend):** templates globais, provisionamento no tenant
  com linhagem e o pacote Foundation semeado
- Login via Firebase (e-mail/senha e Google) e testes automatizados com CI

**Falta para vender como na estratégia:**
- UI de catálogo e adoção de pacotes, além de CRUD completo de autoria (hoje só cria)
- Autorar os 8 pacotes de área (o blueprint de Backend e CS já existe)
- Nível como entidade (rótulo duplo Jr/Pleno ↔ L1–L6), badges e página de carreira
- Planos e tiers, feature-gating e medição do custo de IA
- White-label em níveis (subdomínio e domínio próprio) e editor de marca
- Versão mobile (hoje é só desktop), CORS fechado e isolamento multi-tenant mais forte
- **Infra:** escolher um alvo de deploy e subir (o Terraform de GCP está pronto, nunca aplicado)

**Hipóteses ainda não validadas:** disposição a pagar por PEPM vs. por usuário ativo,
custo de IA no plano "ilimitado", preço por região (PPP) e se gamificação de carreira gera
retenção e rampa mensuráveis (é o que o piloto precisa provar).

## 9. Onde está cada coisa

| Repo | O que é | Branch |
|---|---|---|
| [`careergame-landing`](https://github.com/gabrielrezende/careergame-landing) | Landing (PT/EN) + **este documento** + estudo de estratégia | `main` |
| [`tcg-api`](https://github.com/gabrielrezende/tcg-api) | Backend FastAPI + Postgres + Alembic; Terraform de GCP | `main` (= `development`) |
| [`career-web`](https://github.com/freitasgustavos/career-web) (pasta local `tcg-app`) | Frontend React + AntD | `main` (= `dev`) |

**Documentos de apoio** (em `docs/estrategia/`):

1. [Mercado e concorrentes](docs/estrategia/01-mercado-e-concorrentes.md)
2. [Posicionamento e precificação](docs/estrategia/02-posicionamento-e-precificacao.md)
3. [Parceiros e GTM](docs/estrategia/03-parceiros-e-gtm.md)
4. [Blueprint das trilhas prontas](docs/estrategia/04-trilhas-prontas-blueprint.md)
5. [Redesign da landing](docs/estrategia/05-landing-redesign.md)
6. [Diagnóstico do produto e roadmap](docs/estrategia/06-diagnostico-app.md)
7. [Kit de outreach para design partners](docs/estrategia/07-design-partner-outreach.md)

## 10. Para retomar (checklist)

1. Reler este documento e o [diagnóstico e roadmap (doc 06)](docs/estrategia/06-diagnostico-app.md).
2. Decidir o objetivo da retomada: **validar com design partners** (vender primeiro) ou
   **fechar o produto** (Fase 1 do roadmap: catálogo no frontend e CRUD de autoria).
3. Rodar localmente: seguir "Rodando localmente" no README da `tcg-api` e depois no da
   `tcg-app`.
4. Para publicar: criar um projeto GCP e um Firebase novos (os antigos foram excluídos),
   seguir `tcg-api/infra/gcp/README.md` e, para a landing, o README deste repo (AWS).
5. Revalidar preços e concorrentes. A pesquisa é de ago/2026 e o mercado de HR-tech muda
   rápido.
