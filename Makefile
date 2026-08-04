TF := terraform -chdir=infra

.PHONY: init fmt validate plan zone apply outputs deploy destroy

init:
	$(TF) init

fmt:
	$(TF) fmt -recursive

validate:
	$(TF) validate

plan:
	$(TF) plan

# Phase A: create only the Cloud DNS zone, then delegate the nameservers.
zone:
	$(TF) apply -target=google_dns_managed_zone.zone
	@echo "Set these nameservers at Registro.br:"; $(TF) output nameservers

# Phase B: create the bucket, load balancer, CDN, cert and DNS records.
apply:
	$(TF) apply

outputs:
	$(TF) output

deploy:
	@BUCKET=$$($(TF) output -raw bucket_name); \
	URLMAP=$$($(TF) output -raw url_map_name); \
	echo "Sync -> gs://$$BUCKET"; \
	gcloud storage rsync site/ gs://$$BUCKET --recursive --delete-unmatched-destination-objects; \
	echo "Invalidating Cloud CDN $$URLMAP"; \
	gcloud compute url-maps invalidate-cdn-cache $$URLMAP --path '/*' --async; \
	echo "OK. https://careergame.com.br"

destroy:
	$(TF) destroy
