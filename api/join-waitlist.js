import { kv } from '@vercel/kv';
import { Suprsend, Event } from "@suprsend/node-sdk";

const supr_client = new Suprsend(
  process.env.SUPRSEND_WORKSPACE_KEY || "",
  process.env.SUPRSEND_WORKSPACE_SECRET || ""
);

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email } = request.body;

  if (!email || typeof email !== 'string') {
    return response.status(400).json({ error: 'Email is required' });
  }

  try {
    // 1. Add email to the waitlist in Vercel KV
    await kv.sadd('waitlist', email);

    // 2. Trigger SuprSend workflow
    try {
      // Create a user profile in SuprSend
      const user = supr_client.user.get_instance(email);
      user.add_email(email);
      await user.save();

      // Trigger the "Welcome Email" workflow
      const event = new Event(email, "USER_JOINED_WAITLIST", {
        email: email,
      });
      await supr_client.track_event(event);

    } catch (suprError) {
      // Log SuprSend errors but don't fail the request,
      // as the user was successfully added to the waitlist.
      console.error("SuprSend Error:", suprError);
    }

    return response.status(200).json({ message: 'Successfully joined the waitlist!' });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: 'Internal Server Error' });
  }
} 