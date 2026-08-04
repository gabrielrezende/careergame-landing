# ---------------------------------------------------------------------------
# Global external HTTPS Load Balancer + Cloud CDN + Google-managed SSL.
# Mirrors the AWS CloudFront + ACM setup.
# ---------------------------------------------------------------------------

# Reserved global static IP — this is what the DNS A records point to.
resource "google_compute_global_address" "ip" {
  name = "${var.name_prefix}-ip"
}

# Backend bucket with Cloud CDN enabled.
resource "google_compute_backend_bucket" "site" {
  name        = "${var.name_prefix}-backend"
  bucket_name = google_storage_bucket.site.name
  enable_cdn  = true

  cdn_policy {
    cache_mode        = "CACHE_ALL_STATIC"
    client_ttl        = 3600
    default_ttl       = 3600
    max_ttl           = 86400
    negative_caching  = true
    serve_while_stale = 86400
  }
}

# Google-managed certificate (apex + www). Provisions automatically once the
# domain resolves to the load balancer IP — can take 15–60 min to go ACTIVE.
resource "google_compute_managed_ssl_certificate" "cert" {
  name = "${var.name_prefix}-cert"

  managed {
    domains = [var.domain_name, "www.${var.domain_name}"]
  }
}

# HTTPS URL map: serve the bucket, redirect www -> apex (apex is canonical).
resource "google_compute_url_map" "https" {
  name            = "${var.name_prefix}-https"
  default_service = google_compute_backend_bucket.site.id

  host_rule {
    hosts        = ["www.${var.domain_name}"]
    path_matcher = "www-redirect"
  }

  path_matcher {
    name = "www-redirect"
    default_url_redirect {
      host_redirect          = var.domain_name
      redirect_response_code = "MOVED_PERMANENTLY_DEFAULT"
      https_redirect         = true
      strip_query            = false
    }
  }
}

resource "google_compute_target_https_proxy" "https" {
  name             = "${var.name_prefix}-https-proxy"
  url_map          = google_compute_url_map.https.id
  ssl_certificates = [google_compute_managed_ssl_certificate.cert.id]
}

resource "google_compute_global_forwarding_rule" "https" {
  name                  = "${var.name_prefix}-https-fr"
  target                = google_compute_target_https_proxy.https.id
  ip_address            = google_compute_global_address.ip.address
  port_range            = "443"
  load_balancing_scheme = "EXTERNAL_MANAGED"
}

# HTTP -> HTTPS redirect.
resource "google_compute_url_map" "http_redirect" {
  name = "${var.name_prefix}-http-redirect"

  default_url_redirect {
    https_redirect         = true
    redirect_response_code = "MOVED_PERMANENTLY_DEFAULT"
    strip_query            = false
  }
}

resource "google_compute_target_http_proxy" "http" {
  name    = "${var.name_prefix}-http-proxy"
  url_map = google_compute_url_map.http_redirect.id
}

resource "google_compute_global_forwarding_rule" "http" {
  name                  = "${var.name_prefix}-http-fr"
  target                = google_compute_target_http_proxy.http.id
  ip_address            = google_compute_global_address.ip.address
  port_range            = "80"
  load_balancing_scheme = "EXTERNAL_MANAGED"
}
