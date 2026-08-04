# 5. Reformulação da Landing Page

## 5.1 Diagnóstico da landing atual

**O que já está bom:** estrutura limpa, bilíngue PT/EN bem-feito, mockup CSS do hero, acessibilidade cuidada (skip-link, reveal com `prefers-reduced-motion`).

**Onde está fraca — e por quê:**

| Problema | Impacto |
|---|---|
| **Zero prova / zero número** | Sem métrica, logo, depoimento. B2B mid-market não compra sem prova. |
| **Nenhum CTA de conversão** | Botões só levam a âncoras (`#features`). Sem "Agendar demo", captura de lead. Informa, não converte. |
| **Fala de features, não de resultado** | "Pontos, badges, rankings" é *o que é*. Falta *por que importa*: retenção, turnover, tempo de rampa, mobilidade interna. |
| **Some o maior diferencial** | **Trilhas prontas por área, editáveis** — nem aparece. É o que reduz time-to-value, a maior objeção em L&D. |
| **Só 1 mockup genérico** | Falta mostrar o produto: trilha, ranking, análise de IA, dashboard do gestor. |
| **IA subaproveitada** | "GPT-4o analisa planos" perdido numa linha. Merece seção própria — mas enquadrada como *workflow*, não "usamos GPT-4o" (que não diferencia). |
| **Sem seção de preço** | Modelo é SaaS por assinatura, sem nem menção a planos/"fale com vendas". |

**Resumo:** a landing atual é um **folder institucional**, não uma **máquina de conversão B2B**.

## 5.2 Nova estrutura de página (ordem)

1. **Topbar** — add links **Trilhas · Recursos · Preços** + botão primário **"Agendar demo"** + toggle PT/EN.
2. **Hero** — headline de *categoria + resultado*, CTA primário (demo) + secundário (ver trilhas). Mockup de produto ao lado.
3. **Faixa de prova social** — logos de clientes/design partners (placeholder até ter) + 1 métrica-âncora.
4. **Problema** — reenquadrado para dor de negócio (PDI esquecido → turnover, rampa lenta, sem mobilidade interna).
5. **Como funciona** — 4 passos (manter, reforçar o loop Skills→Cards→Trilhas→Pontos).
6. **★ Trilhas prontas por área** (NOVA — o diferencial) — grade de áreas (Backend, Frontend, CS, Vendas, Suporte, Produto, Dados, Marketing) com selo "pronto para usar, edite à vontade" e o modelo Jr→Principal.
7. **★ IA que faz, não que enfeita** (NOVA) — GPT-4o lê o PDI e *já atribui* trilhas/cards e mede progresso. Mostrar o fluxo.
8. **★ Veja o produto** (NOVA) — 3–4 screenshots/mockups: trilha do colaborador, ranking do time, análise de IA do PDI, dashboard do gestor.
9. **Recursos** — reescritos como *benefício* (não feature).
10. **★ White-label & multi-tenant** (NOVA/expandida) — sua marca, seu domínio, ambiente isolado; enquadrar como moat p/ quem revende.
11. **Para quem** — afiar para comprador (CHRO/RH) e campeão (Head de L&D) + Líderes + Colaboradores.
12. **★ Resultados** (NOVA — placeholder de prova) — 3 métricas + 1 depoimento assim que houver design partner.
13. **★ Planos** (NOVA) — 3 tiers públicos (Starter/Growth/Performance) + "Enterprise: fale com vendas". Preço "a partir de US$ X PEPM".
14. **★ FAQ** (NOVA) — derruba objeções (gamificação funciona? migração? segurança/SSO? conteúdo é editável? integra com meu HRIS?).
15. **CTA final** — agendar demo (formulário curto ou Calendly).
16. **Footer**.

## 5.3 Copy nova para as seções-chave (PT / EN)

> Rascunho para testar. Ajustar tom depois; A/B nos headlines.

### Hero
- **PT — headline:** "Transforme carreira em jogo — e engajamento em resultado."
  **subhead:** "O CareerGame é a plataforma white-label de desenvolvimento de carreira gamificado: trilhas de skills **prontas** por área, PDIs guiados por IA e rankings que fazem o time evoluir de verdade. No ar em dias, não meses."
  **CTA1:** "Agendar demo" · **CTA2:** "Ver trilhas prontas"
- **EN — headline:** "Turn careers into a game — and engagement into results."
  **subhead:** "CareerGame is the white-label platform for gamified career development: **ready-made** skill trails by area, AI-guided development plans, and leaderboards that make teams actually grow. Live in days, not months."
  **CTA1:** "Book a demo" · **CTA2:** "See ready-made trails"

### Faixa de prova (placeholder)
- **PT:** "Empresas que transformam carreira em progresso visível" + logos. Métrica-âncora ex.: "+X% de engajamento em PDI · –Y% de turnover".
- Enquanto não há logos: usar "Junte-se aos primeiros times que estão gamificando carreira" + CTA design partner.

