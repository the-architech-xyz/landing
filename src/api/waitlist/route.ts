import { addToWaitlist, getWaitlistPosition, getWaitlistStats } from '../lib/neon';
import { sendWelcomeEmail, sendPositionUpdateEmail } from '../lib/resend';

export interface WaitlistRequest {
  email: string;
  language?: 'en' | 'fr';
  source?: string;
  referralCode?: string;
}

export interface WaitlistResponse {
  success: boolean;
  position?: number;
  message?: string;
  error?: string;
  stats?: {
    total: number;
    waiting: number;
    lastPosition: number;
  };
}

/**
 * POST /api/waitlist - Add email to waitlist
 */
export async function POST(request: Request): Promise<Response> {
  try {
    const body: WaitlistRequest = await request.json();
    const { email, language = 'en', source = 'landing_page', referralCode } = body;
    
    // Validate email
    if (!email || typeof email !== 'string') {
      return Response.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    // Language validation
    if (language && !['en', 'fr'].includes(language)) {
      return Response.json(
        { success: false, error: 'Invalid language. Must be "en" or "fr"' },
        { status: 400 }
      );
    }
    
    // Add to waitlist
    const result = await addToWaitlist(email, source, referralCode);
    
    if (!result.success) {
      // If email already exists, return current position
      if (result.message === 'Email already exists in waitlist') {
        return Response.json({
          success: false,
          message: result.message,
          position: result.position
        }, { status: 409 });
      }
      
      return Response.json(
        { success: false, error: result.message || 'Failed to add to waitlist' },
        { status: 500 }
      );
    }
    
    // Send welcome email
    const emailResult = await sendWelcomeEmail({
      email,
      position: result.position!,
      language,
      referralCode: result.entry?.referral_code
    });
    
    if (!emailResult.success) {
      console.error('Failed to send welcome email:', emailResult.error);
      // Don't fail the request if email fails, just log it
    }
    
    // Get updated stats
    const stats = await getWaitlistStats();
    
    return Response.json({
      success: true,
      position: result.position,
      message: 'Successfully added to waitlist',
      stats
    });
    
  } catch (error) {
    console.error('Waitlist API error:', error);
    return Response.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/waitlist?email=... - Get waitlist position
 */
export async function GET(request: Request): Promise<Response> {
  try {
    const url = new URL(request.url);
    const email = url.searchParams.get('email');
    
    if (!email) {
      return Response.json(
        { success: false, error: 'Email parameter is required' },
        { status: 400 }
      );
    }
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    const result = await getWaitlistPosition(email);
    
    if (!result.success) {
      return Response.json(
        { success: false, error: result.message || 'Email not found' },
        { status: 404 }
      );
    }
    
    return Response.json({
      success: true,
      position: result.position,
      entry: result.entry
    });
    
  } catch (error) {
    console.error('Waitlist GET API error:', error);
    return Response.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * Handle OPTIONS for CORS
 */
export async function OPTIONS(): Promise<Response> {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
