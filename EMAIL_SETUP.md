# Contact Form Email Setup Guide

The contact form is now configured to send emails to **mradeel_15@yahoo.com** using Resend email service.

## Setup Instructions

### 1. Create a Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

### 2. Get Your API Key

1. Log in to your Resend dashboard
2. Navigate to **API Keys** section
3. Click **Create API Key**
4. Give it a name (e.g., "Portfolio Contact Form")
5. Copy the API key (it will only be shown once!)

### 3. Add API Key to Your Project

1. Open the `.env.local` file in the root of your project
2. Replace `your_resend_api_key_here` with your actual API key:

```env
RESEND_API_KEY=re_YourActualAPIKey_Here
```

3. Save the file

### 4. Verify Domain (Optional but Recommended)

For production use, you should verify your domain:

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Follow the instructions to add DNS records
4. Once verified, update the API route file at `app/api/contact/route.ts`:

Replace:
```typescript
from: 'Portfolio Contact <onboarding@resend.dev>',
```

With:
```typescript
from: 'Portfolio Contact <noreply@yourdomain.com>',
```

### 5. Test the Contact Form

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact section
3. Fill out the form and submit
4. Check your email at mradeel_15@yahoo.com

## Features

✅ Form validation (all fields required)
✅ Email format validation
✅ Loading state during submission
✅ Success/error message display
✅ Automatic form reset after successful submission
✅ Beautiful HTML email template
✅ Reply-to set to sender's email for easy responses

## Troubleshooting

### Email not sending?
- Check that your API key is correctly set in `.env.local`
- Restart your development server after adding the API key
- Check the browser console for errors
- Verify your Resend account is active

### Using the free tier?
- Resend's free tier allows 100 emails per day
- You can only send from `onboarding@resend.dev` until you verify a domain
- Emails might go to spam if domain is not verified

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add the `RESEND_API_KEY` environment variable in your hosting platform's settings
2. Consider verifying your domain for better deliverability
3. Monitor your email usage in the Resend dashboard

## Alternative: Without Resend

If you prefer not to use Resend, you can use other services:

- **EmailJS**: Client-side email service
- **SendGrid**: Popular email API
- **Nodemailer**: Direct SMTP configuration
- **Formspree**: Simple form backend

The API route at `app/api/contact/route.ts` can be modified to use any of these services.
