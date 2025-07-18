import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, Zap } from "lucide-react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle scroll effect and progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      setScrolled(scrollTop > 20);
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (mobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
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
                  src="/logo.png" 
                  alt="The Architech Logo" 
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold text-foreground group-hover:text-transparent group-hover:bg-gradient-electric group-hover:bg-clip-text transition-all duration-300">
                The Architech
              </span>
              <div className="text-xs text-muted-foreground">Alpha Preview</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button 
              onClick={() => smoothScrollTo('benefits')}
              className="text-muted-foreground hover:text-architech-electric transition-all duration-300 hover:scale-105 font-medium text-sm lg:text-base"
            >
              Benefits
            </button>
            <button 
              onClick={() => smoothScrollTo('how-it-works')}
              className="text-muted-foreground hover:text-architech-electric transition-all duration-300 hover:scale-105 font-medium text-sm lg:text-base"
            >
              How It Works
            </button>
            <button 
              onClick={() => smoothScrollTo('faq')}
              className="text-muted-foreground hover:text-architech-electric transition-all duration-300 hover:scale-105 font-medium text-sm lg:text-base"
            >
              FAQ
            </button>
            <button 
              onClick={() => smoothScrollTo('team')}
              className="text-muted-foreground hover:text-architech-electric transition-all duration-300 hover:scale-105 font-medium text-sm lg:text-base"
            >
              Team
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3 sm:space-x-4">
           

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="text-muted-foreground hover:text-architech-electric hover:bg-architech-electric/10 transition-all duration-300 hover:scale-110 w-10 h-10 sm:w-11 sm:h-11"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Button 
              className="hidden md:inline-flex bg-gradient-electric hover:shadow-electric text-white font-semibold group relative overflow-hidden text-sm lg:text-base px-4 sm:px-6 py-2 sm:py-2"
              onClick={() => smoothScrollTo('cta')}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              Join Waitlist
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-architech-electric/10 transition-all duration-300 w-10 h-10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`md:hidden mobile-menu-container overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="mt-4 pb-4 border-t border-architech-border pt-4">
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => smoothScrollTo('benefits')}
                className="text-left text-muted-foreground hover:text-architech-electric transition-colors font-medium py-3 px-4 rounded-lg hover:bg-architech-electric/5 text-base"
              >
                Benefits
              </button>
              <button 
                onClick={() => smoothScrollTo('how-it-works')}
                className="text-left text-muted-foreground hover:text-architech-electric transition-colors font-medium py-3 px-4 rounded-lg hover:bg-architech-electric/5 text-base"
              >
                How It Works
              </button>
              <button 
                onClick={() => smoothScrollTo('faq')}
                className="text-left text-muted-foreground hover:text-architech-electric transition-colors font-medium py-3 px-4 rounded-lg hover:bg-architech-electric/5 text-base"
              >
                FAQ
              </button>
              <button 
                onClick={() => smoothScrollTo('team')}
                className="text-left text-muted-foreground hover:text-architech-electric transition-colors font-medium py-3 px-4 rounded-lg hover:bg-architech-electric/5 text-base"
              >
                Team
              </button>
              
           
              
              <Button 
                className="mt-4 mx-4 bg-gradient-electric hover:shadow-electric text-white font-semibold py-3 text-base"
                onClick={() => smoothScrollTo('cta')}
              >
                Join Waitlist
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;