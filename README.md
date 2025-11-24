# Portfolio Website - AWS Deployment

A fully responsive personal portfolio website deployed on AWS using S3 and CloudFront CDN for global content delivery.

## 🔗 Live Demo

**Production URL:** https://dv3cftq45fa4e.cloudfront.net

## 🏗️ Architecture

```
User Request
     ↓
CloudFront (CDN)
     ↓
Edge Location (Cached Content)
     ↓
S3 Bucket (Origin)
```

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Tailwind CSS
- JavaScript (ES6+)

**Infrastructure:**
- AWS S3 (Static website hosting)
- AWS CloudFront (Content Delivery Network)
- AWS IAM (Bucket policies)

## ☁️ AWS Services Used

### Amazon S3
- Configured for static website hosting
- Public bucket policy for content access
- Stores all website assets (HTML, CSS, JS, images)

### Amazon CloudFront
- Global CDN with 450+ edge locations
- HTTPS/SSL encryption enabled
- Optimized cache behaviors for performance
- Default root object configured (`index.html`)

## 🚀 Deployment Process

### 1. Build the React Application
```bash
npm run build
```

### 2. Create S3 Bucket
- Bucket name: `ryne-portfolio-website`
- Region: `us-east-1` (N. Virginia)
- Static website hosting enabled

### 3. Configure S3 Bucket Policy
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::ryne-portfolio-website/*"
        }
    ]
}
```

### 4. Upload Build Files to S3
```bash
aws s3 sync build/ s3://ryne-portfolio-website --delete
```

### 5. Create CloudFront Distribution
- Origin: S3 website endpoint
- Viewer protocol policy: Redirect HTTP to HTTPS
- Cache policy: CachingOptimized
- Default root object: `index.html`
- Price class: Use all edge locations

### 6. Wait for Deployment
CloudFront deployment typically takes 10-15 minutes to propagate to all edge locations globally.

## 📊 Performance Benefits

| Feature | Without CloudFront | With CloudFront |
|---------|-------------------|-----------------|
| Protocol | HTTP only | HTTPS (Secure) |
| Global Speed | Single region (slow) | 450+ edge locations (fast) |
| Caching | None | Intelligent caching |
| Cost | Higher data transfer | Reduced S3 requests |

## 🔄 Updating the Website

When you make changes to your website:

1. **Build the updated code:**
   ```bash
   npm run build
   ```

2. **Upload to S3:**
   ```bash
   aws s3 sync build/ s3://ryne-portfolio-website --delete
   ```

3. **Invalidate CloudFront cache:**
   ```bash
   aws cloudfront create-invalidation \
     --distribution-id E11SXM3VL5VF9U \
     --paths "/*"
   ```

## 💰 Cost Analysis

**Monthly Costs (estimated):**
- S3 Storage: $0.00 (within free tier - 5GB included)
- S3 Requests: $0.00 (within free tier - 20,000 GET requests)
- CloudFront: $0.00 (within free tier - 1TB transfer, 10M requests for 12 months)

**After free tier:** Approximately $0.50 - $2.00/month for personal portfolio traffic

## 🔐 Security Features

- ✅ HTTPS encryption via CloudFront
- ✅ Restricted S3 bucket access through IAM policies
- ✅ Public access only to website content
- ✅ AWS Shield Standard (DDoS protection) included with CloudFront

## 📈 What I Learned

- Configuring S3 for static website hosting
- Understanding origin vs edge location architecture
- Setting up CloudFront distributions and cache behaviors
- Managing IAM policies for S3 bucket access
- Implementing HTTPS for secure connections
- Cache invalidation strategies
- AWS Free Tier optimization

## 🎯 DevOps Skills Demonstrated

- Cloud infrastructure setup (AWS)
- Content Delivery Network (CDN) configuration
- Static website deployment
- Infrastructure documentation
- Security best practices (HTTPS, IAM policies)
- Cost optimization strategies

## 🔮 Future Enhancements

- [ ] Add custom domain with Route 53
- [ ] Implement CI/CD pipeline with GitHub Actions
- [ ] Add CloudWatch monitoring and alerts
- [ ] Set up automated cache invalidation on deployments
- [ ] Configure AWS Certificate Manager for custom SSL
- [ ] Add CloudFront Functions for dynamic routing

## 📚 Resources Used

- [AWS S3 Static Website Hosting Documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
- [AWS CloudFront Developer Guide](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
- [AWS Free Tier Information](https://aws.amazon.com/free/)

## 👤 Author

**Ryne Mbuthia**
- LinkedIn: www.linkedin.com/in/ryne-mbuthia-0b3413219
- GitHub: https://github.com/Mbuthiasakara1
- Portfolio: https://dv3cftq45fa4e.cloudfront.net

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

