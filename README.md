# careergame-landing

Landing institucional do **CareerGame** — publicada em `https://careergame.com.br` como site
estático na **AWS**: bucket **S3 privado** atrás do **CloudFront (OAC)** com **HTTPS/ACM** e
**Route53**, provisionado com **Terraform** (`us-east-1`).

## Estrutura

```
site/          conteúdo estático (index.html, styles.css, main.js, assets/)
infra/         Terraform (S3 privado + CloudFront/OAC + ACM + Route53)
deploy.sh      aws s3 sync + invalidação do CloudFront
.gcp-legacy/   config Firebase antiga (fallback) — não usada
.aws-legacy/   state AWS de uma migração anterior — só referência
```

## Pré-requisitos

- AWS CLI configurada (`aws configure`) na conta certa, região `us-east-1`.
- Terraform ≥ 1.6.
- Domínio `careergame.com.br` no Registro.br.

## Deploy (2 fases — o ACM só valida após delegar o DNS ao Route53)

```bash
terraform -chdir=infra init
```

**Fase A — criar a zona e pegar os nameservers:**

```bash
terraform -chdir=infra apply -target=aws_route53_zone.this
terraform -chdir=infra output route53_nameservers
```

Cadastre os **4 nameservers** no Registro.br. Aguarde a propagação:

```bash
dig +short NS careergame.com.br   # deve retornar os awsdns-*
```

**Fase B — aplicar o resto (ACM valida, CloudFront sobe):**

```bash
terraform -chdir=infra apply
./deploy.sh
```

O `www` faz 301 para o apex (CloudFront Function). Acesse `https://careergame.com.br`.

## Atualizar o site

Edite `site/` e rode `./deploy.sh`.

## Destruir

```bash
make destroy
```
