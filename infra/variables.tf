variable "domain_name" {
  type        = string
  default     = "careergame.com.br"
  description = "Apex domain of the landing (canonical apex)."
}

variable "tags" {
  type = map(string)
  default = {
    Project   = "careergame-landing"
    ManagedBy = "terraform"
  }
}
