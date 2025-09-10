import express, { Request, Response } from 'express';
import { getWaitlistStats } from '../lib/database';
import type { StatsResponse } from '../types/waitlist';
import { WaitlistError } from '../types/waitlist';

const router = express.Router();

/**
 * GET /api/stats - Get waitlist statistics
 */
router.get('/', async (_req: Request, res: Response<StatsResponse>) => {
  try {
    const result = await getWaitlistStats();
    
    if (!result.success) {
      return res.status(500).json({
        success: false,
        error: result.error || 'Failed to fetch stats'
      });
    }
    
    return res.json({
      success: true,
      data: result.data!
    });
    
  } catch (error) {
    console.error('Stats GET error:', error);
    
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
