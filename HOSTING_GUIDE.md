# Hosting Guide for rintu.co

This guide will help you deploy your personal website to rintu.co domain.

## Prerequisites

1. **Domain Ownership**: Ensure you own the domain `rintu.co`
   - If not purchased yet, buy from: GoDaddy, Namecheap, Google Domains, etc.
   - Cost: Typically $10-15/year

2. **Website Files**: You already have all necessary files in this project

## Recommended Hosting Options

### Option 1: Netlify (Recommended - Free & Easy)

**Why Netlify?**
- Free hosting for static sites
- Automatic HTTPS/SSL
- Global CDN for fast loading
- Easy custom domain setup
- Continuous deployment from Git

**Steps:**

1. **Create Netlify Account**
   - Go to [netlify.com](https://www.netlify.com/)
   - Sign up for free (use GitHub, GitLab, or email)

2. **Deploy Your Site**
   
   **Method A: Drag & Drop (Easiest)**
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag your entire website folder
   - Site goes live instantly with a random URL (e.g., `random-name-12345.netlify.app`)

   **Method B: Git Integration (Better for updates)**
   - Push your code to GitHub:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git branch -M main
     git remote add origin https://github.com/yourusername/portfolio.git
     git push -u origin main
     ```
   - In Netlify, click "New site from Git"
   - Connect your GitHub repository
   - Deploy settings: Leave defaults (Netlify auto-detects static sites)
   - Click "Deploy site"

3. **Connect Custom Domain (rintu.co)**
   - In your Netlify site dashboard, go to "Domain settings"
   - Click "Add custom domain"
   - Enter `rintu.co`
   - Netlify will provide DNS records

4. **Configure DNS**
   - Go to your domain registrar (where you bought rintu.co)
   - Find DNS settings
   - Add these records (Netlify will provide exact values):
     ```
     Type: A
     Name: @
     Value: 75.2.60.5 (Netlify's load balancer IP)

     Type: CNAME
     Name: www
     Value: your-site-name.netlify.app
     ```
   - Save changes
   - Wait 24-48 hours for DNS propagation

5. **Enable HTTPS**
   - Netlify automatically provisions SSL certificate
   - Your site will be secure at `https://rintu.co`

**Cost:** FREE ✅

---

### Option 2: Vercel (Also Excellent & Free)

**Steps:**

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com/)
   - Sign up with GitHub

2. **Deploy**
   - Click "New Project"
   - Import your Git repository
   - Click "Deploy"

3. **Add Custom Domain**
   - Go to Project Settings → Domains
   - Add `rintu.co`
   - Configure DNS as instructed

**Cost:** FREE ✅

---

### Option 3: GitHub Pages (Free but requires GitHub)

**Steps:**

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/RintuKT/rintu.co.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch `main`
   - Folder: `/ (root)`
   - Save

3. **Configure Custom Domain**
   - In GitHub Pages settings, add custom domain: `rintu.co`
   - Create a file named `CNAME` in your repository root with content: `rintu.co`

4. **DNS Configuration**
   - In your domain registrar, add these A records:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

**Cost:** FREE ✅

---

### Option 4: Traditional Hosting (Paid)

If you prefer traditional hosting:

**Popular Providers:**
- Hostinger (~$2/month)
- Bluehost (~$3/month)
- SiteGround (~$4/month)

**Steps:**
1. Purchase hosting plan
2. Upload files via FTP/cPanel File Manager
3. Point domain to hosting nameservers

**Cost:** $2-10/month 💰

---

## Quick Start Deployment (5 Minutes)

**Fastest method using Netlify:**

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag your website folder
3. Your site is live!
4. Add custom domain in settings
5. Configure DNS with your registrar

---

## DNS Configuration Details

### What DNS Records to Add:

**For Netlify/Vercel:**
```
Type: A
Name: @
Value: [Provided by hosting service]

Type: CNAME  
Name: www
Value: [your-site].netlify.app (or vercel.app)
```

**For GitHub Pages:**
```
Type: A
Name: @
Values:
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153

Type: CNAME
Name: www
Value: rintukti.github.io
```

### Where to Configure DNS:

1. Log into your domain registrar (GoDaddy, Namecheap, etc.)
2. Find "DNS Management" or "DNS Settings"
3. Add/modify the records above
4. Save changes
5. Wait for propagation (usually 1-24 hours)

---

## Verification Checklist

After deployment:

- [ ] Website loads at temporary URL
- [ ] All pages and links work
- [ ] Images and resources load correctly
- [ ] Mobile responsive design works
- [ ] Contact form functions properly
- [ ] Custom domain configured
- [ ] DNS records added
- [ ] HTTPS/SSL enabled
- [ ] www redirect works
- [ ] Test on multiple devices

---

## Troubleshooting

### Site not loading after DNS change:
- DNS changes take time (24-48 hours maximum)
- Clear browser cache
- Try different browser/incognito mode
- Check DNS propagation: [whatsmydns.net](https://www.whatsmydns.net/)

### HTTPS not working:
- Wait a few minutes for SSL certificate provisioning
- Make sure you enabled HTTPS in hosting settings
- Check that DNS is fully propagated

### Images not loading:
- Check file paths are relative (not absolute)
- Verify files are uploaded correctly
- Check browser console for errors

---

## Recommended: Netlify CLI Deployment

For developers comfortable with command line:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod

# Follow prompts to connect domain
```

---

## Next Steps After Deployment

1. **Add Analytics**
   - Google Analytics
   - Netlify Analytics (built-in)

2. **Set up Email**
   - Use Google Workspace for professional email (rintu@rintu.co)
   - Or use email forwarding to your Gmail

3. **Monitor Performance**
   - Use Google PageSpeed Insights
   - Test on various devices

4. **SEO Optimization**
   - Submit sitemap to Google Search Console
   - Add meta descriptions
   - Optimize images

---

## Support

If you need help:
- Netlify Docs: [docs.netlify.com](https://docs.netlify.com/)
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- GitHub Pages: [pages.github.com](https://pages.github.com/)

---

## Cost Summary

| Option | Cost | Effort | Speed | Best For |
|--------|------|--------|-------|----------|
| Netlify | FREE | Low | Fast | Most users ⭐ |
| Vercel | FREE | Low | Fast | Developers |
| GitHub Pages | FREE | Medium | Medium | GitHub users |
| Traditional | $2-10/mo | High | Medium | Enterprise |

**Recommendation:** Start with Netlify for the best balance of features, ease of use, and cost (free!).

---

Good luck with your deployment! 🚀