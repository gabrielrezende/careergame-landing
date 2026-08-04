output "nameservers" {
  description = "Cloud DNS nameservers. Set these at Registro.br (replacing the AWS ones)."
  value       = google_dns_managed_zone.zone.name_servers
}

output "load_balancer_ip" {
  description = "Global static IP the domain points to."
  value       = google_compute_global_address.ip.address
}

output "bucket_name" {
  description = "GCS bucket holding the site content."
  value       = google_storage_bucket.site.name
}

output "url_map_name" {
  description = "HTTPS URL map name (used for Cloud CDN cache invalidation)."
  value       = google_compute_url_map.https.name
}

output "website_url" {
  description = "Final site URL once DNS is delegated and the cert is ACTIVE."
  value       = "https://${var.domain_name}"
}
