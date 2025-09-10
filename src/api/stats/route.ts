import { getWaitlistStats } from '../lib/neon';

export interface StatsResponse {
  success: boolean;
  stats?: {
    total: number;
    waiting: number;
    lastPosition: number;
  };
  error?: string;
}

/**
 * GET /api/stats - Get waitlist statistics
 */
export async function GET(): Promise<Response> {
  try {
    const stats = await getWaitlistStats();
    
    return Response.json({
      success: true,
      stats
    });
    
  } catch (error) {
    console.error('Stats API error:', error);
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
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
