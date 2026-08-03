#!/usr/bin/env bash
# Publica o conteúdo estático no S3 e invalida o cache do CloudFront.
# Requer que a infra já esteja aplicada (infra/README.md, Fase B).
set -euo pipefail
cd "$(dirname "$0")"

BUCKET=$(terraform -chdir=infra output -raw bucket_name)
DIST=$(terraform -chdir=infra output -raw cloudfront_distribution_id)

echo "→ Sincronizando conteúdo para s3://$BUCKET"
aws s3 sync . "s3://$BUCKET" \
  --delete \
  --exclude ".git/*" \
  --exclude ".gitignore" \
  --exclude ".claude/*" \
  --exclude "infra/*" \
  --exclude "docs/*" \
  --exclude "deploy.sh" \
  --exclude "README.md" \
  --exclude "*.tfstate*"

echo "→ Invalidando cache do CloudFront ($DIST)"
aws cloudfront create-invalidation --distribution-id "$DIST" --paths "/*" >/dev/null

echo "✓ Publicado. https://careergame.com.br (propague DNS/cache se recém-criado)"
