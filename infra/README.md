# Infra — CareerGame Landing (Terraform)

Provisiona: **S3** (privado) + **CloudFront** (CDN, OAC) + **ACM** (SSL) + **Route 53**
(DNS) para servir a landing em `https://careergame.com.br`.

> Região fixa em `us-east-1` — o CloudFront exige o certificado ACM lá.

## Pré-requisitos

- AWS CLI configurada (`aws sts get-caller-identity` deve funcionar)
- Terraform >= 1.5

## Deploy em duas fases

O domínio foi recém-comprado, então os nameservers ainda apontam para o registrador
(Registro.br). O certificado SSL só valida depois que o DNS estiver delegado ao Route 53
— por isso o deploy é feito em duas fases.

### Fase A — criar a hosted zone e delegar o domínio

```bash
cd infra
terraform init
terraform apply -target=aws_route53_zone.main
terraform output nameservers
```

Copie os **4 nameservers** e cadastre-os no painel do **Registro.br** (Editar zona/DNS →
usar servidores DNS próprios). Aguarde a propagação (minutos a algumas horas).

Verifique a delegação antes de seguir:

```bash
dig +short NS careergame.com.br
```

Quando retornar os nameservers da AWS (`*.awsdns-*`), o DNS está delegado.

### Fase B — provisionar o resto (ACM + CloudFront + DNS)

```bash
terraform apply
```

O ACM valida automaticamente (via Route 53), o CloudFront sobe (~5–15 min) e os registros
`A/AAAA` de apex e `www` são criados.

## Publicar o conteúdo

Na raiz do repositório:

```bash
./deploy.sh
```

Faz `aws s3 sync` do site e invalida o cache do CloudFront.

## Outputs úteis

| Output | Descrição |
|--------|-----------|
| `nameservers` | NS do Route 53 para delegar no registrador |
| `cloudfront_domain` | Domínio `*.cloudfront.net` (funciona antes do DNS próprio) |
| `bucket_name` | Bucket S3 do conteúdo |
| `cloudfront_distribution_id` | ID da distribuição (invalidação de cache) |
| `website_url` | `https://careergame.com.br` |

## Destruir

```bash
terraform destroy
```
