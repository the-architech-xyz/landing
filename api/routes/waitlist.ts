import express, { Request, Response } from 'express';
import { addToWaitlist, getWaitlistPosition, validateEmail, validateLanguage, validateSource } from '../lib/database';
import { sendWelcomeEmail } from '../lib/email';
import type { 
  WaitlistRequest, 
  WaitlistResponse, 
  WaitlistPositionResponse,
  Language,
  Source
} from '../types/waitlist';
import { WaitlistError } from '../types/waitlist';

const router = express.Router();

/**
 * POST /api/waitlist - Add email to waitlist
 */
router.post('/', async (req: Request<{}, WaitlistResponse, WaitlistRequest>, res: Response<WaitlistResponse>) => {
  try {
    const { email, language = 'en', source = 'website' } = req.body;
    
    // Validate required fields
    if (!email) {
      return res.status(400).json({
        success: false,
        error: 'Email is required'
      });
    }
    
    // Validate email format
    if (!validateEmail(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid email address'
      });
    }
    
    // Validate language
    if (!validateLanguage(language)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid language code'
      });
    }
    
    // Validate source
    if (!validateSource(source)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid source'
      });
    }
    
    // Add to waitlist
    const result = await addToWaitlist(email, language as Language, source as Source);
    
    if (!result.success) {
      if (result.error === 'Email already exists') {
        return res.status(409).json({
          success: false,
          error: 'Email already exists',
          data: result.data ? {
            email: result.data.email,
            position: result.data.position,
            referralCode: result.data.referral_code,
            language: result.data.language,
            createdAt: result.data.created_at
          } : undefined
        });
      }
      
      return res.status(500).json({
        success: false,
        error: result.error || 'Failed to add to waitlist'
      });
    }
    
    // Send welcome email (async, don't wait for it)
    console.log(`Attempting to send welcome email to ${email} with language ${language}`);
    sendWelcomeEmail(email, language as Language, result.data?.referral_code)
      .then(emailResult => {
        if (emailResult.success) {
          console.log(`✅ Welcome email sent successfully to ${email}`);
        } else {
          console.error(`❌ Failed to send welcome email to ${email}:`, emailResult.error);
        }
      })
      .catch(err => {
        console.error(`❌ Error sending welcome email to ${email}:`, err);
      });
    
    // Return success response
    return res.status(201).json({
      success: true,
      message: 'Successfully added to waitlist',
      data: {
        email: result.data!.email,
        position: result.data!.position,
        referralCode: result.data!.referral_code,
        language: result.data!.language,
        createdAt: result.data!.created_at
      }
    });
    
  } catch (error) {
    console.error('Waitlist POST error:', error);
    
    if (error instanceof WaitlistError) {
      return res.status(error.statusCode).json({
        success: false,
        error: error.message
      });
    }
    
    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

/**
 * GET /api/waitlist?email=... - Get waitlist position
 */
router.get('/', async (req: Request<{}, WaitlistPositionResponse, {}, { email: string }>, res: Response<WaitlistPositionResponse>) => {
  try {
    const { email } = req.query;
    
    if (!email) {
      return res.status(400).json({
        success: false,
        error: 'Email parameter is required'
      });
    }
    
    if (!validateEmail(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid email address'
      });
    }
    
    const result = await getWaitlistPosition(email);
    
    if (!result.success) {
      return res.status(404).json({
        success: false,
        error: result.error || 'Email not found'
      });
    }
    
    return res.json({
      success: true,
      data: result.data!
    });
    
  } catch (error) {
    console.error('Waitlist GET error:', error);
    
    if (error instanceof WaitlistError) {
      return res.status(error.statusCode).json({
        success: false,
        error: error.message
      });
    }
    
    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

export default router;
