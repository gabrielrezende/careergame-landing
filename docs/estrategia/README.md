# CareerGame — Estudo de Negócio & Estratégia

> 📘 Visão consolidada do produto (motivo, missão, público, status e como retomar): [PRODUTO.md](../../PRODUTO.md).

> Consolidação da pesquisa de mercado (concorrentes, precificação, parceiros/GTM e trilhas prontas) + plano de reformulação da landing page.
> Direção travada nesta fase: **mercado global · mid-market (200–2.000 colaboradores) · SaaS por assinatura com trilhas prontas.**

## Índice

1. [Mercado & Concorrentes](01-mercado-e-concorrentes.md) — quem são, o mapa de segmentos e a "interseção que ninguém ocupa".
2. [Posicionamento & Precificação](02-posicionamento-e-precificacao.md) — o wedge do CareerGame e os 4 planos (PEPM) com cálculo de ACV.
3. [Parceiros & Go-to-Market](03-parceiros-e-gtm.md) — integrações, marketplaces, conteúdo e a sequência de GTM para 12 meses.
4. [Trilhas Prontas — Blueprint](04-trilhas-prontas-blueprint.md) — taxonomias, modelo de dados e 2 pacotes 100% prontos (Backend, CS).
5. [Reformulação da Landing](05-landing-redesign.md) — nova estrutura, copy PT/EN e mockups de tela.
6. [Diagnóstico do Produto (app)](06-diagnostico-app.md) — o que tcg-api/tcg-app já entregam, os gaps vs. estratégia e o roadmap. Atualizado em out/2026: catálogo fase 1 pronto no backend, nenhuma infra no ar e **projeto pausado**.
7. [Kit de Outreach — Design Partners](07-design-partner-outreach.md) — ICP, sequência de outbound, roteiro de call e objeções para converter os primeiros 3–5 pilotos pagos. Asset: [one-pager](design-partner-onepager.html).

---

## Sumário executivo (o que fazer)

### 1. Posicionamento — o "wedge" defensável
Nenhum concorrente ocupa a interseção de **6 atributos ao mesmo tempo**:

> **desenvolvimento de carreira gamificado + trilhas prontas + white-label multi-tenant + IA no PDI + preço/velocidade de mid-market + venda via parceiros.**

- Os líderes de *career-pathing* (Gloat, Fuel50, Eightfold) têm IA de skills forte, mas **zero gamificação, sem trilhas prontas, sem white-label e só enterprise/quote-only.**
- As *engines de gamificação* (Centrical, Spinify, Mambo) têm a mecânica, mas **miram KPI de vendas/frontline, não carreira/PDI, e não trazem conteúdo de competências.**
- Os *LXP/LMS* (Docebo, 360Learning) chegam perto (gamificação + white-label), mas **tratam gamificação como tempero de curso, não como o produto.**

**Frase de posicionamento a testar:**
> *"A plataforma white-label que transforma desenvolvimento de carreira em jogo — trilhas de skills prontas, PDIs guiados por IA, pontos e rankings — no ar em dias, para times de mid-market."*

**Onde o CareerGame é fraco (encarar de frente):** não tem ontologia de skills proprietária; "usamos GPT-4o" **não é diferencial** (todo mundo lançou IA em 2024–25); profundidade de conteúdo vs. Go1/Skillsoft; sem mobilidade interna estilo Gloat; falta SOC 2 / conectores enterprise / provas e logos. → **Não competir no "quem tem a melhor IA de skills" nem no "quem tem mais conteúdo". Ganhar em enquadramento, time-to-value, rebrandabilidade e no game loop.**

### 2. Precificação — PEPM, 4 planos
Sweet spot defensável: **US$ 9–20 PEPM** (precificar como suíte de performance/desenvolvimento, não como engagement commodity).

| | Starter | **Growth (âncora)** | Performance | Enterprise |
|---|---|---|---|---|
| **PEPM (anual)** | US$ 6 | **US$ 12** | US$ 18 | Custom (~22–28) |
| Mínimo de assentos | 100 | 200 | 200 | 500+ |
| IA (análise de PDI) | — | limitada | ilimitada | ilimitada + custom |
| White-label | logo/cores | + subdomínio | domínio próprio | completo + SSO/SCIM |

- ACV esperado: **US$ 60–90k** para 500 colaboradores; **US$ 200–260k** para 1.500 (PEPM afunila com volume, como todos os concorrentes).
- Táticas: âncora no plano **Growth**, desconto anual 15% / multi-ano 25–30%, **trilhas extras como add-on** (US$ 1–3 PEPM ou US$ 3–10k/pacote/ano), white-label como upsell (+25–40%), **piloto pago de 60–90 dias** creditável (não free trial aberto acima de ~US$ 10 PEPM).

### 3. Go-to-Market — as 5 alavancas para começar
1. **API unificada de HRIS (Finch ou Merge)** — de meses de conectores para semanas; destrava vender para qualquer mid-market.
2. **BambooHR Marketplace (+ HiBob)** — HRIS padrão do mid-market, marketplace quase **vazio de apps de IA/gamificação** → visibilidade máxima, concorrência mínima.
3. **App/bot no Slack + Teams** — para um produto de *gamificação* é a superfície de engajamento (streaks, nudges, desafios) **e** canal de distribuição.
4. **Go1 (conteúdo) + Lightcast Open Skills (taxonomia)** — deixa as "trilhas prontas" reais no dia 1, sem 10 negociações de conteúdo.
5. **HiBob** — a base instalada dele *é* o ICP (mid-market moderno).

Motion: **híbrido sales-assisted + marketplace-led** (não PLG puro no ticket/comprador — Head de L&D / CHRO). Comprador econômico = CHRO; campeão = **Head de L&D**.

### 4. Trilhas prontas — a parte mais difícil e o maior ativo
- **Licenciamento (agir):** autorar texto próprio; puxar labels de skill de **O\*NET (CC BY 4.0), ESCO (grátis, tem PT) e Lightcast Open Skills (grátis)**. Usar **SFIA só como referência privada de estrutura** (7 níveis × 5 atributos) — **não** embarcar texto SFIA nem anunciar "mapeado a SFIA" sem licença comercial.
- **Modelo de dados único:** Área → Trilha → Nível (rótulo duplo Jr/Pleno/Sênior/Staff *e* L1–L6) → 5–8 Competências (5 categorias fixas) → Cards (conhecimento/desafio/avaliação) com pontos/badges.
- **Enviar 8 pacotes primeiro:** Backend, Frontend, Customer Success, Vendas, Suporte, Produto, Dados, Marketing — cobrem o grosso do headcount de um mid-market de tech/SaaS e têm o material público mais rico. (2 pacotes já 100% detalhados no doc 4.)

### 5. Landing page — de folder institucional a máquina de conversão
A landing atual **informa, mas não converte**: sem prova, sem número, sem CTA de lead, fala de features e não de resultado, e **some o maior diferencial (trilhas prontas + IA)**. Ver [reformulação completa](05-landing-redesign.md).

---

*Fontes completas citadas em cada documento. Pesquisa conduzida em ago/2026.*
