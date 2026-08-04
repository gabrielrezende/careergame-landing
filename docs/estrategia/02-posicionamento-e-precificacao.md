# 2. Posicionamento & Precificação

## 2.1 Posicionamento

**Categoria a criar/ocupar:** *Gamified Career Development* (desenvolvimento de carreira gamificado) — não "mais um LXP", não "mais uma suíte de performance".

**Frase-âncora (testar A/B):**
> *"A plataforma white-label que transforma desenvolvimento de carreira em jogo — trilhas de skills prontas, PDIs guiados por IA, pontos e rankings — no ar em dias, para times de mid-market."*

**Pilares de mensagem:**
1. **Time-to-value em dias, não meses** — trilhas prontas por área (o oposto do "construa sua arquitetura de skills" do Gloat/Fuel50).
2. **Carreira que vira jogo** — o único game loop desenhado para *carreira/PDI*, não KPI de vendas nem conclusão de curso.
3. **Sua marca, seu ambiente** — white-label multi-tenant real (raro na categoria de carreira/performance).
4. **IA que faz, não que enfeita** — GPT-4o lê o PDI e *já atribui* trilhas/cards e mede progresso (workflow, não wrapper).

**Provas a construir com design partners (encarar a fraqueza de "sem prova"):** retenção/turnover, tempo de rampa (onboarding→produtivo), % de mobilidade/promoção interna, adoção (DAU/WAU), NPS interno. Sem isso a objeção "gamificação é engajamento vaidoso" não cai.

## 2.2 Benchmarks de preço (2025–2026)

| Concorrente | Modelo | Sinal PEPM / ACV (US$) |
|---|---|---|
| Leapsome | PEPM modular, anual, sem setup | ~3–7/módulo; bundle 11–20; suíte 30–40 |
| Lattice | PEPM modular, anual | ~11 base; blend 14–22 |
| 15Five | PEPM, 3 tiers | Engage 4 / Perform 11 / Total 16 |
| Culture Amp | PEPM modular, volume | ~9–14; 500 emp ≈ 18–25k/ano |
| Docebo | por user/plataforma, quote | ~7–10 (84–120/user/ano); Enterprise 60k+ |
| 360Learning | por user **ativo**, anual | ~8/ativo (≤100); 8–15 acima |
| Degreed | por user, quote | ~15; cai p/ ~10 acima de 1.000 |
| Fuel50 | por user/ano, multi-ano | ~4,54/user/ano a 10k emp (exclui implementação) |
| Gloat / Centrical | custom | não divulgado, enterprise |
| Spinify | PEPM, plano único | ~25 PEPM (inclui 3 agentes IA) |
| Cornerstone | por user modular | ~6 (≤100) a ~4 (>1.000); enterprise ~18 |
| Deel Engage (ex-Zavvy) | PEPM anual | ~20 |
| Workleap/Officevibe | PEPM, mín. 10 | ~5 (piso US$ 50/mês) |
| BetterUp | por seat, custom | 300–500 PEPM (coaching humano — outlier) |

**Sinais transversais:** mid-market HR-tech em geral **US$ 8–30 PEPM**; implementação **~US$ 2–8k**; multi-ano corta **15–30%**; pricing híbrido (tiers públicos + quote) rende **~30% mais ACV**; white-label vertical comanda **35–40% de prêmio**.

**Bandas defensáveis:**
- Engagement/gamificação commodity: US$ 4–9 PEPM.
- **Suítes de performance+desenvolvimento (centro de gravidade do CareerGame): US$ 11–22 PEPM.**
- LXP com conteúdo: US$ 7–15 PEPM.
- Teto full-suite: US$ 30–40 PEPM.

→ **Sweet spot do CareerGame: US$ 9–20 PEPM blended.** Preço de tabela perto de **US$ 12–18**, descontando a partir de um rack maior.

## 2.3 Arquitetura de planos (PEPM, cobrança anual)

Quatro tiers, modelo híbrido: 3 públicos + Enterprise "fale com vendas". Preço por colaborador no escopo/mês, **cobrado anualmente** (mensal +20–25% se oferecido). Ofereça variante *por usuário ativo* como motion de entrada para o comprador cético.

| | **Starter** | **Growth** (âncora) | **Performance** | **Enterprise** |
|---|---|---|---|---|
| **PEPM (tabela)** | **US$ 6** | **US$ 12** | **US$ 18** | **Custom (~22–28)** |
| Mínimo de assentos | 100 | 200 | 200 | 500+ |
| Porte-alvo | 200–400 | 300–800 | 500–1.500 | 1.000–2.000+ |
| Gamificação (pontos, badges, ranking) | ✓ | ✓ | ✓ | ✓ |
| Trilhas de aprendizado | Biblioteca core | Completa | Completa + custom | Completa + custom |
| PDI / career pathing | Básico | ✓ | ✓ Avançado | ✓ Avançado |
| Framework de competências | — | ✓ | ✓ | ✓ |
| **IA de análise de PDI (GPT-4o)** | — | Limitada (ex: 2/user/ano) | ✓ Ilimitada | ✓ Ilimitada + prompts custom |
| Pacotes de conteúdo inclusos | 1 starter | 2 | 3 | Todos |
| **White-label** | logo/cores | + subdomínio | domínio próprio completo | completo + UI custom + SSO/SCIM |
| Integrações | CSV/HRIS básico | HRIS + SSO | HRIS + SSO + API | API completa + custom |
| Suporte | E-mail | Standard + onboarding | CSM prioritário | CSM dedicado + SLA |
| Analytics | Básico | Standard | Avançado + export | Custom dashboards |

