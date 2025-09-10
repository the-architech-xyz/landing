-- =====================================================
-- The Architech Waitlist Database Schema
-- Version: 1.0
-- Created: 2025-01-27
-- Description: Complete waitlist system with future features
-- =====================================================

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- MAIN WAITLIST TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS waitlist (
    -- Primary identification
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    
    -- Core user data
    email VARCHAR(255) UNIQUE NOT NULL,
    position INTEGER NOT NULL,
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Source tracking
    source VARCHAR(100) DEFAULT 'landing_page',
    utm_source VARCHAR(100),
    utm_medium VARCHAR(100),
    utm_campaign VARCHAR(100),
    utm_term VARCHAR(100),
    utm_content VARCHAR(100),
    
    -- Referral system
    referral_code VARCHAR(20) UNIQUE,
    referred_by UUID REFERENCES waitlist(id) ON DELETE SET NULL,
    referral_count INTEGER DEFAULT 0,
    
    -- User preferences
    language VARCHAR(5) DEFAULT 'en' CHECK (language IN ('en', 'fr', 'es', 'de', 'it')),
    timezone VARCHAR(50) DEFAULT 'UTC',
    
    -- Status and lifecycle
    status VARCHAR(50) DEFAULT 'waiting' CHECK (status IN (
        'waiting', 'invited', 'active', 'cancelled', 'converted', 'bounced'
    )),
    
    -- Email engagement tracking
    email_verified BOOLEAN DEFAULT FALSE,
    email_verified_at TIMESTAMP WITH TIME ZONE,
    last_email_sent_at TIMESTAMP WITH TIME ZONE,
    email_bounce_count INTEGER DEFAULT 0,
    email_open_count INTEGER DEFAULT 0,
    email_click_count INTEGER DEFAULT 0,
    
    -- User profile (optional)
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    company VARCHAR(200),
    job_title VARCHAR(100),
    country VARCHAR(100),
    
    -- Priority and scoring
    priority_score INTEGER DEFAULT 0,
    is_vip BOOLEAN DEFAULT FALSE,
    is_early_adopter BOOLEAN DEFAULT FALSE,
    
    -- Metadata and custom fields
    metadata JSONB DEFAULT '{}'::jsonb,
    custom_fields JSONB DEFAULT '{}'::jsonb,
    
    -- Admin notes
    admin_notes TEXT,
    last_contacted_at TIMESTAMP WITH TIME ZONE,
    
    -- Constraints
    CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    CONSTRAINT valid_position CHECK (position > 0),
    CONSTRAINT valid_referral_code CHECK (referral_code ~* '^[A-Z0-9]{6,20}$' OR referral_code IS NULL)
);

-- =====================================================
-- EMAIL EVENTS TABLE (for tracking email interactions)
-- =====================================================
CREATE TABLE IF NOT EXISTS email_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    waitlist_id UUID NOT NULL REFERENCES waitlist(id) ON DELETE CASCADE,
    event_type VARCHAR(50) NOT NULL CHECK (event_type IN (
        'sent', 'delivered', 'opened', 'clicked', 'bounced', 'complained', 'unsubscribed'
    )),
    email_template VARCHAR(100),
    subject_line VARCHAR(255),
    provider VARCHAR(50) DEFAULT 'resend',
    provider_message_id VARCHAR(255),
    user_agent TEXT,
    ip_address INET,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    metadata JSONB DEFAULT '{}'::jsonb
);

-- =====================================================
-- REFERRAL TRACKING TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS referrals (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    referrer_id UUID NOT NULL REFERENCES waitlist(id) ON DELETE CASCADE,
    referred_id UUID NOT NULL REFERENCES waitlist(id) ON DELETE CASCADE,
    referral_code VARCHAR(20) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    converted_at TIMESTAMP WITH TIME ZONE,
    reward_given BOOLEAN DEFAULT FALSE,
    reward_type VARCHAR(50),
    reward_value DECIMAL(10,2),
    
    -- Ensure no self-referral
    CONSTRAINT no_self_referral CHECK (referrer_id != referred_id),
    -- Ensure unique referral relationship
    CONSTRAINT unique_referral UNIQUE (referrer_id, referred_id)
);

-- =====================================================
-- WAITLIST ANALYTICS TABLE (for reporting)
-- =====================================================
CREATE TABLE IF NOT EXISTS waitlist_analytics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    date DATE NOT NULL,
    metric_name VARCHAR(100) NOT NULL,
    metric_value INTEGER NOT NULL DEFAULT 0,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Ensure one record per metric per day
    CONSTRAINT unique_daily_metric UNIQUE (date, metric_name)
);

