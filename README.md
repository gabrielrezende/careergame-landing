# careergame-landing

Landing institucional do **CareerGame**, posicionada para captar **Founding Design Partners**.
Site estático pensado para `https://careergame.com.br` na **AWS**: bucket **S3 privado** atrás
do **CloudFront (OAC)** com **HTTPS/ACM** e **Route53**, provisionado com **Terraform** (`us-east-1`).

> **Estado (out/2026): não está publicada.** O Terraform em `infra/` nunca foi aplicado (state
> vazio): não existem bucket, distribuição, certificado nem zona Route53 da careergame na conta.
> O projeto GCP antigo (`careergame-504500`) foi enviado para exclusão em 2026-10-04. Para
> publicar, siga o deploy abaixo do zero.

## Estrutura

```
site/          conteúdo estático (index.html, styles.css, main.js, assets/)
infra/         Terraform (S3 privado + CloudFront/OAC + ACM + Route53)
deploy.sh      aws s3 sync + invalidação do CloudFront
Makefile       atalhos (init/plan/apply/deploy/destroy)
docs/          estudo de negócio e estratégia (docs/estrategia/) + spec da landing
.gcp-legacy/   config Firebase antiga (fallback, fora do git) — não usada
```

Ver o índice da estratégia em [`docs/estrategia/README.md`](docs/estrategia/README.md).

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
