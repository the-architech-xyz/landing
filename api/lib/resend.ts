import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface EmailTemplate {
  subject: string;
  html: string;
  text?: string;
}

export interface WelcomeEmailData {
  email: string;
  position: number;
  language: 'en' | 'fr';
  referralCode?: string;
}

/**
 * Get email templates for different languages
 */
function getEmailTemplates(data: WelcomeEmailData): EmailTemplate {
  const { position, language, referralCode } = data;
  
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
      `,
      text: `
Welcome to The Architech Waitlist!

You're #${position} in line!

Thank you for joining our waitlist! You're now part of an exclusive community of developers who are ready to skip the setup and start building.

What happens next?
- We'll keep you updated on our progress
- You'll get early access when we launch
- Exclusive insights into our development process
- Special perks for early supporters

${referralCode ? `Share the love! Invite friends and move up in the queue: ${referralCode}` : ''}

Visit our website: https://architech.dev

© 2025 The Architech. All rights reserved.
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
      `,
      text: `
Bienvenue sur la liste d'attente The Architech !

Vous êtes #${position} dans la file !

Merci de nous avoir rejoint ! Vous faites maintenant partie d'une communauté exclusive de développeurs prêts à ignorer la configuration et commencer à construire.

Que se passe-t-il ensuite ?
- Nous vous tiendrons au courant de nos progrès
- Vous aurez un accès anticipé lors du lancement
- Des informations exclusives sur notre processus de développement
- Des avantages spéciaux pour les premiers supporters

${referralCode ? `Partagez l'amour ! Invitez des amis et montez dans la file : ${referralCode}` : ''}

Visitez notre site : https://architech.dev

© 2025 The Architech. Tous droits réservés.
      `
    }
  };
  
  return templates[language];
}

/**
 * Send welcome email to new waitlist member
 */
export async function sendWelcomeEmail(data: WelcomeEmailData): Promise<{
  success: boolean;
  messageId?: string;
  error?: string;
}> {
  try {
    const template = getEmailTemplates(data);
    
    const result = await resend.emails.send({
      from: 'The Architech <noreply@architech.dev>',
      to: [data.email],
      subject: template.subject,
      html: template.html,
      text: template.text
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

/**
 * Send position update email
 */
export async function sendPositionUpdateEmail(
  email: string,
  newPosition: number,
  language: 'en' | 'fr' = 'en'
): Promise<{
  success: boolean;
  messageId?: string;
  error?: string;
}> {
  try {
    const templates = {
      en: {
        subject: `🎯 Your position updated! You're now #${newPosition}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2>🎯 Great news!</h2>
            <p>Your position in The Architech waitlist has been updated!</p>
            <div style="background: #28a745; color: white; padding: 20px; text-align: center; border-radius: 8px; font-size: 24px; font-weight: bold; margin: 20px 0;">
              You're now #${newPosition}
            </div>
            <p>Keep sharing your referral code to move up even faster!</p>
            <p>Best regards,<br>The Architech Team</p>
          </div>
        `
      },
      fr: {
        subject: `🎯 Votre position mise à jour ! Vous êtes maintenant #${newPosition}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2>🎯 Excellente nouvelle !</h2>
            <p>Votre position dans la liste d'attente The Architech a été mise à jour !</p>
            <div style="background: #28a745; color: white; padding: 20px; text-align: center; border-radius: 8px; font-size: 24px; font-weight: bold; margin: 20px 0;">
              Vous êtes maintenant #${newPosition}
            </div>
            <p>Continuez à partager votre code de référence pour monter encore plus vite !</p>
            <p>Cordialement,<br>L'équipe The Architech</p>
          </div>
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
    console.error('Error sending position update email:', error);
    return { 
      success: false, 
      error: 'Failed to send email' 
    };
  }
}
