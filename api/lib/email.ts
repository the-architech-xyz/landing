import { Resend } from 'resend';
import type { 
  Language, 
  EmailResult, 
  WelcomeEmailData, 
  EmailTemplate 
} from '../types/waitlist';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Send welcome email with proper error handling and type safety
 */
export async function sendWelcomeEmail(
  email: string, 
  language: Language = 'en', 
  referralCode?: string
): Promise<EmailResult> {
  try {
    const isFrench = language === 'fr';
    
    const subject = isFrench 
      ? 'Bienvenue sur la liste d\'attente d\'Architech Code Forge !' 
      : 'Welcome to Architech Code Forge waitlist!';
    
    const htmlContent = isFrench 
      ? getFrenchEmailTemplate({ email, language, referralCode: referralCode || undefined }) 
      : getEnglishEmailTemplate({ email, language, referralCode: referralCode || undefined });
    
    const result = await resend.emails.send({
      from: 'Architech Code Forge <noreply@architech-code-forge.com>',
      to: [email],
      subject: subject,
      html: htmlContent
    });
    
    if (result.error) {
      throw new Error(`Resend API error: ${result.error.message}`);
    }
    
    return {
      success: true,
      data: {
        id: result.data?.id || '',
        from: 'Architech Code Forge <noreply@architech-code-forge.com>',
        to: [email],
        subject: subject,
        created_at: new Date().toISOString()
      }
    };
    
  } catch (error) {
    console.error('Email error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown email error'
    };
  }
}

/**
 * Generate English email template with proper typing
 */
function getEnglishEmailTemplate(data: WelcomeEmailData): string {
  const { email, referralCode } = data;
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Welcome to Architech Code Forge!</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .cta { background: #667eea; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 20px 0; }
        .referral { background: #e8f4fd; padding: 20px; border-radius: 5px; margin: 20px 0; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🚀 Welcome to Architech Code Forge!</h1>
          <p>You're now on our exclusive waitlist</p>
        </div>
        <div class="content">
          <h2>Thank you for joining our waitlist!</h2>
          <p>We're excited to have you on board. You'll be among the first to know when we launch our revolutionary AI-powered development platform.</p>
          
          ${referralCode ? `
          <div class="referral">
            <h3>🎁 Your Referral Code</h3>
            <p><strong>${referralCode}</strong></p>
            <p>Share this code with friends to get priority access when we launch!</p>
          </div>
          ` : ''}
          
          <h3>What's next?</h3>
          <ul>
            <li>We'll keep you updated on our progress</li>
            <li>You'll get early access to beta features</li>
            <li>Exclusive discounts and perks await</li>
          </ul>
          
          <p>Stay tuned for exciting updates!</p>
          
          <p>Best regards,<br>The Architech Code Forge Team</p>
        </div>
        <div class="footer">
          <p>This email was sent to ${email}</p>
          <p>If you didn't sign up, please ignore this email.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

/**
 * Generate French email template with proper typing
 */
function getFrenchEmailTemplate(data: WelcomeEmailData): string {
  const { email, referralCode } = data;
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Bienvenue sur Architech Code Forge !</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .cta { background: #667eea; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 20px 0; }
        .referral { background: #e8f4fd; padding: 20px; border-radius: 5px; margin: 20px 0; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🚀 Bienvenue sur Architech Code Forge !</h1>
          <p>Vous êtes maintenant sur notre liste d'attente exclusive</p>
        </div>
        <div class="content">
          <h2>Merci de vous être inscrit à notre liste d'attente !</h2>
          <p>Nous sommes ravis de vous compter parmi nous. Vous serez parmi les premiers à être informés du lancement de notre plateforme de développement révolutionnaire alimentée par l'IA.</p>
          
          ${referralCode ? `
          <div class="referral">
            <h3>🎁 Votre Code de Parrainage</h3>
            <p><strong>${referralCode}</strong></p>
            <p>Partagez ce code avec vos amis pour obtenir un accès prioritaire lors du lancement !</p>
          </div>
          ` : ''}
          
          <h3>Et maintenant ?</h3>
          <ul>
            <li>Nous vous tiendrons informés de nos progrès</li>
            <li>Vous aurez un accès anticipé aux fonctionnalités bêta</li>
            <li>Des réductions et avantages exclusifs vous attendent</li>
          </ul>
          
          <p>Restez à l'écoute pour des mises à jour passionnantes !</p>
          
          <p>Cordialement,<br>L'équipe Architech Code Forge</p>
        </div>
        <div class="footer">
          <p>Cet email a été envoyé à ${email}</p>
          <p>Si vous ne vous êtes pas inscrit, veuillez ignorer cet email.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

/**
 * Validate email address format
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Get email template by language
 */
export function getEmailTemplate(data: WelcomeEmailData): EmailTemplate {
  const isFrench = data.language === 'fr';
  
  return {
    subject: isFrench 
      ? 'Bienvenue sur la liste d\'attente d\'Architech Code Forge !' 
      : 'Welcome to Architech Code Forge waitlist!',
    html: isFrench 
      ? getFrenchEmailTemplate(data) 
      : getEnglishEmailTemplate(data)
  };
}
