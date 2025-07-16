// Waitlist.email configuration
export const WAITLIST_CONFIG = {
  // Use environment variable if available, otherwise fallback to the ID from the docs
  WAITLIST_ID: import.meta.env.VITE_WAITLIST_ID || 'cmd6i9ct10002gatbk7r6ze0o',
  API_KEY: import.meta.env.VITE_WAITLIST_API_KEY,
  API_URL: 'https://www.waitlist.email/api/subscribers'
}; 