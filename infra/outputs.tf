output "nameservers" {
  description = "Set these 4 nameservers at your domain registrar (Registro.br) to delegate DNS to Route 53."
  value       = aws_route53_zone.main.name_servers
}

output "bucket_name" {
  description = "S3 bucket that stores the site content."
  value       = aws_s3_bucket.site.bucket
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID (used for cache invalidation)."
  value       = aws_cloudfront_distribution.cdn.id
}

output "cloudfront_domain" {
  description = "CloudFront default domain (works before DNS delegation)."
  value       = aws_cloudfront_distribution.cdn.domain_name
}

output "website_url" {
  description = "Final site URL once DNS is delegated."
  value       = "https://${var.domain_name}"
}
