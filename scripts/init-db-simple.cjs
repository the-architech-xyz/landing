#!/usr/bin/env node

require('dotenv').config({ path: '.env.local' });
const { neon } = require('@neondatabase/serverless');

const sql = neon(process.env.NEON_DATABASE_URL);

async function initDatabase() {
  try {
    console.log('🚀 Initializing database...');
    
    // Create waitlist table
    await sql`
      CREATE TABLE IF NOT EXISTS waitlist (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(255) UNIQUE NOT NULL,
        position INTEGER NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        source VARCHAR(100) DEFAULT 'landing_page',
        referral_code VARCHAR(20) UNIQUE,
        referred_by UUID REFERENCES waitlist(id),
        status VARCHAR(50) DEFAULT 'waiting',
        metadata JSONB DEFAULT '{}'::jsonb
      )
    `;
    console.log('✅ Waitlist table created');
    
    // Create indexes
    await sql`CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_waitlist_position ON waitlist(position)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_waitlist_status ON waitlist(status)`;
    console.log('✅ Indexes created');
    
    // Test the table
    const result = await sql`SELECT COUNT(*) as count FROM waitlist`;
    console.log('📊 Current waitlist entries:', result[0].count);
    
    console.log('🎉 Database initialized successfully!');
    
  } catch (error) {
    console.error('❌ Error initializing database:', error.message);
    process.exit(1);
  }
}

initDatabase();
