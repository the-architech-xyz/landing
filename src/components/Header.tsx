import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Linkedin } from "lucide-react";
import DiscordIcon from "@/components/DiscordIcon";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "@/hooks/useTranslation";

/**
 * THE ARCHITECH HEADER - "Technical Elegance"
 * 
 * Design Principles:
 * - Minimal, precision-focused layout
 * - Sticky with subtle glass effect
 * - Electric Cyan progress indicator
 * - Clean typography (Geist for logo)
 * - Fast 200ms transitions
 */

const Header = () => {
  const { t } = useTranslation();
  const [darkMode] = useState(true); // Always dark mode (principal)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll effect and progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      setScrolled(scrollTop > 20);
      setScrollProgress(progress);

      // Detect active section
      const sections = ['hero', 'benefits', 'how-it-works', 'demo', 'where-we-fit', 'faq'];
      let currentSection = 'hero';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (mobileMenuOpen && 
          !target.closest('.mobile-menu-container') && 
          !target.closest('.mobile-menu-button')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
      scrolled 
        ? 'bg-background/95 backdrop-blur-xl border-b border-subtle shadow-medium' 
        : 'bg-background/80 backdrop-blur-lg border-b border-subtle/50'
    }`}>
      {/* Electric Cyan Scroll Progress Bar */}
      <div 
        className="absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300" 
        style={{ width: `${scrollProgress}%` }}
      />
      
      <div className="container-architech">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Geist Font, Minimal */}
          <button 
            onClick={() => smoothScrollTo('hero')}
            className="flex items-center space-x-3 group cursor-pointer transition-opacity hover:opacity-80"
          >
            <div className="relative">
              <img 
                src="/logo-removebg.png"
                alt={t('common.alt.logo')} 
                className="w-9 h-9 object-contain transition-transform group-hover:scale-105"
              />
            </div>
            <span className="font-geist text-lg font-bold text-title tracking-tight">
              The Architech
            </span>
          </button>

          {/* Desktop Navigation - Clean, Minimal */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { id: 'benefits', label: t('header.nav.benefits') },
              { id: 'how-it-works', label: t('header.nav.howItWorks') },
              { id: 'demo', label: t('header.nav.demo') },
              { id: 'where-we-fit', label: t('header.nav.whereWeFit') },
              { id: 'faq', label: t('header.nav.faq') }
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => smoothScrollTo(id)}
                className={`px-4 py-2 font-inter text-sm font-medium transition-colors rounded-md ${
                  activeSection === id
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-primary hover:bg-card'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Actions - Minimal, Focused */}
          <div className="flex items-center space-x-3">
            {/* Language Switcher */}
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>
            
            {/* Social Links - Subtle */}
            <div className="hidden lg:flex items-center space-x-2">
              <a
                href="https://discord.gg/sxhdEEWups"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary hover:bg-card transition-colors rounded-md"
                title={t('social.discord.title')}
              >
                <DiscordIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/the-architech-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary hover:bg-card transition-colors rounded-md"
                title={t('social.linkedin.title')}
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

            {/* CTA Button - Electric Cyan */}
            <Button
              className="hidden md:inline-flex"
              onClick={() => smoothScrollTo('cta')}
            >
              {t('header.cta')}
            </Button>

            {/* Mobile menu button */}
            <button
              type="button"
              className="mobile-menu-button md:hidden p-2 text-muted-foreground hover:text-primary hover:bg-card transition-colors rounded-md"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setMobileMenuOpen(prev => !prev);
              }}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Clean Slide Down */}
        <div className={`md:hidden mobile-menu-container overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="pt-4 pb-6 border-t border-subtle space-y-1">
            {[
              { id: 'benefits', label: t('header.nav.benefits') },
              { id: 'how-it-works', label: t('header.nav.howItWorks') },
              { id: 'demo', label: t('header.nav.demo') },
              { id: 'where-we-fit', label: t('header.nav.whereWeFit') },
              { id: 'faq', label: t('header.nav.faq') }
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => smoothScrollTo(id)}
                className={`w-full text-left px-4 py-3 font-inter text-sm font-medium transition-colors rounded-md ${
                  activeSection === id
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-primary hover:bg-card'
                }`}
              >
                {label}
              </button>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4">
              <Button
                className="w-full"
                onClick={() => smoothScrollTo('cta')}
              >
                {t('header.cta')}
              </Button>
            </div>

            {/* Mobile Social Links */}
            <div className="flex items-center justify-center space-x-3 pt-6">
              <a
                href="https://discord.gg/sxhdEEWups"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-card text-muted-foreground hover:text-primary transition-colors rounded-md"
              >
                <DiscordIcon className="h-5 w-5" />
                <span className="text-sm font-medium">Discord</span>
              </a>
              <a
                href="https://www.linkedin.com/company/the-architech-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-card text-muted-foreground hover:text-primary transition-colors rounded-md"
              >
                <Linkedin className="h-5 w-5" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
