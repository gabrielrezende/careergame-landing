TF := terraform -chdir=infra

.PHONY: init fmt validate plan apply outputs deploy destroy

init:
	$(TF) init

fmt:
	$(TF) fmt -recursive

validate:
	$(TF) validate

plan:
	$(TF) plan

apply:
	$(TF) apply

outputs:
	$(TF) output

deploy:
	@BUCKET=$$($(TF) output -raw s3_bucket_name); \
	DIST=$$($(TF) output -raw cloudfront_distribution_id); \
	echo "Sync -> s3://$$BUCKET"; \
	aws s3 sync site/ s3://$$BUCKET --delete; \
	echo "Invalidating CloudFront $$DIST"; \
	aws cloudfront create-invalidation --distribution-id $$DIST --paths '/*' >/dev/null; \
	echo "OK. https://$$($(TF) output -raw cloudfront_domain_name) (and https://careergame.com.br after DNS)"

destroy:
	@BUCKET=$$($(TF) output -raw s3_bucket_name 2>/dev/null); \
	if [ -n "$$BUCKET" ]; then echo "Emptying s3://$$BUCKET"; aws s3 rm s3://$$BUCKET --recursive || true; fi; \
	$(TF) destroy
