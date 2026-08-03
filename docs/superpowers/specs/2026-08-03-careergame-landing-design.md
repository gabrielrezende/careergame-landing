# CareerGame — Landing Page + Deploy AWS (Design)

**Data:** 2026-08-03
**Repositório:** `careergame-landing`

## Objetivo

Landing page institucional para o **CareerGame** (SaaS B2B white-label de gamificação de
carreira: skills → cards → trilhas → pontos, análise GPT-4o, multi-tenant) e seu deploy
em AWS como site estático com CDN, provisionado via Terraform.

## Decisões

| Tema | Decisão |
|------|---------|
| Idioma | Bilíngue PT/EN com toggle |
| Stack | HTML/CSS/JS estático, **zero build** |
| CTA | "Agendar demo" via `mailto:gmrezende91@gmail.com` (institucional) |
| Domínio | `careergame.com.br` (recém-comprado, sem hosted zone ainda) |
| DNS | Route 53 (delegação a fazer no registrador) |
| Marca | teal `#056E82`, verde progresso `#2AB57D`, logo de foguete |
| AWS | conta 049603456482, região `us-east-1` |

## 1. Landing — conteúdo (one-page)

- **Header** — logo + toggle PT/EN + botão "Agendar demo"
- **Hero** — headline + subtítulo + CTA principal
- **Problema/proposta** — engajamento em PDI/performance via gamificação
- **Como funciona** — 4 passos: Skills → Cards → Trilhas → Pontos/Ranking
- **Features** — white-label multi-tenant, análise IA (GPT-4o), rankings/gamificação, trilhas
- **Para quem** — RH / líderes / empresas
- **CTA final** — Agendar demo (mailto)
- **Footer** — marca, © CareerGame

## 2. Estrutura de arquivos

```
index.html            markup + data-i18n hooks
styles.css            design system (variáveis CSS, responsivo mobile-first)
main.js               toggle PT/EN + smooth scroll
assets/logo.png       copiado de tcg-app/public/logo.png
assets/icon-512.png   favicon (copiado de tcg-app/public)
infra/                Terraform (ver seção 3)
deploy.sh             sync S3 + invalidação CloudFront
```

i18n: dois dicionários JS (pt/en) trocando `textContent`/atributos via `data-i18n`.
Sem dependências externas.

## 3. Infra AWS (Terraform em `infra/`)

- **S3 bucket** privado, versionado, sem acesso público direto
- **CloudFront** (CDN) com **OAC** — apenas CloudFront lê o S3
- **ACM cert** em `us-east-1` para `careergame.com.br` + `www.careergame.com.br`
- **Route 53 hosted zone** para `careergame.com.br`
  - registros A/AAAA alias (apex + www → CloudFront)
  - validação DNS do ACM automática (Route 53)
- HTTP→HTTPS redirect, root `index.html`, 404 → `index.html`
- State: local, `terraform.tfstate` no `.gitignore`

## 4. Fluxo de deploy (duas fases)

Necessário porque o domínio foi só comprado — os nameservers ainda apontam ao registrador.

1. **Fase A:** aplicar apenas a hosted zone → obter os 4 nameservers do Route 53
2. **Delegação:** colar os NS no registrador (Registro.br). Aguardar propagação
3. **Fase B:** `terraform apply` completo → ACM valida, CloudFront sobe, alias criados
4. **Conteúdo:** `deploy.sh` = `aws s3 sync` + `cloudfront create-invalidation`

Pré-requisito: instalar Terraform via Homebrew.

## Fora de escopo

- Formulário/backend de contato (CTA é mailto)
- Billing, telemetria, analytics de marketing
- Blog/CMS