-- =====================================================
-- INDEXES FOR PERFORMANCE
-- =====================================================

-- Waitlist table indexes
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_position ON waitlist(position);
CREATE INDEX IF NOT EXISTS idx_waitlist_status ON waitlist(status);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at);
CREATE INDEX IF NOT EXISTS idx_waitlist_referral_code ON waitlist(referral_code);
CREATE INDEX IF NOT EXISTS idx_waitlist_referred_by ON waitlist(referred_by);
CREATE INDEX IF NOT EXISTS idx_waitlist_source ON waitlist(source);
CREATE INDEX IF NOT EXISTS idx_waitlist_language ON waitlist(language);
CREATE INDEX IF NOT EXISTS idx_waitlist_priority_score ON waitlist(priority_score DESC);
CREATE INDEX IF NOT EXISTS idx_waitlist_vip ON waitlist(is_vip) WHERE is_vip = TRUE;
CREATE INDEX IF NOT EXISTS idx_waitlist_early_adopter ON waitlist(is_early_adopter) WHERE is_early_adopter = TRUE;

-- Email events indexes
CREATE INDEX IF NOT EXISTS idx_email_events_waitlist_id ON email_events(waitlist_id);
CREATE INDEX IF NOT EXISTS idx_email_events_type ON email_events(event_type);
CREATE INDEX IF NOT EXISTS idx_email_events_created_at ON email_events(created_at);
CREATE INDEX IF NOT EXISTS idx_email_events_provider_message_id ON email_events(provider_message_id);

-- Referrals indexes
CREATE INDEX IF NOT EXISTS idx_referrals_referrer ON referrals(referrer_id);
CREATE INDEX IF NOT EXISTS idx_referrals_referred ON referrals(referred_id);
CREATE INDEX IF NOT EXISTS idx_referrals_code ON referrals(referral_code);
CREATE INDEX IF NOT EXISTS idx_referrals_created_at ON referrals(created_at);

-- Analytics indexes
CREATE INDEX IF NOT EXISTS idx_analytics_date ON waitlist_analytics(date);
CREATE INDEX IF NOT EXISTS idx_analytics_metric ON waitlist_analytics(metric_name);
CREATE INDEX IF NOT EXISTS idx_analytics_date_metric ON waitlist_analytics(date, metric_name);

-- =====================================================
-- FUNCTIONS AND TRIGGERS
-- =====================================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Function to generate referral codes
CREATE OR REPLACE FUNCTION generate_referral_code()
RETURNS VARCHAR(20) AS $$
DECLARE
    chars VARCHAR(36) := 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    result VARCHAR(20) := '';
    i INTEGER;
BEGIN
    FOR i IN 1..8 LOOP
        result := result || substr(chars, floor(random() * length(chars) + 1)::INTEGER, 1);
    END LOOP;
    RETURN result;
END;
$$ LANGUAGE plpgsql;

-- Function to get next position in waitlist
CREATE OR REPLACE FUNCTION get_next_waitlist_position()
RETURNS INTEGER AS $$
DECLARE
    next_position INTEGER;
BEGIN
    SELECT COALESCE(MAX(position), 0) + 1 INTO next_position FROM waitlist;
    RETURN next_position;
END;
$$ LANGUAGE plpgsql;

-- Function to update referral counts
CREATE OR REPLACE FUNCTION update_referral_count()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        UPDATE waitlist 
        SET referral_count = referral_count + 1 
        WHERE id = NEW.referrer_id;
    ELSIF TG_OP = 'DELETE' THEN
        UPDATE waitlist 
        SET referral_count = GREATEST(referral_count - 1, 0) 
        WHERE id = OLD.referrer_id;
    END IF;
    RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

-- Function to log email events
CREATE OR REPLACE FUNCTION log_email_event(
    p_waitlist_id UUID,
    p_event_type VARCHAR(50),
    p_email_template VARCHAR(100) DEFAULT NULL,
    p_subject_line VARCHAR(255) DEFAULT NULL,
    p_provider_message_id VARCHAR(255) DEFAULT NULL,
    p_metadata JSONB DEFAULT '{}'::jsonb
)
RETURNS UUID AS $$
DECLARE
    event_id UUID;
BEGIN
    INSERT INTO email_events (
        waitlist_id, event_type, email_template, subject_line, 
        provider_message_id, metadata
    ) VALUES (
        p_waitlist_id, p_event_type, p_email_template, p_subject_line,
        p_provider_message_id, p_metadata
    ) RETURNING id INTO event_id;
    
    -- Update last_email_sent_at for 'sent' events
    IF p_event_type = 'sent' THEN
        UPDATE waitlist 
        SET last_email_sent_at = NOW() 
        WHERE id = p_waitlist_id;
    END IF;
    
    RETURN event_id;
