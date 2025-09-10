#!/usr/bin/env node

require('dotenv').config({ path: '.env.local' });
const { neon } = require('@neondatabase/serverless');
const { Resend } = require('resend');

const sql = neon(process.env.NEON_DATABASE_URL);
const resend = new Resend(process.env.RESEND_API_KEY);

async function testWaitlist() {
  console.log('🧪 Testing Waitlist System Locally...\n');

  try {
    // Test 1: Add email to waitlist
    console.log('1. Testing addToWaitlist...');
    
    const email = 'test@example.com';
    const source = 'test_script';
    
    // Check if email exists
    const existing = await sql`
      SELECT id, position FROM waitlist 
      WHERE email = ${email}
    `;
    
    if (existing.length > 0) {
      console.log('✅ Email already exists, position:', existing[0].position);
    } else {
      // Get next position
      const positionResult = await sql`
        SELECT COALESCE(MAX(position), 0) + 1 as next_position 
        FROM waitlist
      `;
      const nextPosition = positionResult[0].next_position;
      
      // Add to waitlist
      const result = await sql`
        INSERT INTO waitlist (email, position, source, created_at, status)
        VALUES (${email}, ${nextPosition}, ${source}, NOW(), 'waiting')
        RETURNING id, email, position, created_at, source, status
      `;
      
      console.log('✅ Successfully added to waitlist');
      console.log('   Position:', result[0].position);
      console.log('   Entry:', result[0]);
    }

    // Test 2: Get statistics
    console.log('\n2. Testing getWaitlistStats...');
    const stats = await sql`
      SELECT 
        COUNT(*) as total,
        COUNT(CASE WHEN status = 'waiting' THEN 1 END) as waiting,
        COALESCE(MAX(position), 0) as last_position
      FROM waitlist
    `;
    
    console.log('✅ Statistics retrieved:');
    console.log('   Total:', parseInt(stats[0].total));
    console.log('   Waiting:', parseInt(stats[0].waiting));
    console.log('   Last Position:', parseInt(stats[0].last_position));

    // Test 3: Send welcome email
    console.log('\n3. Testing sendWelcomeEmail...');
    
    const emailResult = await resend.emails.send({
      from: 'The Architech <noreply@architech.dev>',
      to: [email],
      subject: '🎉 Welcome to The Architech Waitlist!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1>🚀 Welcome to The Architech!</h1>
          <p>You're officially part of the revolution!</p>
          <div style="background: #28a745; color: white; padding: 20px; text-align: center; border-radius: 8px; font-size: 24px; font-weight: bold; margin: 20px 0;">
            You're #1 in line!
          </div>
          <p>Thank you for joining our waitlist! You're now part of an exclusive community of developers who are ready to skip the setup and start building.</p>
          <p>Best regards,<br>The Architech Team</p>
        </div>
      `
    });
    
    if (emailResult.error) {
      console.log('❌ Failed to send email:', emailResult.error);
    } else {
      console.log('✅ Welcome email sent successfully');
      console.log('   Message ID:', emailResult.data?.id);
    }

    console.log('\n🎉 All tests completed successfully!');
    console.log('\n📋 Next steps:');
    console.log('1. Check your email for the welcome message');
    console.log('2. Test the frontend by going to http://localhost:8080');
    console.log('3. Try to join the waitlist from the website');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.error('Stack:', error.stack);
  }
}

testWaitlist();
