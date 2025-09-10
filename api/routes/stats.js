const express = require('express');
const router = express.Router();
const { getWaitlistStats } = require('../lib/database');

// GET /api/stats - Get waitlist statistics
router.get('/', async (req, res) => {
  try {
    const result = await getWaitlistStats();
    
    if (!result.success) {
      return res.status(500).json({
        success: false,
        error: result.error || 'Failed to fetch stats'
      });
    }
    
    res.json({
      success: true,
      data: result.data
    });
    
  } catch (error) {
    console.error('Stats GET error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

module.exports = router;
