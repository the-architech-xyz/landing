import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

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

export default async function handler(req: any, res: any) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    try {
      const stats = await getWaitlistStats();
      
      return res.status(200).json({
        success: true,
        stats
      });
      
    } catch (error) {
      console.error('Stats API error:', error);
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
