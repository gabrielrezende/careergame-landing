# ---------------------------------------------------------------------------
# GCS bucket holding the static site.
#
# Note: unlike AWS CloudFront + OAC, a GCS backend bucket behind an HTTPS Load
# Balancer has no "private origin" mode — objects must be publicly readable.
# For a public landing page this is expected and fine.
# ---------------------------------------------------------------------------
resource "google_storage_bucket" "site" {
  name                        = "${var.name_prefix}-${var.project_id}"
  location                    = var.bucket_location
  force_destroy               = true
  uniform_bucket_level_access = true

  website {
    main_page_suffix = "index.html"
    not_found_page   = "index.html" # single-page: serve index.html on 404
  }
}

resource "google_storage_bucket_iam_member" "public_read" {
  bucket = google_storage_bucket.site.name
  role   = "roles/storage.objectViewer"
  member = "allUsers"
}
