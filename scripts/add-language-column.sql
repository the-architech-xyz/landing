-- Add language column to existing waitlist table
ALTER TABLE waitlist 
ADD COLUMN IF NOT EXISTS language VARCHAR(5) DEFAULT 'en' CHECK (language IN ('en', 'fr', 'es', 'de', 'it'));

-- Update existing records to have default language
UPDATE waitlist 
SET language = 'en' 
WHERE language IS NULL;
