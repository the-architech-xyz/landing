import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.NEON_DATABASE_URL!);

export interface WaitlistEntry {
  id: string;
  email: string;
  position: number;
  created_at: string;
  source: string;
  referral_code?: string;
  referred_by?: string;
  status: string;
  metadata?: any;
}

export interface WaitlistResult {
  success: boolean;
  position?: number;
  message?: string;
  entry?: WaitlistEntry;
}

/**
 * Add email to waitlist
 */
export async function addToWaitlist(
  email: string, 
  source: string = 'landing_page',
  referralCode?: string
): Promise<WaitlistResult> {
  try {
    // Normalize email
    const normalizedEmail = email.trim().toLowerCase();
    
    // Check if email already exists
    const existing = await sql`
      SELECT id, position, status FROM waitlist 
      WHERE email = ${normalizedEmail}
    `;
    
    if (existing.length > 0) {
      return { 
        success: false, 
        message: 'Email already exists in waitlist',
        position: existing[0].position,
        entry: existing[0] as WaitlistEntry
      };
    }
    
    // Get next position
    const positionResult = await sql`
      SELECT COALESCE(MAX(position), 0) + 1 as next_position 
      FROM waitlist
    `;
    const nextPosition = positionResult[0].next_position;
    
    // Generate referral code if not provided
    const generatedReferralCode = referralCode || generateReferralCode();
    
    // Add to waitlist
    const result = await sql`
      INSERT INTO waitlist (email, position, source, referral_code, created_at, status)
      VALUES (${normalizedEmail}, ${nextPosition}, ${source}, ${generatedReferralCode}, NOW(), 'waiting')
      RETURNING id, email, position, created_at, source, referral_code, status
    `;
    
    const newEntry = result[0] as WaitlistEntry;
    
    return { 
      success: true, 
      position: newEntry.position,
      entry: newEntry
    };
    
  } catch (error) {
    console.error('Error adding to waitlist:', error);
    return { 
      success: false, 
      message: 'Database error occurred' 
    };
  }
}

/**
 * Get waitlist position by email
 */
export async function getWaitlistPosition(email: string): Promise<WaitlistResult> {
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
        message: 'Email not found in waitlist' 
      };
    }
    
    return { 
      success: true, 
      position: result[0].position,
      entry: result[0] as WaitlistEntry
    };
    
  } catch (error) {
    console.error('Error getting waitlist position:', error);
    return { 
      success: false, 
      message: 'Database error occurred' 
    };
  }
}

/**
 * Get waitlist statistics
 */
export async function getWaitlistStats(): Promise<{
  total: number;
  waiting: number;
  lastPosition: number;
}> {
  try {
    const stats = await sql`
      SELECT 
        COUNT(*) as total,
        COUNT(CASE WHEN status = 'waiting' THEN 1 END) as waiting,
        COALESCE(MAX(position), 0) as last_position
      FROM waitlist
    `;
    
    return {
      total: parseInt(stats[0].total),
      waiting: parseInt(stats[0].waiting),
      lastPosition: parseInt(stats[0].last_position)
    };
    
  } catch (error) {
    console.error('Error getting waitlist stats:', error);
    return { total: 0, waiting: 0, lastPosition: 0 };
  }
}

/**
 * Generate a unique referral code
 */
function generateReferralCode(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Update waitlist entry status
 */
export async function updateWaitlistStatus(
  email: string, 
  status: string
): Promise<WaitlistResult> {
  try {
    const normalizedEmail = email.trim().toLowerCase();
    
    const result = await sql`
      UPDATE waitlist 
      SET status = ${status}, updated_at = NOW()
      WHERE email = ${normalizedEmail}
      RETURNING id, email, position, status
    `;
    
    if (result.length === 0) {
      return { 
        success: false, 
        message: 'Email not found in waitlist' 
      };
    }
    
    return { 
      success: true, 
      entry: result[0] as WaitlistEntry
    };
    
  } catch (error) {
    console.error('Error updating waitlist status:', error);
    return { 
      success: false, 
      message: 'Database error occurred' 
    };
  }
}
