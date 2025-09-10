const { neon } = require('@neondatabase/serverless');

// Initialize Neon connection
const sql = neon(process.env.DATABASE_URL);

// Helper function to add email to waitlist
async function addToWaitlist(email, language = 'en', source = 'website') {
  try {
    const normalizedEmail = email.trim().toLowerCase();
    
    // Check if email already exists
    const existing = await sql`
      SELECT id, position, status FROM waitlist 
      WHERE email = ${normalizedEmail}
    `;
    
    if (existing.length > 0) {
      return {
        success: false,
        error: 'Email already exists',
        data: existing[0]
      };
    }
    
    // Get next position
    const positionResult = await sql`
      SELECT COALESCE(MAX(position), 0) + 1 as next_position 
      FROM waitlist
    `;
    const nextPosition = positionResult[0].next_position;
    
    // Generate referral code
    const referralCode = generateReferralCode();
    
    // Add to waitlist
    const result = await sql`
      INSERT INTO waitlist (email, position, source, referral_code, created_at, status)
      VALUES (${normalizedEmail}, ${nextPosition}, ${source}, ${referralCode}, NOW(), 'waiting')
      RETURNING id, email, position, created_at, source, referral_code, status
    `;
    
    return {
      success: true,
      data: result[0]
    };
    
  } catch (error) {
    console.error('Database error:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

// Helper function to get waitlist position
async function getWaitlistPosition(email) {
  try {
    const normalizedEmail = email.trim().toLowerCase();
    
    const result = await sql`
      SELECT id, email, position, created_at, source, referral_code, status
      FROM waitlist 
      WHERE email = ${normalizedEmail}
    `;
    
    if (result.length === 0) {
      return {
        success: false,
        error: 'Email not found in waitlist'
      };
    }
    
    return {
      success: true,
      data: result[0]
    };
    
  } catch (error) {
    console.error('Database error:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

// Helper function to get waitlist stats
async function getWaitlistStats() {
  try {
    const stats = await sql`
      SELECT 
        COUNT(*) as total_signups,
        COUNT(CASE WHEN created_at >= NOW() - INTERVAL '24 hours' THEN 1 END) as signups_24h,
        COUNT(CASE WHEN created_at >= NOW() - INTERVAL '7 days' THEN 1 END) as signups_7d,
        COUNT(CASE WHEN created_at >= NOW() - INTERVAL '30 days' THEN 1 END) as signups_30d,
        MIN(created_at) as first_signup,
        MAX(created_at) as latest_signup
      FROM waitlist
      WHERE status = 'waiting'
    `;
    
    return {
      success: true,
      data: stats[0]
    };
    
  } catch (error) {
    console.error('Database error:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

// Generate referral code
function generateReferralCode() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

module.exports = {
  sql,
  addToWaitlist,
  getWaitlistPosition,
  getWaitlistStats,
  generateReferralCode
};
