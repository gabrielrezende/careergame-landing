output "route53_nameservers" {
  description = "Register these 4 NS at the registrar for the apex domain."
  value       = aws_route53_zone.this.name_servers
}

output "cloudfront_domain_name" {
  value = aws_cloudfront_distribution.this.domain_name
}

output "cloudfront_distribution_id" {
  value = aws_cloudfront_distribution.this.id
}

output "s3_bucket_name" {
  value = aws_s3_bucket.site.bucket
}
