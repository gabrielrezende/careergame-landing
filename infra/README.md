# Infra — CareerGame Landing (Terraform / GCP)

Provisiona no **Google Cloud**: **GCS** (bucket estático) + **Cloud Load Balancing**
(HTTPS externo global) + **Cloud CDN** + **SSL gerenciado** (Google) + **Cloud DNS**,
servindo a landing em `https://careergame.com.br`.

Equivalente GCP da arquitetura AWS (S3 + CloudFront + ACM + Route53).

> **Custo:** o Load Balancer global tem um custo fixo de ~US$18/mês (regra de
> encaminhamento) + egress do CDN. O bucket e o Cloud DNS são centavos.

---

## 0. Pré-requisitos (uma vez)

### a) Ferramentas
- `terraform` >= 1.6
- `gcloud` CLI (instalado em `/opt/homebrew/share/google-cloud-sdk/bin`)

Se o `gcloud` não estiver no PATH, adicione ao seu shell:
```bash
echo 'export PATH="/opt/homebrew/share/google-cloud-sdk/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

### b) Projeto GCP com billing
Crie (ou escolha) um projeto e **habilite o faturamento** (obrigatório para o Load Balancer):
```bash
gcloud projects create careergame-landing --name="CareerGame Landing"   # ou use um existente
# vincule uma conta de faturamento no console: https://console.cloud.google.com/billing
```

### c) Autenticação
```bash
gcloud auth login                       # login da sua conta Google
gcloud auth application-default login   # credenciais que o Terraform usa (ADC)
gcloud config set project SEU_PROJECT_ID
```

### d) Habilitar as APIs
```bash
gcloud services enable compute.googleapis.com dns.googleapis.com storage.googleapis.com
```

### e) Definir o projeto no Terraform
```bash
cd infra
cp terraform.tfvars.example terraform.tfvars
# edite terraform.tfvars e coloque o seu project_id
```

---

## Deploy em duas fases

Igual à AWS: o certificado SSL só valida depois que o domínio estiver delegado ao
Cloud DNS. Por isso separamos em duas fases.

### Fase A — criar a zona DNS e delegar o domínio
```bash
cd infra
terraform init
terraform apply -target=google_dns_managed_zone.zone
terraform output nameservers
```
Isso imprime os nameservers do Google (ex.: `ns-cloud-XX.googledomains.com.`).

**No Registro.br**, em `careergame.com.br` → Servidores DNS, **substitua os 4 NS da AWS**
(`*.awsdns-*`) pelos do Google. Aguarde a propagação:
```bash
dig +short NS careergame.com.br @8.8.8.8
# pronto quando retornar os *.googledomains.com
```

### Fase B — bucket + Load Balancer + CDN + SSL + registros DNS
```bash
terraform apply
```
Cria tudo. O **certificado gerenciado** entra como `PROVISIONING` e vira `ACTIVE`
sozinho em ~15–60 min (depois que o DNS resolve para o IP do balanceador).
Acompanhe:
```bash
gcloud compute ssl-certificates describe careergame-landing-cert \
  --global --format="value(managed.status)"
```

---

## Publicar o conteúdo
Na raiz do repositório:
```bash
./deploy.sh
```
Faz `gcloud storage rsync` do `site/` e invalida o cache do Cloud CDN.

> O site responde no IP do balanceador assim que o LB sobe; o **HTTPS no domínio**
> só funciona quando o certificado estiver `ACTIVE`.

---

## Outputs úteis
| Output | Descrição |
|--------|-----------|
| `nameservers` | NS do Cloud DNS para delegar no Registro.br |
| `load_balancer_ip` | IP global (destino dos registros A) |
| `bucket_name` | Bucket GCS do conteúdo |
| `url_map_name` | URL map (usado na invalidação de cache) |
| `website_url` | `https://careergame.com.br` |

## Destruir
```bash
make destroy   # ou: terraform -chdir=infra destroy
```

## Diferenças vs AWS (para referência)
- Não há equivalente ao **OAC**: o bucket GCS fica com leitura pública (`allUsers`).
  Para uma landing pública, isso é o esperado.
- O redirect **www → apex** é feito por um `url_map` do LB (na AWS era uma CloudFront Function).
- SSL gerenciado do Google renova sozinho, como o ACM.
