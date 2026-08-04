// Mark that JS is active (enables reveal animations without breaking no-JS).
document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js");

// ===== i18n PT/EN dictionary =====
const I18N = {
  pt: {
    "meta.title": "CareerGame — Desenvolvimento de carreira gamificado",
    "meta.desc": "Plataforma white-label de desenvolvimento de carreira gamificado: trilhas de skills prontas por área, PDIs guiados por IA, pontos e rankings. No ar em dias.",
    "a11y.skip": "Pular para o conteúdo",

    "nav.trails": "Trilhas",
    "nav.how": "Como funciona",
    "nav.features": "Recursos",
    "nav.pricing": "Preços",
    "nav.cta": "Agendar demo",

    "hero.badge": "Plataforma white-label de carreira gamificada",
    "hero.title": "Transforme carreira em jogo — e engajamento em resultado.",
    "hero.sub": "O CareerGame é a plataforma white-label de desenvolvimento de carreira gamificado: trilhas de skills <strong>prontas</strong> por área, PDIs guiados por IA e rankings que fazem o time evoluir de verdade. No ar em dias, não meses.",
    "hero.cta1": "Agendar demo",
    "hero.cta2": "Ver trilhas prontas",

    "mock.trail": "Trilha · Backend",
    "mock.role": "Nível: Pleno → Sênior",
    "mock.skill1": "APIs & Arquitetura",
    "mock.skill2": "Testes & Qualidade",
    "mock.skill3": "Cloud & Deploy",
    "mock.badge1": "Mentor",
    "mock.badge2": "7 dias",
    "mock.badge3": "Top 3",

    "proof.lead": "Junte-se aos primeiros times que estão transformando carreira em progresso visível.",

    "problem.eyebrow": "O problema",
    "problem.title": "PDI que ninguém abre custa caro.",
    "problem.text": "Plano de desenvolvimento em planilha esquecida vira rampa lenta, promoção sem critério e talento que vai embora. O CareerGame vira esse jogo do avesso: cada avanço na carreira é visível, recompensado e mensurável — e o RH enxerga tudo.",

    "how.eyebrow": "Como funciona",
    "how.title": "Do skill ao ranking, em quatro passos",
    "how.s1t": "Skills",
    "how.s1d": "Mapeie as competências que importam para cada cargo e trilha de carreira.",
    "how.s2t": "Cards",
    "how.s2d": "Cada skill vira cards de conhecimento e desafios práticos a serem completados.",
    "how.s3t": "Trilhas",
    "how.s3d": "Os cards se organizam em trilhas de evolução por carreira e senioridade.",
    "how.s4t": "Pontos & Ranking",
    "how.s4d": "Cada avanço gera pontos, badges e rankings que criam hábito e engajamento.",

    "trails.eyebrow": "Diferencial",
    "trails.title": "As trilhas já vêm prontas. Você só edita.",
    "trails.text": "Não construa sua arquitetura de carreira do zero — isso leva meses. O CareerGame entrega trilhas prontas por área, do Júnior ao Principal, com competências e desafios. Adote hoje, ajuste ao seu jeito amanhã.",
    "trails.a1": "Backend",
    "trails.a2": "Frontend",
    "trails.a3": "Customer Success",
    "trails.a4": "Vendas",
    "trails.a5": "Suporte",
    "trails.a6": "Produto",
    "trails.a7": "Dados",
    "trails.a8": "Marketing",
    "trails.l1": "Júnior",
    "trails.l2": "Pleno",
    "trails.l3": "Sênior",
    "trails.l4": "Staff",
    "trails.l5": "Principal",
    "trails.note": "Cada competência é editável: adapte níveis, cards e pontos à realidade da sua empresa.",

    "ai.eyebrow": "Inteligência artificial",
    "ai.title": "Uma IA que monta o plano — e já sabe o próximo passo.",
    "ai.text": "A IA do CareerGame lê o PDI, identifica o gap de skills e já atribui as trilhas e os cards certos — depois acompanha o progresso e sugere o próximo movimento de carreira. Coaching e execução no mesmo lugar.",
    "ai.s1t": "Lê o PDI",
    "ai.s1d": "Analisa metas, cargo e histórico do colaborador.",
    "ai.s2t": "Atribui trilhas e cards",
    "ai.s2d": "Fecha o gap com o conteúdo certo, no nível certo.",
    "ai.s3t": "Acompanha e sugere",
    "ai.s3d": "Mede o progresso e recomenda o próximo passo de carreira.",

    "prod.eyebrow": "Veja o produto",
    "prod.title": "Progresso que dá pra ver",
    "prod.text": "Do card ao ranking, cada avanço aparece — para o colaborador, para o líder e para o RH.",
    "prod.m1t": "Ranking · Squad Alpha",
    "prod.m1s": "Esta semana",
    "prod.m1c": "Streak 7d",
    "prod.m1cap": "Ranking do time",
    "prod.m1me": "Você",
    "wl.tenant1": "Sua Marca",
    "prod.m2t": "Análise de IA · PDI",
    "prod.m2s": "Backend · Pleno",
    "prod.m2body": "“Gap identificado em <b>Cloud &amp; Deploy</b>. Atribuí a trilha de infraestrutura e 3 desafios. Próximo passo: liderar um deploy de produção.”",
    "prod.m2c1": "2 trilhas",
    "prod.m2c2": "3 cards",
    "prod.m2cap": "Análise de IA do PDI",
    "prod.m3t": "Painel do gestor",
    "prod.m3s": "Skills do time",
    "prod.m3r1": "Cobertura de skills",
    "prod.m3r2": "Engajamento em PDI",
    "prod.m3r3": "Prontos p/ promoção",
    "prod.m3cap": "Painel do gestor",

    "feat.eyebrow": "Recursos",
    "feat.title": "Feito para engajar e escalar",
    "feat.f1t": "No ar em dias",
    "feat.f1d": "Trilhas prontas por área eliminam meses de montagem. Comece com uma base sólida e ajuste depois.",
    "feat.f2t": "IA que executa",
    "feat.f2d": "A IA lê o PDI, atribui trilhas e mede progresso — não é chat, é workflow de desenvolvimento.",
    "feat.f3t": "Gamificação de carreira",
    "feat.f3d": "Pontos, badges e rankings ligados à evolução real de cargo — não a KPI de vendas ou conclusão de curso.",
    "feat.f4t": "White-label multi-tenant",
    "feat.f4d": "Sua marca, suas cores, seu domínio. Cada empresa com seu ambiente isolado.",

    "wl.eyebrow": "White-label",
    "wl.title": "Sua marca. Seu domínio. Seu jogo.",
    "wl.text": "White-label multi-tenant de verdade: cada empresa com marca, cores, domínio próprio e ambiente isolado.",
    "wl.b1": "Marca e domínio próprios, ponta a ponta",
    "wl.b2": "Ambiente isolado por empresa (multi-tenant)",
    "wl.b3": "Ideal para grupos com várias marcas e para consultorias que querem lançar sua própria academia gamificada",

    "aud.eyebrow": "Para quem",
    "aud.title": "Quem ganha com o CareerGame",
    "aud.a1t": "RH & L&D",
    "aud.a1d": "Estruture PDI e performance com dados, trilhas claras e engajamento mensurável — sem projeto de meses.",
    "aud.a2t": "Líderes",
    "aud.a2d": "Acompanhe a evolução do time em tempo real e reconheça quem avança.",
    "aud.a3t": "Colaboradores",
    "aud.a3d": "Veja exatamente o que fazer para crescer — com progresso visível e recompensado.",

    "results.eyebrow": "Impacto",
    "results.title": "As alavancas que o CareerGame move",
    "results.text": "O que a gamificação de carreira ajuda o seu RH a melhorar:",
    "results.k1t": "Retenção de talentos",
    "results.k1d": "Carreira visível e recompensada dá motivo para ficar.",
    "results.k2t": "Tempo de rampa",
    "results.k2d": "Trilhas de onboarding levam do zero ao produtivo mais rápido.",
    "results.k3t": "Mobilidade interna",
    "results.k3d": "Skills mapeadas revelam quem já está pronto para o próximo passo.",

    "pricing.eyebrow": "Planos",
    "pricing.title": "Preço simples, por colaborador",
    "pricing.text": "Cobrança anual. Piloto pago creditável no contrato. Preços em dólar por colaborador/mês.",
    "pricing.per": "/colab/mês",
    "pricing.cta": "Começar",
    "pricing.cta2": "Agendar demo",
    "pricing.flag": "Mais popular",
    "pricing.p1name": "Starter",
    "pricing.p1val": "6",
    "pricing.p1desc": "Para começar a gamificar carreira.",
    "pricing.p1f1": "Gamificação (pontos, badges, ranking)",
    "pricing.p1f2": "1 pacote de trilhas incluso",
    "pricing.p1f3": "White-label: logo e cores",
    "pricing.p2name": "Growth",
    "pricing.p2val": "12",
    "pricing.p2desc": "Carreira, PDI e IA para o time inteiro.",
    "pricing.p2f1": "Tudo do Starter +",
    "pricing.p2f2": "Framework de competências + PDI",
    "pricing.p2f3": "IA de análise de PDI (limitada)",
    "pricing.p2f4": "2 pacotes + subdomínio próprio",
    "pricing.p3name": "Performance",
    "pricing.p3val": "18",
    "pricing.p3desc": "IA ilimitada e white-label completo.",
    "pricing.p3f1": "Tudo do Growth +",
    "pricing.p3f2": "IA de análise de PDI ilimitada",
    "pricing.p3f3": "White-label completo + domínio próprio",
    "pricing.p3f4": "3 pacotes + API + CSM prioritário",
    "pricing.entName": "Enterprise",
    "pricing.entDesc": "SSO/SCIM, UI customizada, todos os pacotes, CSM dedicado e SLA. Para 500+ colaboradores.",
    "pricing.entCta": "Fale com vendas",

    "faq.eyebrow": "Dúvidas",
    "faq.title": "Perguntas frequentes",
    "faq.q1": "Gamificação gera desenvolvimento real ou só engajamento vazio?",
    "faq.a1": "O jogo é atrelado à carreira: cada ponto vem de uma competência real da trilha do cargo. O RH acompanha rampa, mobilidade interna e retenção — não só cliques.",
    "faq.q2": "As trilhas prontas são editáveis?",
    "faq.a2": "Sim. As trilhas vêm prontas por área, mas a competência é a unidade editável: ajuste níveis, cards e pontos ao seu contexto.",
    "faq.q3": "Integra com o meu HRIS?",
    "faq.a3": "Sim — via integrações de HRIS (BambooHR, HiBob e outros) e SSO/SCIM (Entra ID, Google, Okta) para provisionar times automaticamente.",
    "faq.q4": "É seguro?",
    "faq.a4": "Isolamento multi-tenant por empresa, SSO/SCIM e controle de acesso. Certificações de segurança no roadmap.",
    "faq.q5": "Quanto tempo até ir ao ar?",
    "faq.a5": "Dias, não meses — porque as trilhas já vêm prontas. Você adota a base e personaliza em paralelo.",

    "cta.eyebrow": "Vamos começar",
    "cta.title": "Pronto para transformar carreira em jogo?",
    "cta.text": "Veja o CareerGame com as trilhas da sua área, PDIs guiados por IA e rankings que engajam — no ar em dias.",
    "cta.btn": "Agendar demo",

    "footer.tag": "Desenvolvimento de carreira gamificado.",
  },
  en: {
    "meta.title": "CareerGame — Gamified career development",
    "meta.desc": "White-label platform for gamified career development: ready-made skill trails by area, AI-guided development plans, points and leaderboards. Live in days.",
    "a11y.skip": "Skip to content",

    "nav.trails": "Trails",
    "nav.how": "How it works",
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.cta": "Book a demo",

    "hero.badge": "White-label gamified career platform",
    "hero.title": "Turn careers into a game — and engagement into results.",
    "hero.sub": "CareerGame is the white-label platform for gamified career development: <strong>ready-made</strong> skill trails by area, AI-guided development plans, and leaderboards that make teams actually grow. Live in days, not months.",
    "hero.cta1": "Book a demo",
    "hero.cta2": "See ready-made trails",

    "mock.trail": "Trail · Backend",
    "mock.role": "Level: Mid → Senior",
    "mock.skill1": "APIs & Architecture",
    "mock.skill2": "Testing & Quality",
    "mock.skill3": "Cloud & Deploy",
    "mock.badge1": "Mentor",
    "mock.badge2": "7 days",
    "mock.badge3": "Top 3",

    "proof.lead": "Join the first teams turning career growth into visible progress.",

    "problem.eyebrow": "The problem",
    "problem.title": "A development plan no one opens is expensive.",
    "problem.text": "A development plan buried in a forgotten spreadsheet becomes slow ramp-up, promotions without criteria, and talent that walks out. CareerGame flips the script: every step forward in a career is visible, rewarded and measurable — and HR sees it all.",

    "how.eyebrow": "How it works",
    "how.title": "From skill to leaderboard, in four steps",
    "how.s1t": "Skills",
    "how.s1d": "Map the competencies that matter for each role and career trail.",
    "how.s2t": "Cards",
    "how.s2d": "Each skill becomes knowledge cards and practical challenges to complete.",
    "how.s3t": "Trails",
    "how.s3d": "Cards are organized into growth trails by career track and seniority.",
    "how.s4t": "Points & Leaderboard",
    "how.s4d": "Every step earns points, badges and rankings that build habit and engagement.",

    "trails.eyebrow": "Differentiator",
    "trails.title": "The trails come ready. You just edit.",
    "trails.text": "Don't build your career architecture from scratch — that takes months. CareerGame ships ready-made trails by area, from Junior to Principal, with competencies and challenges. Adopt today, tailor tomorrow.",
    "trails.a1": "Backend",
    "trails.a2": "Frontend",
    "trails.a3": "Customer Success",
    "trails.a4": "Sales",
    "trails.a5": "Support",
    "trails.a6": "Product",
    "trails.a7": "Data",
    "trails.a8": "Marketing",
    "trails.l1": "Junior",
    "trails.l2": "Mid",
    "trails.l3": "Senior",
    "trails.l4": "Staff",
    "trails.l5": "Principal",
    "trails.note": "Every competency is editable: adapt levels, cards and points to your company's reality.",

    "ai.eyebrow": "Artificial intelligence",
    "ai.title": "An AI that builds the plan — and already knows the next step.",
    "ai.text": "CareerGame's AI reads the development plan, spots the skill gap and assigns the right trails and cards — then tracks progress and suggests the next career move. Coaching and execution in one place.",
    "ai.s1t": "Reads the plan",
    "ai.s1d": "Analyzes goals, role and the person's history.",
    "ai.s2t": "Assigns trails and cards",
    "ai.s2d": "Closes the gap with the right content, at the right level.",
    "ai.s3t": "Tracks and suggests",
    "ai.s3d": "Measures progress and recommends the next career step.",

    "prod.eyebrow": "See the product",
    "prod.title": "Progress you can actually see",
    "prod.text": "From card to leaderboard, every step shows up — for the employee, the leader and HR.",
    "prod.m1t": "Leaderboard · Squad Alpha",
    "prod.m1s": "This week",
    "prod.m1c": "7d streak",
    "prod.m1cap": "Team leaderboard",
    "prod.m1me": "You",
    "wl.tenant1": "Your Brand",
    "prod.m2t": "AI analysis · Plan",
    "prod.m2s": "Backend · Mid",
    "prod.m2body": "“Gap found in <b>Cloud &amp; Deploy</b>. Assigned the infrastructure trail and 3 challenges. Next step: lead a production deploy.”",
    "prod.m2c1": "2 trails",
    "prod.m2c2": "3 cards",
    "prod.m2cap": "AI plan analysis",
    "prod.m3t": "Manager dashboard",
    "prod.m3s": "Team skills",
    "prod.m3r1": "Skill coverage",
    "prod.m3r2": "Plan engagement",
    "prod.m3r3": "Promotion-ready",
    "prod.m3cap": "Manager dashboard",

    "feat.eyebrow": "Features",
    "feat.title": "Built to engage and scale",
    "feat.f1t": "Live in days",
    "feat.f1d": "Ready-made trails by area cut months of setup. Start from a solid base and tailor later.",
    "feat.f2t": "AI that executes",
    "feat.f2d": "The AI reads the plan, assigns trails and measures progress — not a chatbot, a development workflow.",
    "feat.f3t": "Career gamification",
    "feat.f3d": "Points, badges and leaderboards tied to real role progression — not sales KPIs or course completion.",
    "feat.f4t": "White-label multi-tenant",
    "feat.f4d": "Your brand, your colors, your domain. Each company in its own isolated environment.",

    "wl.eyebrow": "White-label",
    "wl.title": "Your brand. Your domain. Your game.",
    "wl.text": "True white-label multi-tenant: each company with its own brand, colors, domain and isolated environment.",
    "wl.b1": "Your own brand and domain, end to end",
    "wl.b2": "Isolated environment per company (multi-tenant)",
    "wl.b3": "Ideal for multi-brand groups and for consultancies launching their own gamified academy",

    "aud.eyebrow": "Who it's for",
    "aud.title": "Who wins with CareerGame",
    "aud.a1t": "HR & L&D",
    "aud.a1d": "Structure development and performance with data, clear trails and measurable engagement — without a months-long project.",
    "aud.a2t": "Leaders",
    "aud.a2d": "Track your team's growth in real time and recognize who's moving forward.",
    "aud.a3t": "Employees",
    "aud.a3d": "See exactly what to do to grow — with visible, rewarded progress.",

    "results.eyebrow": "Impact",
    "results.title": "The levers CareerGame moves",
    "results.text": "What gamified career development helps your HR improve:",
    "results.k1t": "Talent retention",
    "results.k1d": "A visible, rewarded career gives people a reason to stay.",
    "results.k2t": "Time to ramp",
    "results.k2d": "Onboarding trails get people from zero to productive faster.",
    "results.k3t": "Internal mobility",
    "results.k3d": "Mapped skills reveal who's already ready for the next step.",

    "pricing.eyebrow": "Plans",
    "pricing.title": "Simple pricing, per employee",
    "pricing.text": "Billed annually. Paid pilot creditable toward the contract. Prices in USD per employee/month.",
    "pricing.per": "/emp/mo",
    "pricing.cta": "Get started",
    "pricing.cta2": "Book a demo",
    "pricing.flag": "Most popular",
    "pricing.p1name": "Starter",
    "pricing.p1val": "6",
    "pricing.p1desc": "To start gamifying careers.",
    "pricing.p1f1": "Gamification (points, badges, leaderboard)",
    "pricing.p1f2": "1 trail package included",
    "pricing.p1f3": "White-label: logo and colors",
    "pricing.p2name": "Growth",
    "pricing.p2val": "12",
    "pricing.p2desc": "Careers, plans and AI for the whole team.",
    "pricing.p2f1": "Everything in Starter +",
    "pricing.p2f2": "Competency framework + plans",
    "pricing.p2f3": "AI plan analysis (metered)",
    "pricing.p2f4": "2 packages + your own subdomain",
    "pricing.p3name": "Performance",
    "pricing.p3val": "18",
    "pricing.p3desc": "Unlimited AI and full white-label.",
    "pricing.p3f1": "Everything in Growth +",
    "pricing.p3f2": "Unlimited AI plan analysis",
    "pricing.p3f3": "Full white-label + your own domain",
    "pricing.p3f4": "3 packages + API + priority CSM",
    "pricing.entName": "Enterprise",
    "pricing.entDesc": "SSO/SCIM, custom UI, all packages, dedicated CSM and SLA. For 500+ employees.",
    "pricing.entCta": "Talk to sales",

    "faq.eyebrow": "Questions",
    "faq.title": "Frequently asked questions",
    "faq.q1": "Does gamification drive real development or just empty engagement?",
    "faq.a1": "The game is tied to careers: every point comes from a real competency in the role's trail. HR tracks ramp-up, internal mobility and retention — not just clicks.",
    "faq.q2": "Are the ready-made trails editable?",
    "faq.a2": "Yes. Trails ship ready by area, but the competency is the editable unit: adjust levels, cards and points to your context.",
    "faq.q3": "Does it integrate with my HRIS?",
    "faq.a3": "Yes — via HRIS integrations (BambooHR, HiBob and others) and SSO/SCIM (Entra ID, Google, Okta) to auto-provision teams.",
    "faq.q4": "Is it secure?",
    "faq.a4": "Multi-tenant isolation per company, SSO/SCIM and access control. Security certifications on the roadmap.",
    "faq.q5": "How long to go live?",
    "faq.a5": "Days, not months — because the trails come ready. You adopt the base and customize in parallel.",

    "cta.eyebrow": "Let's start",
    "cta.title": "Ready to turn careers into a game?",
    "cta.text": "See CareerGame with your area's trails, AI-guided plans and leaderboards that engage — live in days.",
    "cta.btn": "Book a demo",

    "footer.tag": "Gamified career development.",
  },
};

function applyLang(lang) {
  const dict = I18N[lang] || I18N.pt;
  document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = dict[key];
    if (val === undefined) return;
    const attr = el.getAttribute("data-i18n-attr");
    if (attr) el.setAttribute(attr, val);
    else if (key === "meta.title") document.title = val;
    else if (el.hasAttribute("data-i18n-html")) el.innerHTML = val;
    else el.textContent = val;
  });
  document.querySelectorAll(".lang-opt").forEach((o) =>
    o.classList.toggle("active", o.dataset.lang === lang)
  );
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

function initLang() {
  let lang = null;
  try { lang = localStorage.getItem("lang"); } catch (e) {}
  if (lang !== "pt" && lang !== "en") {
    lang = (navigator.language || "").toLowerCase().startsWith("en") ? "en" : "pt";
  }
  applyLang(lang);
  const toggle = document.getElementById("langToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = document.documentElement.lang === "en" ? "en" : "pt";
      applyLang(current === "en" ? "pt" : "en");
    });
  }
}

// Reveal on scroll, respecting prefers-reduced-motion.
function initReveal() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const els = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px" }
  );
  els.forEach((el) => io.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  initLang();
  initReveal();
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
});
