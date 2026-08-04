variable "project_id" {
  description = "GCP project ID that will host the landing page (billing must be enabled)."
  type        = string
}

variable "region" {
  description = "Default region for the provider (the load balancer itself is global)."
  type        = string
  default     = "us-central1"
}

variable "bucket_location" {
  description = "Location for the GCS bucket. 'US' = multi-region (recommended)."
  type        = string
  default     = "US"
}

variable "domain_name" {
  description = "Apex domain for the landing page."
  type        = string
  default     = "careergame.com.br"
}

variable "name_prefix" {
  description = "Prefix used to name resources."
  type        = string
  default     = "careergame-landing"
}
