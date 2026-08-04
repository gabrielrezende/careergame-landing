# 3. Parceiros & Go-to-Market

**Tese central:** como camada gamificada de carreira/skills, o CareerGame é um *complemento*, não um sistema de registro. Ele "senta em cima do HRIS" — então **profundidade de integração + presença em marketplace = sua distribuição mais barata**, e um motion **híbrido sales-assisted + parceiro/marketplace** bate PLG puro nesse ticket e nesse comprador (Head de L&D / CHRO).

## 3.1 Parceiros de integração (técnicos)

### A. HRIS / HCM — a fundação (identidade, org chart, cargos, ciclo de vida)
O produto precisa de dados de colaborador (quem, cargo, gestor, área, tempo de casa) para semear trilhas e personalizar. Dois caminhos:

**Caminho 1 (recomendado por velocidade): API unificada de HRIS.** Integra uma vez, ganha dezenas de HRIS:
- **Finch (tryfinch.com)** — 250+ integrações, cobertura US mais profunda; melhor se US mid-market é prioridade.
- **Merge (merge.dev)** — 70+ HRIS (BambooHR, Gusto, Workday, UKG, Namely, Rippling, Deel, SuccessFactors); horizontal (também ATS/ticketing), mais breadth internacional/EU.

**Caminho 2 (para marketplace + clientes deep): conectores nativos** onde você vai listar e onde o comprador exige certificação:

| Prioridade | Sistema | Por quê | Valor de marketplace |
|---|---|---|---|
| **P0** | **BambooHR** | HRIS default do mid-market/SMB; API limpa; comprador espera conectar aqui primeiro | Marketplace com ~159 apps, **quase vazio de IA/gamificação (~1,3% apps de IA)** → alvo #1 de listagem |
| **P0** | **HiBob** | HRIS mid-market que mais cresce entre empresas "modernas" — seu ICP exato | Marketplace = alcance direto ao ICP concentrado |
| **P1** | **Rippling** | Cresce rápido; programa ISV forte (sandbox, dev portal, co-marketing) | Featured listing + co-marketing |
| **P1** | **Workday** | Entra ao subir para 2.000 colaboradores; governança | Listagem = credibilidade enterprise (barra maior) |
| **P1** | **SAP SuccessFactors** | Upper-mid/enterprise, forte em EMEA/LatAm | SAP Store / cert de parceiro (fase posterior) |
| **P2** | **Personio** | Líder mid-market na DACH/EU — importante p/ expansão europeia | Alcance de marketplace EU |
| **P2** | **ADP Workforce Now** | Base enorme, payroll-anchored | Marketplace valioso; pegar via Finch primeiro |

**Recomendação:** API unificada (Finch ou Merge) no mês 1–2 para breadth, depois conectores nativos **BambooHR + HiBob** para ganhar as listagens (API unificada dá dado, não vitrine de marketplace).

### B. SSO / Identidade (table-stakes acima de 200 colaboradores)
- **Microsoft Entra ID (Azure AD)** — inegociável; maioria do mid-market é Microsoft. SAML/OIDC + SCIM.
- **Google Workspace** — SSO para o muito mid-market/tech no Google.
- **Okta** — listar na **Okta Integration Network (OIN)**: é checkbox de segurança **e** canal de descoberta.

Prioridade: **Entra ID + Google primeiro** (cobertura mais ampla), **Okta OIN logo atrás**. SCIM (auto-provisionamento) é diferencial vs. só-SSO.

### C. Colaboração (superfície de engajamento — crítica para gamificação)
Gamificação vive de touchpoints diários. Notificações, streaks, desafios e nudges têm que cair onde a pessoa já está:
- **Slack** — listar no **Slack App Directory** via Slack Partner Program.
- **Microsoft Teams** — listar no Teams store / AppSource; essencial para a maioria Microsoft do mid-market.

→ **App/bot Slack + Teams é provavelmente sua integração #1** — feature *e* canal de distribuição ao mesmo tempo.

### D. LMS / interop de conteúdo
- **SCORM / xAPI (Tin Can)** — suportar ambos para trilhas ingerirem/exportarem de qualquer LMS e conclusões voltarem ao sistema de registro. Camada universal, construir uma vez.
- Conectores diretos de conteúdo: Go1, LinkedIn Learning, Coursera, Udemy, OpenSesame (ver §3.2).

