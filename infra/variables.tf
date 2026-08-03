variable "region" {
  description = "AWS region. Keep us-east-1 — CloudFront requires the ACM cert there."
  type        = string
  default     = "us-east-1"
}

variable "domain_name" {
  description = "Apex domain for the landing page."
  type        = string
  default     = "careergame.com.br"
}

variable "project" {
  description = "Name/tag prefix for resources."
  type        = string
  default     = "careergame-landing"
}

variable "price_class" {
  description = "CloudFront price class. PriceClass_100 = US/EU (cheapest)."
  type        = string
  default     = "PriceClass_100"
}