**Lógica de gating:** **IA e white-label são as duas alavancas de upsell** (ambos têm custo marginal real — IA = token/inferência; WL = onboarding + domínio/SSO). IA é *metrificada* no Starter/Growth (cria pressão de expansão) e *ilimitada* do Performance pra cima. White-label completo (domínio próprio, marca ponta-a-ponta) é feature de Performance+ — o prêmio vertical de 35–40% que o mercado paga.

**Setup fee:** único **US$ 2.500 (Growth) / 5.000 (Performance) / 8–15k (Enterprise)** para migração, config de conteúdo e branding. Renunciável como alavanca em commit de 2–3 anos.

### Exemplos de ACV
**500 colaboradores** (core mid-market → Performance):
- Tabela: 500 × 18 × 12 = **US$ 108.000/ano** rack.
- Real (~20% desc. anual) → **~US$ 86.400/ano** + 5k setup = **~91,4k no ano 1**.
- Se caírem em Growth: 500 × 12 × 12 = **72k** rack → ~60k com desconto.
- **Banda esperada 500 assentos: US$ 60–90k.**

**1.500 colaboradores** (upper mid → Performance/Enterprise):
- Performance rack: 1.500 × 18 × 12 = **US$ 324.000/ano** → ~30% desc. → **~227k/ano**.
- Enterprise negociado ~US$ 14 PEPM efetivo: 1.500 × 14 × 12 = **252k/ano** + 12k setup.
- **Banda esperada 1.500 assentos: US$ 200–260k.** (PEPM afunila de 18→14 com volume — igual à curva de todo concorrente.)

## 2.4 Táticas de precificação
- **Commit anual:** default anual. **15% off à vista anual, 25–30% em 2–3 anos.** Nunca use o mensal como headline.
- **Add-ons de conteúdo:** pacotes prontos (liderança, vendas, onboarding, compliance, DEI, cargos específicos) a **US$ 1–3 PEPM cada** ou **flat US$ 3–10k/pacote/ano**. Desacopla valor de conteúdo do valor de assentos.
- **White-label como upsell:** completo só no Performance+; Enterprise paga **+25–40%** no PEPM efetivo. Para agências/revendas, **SKU wholesale/reseller** com 30–40% de margem (revenue-share) — canal de GTM distinto.
- **Land-and-expand:** entrar no **Growth** ou em **um departamento** (piloto de 200 assentos numa BU), expandir por (a) assentos, (b) upgrade de tier por IA ilimitada, (c) add-ons de conteúdo, (d) white-label. Meter de IA nos tiers baixos é o gatilho de expansão embutido. Meta NRR > 110%.
- **Piloto pago vs. grátis:** oferecer demo + sandbox self-guided grátis (table-stakes), mas para deploy real rodar **piloto pago de 60–90 dias (US$ 5–15k, creditável no contrato anual)**. Piloto pago filtra curioso e converte melhor. Evitar free tier aberto acima de ~US$ 10 PEPM.

## 2.5 Riscos a validar
1. **PEPM vs. usuário ativo.** Compradores de engagement/gamificação resistem a pagar por todo mundo com adoção parcial (360Learning cobra por ativo justamente por isso). Ter fallback por ativo (~40–60% mais caro por ativo para proteger ACV).
2. **Exposição de custo de IA.** "Ilimitado" no Performance/Enterprise pode estourar margem. Medir custo de token por análise, pôr fair-use, modelar pior caso de COGS de IA como % do PEPM antes de prometer "ilimitado".
3. **Conteúdo é custo escondido e o moat.** "Trilhas prontas" implicam produção/licenciamento contínuo + localização (mercado global). Preço de pacote precisa cobrir isso; talvez tiers geo-localizados.
4. **Preço global / FX / willingness-to-pay.** US$ 12–18 é defensável em US/EU, alto para LatAm/APAC/EMEA-emergente. Validar localização de preço (ajuste PPP) — um preço único em USD deixa dinheiro na mesa nos EUA ou exclui outras regiões.
5. **Categoria lotada e com desconto pesado.** Lattice, 15Five, Leapsome, Deel Engage overlapam em US$ 11–22 com marcas fortes. Diferenciar pela combinação gamificação + IA-de-carreira + white-label, **não por preço**.
6. **Custo de ops de white-label & conflito de canal.** WL completo (domínios, branding por tenant, SSO/SCIM) tem carga real de onboarding/suporte. Validar que o +25–40% é de fato accretive à margem. SKU de revenda: cuidado com conflito com venda direta.
7. **Atrito de setup fee.** Leapsome/360Learning/15Five anunciam **sem setup**. Manter setup como âncora descontável (recomendado) ou embutir no PEPM.
8. **Mínimo de assentos vs. piso de 200.** 200 assentos × US$ 12 = US$ 28,8k mínimo — pode ser alto para a base do range. Considerar **Starter de 100 assentos** como entrada real para não perder logos abaixo de 300.

---

### Fontes
elearningindustry.com/leapsome-pricing · itqlick.com/leapsome/pricing · peoplemanagingpeople.com/tools/lattice-pricing · vendr.com/marketplace/lattice · success.15five.com (pricing) · spendflo.com/blog/culture-amp-pricing · vendr.com/marketplace/culture-amp · educate-me.co/blog/docebo-pricing · educate-me.co/blog/360learning-pricing · itqlick.com/degreed/pricing · trustradius.com/products/fuel50-fuelfactors/pricing · spinify.com/pricing · educate-me.co/blog/cornerstone-lms-pricing · tekpon.com/software/deel/pricing · peoplemanagingpeople.com/tools/officevibe-pricing · harmonyhr.org/blog/hr-software-pricing-comparison-2025 · getmonetizely.com/articles/white-label-pricing-models