## 3.2 Parceiros de conteúdo

As "trilhas prontas" precisam de conteúdo real por trás do wrapper gamificado. **Não produza tudo — agregue.**

**Bibliotecas de curso (inventário para embutir nas trilhas):**
- **Go1** — o parceiro mais forte: agrega 200+ provedores em um Content Hub, um contrato, uma API. Jeito mais rápido de preencher toda trilha (tech, CS, suporte, vendas). **Parceiro de conteúdo #1.**
- **OpenSesame** — 25.000+ cursos, 45 idiomas → forte para o mandato *global* e localização.
- **Udemy Business** — 6.000+ cursos práticos/tech.
- **Coursera for Business** — trilhas acadêmicas/credenciadas → credibilidade.
- **LinkedIn Learning** — pull de marca + badge no perfil.

Precedente: WorkRamp integra Udemy + OpenSesame + Go1 ao mesmo tempo — o modelo padrão é ser marketplace de conteúdo, não fonte única.

**Provedores de dados de skills / taxonomia (a ontologia que move PDI, mapa de skills e gap analysis — mais estratégico que conteúdo de curso):**
- **Lightcast Open Skills** — a "Suíça" dos dados de skills; **30.000+ skills**, APIs, sinal de mercado de 40+ países. Melhor padrão neutro e global para ancorar seu modelo de skills — GPT-4o gera conteúdo, mas uma taxonomia defensável precisa de ontologia real embaixo. **Parceiro de skills-data #1.**
- **TechWolf** — IA que infere skills de artefatos de trabalho (rodada de US$ 43M); auto-mapeia colaboradores a skills sem tagging manual.
- **SkyHive** — agora da Cornerstone (concorrente); menor prioridade / risco de lock-in.

**Recomendação:** ancorar o modelo de skills no **Lightcast Open Skills** (muitos termos livres; enriquecer via API) e assinar **Go1** como agregador primário. GPT-4o para a camada gamificada/adaptativa por cima, não para substituir a taxonomia.

## 3.3 Parceiros de canal / GTM

O sinal de mercado é explícito: RH está montando seu stack e revendas/consultores estão sendo chamados a entrar agora.
- **Consultorias de RH / people-ops & parceiros de implementação de HR-tech com IA** — aconselham o mid-market na escolha de stack; referem/revendem.
- **Corretoras de benefícios** — canal reconhecido de HR-tech (ex.: bswift tem programa formal). Donas da relação de RH no mid-market.
- **SIs / VARs / consultorias de deploy** — para contas Workday/SuccessFactors, controlam a implementação e podem "atachar" o CareerGame.
- **Consultorias de L&D / desenvolvimento** — mais perto do comprador (Head de L&D); parceiros naturais de indicação.
- **Referral vs. reseller:** para HR software early-stage, referral/affiliate é menos atrito que revenda cheia; comece por aí.

**Recomendação:** começar com **programa de indicação para consultorias de L&D/people-ops e advisories boutique** (baixo overhead, comprador alinhado). Depois corretoras de benefícios e revenda de SI conforme sobe de porte. **Não** montar programa VAR pesado no ano 1.

## 3.4 Motions de GTM

**O que funciona no mid-market HR SaaS (consenso 2026):**
- **Motion por ACV:** PLG/self-serve para ACV < US$ 10k; **sales-led acima de US$ 25k; híbrido no meio.** Deals mid-market (org-wide) caem na faixa híbrida/sales-assisted.
- **Híbrido domina:** entrada self-serve/PLG para SMB e para landar um time/depto, sales-assist para consolidar em contrato anual org-wide, marketplace + parceiro por cima.
- **Marketplace-led + partner-led** são comprovados para produtos que *complementam* plataformas existentes — exatamente a posição do CareerGame sobre o HRIS.
- **Comprador:** econômico = CHRO/Chief People Officer; campeão = **Head de L&D / VP Total Rewards / People Analytics**. Vender ao campeão, obter aval do CHRO.
- **Demand gen que converte:** LinkedIn "Thought Leader Ads" de vozes CHRO têm o maior engajamento em RH; conteúdo de ciclo de budget ("2026 HR Tech Buyer's Guide", benchmarks) converte melhor no Q2/Q3.
- **Comunidade/influência:** RH é audiência de compra community-driven (associações, comunidades People-Ops no Slack/LinkedIn, influencers nomeados). Recomendação de par > cold outbound.

