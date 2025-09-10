# 🔧 Environment Setup Guide

This guide will help you set up the environment variables needed for the waitlist system.

## 📋 Required Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# Neon Database Configuration
# Get your connection string from: https://console.neon.tech/
NEON_DATABASE_URL=postgresql://username:password@hostname/database?sslmode=require

# Resend Email Configuration
# Get your API key from: https://resend.com/api-keys
RESEND_API_KEY=re_xxxxxxxxx
```

## 🗄️ Neon Database Setup

### 1. Create a Neon Account
1. Go to [console.neon.tech](https://console.neon.tech/)
2. Sign up for a free account
3. Create a new project

### 2. Get Your Connection String
1. In your Neon dashboard, go to "Connection Details"
2. Copy the connection string
3. Add it to your `.env.local` file as `NEON_DATABASE_URL`

### 3. Initialize the Database
1. Go to the "SQL Editor" in your Neon dashboard
2. Copy and paste the contents of `scripts/init-database.sql`
3. Execute the script to create the waitlist table

## 📧 Resend Email Setup

### 1. Create a Resend Account
1. Go to [resend.com](https://resend.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Get Your API Key
1. Go to "API Keys" in your Resend dashboard
2. Create a new API key
3. Copy the key and add it to your `.env.local` file as `RESEND_API_KEY`

### 3. Configure Your Domain (Optional)
1. Go to "Domains" in your Resend dashboard
2. Add your domain (e.g., `architech.dev`)
3. Follow the DNS setup instructions
4. Once verified, you can use `noreply@yourdomain.com` as the sender

## 🚀 Vercel Deployment

### 1. Install Vercel CLI
```bash
npm i -g vercel
```

### 2. Login to Vercel
```bash
vercel login
```

### 3. Add Environment Variables
```bash
vercel env add NEON_DATABASE_URL
vercel env add RESEND_API_KEY
```

### 4. Deploy
```bash
vercel --prod
```

## 🧪 Local Testing

### 1. Start the Development Server
```bash
npm run dev
```

### 2. Test the API
```bash
node scripts/test-api.js
```

### 3. Test in Browser
1. Open `http://localhost:5173`
2. Try to join the waitlist
3. Check your email for the welcome message

## 🔍 Troubleshooting

### Database Connection Issues
- Verify your `NEON_DATABASE_URL` is correct
- Check that your Neon database is running
- Ensure the database schema is created

### Email Not Sending
- Verify your `RESEND_API_KEY` is correct
- Check that your domain is verified in Resend
- Look at the Vercel function logs for errors

### CORS Issues
- Ensure your API routes are properly configured
- Check the Vercel configuration in `vercel.json`

## 📊 Monitoring

### Vercel Dashboard
- Monitor function performance
- View error logs
- Check deployment status

### Neon Dashboard
- Monitor database performance
- View query logs
- Check connection status

### Resend Dashboard
- Monitor email delivery
- View open rates
- Check bounce rates

## 🆘 Support

If you encounter any issues:

1. Check the logs in Vercel dashboard
2. Verify all environment variables are set
3. Test the API endpoints manually
4. Check the database connection

For additional help, refer to:
- [Neon Documentation](https://neon.tech/docs)
- [Resend Documentation](https://resend.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
