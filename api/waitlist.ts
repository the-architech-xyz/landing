// Import Neon
import { neon } from '@neondatabase/serverless';

// Import Resend
import { Resend } from 'resend';

const sql = neon(process.env.NEON_DATABASE_URL!);
const resend = new Resend(process.env.RESEND_API_KEY);

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

// Helper functions
async function addToWaitlist(email: string, source: string = 'landing_page', referralCode?: string) {
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
        message: 'Email already exists in waitlist',
        position: existing[0].position
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
    
    return { 
      success: true, 
      position: result[0].position,
      entry: result[0]
    };
    
  } catch (error) {
    console.error('Error adding to waitlist:', error);
    return { 
      success: false, 
      message: 'Database error occurred' 
    };
  }
}

async function getWaitlistPosition(email: string) {
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
      entry: result[0]
    };
    
  } catch (error) {
    console.error('Error getting waitlist position:', error);
    return { 
      success: false, 
      message: 'Database error occurred' 
    };
  }
}

async function getWaitlistStats() {
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

function generateReferralCode(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

async function sendWelcomeEmail(email: string, position: number, language: 'en' | 'fr', referralCode?: string) {
  try {
    const templates = {
      en: {
        subject: `🎉 Welcome to The Architech Waitlist! You're #${position}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to The Architech</title>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 20px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background: #f8f9fa; padding: 40px 20px; border-radius: 0 0 8px 8px; }
              .position-badge { background: #28a745; color: white; padding: 10px 20px; border-radius: 25px; font-size: 24px; font-weight: bold; display: inline-block; margin: 20px 0; }
              .cta-button { background: #007bff; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 20px 0; font-weight: bold; }
              .referral-code { background: #e9ecef; padding: 15px; border-radius: 5px; font-family: monospace; font-size: 18px; text-align: center; margin: 20px 0; }
              .footer { text-align: center; margin-top: 40px; color: #6c757d; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>🚀 Welcome to The Architech!</h1>
              <p>You're officially part of the revolution</p>
            </div>
            <div class="content">
              <h2>You're #${position} in line!</h2>
              <div class="position-badge">#${position}</div>
              <p>Thank you for joining our waitlist! You're now part of an exclusive community of developers who are ready to skip the setup and start building.</p>
              
              <h3>What happens next?</h3>
              <ul>
                <li>📧 We'll keep you updated on our progress</li>
                <li>🎯 You'll get early access when we launch</li>
                <li>💡 Exclusive insights into our development process</li>
                <li>🎁 Special perks for early supporters</li>
              </ul>
              
              ${referralCode ? `
              <h3>Share the love! 🎉</h3>
              <p>Invite friends and move up in the queue:</p>
              <div class="referral-code">${referralCode}</div>
              <p>Share this code with friends - every successful referral moves you up 10 positions!</p>
              ` : ''}
              
              <div style="text-align: center;">
                <a href="https://architech.dev" class="cta-button">Visit Our Website</a>
              </div>
            </div>
            <div class="footer">
              <p>© 2025 The Architech. All rights reserved.</p>
              <p>Building the future of development, one modular architecture at a time.</p>
            </div>
          </body>
          </html>
        `
      },
      fr: {
        subject: `🎉 Bienvenue sur la liste d'attente The Architech ! Vous êtes #${position}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Bienvenue sur The Architech</title>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 20px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background: #f8f9fa; padding: 40px 20px; border-radius: 0 0 8px 8px; }
              .position-badge { background: #28a745; color: white; padding: 10px 20px; border-radius: 25px; font-size: 24px; font-weight: bold; display: inline-block; margin: 20px 0; }
              .cta-button { background: #007bff; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 20px 0; font-weight: bold; }
              .referral-code { background: #e9ecef; padding: 15px; border-radius: 5px; font-family: monospace; font-size: 18px; text-align: center; margin: 20px 0; }
              .footer { text-align: center; margin-top: 40px; color: #6c757d; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>🚀 Bienvenue sur The Architech !</h1>
              <p>Vous faites officiellement partie de la révolution</p>
            </div>
            <div class="content">
              <h2>Vous êtes #${position} dans la file !</h2>
              <div class="position-badge">#${position}</div>
              <p>Merci de nous avoir rejoint ! Vous faites maintenant partie d'une communauté exclusive de développeurs prêts à ignorer la configuration et commencer à construire.</p>
              
              <h3>Que se passe-t-il ensuite ?</h3>
              <ul>
                <li>📧 Nous vous tiendrons au courant de nos progrès</li>
                <li>🎯 Vous aurez un accès anticipé lors du lancement</li>
                <li>💡 Des informations exclusives sur notre processus de développement</li>
                <li>🎁 Des avantages spéciaux pour les premiers supporters</li>
              </ul>
              
              ${referralCode ? `
              <h3>Partagez l'amour ! 🎉</h3>
              <p>Invitez des amis et montez dans la file :</p>
              <div class="referral-code">${referralCode}</div>
              <p>Partagez ce code avec des amis - chaque référence réussie vous fait monter de 10 positions !</p>
              ` : ''}
              
              <div style="text-align: center;">
                <a href="https://architech.dev" class="cta-button">Visiter Notre Site</a>
              </div>
            </div>
            <div class="footer">
              <p>© 2025 The Architech. Tous droits réservés.</p>
              <p>Construire l'avenir du développement, une architecture modulaire à la fois.</p>
            </div>
          </body>
          </html>
        `
      }
    };
    
    const template = templates[language];
    
    const result = await resend.emails.send({
      from: 'The Architech <noreply@architech.dev>',
      to: [email],
      subject: template.subject,
      html: template.html
    });
    
    if (result.error) {
      console.error('Resend error:', result.error);
      return { 
        success: false, 
        error: result.error.message || 'Failed to send email' 
      };
    }
    
    return { 
      success: true, 
      messageId: result.data?.id 
    };
    
  } catch (error) {
    console.error('Error sending welcome email:', error);
    return { 
      success: false, 
      error: 'Failed to send email' 
    };
  }
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
