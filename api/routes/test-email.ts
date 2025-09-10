import express, { Request, Response } from 'express';
import { sendWelcomeEmail } from '../lib/email';
import type { Language } from '../types/waitlist';

const router = express.Router();

/**
 * POST /api/test-email - Test email sending
 */
router.post('/', async (req: Request, res: Response) => {
  try {
    const { email, language = 'en' } = req.body;
    
    if (!email) {
      return res.status(400).json({
        success: false,
        error: 'Email is required'
      });
    }
    
    console.log(`Testing email send to ${email} with language ${language}`);
    
    const result = await sendWelcomeEmail(email, language as Language, 'TEST123');
    
    if (result.success) {
      console.log(`Test email sent successfully to ${email}`);
      return res.json({
        success: true,
        message: 'Test email sent successfully',
        data: result.data
      });
    } else {
      console.error(`Test email failed for ${email}:`, result.error);
      return res.status(500).json({
        success: false,
        error: result.error
      });
    }
    
  } catch (error) {
    console.error('Test email error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

export default router;
