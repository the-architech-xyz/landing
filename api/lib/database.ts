import { neon } from '@neondatabase/serverless';
import type { 
  WaitlistEntry, 
  WaitlistStats, 
  Language, 
  Source, 
  DatabaseResult
} from '../types/waitlist';
import { WaitlistError } from '../types/waitlist';

// Initialize Neon connection
const sql = neon(process.env.DATABASE_URL!);

/**
 * Add email to waitlist with proper validation and error handling
 */
export async function addToWaitlist(
  email: string, 
  language: Language = 'en', 
  source: Source = 'website'
): Promise<DatabaseResult<WaitlistEntry>> {
  try {
    const normalizedEmail = email.trim().toLowerCase();
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(normalizedEmail)) {
      throw new WaitlistError(
        'Invalid email format',
        'INVALID_EMAIL',
        400
      );
    }
    
    // Check if email already exists
    const existing = await sql`
      SELECT id, position, status FROM waitlist 
      WHERE email = ${normalizedEmail}
    `;
    
    if (existing.length > 0) {
      return {
        success: false,
        error: 'Email already exists',
        data: existing[0] as WaitlistEntry
      };
    }
    
    // Get next position
    const positionResult = await sql`
      SELECT COALESCE(MAX(position), 0) + 1 as next_position 
      FROM waitlist
    `;
    const nextPosition = positionResult[0]?.next_position as number;
    
    if (!nextPosition || nextPosition < 1) {
      throw new WaitlistError(
        'Failed to generate position number',
        'POSITION_ERROR',
        500
      );
    }
    
    // Generate referral code
    const referralCode = generateReferralCode();
    
    // Add to waitlist
    const result = await sql`
      INSERT INTO waitlist (email, position, source, referral_code, language, created_at, status)
      VALUES (${normalizedEmail}, ${nextPosition}, ${source}, ${referralCode}, ${language}, NOW(), 'waiting')
      RETURNING id, email, position, created_at, source, referral_code, status, language
    `;
    
    if (!result || result.length === 0) {
      throw new WaitlistError(
        'Failed to insert into waitlist',
        'INSERT_ERROR',
        500
      );
    }
    
    return {
      success: true,
      data: result[0] as WaitlistEntry
    };
    
  } catch (error) {
    console.error('Database error in addToWaitlist:', error);
    
    if (error instanceof WaitlistError) {
      return {
        success: false,
        error: error.message
      };
    }
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown database error'
    };
  }
}

/**
 * Get waitlist position for an email
 */
export async function getWaitlistPosition(email: string): Promise<DatabaseResult<WaitlistEntry>> {
  try {
    const normalizedEmail = email.trim().toLowerCase();
    
    const result = await sql`
      SELECT id, email, position, created_at, source, referral_code, status, language
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
      data: result[0] as WaitlistEntry
    };
    
  } catch (error) {
    console.error('Database error in getWaitlistPosition:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown database error'
    };
  }
}

/**
 * Get comprehensive waitlist statistics
 */
export async function getWaitlistStats(): Promise<DatabaseResult<WaitlistStats>> {
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
    
    if (!stats || stats.length === 0) {
      throw new WaitlistError(
        'Failed to fetch waitlist statistics',
        'STATS_ERROR',
        500
      );
    }
    
    const stat = stats[0];
    
    if (!stat) {
      throw new WaitlistError(
        'No statistics data returned',
        'STATS_ERROR',
        500
      );
    }
    
    return {
      success: true,
      data: {
        total_signups: Number(stat.total_signups),
        signups_24h: Number(stat.signups_24h),
        signups_7d: Number(stat.signups_7d),
        signups_30d: Number(stat.signups_30d),
        first_signup: new Date(stat.first_signup as string),
        latest_signup: new Date(stat.latest_signup as string)
      }
    };
    
  } catch (error) {
    console.error('Database error in getWaitlistStats:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown database error'
    };
  }
}

/**
 * Generate a unique referral code
 */
export function generateReferralCode(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Validate email format
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Validate language code
 */
export function validateLanguage(language: string): language is Language {
  const validLanguages: Language[] = ['en', 'fr', 'es', 'de', 'it'];
  return validLanguages.includes(language as Language);
}

/**
 * Validate source
 */
export function validateSource(source: string): source is Source {
  const validSources: Source[] = ['website', 'landing_page', 'landing_page_simple_cta', 'referral', 'social', 'email', 'other'];
  return validSources.includes(source as Source);
}

// Export the sql instance for direct use if needed
export { sql };
