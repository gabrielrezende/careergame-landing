# careergame-landing

Landing institucional do **CareerGame** — publicada em `https://careergame.com.br` como site
estático via **Google Cloud Storage + Cloud Load Balancing + Cloud CDN + SSL gerenciado +
Cloud DNS**, provisionado com **Terraform**.

## Estrutura

```
site/      conteúdo estático (index.html, styles.css, main.js, assets/)
infra/     Terraform (GCS + Load Balancer HTTPS + Cloud CDN + ACM gerenciado + Cloud DNS)
deploy.sh  sync do site/ para o GCS + invalidação do Cloud CDN
```

## Pré-requisitos

- `gcloud` CLI autenticado (`gcloud auth login` + `application-default login`).
- Projeto GCP com **faturamento habilitado** (necessário para o Load Balancer).
- Terraform ≥ 1.6.
- Domínio `careergame.com.br` no registrador (Registro.br).

Passo a passo completo de configuração: **[infra/README.md](infra/README.md)**.

## Deploy (resumo)

O certificado SSL só valida após o domínio ser delegado ao Cloud DNS → provisionamento em
**duas fases**.

```bash
# Fase A — criar a zona DNS e obter os nameservers
make zone
# → delegar os nameservers no Registro.br, aguardar propagação (dig +short NS careergame.com.br)

# Fase B — bucket + Load Balancer + CDN + SSL + DNS
make apply

# Publicar o conteúdo
./deploy.sh
```

O `www` faz 301 para o apex. O HTTPS no domínio fica disponível quando o certificado
gerenciado vira `ACTIVE` (~15–60 min após o DNS resolver).

## Atualizar o site

Edite os arquivos em `site/` e rode:

```bash
./deploy.sh
```

## Destruir tudo

```bash
make destroy
```
