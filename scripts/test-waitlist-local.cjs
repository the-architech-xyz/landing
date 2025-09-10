#!/usr/bin/env node

require('dotenv').config({ path: '.env.local' });
const { addToWaitlist, getWaitlistStats } = require('../src/api/lib/neon');
const { sendWelcomeEmail } = require('../src/api/lib/resend');

async function testWaitlist() {
  console.log('🧪 Testing Waitlist System Locally...\n');

  try {
    // Test 1: Add email to waitlist
    console.log('1. Testing addToWaitlist...');
    const result = await addToWaitlist('test@example.com', 'test_script');
    
    if (result.success) {
      console.log('✅ Successfully added to waitlist');
      console.log('   Position:', result.position);
      console.log('   Entry:', result.entry);
    } else {
      console.log('❌ Failed to add to waitlist:', result.message);
    }

    // Test 2: Get statistics
    console.log('\n2. Testing getWaitlistStats...');
    const stats = await getWaitlistStats();
    console.log('✅ Statistics retrieved:');
    console.log('   Total:', stats.total);
    console.log('   Waiting:', stats.waiting);
    console.log('   Last Position:', stats.lastPosition);

    // Test 3: Send welcome email
    console.log('\n3. Testing sendWelcomeEmail...');
    const emailResult = await sendWelcomeEmail({
      email: 'test@example.com',
      position: result.position || 1,
      language: 'en',
      referralCode: result.entry?.referral_code
    });

    if (emailResult.success) {
      console.log('✅ Welcome email sent successfully');
      console.log('   Message ID:', emailResult.messageId);
    } else {
      console.log('❌ Failed to send email:', emailResult.error);
    }

    // Test 4: Test duplicate email
    console.log('\n4. Testing duplicate email...');
    const duplicateResult = await addToWaitlist('test@example.com', 'test_script');
    
    if (!duplicateResult.success && duplicateResult.message === 'Email already exists in waitlist') {
      console.log('✅ Duplicate email correctly handled');
      console.log('   Existing position:', duplicateResult.position);
    } else {
      console.log('❌ Duplicate handling failed:', duplicateResult);
    }

    console.log('\n🎉 All tests completed!');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.error('Stack:', error.stack);
  }
}

testWaitlist();
