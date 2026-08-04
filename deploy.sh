#!/usr/bin/env bash
# Publica o conteúdo estático (site/) no bucket GCS e invalida o cache do Cloud CDN.
# Requer a infra já aplicada (ver infra/README.md).
set -euo pipefail
cd "$(dirname "$0")"

BUCKET=$(terraform -chdir=infra output -raw bucket_name)
URLMAP=$(terraform -chdir=infra output -raw url_map_name)

echo "→ Sincronizando site/ para gs://$BUCKET"
gcloud storage rsync site/ "gs://$BUCKET" \
  --recursive \
  --delete-unmatched-destination-objects

echo "→ Invalidando cache do Cloud CDN ($URLMAP)"
gcloud compute url-maps invalidate-cdn-cache "$URLMAP" --path "/*" --async

echo "✓ Publicado. https://careergame.com.br (aguarde DNS/cert/cache se recém-criado)"
