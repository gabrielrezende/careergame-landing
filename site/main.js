// Mark that JS is active (enables reveal animations without breaking no-JS).
document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js");

// ===== i18n PT/EN dictionary =====
const I18N = {
  pt: {
    "meta.title": "CareerGame — Gamificação de desenvolvimento de carreira",
    "meta.desc": "Plataforma white-label que gamifica PDI, skills e performance com trilhas, cards, pontos e análise de planos por IA.",
    "a11y.skip": "Pular para o conteúdo",
    "nav.how": "Como funciona",
    "nav.features": "Recursos",
    "nav.audience": "Para quem",
    "nav.cta": "Agendar demo",
    "hero.badge": "Plataforma white-label de gamificação de carreira",
    "hero.title": "Transforme o desenvolvimento de carreira em um jogo",
    "hero.sub": "O CareerGame gamifica PDI, skills e performance — trilhas, cards, pontos e rankings que engajam times de verdade, com análise de planos por IA.",
    "hero.cta1": "Agendar demo",
    "hero.cta2": "Ver como funciona",
    "mock.trail": "Trilha · Backend",
    "mock.role": "Nível: Pleno → Sênior",
    "mock.skill1": "APIs & Arquitetura",
    "mock.skill2": "Testes & Qualidade",
    "mock.skill3": "Cloud & Deploy",
    "mock.badge1": "Mentor",
    "mock.badge2": "7 dias",
    "mock.badge3": "Top 3",
    "problem.eyebrow": "O problema",
    "problem.title": "PDIs viram planilhas esquecidas",
    "problem.text": "Planos de desenvolvimento e avaliações de performance raramente engajam: sem feedback, sem progresso visível, sem motivação. O CareerGame vira esse jogo do avesso — cada avanço na carreira é visível, recompensado e divertido.",
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
    "feat.eyebrow": "Recursos",
    "feat.title": "Feito para engajar e escalar",
    "feat.f1t": "White-label multi-tenant",
    "feat.f1d": "Sua marca, suas cores, seu domínio. Cada empresa com seu próprio ambiente isolado.",
    "feat.f2t": "Análise por IA",
    "feat.f2d": "GPT-4o analisa planos individuais de desenvolvimento e sugere caminhos de evolução.",
    "feat.f3t": "Gamificação real",
    "feat.f3d": "Pontos, badges, rankings e trilhas que criam hábito e mantêm o time motivado.",
    "feat.f4t": "Trilhas de conhecimento",
    "feat.f4d": "Conteúdo estruturado por competência, do onboarding ao nível sênior.",
    "aud.eyebrow": "Para quem",
    "aud.title": "Quem ganha com o CareerGame",
    "aud.a1t": "RH & People",
    "aud.a1d": "Estruture PDI e performance com dados, trilhas claras e engajamento mensurável.",
    "aud.a2t": "Líderes",
    "aud.a2d": "Acompanhe a evolução do time em tempo real e reconheça quem avança.",
    "aud.a3t": "Empresas",
    "aud.a3d": "Retenha talentos transformando carreira em progresso visível e recompensado.",
    "cta.title": "Pronto para engajar seu time?",
    "cta.text": "Agende uma demonstração e veja o CareerGame funcionando com o contexto da sua empresa.",
    "cta.btn": "Agendar demo",
    "footer.tag": "Gamificação de desenvolvimento de carreira.",
  },
  en: {
    "meta.title": "CareerGame — Gamified career development",
    "meta.desc": "White-label platform that gamifies development plans, skills and performance with trails, cards, points and AI plan analysis.",
    "a11y.skip": "Skip to content",
    "nav.how": "How it works",
    "nav.features": "Features",
    "nav.audience": "Who it's for",
    "nav.cta": "Book a demo",
    "hero.badge": "White-label career gamification platform",
    "hero.title": "Turn career development into a game",
    "hero.sub": "CareerGame gamifies development plans, skills and performance — trails, cards, points and leaderboards that truly engage teams, with AI-powered plan analysis.",
    "hero.cta1": "Book a demo",
    "hero.cta2": "See how it works",
    "mock.trail": "Trail · Backend",
    "mock.role": "Level: Mid → Senior",
    "mock.skill1": "APIs & Architecture",
    "mock.skill2": "Testing & Quality",
    "mock.skill3": "Cloud & Deploy",
    "mock.badge1": "Mentor",
    "mock.badge2": "7 days",
    "mock.badge3": "Top 3",
    "problem.eyebrow": "The problem",
    "problem.title": "Development plans become forgotten spreadsheets",
    "problem.text": "Development plans and performance reviews rarely engage: no feedback, no visible progress, no motivation. CareerGame flips the script — every step forward in a career is visible, rewarded and fun.",
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
    "feat.eyebrow": "Features",
    "feat.title": "Built to engage and scale",
    "feat.f1t": "White-label multi-tenant",
    "feat.f1d": "Your brand, your colors, your domain. Each company gets its own isolated environment.",
    "feat.f2t": "AI analysis",
    "feat.f2d": "GPT-4o analyzes individual development plans and suggests growth paths.",
    "feat.f3t": "Real gamification",
    "feat.f3d": "Points, badges, leaderboards and trails that build habit and keep teams motivated.",
    "feat.f4t": "Knowledge trails",
    "feat.f4d": "Content structured by competency, from onboarding to senior level.",
    "aud.eyebrow": "Who it's for",
    "aud.title": "Who wins with CareerGame",
    "aud.a1t": "HR & People",
    "aud.a1d": "Structure development and performance with data, clear trails and measurable engagement.",
    "aud.a2t": "Leaders",
    "aud.a2d": "Track your team's growth in real time and recognize who's moving forward.",
    "aud.a3t": "Companies",
    "aud.a3d": "Retain talent by turning careers into visible, rewarded progress.",
    "cta.title": "Ready to engage your team?",
    "cta.text": "Book a demo and see CareerGame running with your company's context.",
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
