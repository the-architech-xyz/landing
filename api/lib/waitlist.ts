// API Types for Waitlist System

export interface WaitlistEntry {
  id: string;
  email: string;
  position: number;
  created_at: string;
  updated_at?: string;
  source: string;
  referral_code?: string;
  referred_by?: string;
  status: 'waiting' | 'invited' | 'active' | 'cancelled';
  metadata?: Record<string, any>;
}

export interface WaitlistRequest {
  email: string;
  language?: 'en' | 'fr';
  source?: string;
  referralCode?: string;
}

export interface WaitlistResponse {
  success: boolean;
  position?: number;
  message?: string;
  error?: string;
  stats?: WaitlistStats;
  entry?: WaitlistEntry;
}

export interface WaitlistStats {
  total: number;
  waiting: number;
  lastPosition: number;
}

export interface EmailTemplate {
  subject: string;
  html: string;
  text?: string;
}

export interface WelcomeEmailData {
  email: string;
  position: number;
  language: 'en' | 'fr';
  referralCode?: string;
}

// Error types
export interface APIError {
  success: false;
  error: string;
  code?: string;
}

// Success response types
export interface APISuccess<T = any> {
  success: true;
  data?: T;
  message?: string;
}

// API Response union type
export type APIResponse<T = any> = APISuccess<T> | APIError;