### Sequência de GTM — 12 meses

**Q1 — Fundação & primeiros design partners (sales-assisted, founder-led):**
- Outbound founder-led a 15–25 Heads de L&D/People em mid-market tech/CS/vendas; converter 3–5 em **design partners pagos** com desconto por logo + case.
- Ship: API unificada de HRIS (Finch/Merge) + SSO Entra/Google + **bot Slack/Teams** (wedge de engajamento e futura listagem).
- Assinar **Go1** (conteúdo) + adotar **Lightcast Open Skills** (taxonomia) para trilhas reais, não só geradas por GPT.

**Q2 — Distribuição marketplace-led + engine de conteúdo:**
- Listar no **BambooHR Marketplace** e **HiBob** (baixa concorrência de apps de IA = visibilidade desproporcional), depois **Slack App Directory** e **Okta OIN**.
- Lançar SEO/conteúdo + ativo flagship gated ("Guia de Compra 2026: Gamificação de Carreira & Skills" / benchmark) no timing do budget de RH Q2/Q3.
- Iniciar LinkedIn Thought-Leader Ads com vozes de clientes/CHRO; semear presença em comunidades People-Ops.

**Q3 — Escala sales-assisted + canal de indicação:**
- Formalizar motion repetível (piloto grátis de time → contrato anual org-wide): um depto (ex.: sales enablement) começa sozinho, reps consolidam para a empresa.
- Lançar **programa de indicação** para consultorias de L&D/people-ops.
- Conector nativo **Rippling** + listagem (co-marketing ISV) e **MS Teams AppSource**.

**Q4 — Up-market + ampliar canal:**
- Iniciar certificação **Workday / SuccessFactors** para deals maiores.
- Abrir conversas de **corretoras de benefícios** e **SI/VAR** para revenda/attach.
- Dobrar no que deu melhor CAC entre marketplace + comunidade no Q2–Q3.

## 3.5 As 5 parcerias de maior alavancagem (fazer primeiro)

1. **API unificada de HRIS — Finch (ou Merge)** — maior alavanca geral; transforma meses de engenharia de conector em semanas. Diferença entre lançar no Q1 vs. Q3.
2. **BambooHR Marketplace (+ conector nativo)** — HRIS default do mid-market, marketplace quase vazio de IA/gamificação → visibilidade máxima, concorrência mínima. Distribuição durável mais barata que existe.
3. **App/bot Slack + Teams (com listagens)** — para gamificação, é ao mesmo tempo a superfície de engajamento core e canal de marketplace. Duplo propósito.
4. **Go1 (agregação de conteúdo) + Lightcast Open Skills (taxonomia)** — um deal preenche toda trilha; a taxonomia dá defensabilidade à IA.
5. **HiBob (parceria/marketplace)** — a base instalada dele *é* o ICP (mid-market moderno em crescimento), o canal mais concentrado no ICP disponível.

**Por quê estas 5:** #1 remove o maior gargalo de engenharia; #2/#3/#5 são distribuição de CAC quase zero direto no comprador; #4 torna a promessa central (trilhas prontas) crível no dia 1. Todo o resto (cert Workday, ADP, corretoras, SIs, deals diretos Coursera/Udemy) é mais custoso e melhor sequenciado no H2, depois que o motion estiver provado.

---

### Fontes
tryfinch.com/finch-api · merge.dev/integrations · unified.to/blog/25_hris_apis_to_integrate_with_in_2026 · bamboohr.com/integrations · appmarketplace.com/marketplaces/bamboohr-marketplace · developer.rippling.com · okta.com/integrations · slack.com/partners · go1.com/go1-competitor-comparison · opensesame.com/blog/top-8-online-training-providers-in-2026 · trainingindustry.com (WorkRamp) · lightcast.io/open-skills · joshbersin.com (Lightcast, TechWolf) · channelfutures.com/cloud-2/hr-is-getting-its-tech-stack-resellers-get-in-now · bswift.com/channel-partners · salesmotion.io/blog/saas-gtm-strategy-plg-sales-led · saasmag.com/product-led-growth-next-chapter-saas-2026 · unboundb2b.com/blog/go-to-market-strategy-2026 · salesmotion.io/blog/how-to-sell-to-hr-leaders · leapsome.com/blog/hr-influencers
