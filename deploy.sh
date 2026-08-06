#!/usr/bin/env bash
# Publish the static content (site/) to S3 and invalidate the CloudFront cache.
# Requires the infra to be applied already (see README.md).
set -euo pipefail
cd "$(dirname "$0")"

BUCKET=$(terraform -chdir=infra output -raw s3_bucket_name)
DIST=$(terraform -chdir=infra output -raw cloudfront_distribution_id)

echo "→ Syncing site/ to s3://$BUCKET"
aws s3 sync site/ "s3://$BUCKET" --delete

echo "→ Invalidating CloudFront cache ($DIST)"
aws cloudfront create-invalidation --distribution-id "$DIST" --paths "/*" >/dev/null

echo "✓ Published. https://careergame.com.br (allow DNS/cache to propagate if just created)"
