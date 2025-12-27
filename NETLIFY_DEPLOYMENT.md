# Netlify Deployment Guide

This guide will help you deploy your portfolio website to Netlify.

## Prerequisites

- A GitHub/GitLab/Bitbucket account
- Your code pushed to a Git repository
- A Netlify account (free tier works perfectly)

## Step-by-Step Deployment

### 1. Push Your Code to Git (if not already done)

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

### 2. Deploy to Netlify

#### Option A: Using Netlify Dashboard (Recommended)

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose your Git provider (GitHub, GitLab, or Bitbucket)
4. Authorize Netlify to access your repositories
5. Select your portfolio repository
6. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Node version:** 18 or higher

7. Click **"Show advanced"** and add environment variables:
   - **Key:** `RESEND_API_KEY`
   - **Value:** `re_916bRyyR_2fJuXbYxqHTirTo2jJybuNyC`

8. Click **"Deploy site"**

#### Option B: Using Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

### 3. Configure Environment Variables

After deployment, verify your environment variables:

1. Go to your site dashboard on Netlify
2. Navigate to **Site settings** → **Environment variables**
3. Ensure `RESEND_API_KEY` is set correctly
4. If you need to update it, click **Edit** and save changes
5. Redeploy your site for changes to take effect

### 4. Custom Domain (Optional)

To use your own domain:

1. In Netlify dashboard, go to **Domain settings**
2. Click **"Add custom domain"**
3. Enter your domain name
4. Follow the instructions to update your DNS settings
5. Wait for DNS propagation (can take up to 48 hours)

### 5. HTTPS/SSL Certificate

Netlify automatically provisions SSL certificates for your site:
- Free SSL certificate via Let's Encrypt
- Automatic renewal
- Enabled by default

## Important Notes

### Environment Variables
⚠️ **NEVER** commit `.env.local` to Git! The `.gitignore` file should already exclude it.

Add environment variables in Netlify dashboard:
- **RESEND_API_KEY**: Your Resend API key for email functionality

### Build Settings

The `netlify.toml` file is already configured with:
- Build command: `npm run build`
- Publish directory: `.next`
- Next.js plugin enabled

### Automatic Deployments

Once connected, Netlify automatically deploys:
- ✅ Every push to your main branch
- ✅ Pull requests get preview deployments
- ✅ Instant rollback capability

## Testing Your Deployment

After deployment:

1. **Visit your site** at the Netlify URL (e.g., `your-site.netlify.app`)
2. **Test the contact form:**
   - Fill out all fields
   - Submit the form
   - Check for success message
   - Verify email arrives at mradeel_15@yahoo.com

3. **Test theme toggle:**
   - Switch between light/dark modes
   - Refresh page to ensure theme persists

4. **Test all pages and animations**

## Troubleshooting

### Build Fails
- Check build logs in Netlify dashboard
- Ensure all dependencies are in `package.json`
- Verify Node version compatibility

### Contact Form Not Working
- Verify `RESEND_API_KEY` is set in environment variables
- Check that the API key is correct
- Look for errors in Netlify Function logs

### Images Not Loading
- Ensure all image files are committed to Git
- Check image paths are correct (case-sensitive)
- Verify images are in the `public` folder

### Slow Load Times
- Enable **Netlify Image CDN** in site settings
- Use Next.js Image component (already implemented)
- Enable **Asset Optimization** in Netlify

## Performance Optimization

Netlify provides:
- ✅ Global CDN
- ✅ Automatic image optimization
- ✅ Brotli compression
- ✅ HTTP/2 and HTTP/3 support
- ✅ Edge caching

## Monitoring

Monitor your site:
- **Analytics:** Enable Netlify Analytics (paid feature)
- **Build times:** Check deployment history
- **Function logs:** Monitor API route calls
- **Bandwidth:** Check usage in billing section

## Updating Your Site

To update your deployed site:

```bash
# Make your changes
git add .
git commit -m "Update portfolio"
git push

# Netlify automatically rebuilds and deploys
```

## Useful Commands

```bash
# Preview before deploying
netlify dev

# Deploy to preview URL
netlify deploy

# Deploy to production
netlify deploy --prod

# Check deployment status
netlify status

# Open site in browser
netlify open
```

## Free Tier Limits

Netlify's free tier includes:
- ✅ 100 GB bandwidth/month
- ✅ 300 build minutes/month
- ✅ Unlimited sites
- ✅ SSL certificates
- ✅ Continuous deployment
- ✅ Serverless functions (125k requests/month)

This is more than enough for a portfolio website!

## Support

If you encounter issues:
- Check [Netlify Documentation](https://docs.netlify.com)
- Visit [Netlify Support Forums](https://answers.netlify.com)
- Contact Netlify support (available even on free tier)

---

## Quick Deployment Checklist

- [ ] Code pushed to Git repository
- [ ] Netlify account created
- [ ] Repository connected to Netlify
- [ ] Build settings configured
- [ ] Environment variable `RESEND_API_KEY` added
- [ ] Site deployed successfully
- [ ] Contact form tested and working
- [ ] Custom domain configured (optional)
- [ ] SSL certificate active

**Your portfolio is now live! 🎉**
