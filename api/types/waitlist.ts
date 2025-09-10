// =====================================================
// Waitlist API Types and Interfaces
// =====================================================

export type Language = 'en' | 'fr' | 'es' | 'de' | 'it';
export type WaitlistStatus = 'waiting' | 'invited' | 'active' | 'cancelled' | 'converted' | 'bounced';
export type Source = 'website' | 'landing_page' | 'landing_page_simple_cta' | 'referral' | 'social' | 'email' | 'other';

// =====================================================
// Database Models
// =====================================================

export interface WaitlistEntry {
  id: string;
  email: string;
  position: number;
  created_at: Date;
  updated_at: Date;
  source: Source;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  referral_code: string;
  referred_by?: string;
  referral_count: number;
  language: Language;
  timezone: string;
  status: WaitlistStatus;
  email_verified: boolean;
  email_verified_at?: Date;
  last_email_sent?: Date;
  email_opens: number;
  email_clicks: number;
  vip_status: boolean;
  notes?: string;
  metadata?: Record<string, unknown>;
}

export interface WaitlistStats {
  total_signups: number;
  signups_24h: number;
  signups_7d: number;
  signups_30d: number;
  first_signup: Date;
  latest_signup: Date;
}

// =====================================================
// API Request/Response Types
// =====================================================

export interface WaitlistRequest {
  email: string;
  language?: Language;
  source?: Source;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  referred_by?: string;
}

export interface WaitlistResponse {
  success: boolean;
  message?: string;
  error?: string;
  data?: {
    email: string;
    position: number;
    referralCode: string;
    language: Language;
    createdAt: Date;
  };
}

export interface WaitlistPositionResponse {
  success: boolean;
  error?: string;
  data?: WaitlistEntry;
}

export interface StatsResponse {
  success: boolean;
  error?: string;
  data?: WaitlistStats;
}

export interface HealthResponse {
  status: 'OK';
  timestamp: string;
  version: string;
}

// =====================================================
// Service Response Types
// =====================================================

export interface ServiceResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface DatabaseResult<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface EmailResult {
  success: boolean;
  data?: {
    id: string;
    from: string;
    to: string[];
    subject: string;
    created_at: string;
  };
  error?: string;
}

// =====================================================
// Email Template Types
// =====================================================

export interface EmailTemplate {
  subject: string;
  html: string;
}

export interface WelcomeEmailData {
  email: string;
  language: Language;
  referralCode?: string;
  position?: number;
}

// =====================================================
// Error Types
// =====================================================

export interface APIError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

export class WaitlistError extends Error {
  public readonly code: string;
  public readonly statusCode: number;
  public readonly details?: Record<string, unknown>;

  constructor(
    message: string,
    code: string = 'WAITLIST_ERROR',
    statusCode: number = 500,
    details?: Record<string, unknown>
  ) {
    super(message);
    this.name = 'WaitlistError';
    this.code = code;
    this.statusCode = statusCode;
    this.details = details || undefined;
  }
}

// =====================================================
// Validation Types
// =====================================================

export interface ValidationError {
  field: string;
  message: string;
  value?: unknown;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}
