#!/usr/bin/env node

/**
 * Test script for the waitlist API
 * Run with: node scripts/test-api.js
 */

const API_BASE = 'http://localhost:5173/api';

async function testAPI() {
  console.log('🧪 Testing Waitlist API...\n');

  // Test 1: Add email to waitlist
  console.log('1. Testing POST /api/waitlist');
  try {
    const response = await fetch(`${API_BASE}/waitlist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'test@example.com',
        language: 'en',
        source: 'test_script'
      })
    });

    const data = await response.json();
    console.log('Status:', response.status);
    console.log('Response:', JSON.stringify(data, null, 2));
    
    if (data.success) {
      console.log('✅ Successfully added to waitlist\n');
    } else {
      console.log('❌ Failed to add to waitlist\n');
    }
  } catch (error) {
    console.log('❌ Error:', error.message, '\n');
  }

  // Test 2: Get waitlist position
  console.log('2. Testing GET /api/waitlist?email=test@example.com');
  try {
    const response = await fetch(`${API_BASE}/waitlist?email=test@example.com`);
    const data = await response.json();
    console.log('Status:', response.status);
    console.log('Response:', JSON.stringify(data, null, 2));
    
    if (data.success) {
      console.log('✅ Successfully retrieved position\n');
    } else {
      console.log('❌ Failed to retrieve position\n');
    }
  } catch (error) {
    console.log('❌ Error:', error.message, '\n');
  }

  // Test 3: Get statistics
  console.log('3. Testing GET /api/stats');
  try {
    const response = await fetch(`${API_BASE}/stats`);
    const data = await response.json();
    console.log('Status:', response.status);
    console.log('Response:', JSON.stringify(data, null, 2));
    
    if (data.success) {
      console.log('✅ Successfully retrieved stats\n');
    } else {
      console.log('❌ Failed to retrieve stats\n');
    }
  } catch (error) {
    console.log('❌ Error:', error.message, '\n');
  }

  // Test 4: Test duplicate email
  console.log('4. Testing duplicate email');
  try {
    const response = await fetch(`${API_BASE}/waitlist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'test@example.com',
        language: 'en',
        source: 'test_script'
      })
    });

    const data = await response.json();
    console.log('Status:', response.status);
    console.log('Response:', JSON.stringify(data, null, 2));
    
    if (response.status === 409) {
      console.log('✅ Correctly handled duplicate email\n');
    } else {
      console.log('❌ Should have returned 409 for duplicate\n');
    }
  } catch (error) {
    console.log('❌ Error:', error.message, '\n');
  }

  // Test 5: Test invalid email
  console.log('5. Testing invalid email');
  try {
    const response = await fetch(`${API_BASE}/waitlist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'invalid-email',
        language: 'en',
        source: 'test_script'
      })
    });

    const data = await response.json();
    console.log('Status:', response.status);
    console.log('Response:', JSON.stringify(data, null, 2));
    
    if (response.status === 400) {
      console.log('✅ Correctly handled invalid email\n');
    } else {
      console.log('❌ Should have returned 400 for invalid email\n');
    }
  } catch (error) {
    console.log('❌ Error:', error.message, '\n');
  }

  console.log('🏁 API testing completed!');
}

// Run the tests
testAPI().catch(console.error);
