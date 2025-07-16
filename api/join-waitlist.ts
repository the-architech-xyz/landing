import { kv } from '@vercel/kv';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email } = request.body;

  if (!email || typeof email !== 'string') {
    return response.status(400).json({ error: 'Email is required' });
  }

  try {
    // Use a Set for the waitlist to automatically handle duplicates
    await kv.sadd('waitlist', email);
    return response.status(200).json({ message: 'Successfully joined the waitlist!' });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: 'Internal Server Error' });
  }
} 