### Problema (reenquadrado)
- **PT — título:** "PDI que ninguém abre custa caro."
  **texto:** "Plano de desenvolvimento em planilha esquecida vira rampa lenta, promoção sem critério e talento que vai embora. O CareerGame vira o jogo do avesso: cada avanço na carreira é visível, recompensado e mensurável — e o RH enxerga tudo."

### ★ Trilhas prontas (diferencial)
- **PT — título:** "As trilhas já vêm prontas. Você só edita."
  **texto:** "Não construa sua arquitetura de carreira do zero (isso leva meses). O CareerGame entrega trilhas prontas por área — Tecnologia, Customer Success, Vendas, Suporte, Produto, Dados, Marketing — do Júnior ao Principal, com competências e desafios. Adote hoje, ajuste ao seu jeito amanhã."
  **chips de área:** Backend · Frontend · Customer Success · Vendas · Suporte · Produto · Dados · Marketing
- **EN — título:** "The trails come ready. You just edit."
  **texto:** "Don't build your career architecture from scratch (that takes months). CareerGame ships ready-made trails by area — Engineering, Customer Success, Sales, Support, Product, Data, Marketing — from Junior to Principal, with competencies and challenges. Adopt today, tailor tomorrow."

### ★ IA (workflow, não wrapper)
- **PT — título:** "Uma IA que monta o plano — e já sabe o próximo passo."
  **texto:** "A IA do CareerGame lê o PDI, identifica o gap de skills e **já atribui** as trilhas e os cards certos — depois acompanha o progresso e sugere o próximo movimento de carreira. Coaching e execução no mesmo lugar."

### ★ White-label
- **PT — título:** "Sua marca. Seu domínio. Seu jogo."
  **texto:** "White-label multi-tenant de verdade: logo, cores, domínio próprio e ambiente isolado por empresa. Ideal para grupos com várias marcas — e para consultorias que querem lançar sua própria academia gamificada."

### ★ Planos
- **PT — título:** "Preço simples, por colaborador."
  Três cards (Starter / Growth *(destaque)* / Performance) + faixa "Enterprise · fale com vendas". Rodapé: "Cobrança anual. Piloto pago creditável no contrato."

### ★ FAQ (objeções a derrubar)
- Gamificação gera desenvolvimento real ou só engajamento vaidoso? (→ métricas: rampa, mobilidade interna, retenção)
- As trilhas são editáveis? (→ sim, competência é a unidade editável)
- Integra com meu HRIS? (→ Finch/Merge + BambooHR/HiBob + SSO)
- É seguro? (→ SSO/SCIM, isolamento multi-tenant; SOC 2 no roadmap)
- Quanto tempo para ir ao ar? (→ dias, por causa das trilhas prontas)

### CTA final
- **PT:** "Pronto para transformar carreira em jogo?" → **"Agendar demo"** (Calendly/form curto: nome, e-mail corporativo, nº de colaboradores).

## 5.4 Mockups / telas de demonstração

**Recomendação de produção — 2 abordagens, use as duas:**

1. **Mockups de UI em HTML/CSS puro (recomendado para as telas de produto).** Igual ao mock do hero atual, mas 3–4 telas reais: trilha do colaborador (barra de progresso + cards + badges), ranking do time, análise de IA do PDI (chat/insight), dashboard do gestor (skills do time, quem avança). Vantagens: fiel ao produto, **grátis**, on-brand, responsivo, editável, sem risco de "imagem falsa". Melhor que screenshot porque o produto ainda está evoluindo.
2. **Imagens geradas por IA — só para atmosfera/hero, não para UI.** Ex.: um visual de marca no fundo do hero, ou ilustração conceitual de "carreira como jogo". Não usar IA para simular telas de produto (fica genérico/incoerente). *Requer aprovação — geração tem custo.*

**Telas prioritárias a mockar (HTML/CSS):**
- **Trilha do colaborador** — nível atual (Pleno → Sênior), progresso por competência, próximos cards, badges, pontos.
- **Ranking / leaderboard** — do time/área, com streaks e destaque "top 3".
- **Análise de IA do PDI** — insight do GPT-4o: gap identificado + trilhas atribuídas + próximo passo.
- **Dashboard do gestor** — mapa de skills do time, quem está evoluindo, alertas de estagnação.

## 5.5 Ordem de execução sugerida (quando formos implementar)

1. Hero reescrito + CTA de demo (maior impacto de conversão).
2. Seção **Trilhas prontas** + chips de área (o diferencial que hoje some).
3. Seção **Veja o produto** com os 4 mockups HTML/CSS.
4. Seção **IA** dedicada.
5. Seção **Planos** (3 tiers + fale com vendas).
6. **FAQ** + **prova social** (placeholders até ter logos/métricas).
7. Ajustes de white-label + "para quem".

> Tudo mantém o padrão atual: HTML/CSS/JS estático, i18n PT/EN via `data-i18n`, deploy GCP. Nenhuma dependência nova necessária.
