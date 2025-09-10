const express = require('express');
const router = express.Router();
const { addToWaitlist, getWaitlistPosition } = require('../lib/database');
const { sendWelcomeEmail } = require('../lib/email');

// POST /api/waitlist - Add email to waitlist
router.post('/', async (req, res) => {
  try {
    const { email, language = 'en', source = 'website' } = req.body;
    
    // Validate email
    if (!email) {
      return res.status(400).json({
        success: false,
        error: 'Email is required'
      });
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid email address'
      });
    }
    
    // Add to waitlist
    const result = await addToWaitlist(email, language, source);
    
    if (!result.success) {
      if (result.error === 'Email already exists') {
        return res.status(409).json({
          success: false,
          error: 'Email already exists',
          data: result.data
        });
      }
      
      return res.status(500).json({
        success: false,
        error: result.error || 'Failed to add to waitlist'
      });
    }
    
    // Send welcome email (async, don't wait for it)
    sendWelcomeEmail(email, language, result.data.referral_code)
      .then(emailResult => {
        if (emailResult.success) {
          console.log(`Welcome email sent to ${email}`);
        } else {
          console.error(`Failed to send welcome email to ${email}:`, emailResult.error);
        }
      })
      .catch(err => {
        console.error(`Error sending welcome email to ${email}:`, err);
      });
    
    // Return success response
    res.status(201).json({
      success: true,
      message: 'Successfully added to waitlist',
      data: {
        email: result.data.email,
        position: result.data.position,
        referralCode: result.data.referral_code,
        language: result.data.language || language,
        createdAt: result.data.created_at
      }
    });
    
  } catch (error) {
    console.error('Waitlist POST error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// GET /api/waitlist?email=... - Get waitlist position
router.get('/', async (req, res) => {
  try {
    const { email } = req.query;
    
    if (!email) {
      return res.status(400).json({
        success: false,
        error: 'Email parameter is required'
      });
    }
    
    const result = await getWaitlistPosition(email);
    
    if (!result.success) {
      return res.status(404).json({
        success: false,
        error: result.error
      });
    }
    
    res.json({
      success: true,
      data: result.data
    });
    
  } catch (error) {
    console.error('Waitlist GET error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

module.exports = router;
