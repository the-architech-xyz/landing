# 🚀 Waitlist API Documentation

This document describes the waitlist API endpoints for The Architech project.

## 📋 Overview

The waitlist system uses:
- **Database**: Neon (PostgreSQL)
- **Email**: Resend
- **Deployment**: Vercel Serverless Functions
- **Languages**: English & French

## 🛠 Setup

### 1. Environment Variables

Create a `.env.local` file with:

```bash
# Neon Database
NEON_DATABASE_URL=postgresql://username:password@host/database

# Resend Email
RESEND_API_KEY=re_xxxxxxxxx
```

### 2. Database Setup

Run the SQL script in your Neon console:

```bash
# Copy and paste the contents of scripts/init-database.sql
# into your Neon SQL editor and execute
```

### 3. Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## 📡 API Endpoints

### POST /api/waitlist

Add an email to the waitlist.

**Request Body:**
```json
{
  "email": "user@example.com",
  "language": "en",
  "source": "landing_page",
  "referralCode": "ABC123"
}
```

**Response (Success):**
```json
{
  "success": true,
  "position": 42,
  "message": "Successfully added to waitlist",
  "stats": {
    "total": 100,
    "waiting": 95,
    "lastPosition": 100
  }
}
```

**Response (Email Already Exists):**
```json
{
  "success": false,
  "message": "Email already exists in waitlist",
  "position": 15
}
```

### GET /api/waitlist?email=user@example.com

Get waitlist position for an email.

**Response:**
```json
{
  "success": true,
  "position": 42,
  "entry": {
    "id": "uuid",
    "email": "user@example.com",
    "position": 42,
    "created_at": "2025-01-27T10:00:00Z",
    "source": "landing_page",
    "referral_code": "ABC123",
    "status": "waiting"
  }
}
```

### GET /api/stats

Get waitlist statistics.

**Response:**
```json
{
  "success": true,
  "stats": {
    "total": 100,
    "waiting": 95,
    "lastPosition": 100
  }
}
```

## 🎨 Frontend Integration

### Update Components

Replace the old waitlist.email integration in your components:

```typescript
// Old way (waitlist.email)
const response = await fetch(`${WAITLIST_CONFIG.API_URL}/create`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    waitlist: WAITLIST_CONFIG.WAITLIST_ID,
    email: email.trim().toLowerCase(),
    metadata: { source: 'landing_page' }
  })
});

// New way (our API)
const response = await fetch(WAITLIST_CONFIG.API_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: email.trim().toLowerCase(),
    language: 'en', // or 'fr'
    source: 'landing_page'
  })
});
```

### Error Handling

```typescript
try {
  const response = await fetch(WAITLIST_CONFIG.API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, language: 'en' })
  });

  const data = await response.json();

  if (!response.ok) {
    if (response.status === 409) {
      // Email already exists
      setError('You are already on our waitlist!');
      setWaitlistPosition(data.position);
    } else {
      setError(data.error || 'Failed to join waitlist');
    }
    return;
  }

  // Success
  setWaitlistPosition(data.position);
  setIsSubmitted(true);

} catch (error) {
  setError('Network error. Please try again.');
}
```

## 📧 Email Templates

The system automatically sends welcome emails in English or French based on the `language` parameter.

### Features:
- ✅ Responsive HTML design
- ✅ Position in waitlist
- ✅ Referral code (if applicable)
- ✅ Multilingual support
- ✅ Professional branding

## 🔧 Development

### Local Testing

```bash
# Start development server
npm run dev

# Test API endpoints
curl -X POST http://localhost:5173/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","language":"en"}'
```

### Database Queries

```sql
-- Get all waitlist entries
SELECT * FROM waitlist ORDER BY position;

-- Get statistics
SELECT 
  COUNT(*) as total,
  COUNT(CASE WHEN status = 'waiting' THEN 1 END) as waiting,
  MAX(position) as last_position
FROM waitlist;

-- Get user by email
SELECT * FROM waitlist WHERE email = 'user@example.com';
```

## 🚀 Deployment Checklist

- [ ] Environment variables configured
- [ ] Database schema created
- [ ] Resend API key valid
- [ ] Vercel deployment successful
- [ ] Frontend components updated
- [ ] Email templates tested
- [ ] Error handling implemented

## 📊 Monitoring

Monitor your waitlist:
- **Vercel Dashboard**: Function logs and performance
- **Neon Dashboard**: Database queries and performance
- **Resend Dashboard**: Email delivery and open rates

## 🆘 Troubleshooting

### Common Issues:

1. **Database Connection Error**
   - Check `NEON_DATABASE_URL` format
   - Verify database is accessible

2. **Email Not Sending**
   - Check `RESEND_API_KEY` is valid
   - Verify domain is configured in Resend

3. **CORS Errors**
   - Check Vercel configuration
   - Verify API routes are properly configured

4. **TypeScript Errors**
   - Run `npm run build` to check for type errors
   - Ensure all imports are correct

## 📈 Next Steps

- [ ] Add referral tracking
- [ ] Implement position updates
- [ ] Add analytics integration
- [ ] Create admin dashboard
- [ ] Add email automation workflows
