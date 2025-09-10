import { addToWaitlist, getWaitlistPosition, getWaitlistStats } from './lib/neon';
import { sendWelcomeEmail } from './lib/resend';

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

export default async function handler(req: any, res: any) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    try {
      const { email, language = 'en', source = 'landing_page', referralCode } = req.body;
      
      // Validate email
      if (!email || typeof email !== 'string') {
        return res.status(400).json({
          success: false,
          error: 'Email is required'
        });
      }
      
      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          success: false,
          error: 'Invalid email format'
        });
      }
      
      // Language validation
      if (language && !['en', 'fr'].includes(language)) {
        return res.status(400).json({
          success: false,
          error: 'Invalid language. Must be "en" or "fr"'
        });
      }
      
      // Add to waitlist
      const result = await addToWaitlist(email, source, referralCode);
      
      if (!result.success) {
        // If email already exists, return current position
        if (result.message === 'Email already exists in waitlist') {
          return res.status(409).json({
            success: false,
            message: result.message,
            position: result.position
          });
        }
        
        return res.status(500).json({
          success: false,
          error: result.message || 'Failed to add to waitlist'
        });
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
      
      return res.status(200).json({
        success: true,
        position: result.position,
        message: 'Successfully added to waitlist',
        stats
      });
      
    } catch (error) {
      console.error('Waitlist API error:', error);
      return res.status(500).json({
        success: false,
        error: 'Internal server error'
      });
    }
  }

  if (req.method === 'GET') {
    try {
      const { email } = req.query;
      
      if (!email) {
        return res.status(400).json({
          success: false,
          error: 'Email parameter is required'
        });
      }
      
      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          success: false,
          error: 'Invalid email format'
        });
      }
      
      const result = await getWaitlistPosition(email);
      
      if (!result.success) {
        return res.status(404).json({
          success: false,
          error: result.message || 'Email not found'
        });
      }
      
      return res.status(200).json({
        success: true,
        position: result.position,
        entry: result.entry
      });
      
    } catch (error) {
      console.error('Waitlist GET API error:', error);
      return res.status(500).json({
        success: false,
        error: 'Internal server error'
      });
    }
  }

  // Method not allowed
  return res.status(405).json({
    success: false,
    error: 'Method not allowed'
  });
}