END;
$$ LANGUAGE plpgsql;

-- =====================================================
-- TRIGGERS
-- =====================================================

-- Update updated_at on waitlist changes
CREATE TRIGGER update_waitlist_updated_at 
    BEFORE UPDATE ON waitlist 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Update referral counts
CREATE TRIGGER update_referral_count_trigger
    AFTER INSERT OR DELETE ON referrals
    FOR EACH ROW
    EXECUTE FUNCTION update_referral_count();

-- =====================================================
-- VIEWS FOR COMMON QUERIES
-- =====================================================

-- Waitlist with referral information
CREATE OR REPLACE VIEW waitlist_with_referrals AS
SELECT 
    w.*,
    r.referral_count,
    r.referred_by,
    referrer.email as referrer_email,
    referrer.first_name as referrer_first_name,
    referrer.last_name as referrer_last_name
FROM waitlist w
LEFT JOIN (
    SELECT referrer_id, COUNT(*) as referral_count
    FROM referrals
    GROUP BY referrer_id
) r ON w.id = r.referrer_id
LEFT JOIN waitlist referrer ON w.referred_by = referrer.id;

-- Daily waitlist statistics
CREATE OR REPLACE VIEW daily_waitlist_stats AS
SELECT 
    DATE(created_at) as date,
    COUNT(*) as total_signups,
    COUNT(CASE WHEN status = 'waiting' THEN 1 END) as waiting_count,
    COUNT(CASE WHEN status = 'invited' THEN 1 END) as invited_count,
    COUNT(CASE WHEN status = 'active' THEN 1 END) as active_count,
    COUNT(CASE WHEN email_verified = TRUE THEN 1 END) as verified_count,
    COUNT(CASE WHEN is_vip = TRUE THEN 1 END) as vip_count,
    AVG(position) as avg_position,
    MAX(position) as max_position
FROM waitlist
GROUP BY DATE(created_at)
ORDER BY date DESC;

-- =====================================================
-- SAMPLE DATA (OPTIONAL - REMOVE IN PRODUCTION)
-- =====================================================

-- Uncomment to add sample data for testing
/*
INSERT INTO waitlist (email, position, source, language, first_name, last_name, company) VALUES 
('test@example.com', 1, 'landing_page', 'en', 'Test', 'User', 'Test Company'),
('demo@architech.dev', 2, 'landing_page', 'fr', 'Demo', 'User', 'Architech'),
('sample@test.com', 3, 'referral', 'en', 'Sample', 'User', 'Sample Corp');
*/

-- =====================================================
-- VERIFICATION QUERIES
-- =====================================================

-- Verify table creation
SELECT 
    table_name, 
    column_name, 
    data_type, 
    is_nullable,
    column_default
FROM information_schema.columns 
WHERE table_name IN ('waitlist', 'email_events', 'referrals', 'waitlist_analytics')
ORDER BY table_name, ordinal_position;

-- Verify indexes
SELECT 
    schemaname,
    tablename,
    indexname,
    indexdef
FROM pg_indexes 
WHERE tablename IN ('waitlist', 'email_events', 'referrals', 'waitlist_analytics')
ORDER BY tablename, indexname;

-- =====================================================
-- GRANTS AND PERMISSIONS (if needed)
-- =====================================================

-- Grant permissions to application user (adjust as needed)
-- GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO your_app_user;
-- GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO your_app_user;
-- GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO your_app_user;

-- =====================================================
-- COMPLETION MESSAGE
-- =====================================================

DO $$
BEGIN
    RAISE NOTICE '=====================================================';
    RAISE NOTICE 'The Architech Waitlist Database Schema Created Successfully!';
    RAISE NOTICE '=====================================================';
    RAISE NOTICE 'Tables created: waitlist, email_events, referrals, waitlist_analytics';
    RAISE NOTICE 'Functions created: update_updated_at_column, generate_referral_code, get_next_waitlist_position, update_referral_count, log_email_event';
    RAISE NOTICE 'Views created: waitlist_with_referrals, daily_waitlist_stats';
    RAISE NOTICE 'Indexes created: 15+ performance indexes';
    RAISE NOTICE 'Triggers created: 2 automatic triggers';
    RAISE NOTICE '=====================================================';
    RAISE NOTICE 'Ready for production use!';
END $$;