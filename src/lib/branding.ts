/**
 * THE ARCHITECH - CENTRALIZED BRANDING SYSTEM
 * 
 * This file contains all branding constants, styles, and utilities
 * to ensure consistent design across all components.
 */

// ============================================================================
// BRANDING CONSTANTS
// ============================================================================

export const BRANDING = {
  // Colors
  colors: {
    primary: 'text-primary',
    accent: 'text-accent',
    muted: 'text-muted-foreground',
    title: 'text-title',
  },
  
  // Typography
  typography: {
    // Headlines
    headline: {
      base: 'text-4xl md:text-6xl font-bold tracking-tight text-balance',
      large: 'text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance',
      small: 'text-2xl md:text-3xl font-bold tracking-tight text-balance',
    },
    
    // Body text
    body: {
      large: 'text-xl md:text-2xl text-muted-foreground max-w-3xl text-balance leading-relaxed',
      medium: 'text-lg text-muted-foreground leading-relaxed',
      small: 'text-sm text-muted-foreground',
    },
    
    // Badges
    badge: 'text-sm font-bold tracking-wider',
  },
  
  // Spacing
  spacing: {
    section: 'section-padding',
    container: 'container-architech',
    gap: 'gap-8',
    gapSmall: 'gap-4',
  },
  
  // Backgrounds
  backgrounds: {
    musicalGrid: 'musical-grid',
    glass: 'glass-card',
  },
  
  // Borders
  borders: {
    primary: 'border-primary/30',
    accent: 'border-accent/30',
    subtle: 'border-subtle',
  },
  
  // Buttons
  buttons: {
    primary: 'bg-primary hover:bg-primary/90 text-white font-semibold px-8 h-14 text-lg transition-colors rounded-md',
    accent: 'bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 h-14 transition-colors rounded-md',
    outline: 'border-primary/30 hover:bg-primary/10 text-lg px-8 h-14 bg-transparent transition-colors rounded-md',
  },
  
  // Badges
  badges: {
    primary: 'inline-block rounded-md px-4 py-2 bg-primary/10 border border-primary/30 text-primary text-sm font-bold tracking-wider mb-6',
    accent: 'inline-block rounded-md px-4 py-2 bg-accent/10 border border-accent/30 text-accent text-sm font-bold tracking-wider mb-6',
  },
  
  // Animations
  animations: {
    fadeIn: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6 },
    },
    stagger: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay: 0.1 },
    },
  },
} as const;

// ============================================================================
// SECTION HEADER CONFIGURATIONS
// ============================================================================

export const SECTION_HEADERS = {
  benefits: {
    badge: 'Why This Exists',
    title: 'The Hard Pill to Swallow',
    highlight: 'Swallow',
  },
  howItWorks: {
    badge: 'How It Works',
    title: 'Three Steps to Production',
    highlight: 'Production',
    subtitle: 'From architecture definition to deployed application in minutes, not weeks',
  },
  whereWeFit: {
    badge: 'Where We Fit',
    title: 'We\'re Not Like Them',
    highlight: 'Not Like Them',
  },
  faq: {
    badge: 'FAQ',
    title: 'Cut Through the Noise',
    highlight: 'Noise',
    // subtitle: 'Straight answers. No corporate BS.',
  },
  cta: {
    badge: 'Ready?',
    title: 'Start Building.',
    highlight: 'Start Building.',
    subtitle: 'One command. Complete architecture. Production ready.',
  },
  interactiveDemo: {
    badge: 'Interactive Demo',
    title: 'From Idea to Code, in Real Time',
    highlight: 'in Real Time',
    // subtitle: 'Describe your project and watch the architecture generate instantly',
  },
} as const;

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Get section header configuration
 */
export function getSectionHeader(section: keyof typeof SECTION_HEADERS) {
  return SECTION_HEADERS[section];
}

/**
 * Get branded button classes
 */
export function getButtonClasses(variant: 'primary' | 'accent' | 'outline' = 'primary') {
  return BRANDING.buttons[variant];
}

/**
 * Get branded badge classes
 */
export function getBadgeClasses(variant: 'primary' | 'accent' = 'primary') {
  return BRANDING.badges[variant];
}

/**
 * Get headline classes
 */
export function getHeadlineClasses(size: 'base' | 'large' | 'small' = 'base') {
  return BRANDING.typography.headline[size];
}

/**
 * Get body text classes
 */
export function getBodyClasses(size: 'large' | 'medium' | 'small' = 'large') {
  return BRANDING.typography.body[size];
}

// ============================================================================
// COMPONENT PROPS TYPES
// ============================================================================

export interface SectionHeaderProps {
  section: keyof typeof SECTION_HEADERS;
  className?: string;
}

export interface BrandedButtonProps {
  variant?: 'primary' | 'accent' | 'outline';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

export interface BrandedBadgeProps {
  variant?: 'primary' | 'accent';
  children: React.ReactNode;
  className?: string;
}
