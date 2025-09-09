import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, Zap, Linkedin } from "lucide-react";
import DiscordIcon from "@/components/DiscordIcon";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "@/hooks/useTranslation";

const Header = () => {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useState(true);
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
      const sections = ['hero', 'benefits', 'how-it-works', 'use-cases', 'where-we-fit', 'faq'];
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
      // Don't close if clicking on mobile menu container OR mobile menu button
      if (mobileMenuOpen && 
          !target.closest('.mobile-menu-container') && 
          !target.closest('.mobile-menu-button')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('themeChanged'));
  };

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/95 backdrop-blur-xl shadow-glass border-b border-architech-border' 
        : 'bg-background/80 backdrop-blur-lg border-b border-border'
    }`}>
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-electric transition-all duration-300" 
           style={{ width: `${scrollProgress}%` }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => smoothScrollTo('hero')}>
            <div className="relative">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <img 
                  src={darkMode ? "/logo-removebg.png" : "/logo.png"}
                  alt={t('common.alt.logo')} 
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold text-foreground group-hover:text-transparent group-hover:bg-gradient-electric group-hover:bg-clip-text transition-all duration-300">
                The Architech
              </span>
             
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button 
              onClick={() => smoothScrollTo('benefits')}
              className={`transition-all duration-300 hover:scale-105 font-medium text-sm lg:text-base ${
                activeSection === 'benefits' 
                  ? 'text-architech-electric' 
                  : 'text-muted-foreground hover:text-architech-electric'
              }`}
            >
              {t('header.nav.benefits')}
            </button>
            <button 
              onClick={() => smoothScrollTo('how-it-works')}
              className={`transition-all duration-300 hover:scale-105 font-medium text-sm lg:text-base ${
                activeSection === 'how-it-works' 
                  ? 'text-architech-electric' 
                  : 'text-muted-foreground hover:text-architech-electric'
              }`}
            >
              {t('header.nav.howItWorks')}
            </button>
            <button 
              onClick={() => smoothScrollTo('demo')}
              className={`transition-all duration-300 hover:scale-105 font-medium text-sm lg:text-base ${
                activeSection === 'use-cases' 
                  ? 'text-architech-electric' 
                  : 'text-muted-foreground hover:text-architech-electric'
              }`}
            >
              {t('header.nav.demo')}
            </button>
            <button 
              onClick={() => smoothScrollTo('where-we-fit')}
              className={`transition-all duration-300 hover:scale-105 font-medium text-sm lg:text-base ${
                activeSection === 'where-we-fit' 
                  ? 'text-architech-electric' 
                  : 'text-muted-foreground hover:text-architech-electric'
              }`}
            >
              {t('header.nav.whereWeFit')}
            </button>
            <button 
              onClick={() => smoothScrollTo('faq')}
              className={`transition-all duration-300 hover:scale-105 font-medium text-sm lg:text-base ${
                activeSection === 'faq' 
                  ? 'text-architech-electric' 
                  : 'text-muted-foreground hover:text-architech-electric'
              }`}
            >
              {t('header.nav.faq')}
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Language Switcher */}
            <div className="relative">
              <LanguageSwitcher />
            </div>
            
            {/* Social Links - High Visibility */}
            <div className="hidden md:flex items-center space-x-2">
              <a
                href="https://discord.gg/sxhdEEWups"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-architech-electric/10 hover:bg-architech-electric/20 text-architech-electric hover:text-white transition-all duration-300 hover:scale-110 group"
                title={t('social.discord.title')}
              >
                <DiscordIcon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/company/the-architech-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-architech-electric/10 hover:bg-architech-electric/20 text-architech-electric hover:text-white transition-all duration-300 hover:scale-110 group"
                title={t('social.linkedin.title')}
              >
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>

            {/* <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="text-muted-foreground hover:text-architech-electric hover:bg-architech-electric/10 transition-all duration-300 hover:scale-110 w-10 h-10 sm:w-11 sm:h-11"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button> */}
            
            <Button 
              className="hidden md:inline-flex bg-gradient-electric hover:shadow-electric text-white font-semibold group relative overflow-hidden text-sm lg:text-base px-4 sm:px-6 py-2 sm:py-2"
              onClick={() => smoothScrollTo('cta')}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              {t('header.cta')}
            </Button>

            {/* Mobile menu button */}
            <button
              type="button"
              className="mobile-menu-button md:hidden hover:bg-architech-electric/10 transition-all duration-300 w-10 h-10 flex items-center justify-center rounded-md"
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

        {/* Enhanced Mobile Navigation */}
        <div className={`md:hidden mobile-menu-container overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="mt-4 pb-4 border-t border-architech-border pt-4">
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => {
                  smoothScrollTo('benefits');
                  setMobileMenuOpen(false);
                }}
                className={`text-left transition-colors font-medium py-3 px-4 rounded-lg text-base ${
                  activeSection === 'benefits'
                    ? 'text-architech-electric bg-architech-electric/10'
                    : 'text-muted-foreground hover:text-architech-electric hover:bg-architech-electric/5'
                }`}
              >
                {t('header.nav.benefits')}
              </button>
              <button 
                onClick={() => {
                  smoothScrollTo('how-it-works');
                  setMobileMenuOpen(false);
                }}
                className={`text-left transition-colors font-medium py-3 px-4 rounded-lg text-base ${
                  activeSection === 'how-it-works'
                    ? 'text-architech-electric bg-architech-electric/10'
                    : 'text-muted-foreground hover:text-architech-electric hover:bg-architech-electric/5'
                }`}
              >
                {t('header.nav.howItWorks')}
              </button>
              <button 
                onClick={() => {
                  smoothScrollTo('demo');
                  setMobileMenuOpen(false);
                }}
                className={`text-left transition-colors font-medium py-3 px-4 rounded-lg text-base ${
                  activeSection === 'use-cases'
                    ? 'text-architech-electric bg-architech-electric/10'
                    : 'text-muted-foreground hover:text-architech-electric hover:bg-architech-electric/5'
                }`}
              >
                {t('header.nav.demo')}
              </button>
              <button 
                onClick={() => {
                  smoothScrollTo('where-we-fit');
                  setMobileMenuOpen(false);
                }}
                className={`text-left transition-colors font-medium py-3 px-4 rounded-lg text-base ${
                  activeSection === 'where-we-fit'
                    ? 'text-architech-electric bg-architech-electric/10'
                    : 'text-muted-foreground hover:text-architech-electric hover:bg-architech-electric/5'
                }`}
              >
                {t('header.nav.whereWeFit')}
              </button>
              <button 
                onClick={() => {
                  smoothScrollTo('faq');
                  setMobileMenuOpen(false);
                }}
                className={`text-left transition-colors font-medium py-3 px-4 rounded-lg text-base ${
                  activeSection === 'faq'
                    ? 'text-architech-electric bg-architech-electric/10'
                    : 'text-muted-foreground hover:text-architech-electric hover:bg-architech-electric/5'
                }`}
              >
                {t('header.nav.faq')}
              </button>
              
           
              
              <Button 
                className="mt-4 mx-4 bg-gradient-electric hover:shadow-electric text-white font-semibold py-3 text-base"
                onClick={() => {
                  smoothScrollTo('cta');
                  setMobileMenuOpen(false);
                }}
              >
                {t('header.cta')}
              </Button>
              
              {/* Mobile Social Links */}
              <div className="flex items-center justify-center space-x-4 mt-6 px-4">
                <a
                  href="https://discord.gg/sxhdEEWups"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-architech-electric/10 hover:bg-architech-electric/20 text-architech-electric hover:text-white transition-all duration-300"
                >
                  <DiscordIcon className="h-5 w-5" />
                  <span className="text-sm font-medium">Discord</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/the-architech-ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-architech-electric/10 hover:bg-architech-electric/20 text-architech-electric hover:text-white transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;