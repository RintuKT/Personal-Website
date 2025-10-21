# Custom Domain Setup Guide: rintu.co with Netlify

This guide will help you connect your GoDaddy domain (rintu.co) to your Netlify site.

## Current Status
- ✅ Website deployed on Netlify: https://rintuwebsite.netlify.app/
- ✅ Domain purchased from GoDaddy: rintu.co
- ⏳ Pending: Domain connection configuration

## Step 1: Add Custom Domain in Netlify

1. Log in to your Netlify account at https://app.netlify.com
2. Navigate to your site (rintuwebsite)
3. Click on **"Domain settings"** in the top menu
4. Under "Custom domains" section, click **"Add custom domain"**
5. Enter: `rintu.co`
6. Click **"Verify"** then **"Add domain"**
7. Netlify will ask if you own this domain - click **"Yes, add domain"**

### Add www subdomain (Recommended)
8. Click **"Add domain alias"**
9. Enter: `www.rintu.co`
10. Click **"Add domain"**

## Step 2: Get Netlify DNS Records

After adding the domain, Netlify will show you the DNS records you need to configure. You'll see something like:

**For apex domain (rintu.co):**
- Type: A Record
- Name: @ (or leave blank)
- Value: `75.2.60.5`

**Alternative (CNAME for apex):**
- Type: ALIAS/ANAME Record
- Name: @ (or leave blank)
- Value: `apex-loadbalancer.netlify.com`

**For www subdomain (www.rintu.co):**
- Type: CNAME
- Name: www
- Value: `rintuwebsite.netlify.app`

## Step 3: Configure DNS in GoDaddy

### Access GoDaddy DNS Management

1. Log in to your GoDaddy account at https://www.godaddy.com
2. Click on your account name (top right) → **"My Products"**
3. Find your domain **rintu.co** and click **"DNS"** button next to it

### Configure DNS Records

#### Method 1: Using A Record (Recommended for GoDaddy)

**Remove existing records first:**
- Delete any existing A records pointing to parked pages
- Delete any existing CNAME records for @ or www (if they conflict)

**Add new A Record for apex domain:**
1. Click **"Add"** button
2. Select **"A"** as type
3. In "Name" field: enter `@` (this represents rintu.co)
4. In "Value" field: enter `75.2.60.5`
5. TTL: 600 seconds (or default)
6. Click **"Save"**

**Add CNAME for www subdomain:**
1. Click **"Add"** button
2. Select **"CNAME"** as type
3. In "Name" field: enter `www`
4. In "Value" field: enter `rintuwebsite.netlify.app`
5. TTL: 3600 seconds (or default)
6. Click **"Save"**

#### Method 2: Using Netlify DNS (Alternative - More Advanced)

If you prefer Netlify to manage your DNS entirely:

1. In Netlify, under Domain settings, click **"Use Netlify DNS"**
2. Netlify will provide you with nameserver addresses like:
   - `dns1.p03.nsone.net`
   - `dns2.p03.nsone.net`
   - `dns3.p03.nsone.net`
   - `dns4.p03.nsone.net`

3. In GoDaddy DNS Management:
   - Scroll to the "Nameservers" section
   - Click **"Change"**
   - Select **"Custom"**
   - Enter Netlify's nameservers
   - Click **"Save"**

**Note:** Using Netlify DNS is simpler but means all DNS management moves to Netlify.

## Step 4: Verification and SSL Setup

### Wait for DNS Propagation
- DNS changes can take 24-48 hours to propagate fully
- Usually takes 1-4 hours for most of the world
- You can check propagation status at: https://www.whatsmydns.net/

### Verify in Netlify
1. Return to Netlify → Domain settings
2. You should see your domain with a status indicator
3. Once DNS is verified, Netlify will automatically provision an SSL certificate
4. This usually takes a few minutes after DNS propagation

### Check Domain Status
Your domain status in Netlify will show:
- ⏳ **"Awaiting external DNS"** - DNS not propagated yet
- ✅ **"Netlify DNS"** or **"External DNS"** - Successfully connected
- 🔒 **"HTTPS"** enabled - SSL certificate active

## Step 5: Test Your Domain

Once setup is complete:

1. Visit `http://rintu.co` - should redirect to HTTPS and show your site
2. Visit `http://www.rintu.co` - should redirect to HTTPS and show your site
3. Visit `https://rintu.co` - should show your site with SSL
4. Visit `https://www.rintu.co` - should show your site with SSL

## Recommended DNS Configuration Summary

Here's the final DNS configuration you should have in GoDaddy:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 75.2.60.5 | 600 |
| CNAME | www | rintuwebsite.netlify.app | 3600 |

## Troubleshooting

### Domain not connecting after 24 hours
- Verify DNS records in GoDaddy are exactly as specified
- Check for typos in CNAME values
- Ensure no conflicting records exist
- Try flushing your DNS cache: `ipconfig /flushdns` (Windows) or `sudo dscacheutil -flushcache` (Mac)

### SSL certificate not provisioning
- Wait for DNS to fully propagate first
- Ensure both apex and www domains are added in Netlify
- Try clicking "Verify DNS configuration" in Netlify
- Contact Netlify support if issue persists after 48 hours

### Website shows "Site not found" error
- Check that your Netlify site is still deployed
- Verify domain is added correctly in Netlify
- Confirm DNS records point to correct values

### Mixed content warnings
- Ensure all resources in your HTML use HTTPS or relative URLs
- Check browser console for specific issues

## Additional Tips

1. **Set up domain redirect:** In Netlify, you can configure whether www.rintu.co redirects to rintu.co or vice versa
2. **Email forwarding:** If you need email@rintu.co, set this up in GoDaddy's Email Forwarding section
3. **Backup:** Keep a screenshot of your working DNS configuration
4. **Monitor:** Use Netlify's analytics to track your domain's performance

## Support Resources

- **Netlify Documentation:** https://docs.netlify.com/domains-https/custom-domains/
- **GoDaddy DNS Help:** https://www.godaddy.com/help/manage-dns-680
- **DNS Checker:** https://www.whatsmydns.net/
- **SSL Checker:** https://www.ssllabs.com/ssltest/

## Timeline

- **Immediate:** Add domain in Netlify (5 minutes)
- **5-10 minutes:** Configure DNS records in GoDaddy
- **1-4 hours:** DNS propagation (typical)
- **5-10 minutes:** SSL certificate provisioning (after DNS propagates)
- **Total:** Usually 2-6 hours for complete setup

---

**Current Netlify Site:** https://rintuwebsite.netlify.app/
**Target Custom Domain:** https://rintu.co
**GitHub Repository:** https://github.com/RintuKT/Personal-Website.git

Good luck with your domain setup! If you encounter any issues, refer to the troubleshooting section above.