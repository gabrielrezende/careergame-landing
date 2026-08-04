# ---------------------------------------------------------------------------
# Cloud DNS managed zone + A records pointing apex & www to the load balancer.
#
# Phase A: `terraform apply -target=google_dns_managed_zone.zone` then delegate
# the nameservers (output `nameservers`) at Registro.br. See infra/README.md.
# ---------------------------------------------------------------------------
resource "google_dns_managed_zone" "zone" {
  name        = replace(var.domain_name, ".", "-")
  dns_name    = "${var.domain_name}."
  description = "CareerGame landing page"
}

resource "google_dns_record_set" "apex" {
  name         = "${var.domain_name}."
  managed_zone = google_dns_managed_zone.zone.name
  type         = "A"
  ttl          = 300
  rrdatas      = [google_compute_global_address.ip.address]
}

resource "google_dns_record_set" "www" {
  name         = "www.${var.domain_name}."
  managed_zone = google_dns_managed_zone.zone.name
  type         = "A"
  ttl          = 300
  rrdatas      = [google_compute_global_address.ip.address]
}
