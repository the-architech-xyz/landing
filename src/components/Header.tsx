import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, Zap, ArrowRight } from "lucide-react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll effect and progress with section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      setScrolled(scrollTop > 20);
      setScrollProgress(progress);

      // Detect active section
      const sections = ['hero', 'benefits', 'how-it-works', 'faq', 'team', 'cta'];
      const sectionElements = sections.map(id => ({
        id,
        element: document.getElementById(id),
        offset: document.getElementById(id)?.offsetTop || 0
      }));

      const currentSection = sectionElements
        .filter(section => section.element)
        .find(section => {
          const rect = section.element!.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'benefits', label: 'Benefits' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'faq', label: 'FAQ' },
    { id: 'team', label: 'Team' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ${
      scrolled 
        ? 'bg-background/95 backdrop-blur-xl shadow-glass border-b border-architech-border/50' 
        : 'bg-background/80 backdrop-blur-lg border-b border-transparent'
    }`}>
      {/* Enhanced Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-electric transition-all duration-300 shadow-glow" 
           style={{ width: `${scrollProgress}%` }}></div>
      
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo with hover effects */}
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => smoothScrollTo('hero')}>
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-electric rounded-xl flex items-center justify-center shadow-electric group-hover:shadow-glow transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <span className="text-white font-black text-xl">A</span>
              </div>
              {/* Enhanced pulsing indicator */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-success rounded-full animate-pulse shadow-glow">
                <div className="absolute inset-1 bg-white rounded-full animate-ping opacity-75"></div>
              </div>
            </div>
            <div>
              <span className="text-xl font-bold text-foreground group-hover:text-architech-electric transition-all duration-500">
                The Architech
              </span>
              <div className="text-xs text-muted-foreground font-medium">Alpha Preview</div>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => smoothScrollTo(item.id)}
                className={`relative text-sm font-medium transition-all duration-300 hover:scale-105 group ${
                  activeSection === item.id
                    ? 'text-architech-electric'
                    : 'text-muted-foreground hover:text-architech-electric'
                }`}
              >
                {item.label}
                {/* Active indicator */}
                <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-architech-electric transition-all duration-300 ${
                  activeSection === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}></div>
                {/* Hover underline */}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-electric transition-all duration-300 group-hover:w-full"></div>
              </button>
            ))}
          </nav>

          {/* Enhanced Actions */}
          <div className="flex items-center space-x-4">
            {/* Enhanced Early Access Badge */}
            <div className="hidden lg:flex items-center gap-2 px-4 py-2 glass-card rounded-full text-xs font-semibold text-architech-electric border border-architech-electric/20 hover:shadow-glow transition-all duration-300 cursor-pointer group">
              <Zap className="h-3 w-3 animate-pulse" />
              <span>Early Access</span>
              <div className="w-2 h-2 rounded-full bg-architech-electric animate-pulse"></div>
            </div>

            {/* Enhanced Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="text-muted-foreground hover:text-architech-electric hover:bg-architech-electric/10 transition-all duration-500 hover:scale-110 hover:rotate-12 relative group"
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-electric opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            {/* Enhanced CTA Button */}
            <Button 
              className="hidden md:inline-flex bg-gradient-electric hover:shadow-electric text-white font-semibold group relative overflow-hidden border border-architech-electric/20 hover:scale-105 transition-all duration-300"
              onClick={() => smoothScrollTo('cta')}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10">Join Waitlist</span>
              <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>

            {/* Enhanced Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-architech-electric/10 transition-all duration-300 hover:scale-110 relative group"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-electric opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative z-10">
                {mobileMenuOpen ? (
                  <X className="h-5 w-5 rotate-90 transition-transform duration-300" />
                ) : (
                  <Menu className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                )}
              </div>
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="mt-6 pb-6 border-t border-architech-border/50 pt-6">
            <div className="flex flex-col space-y-6">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => smoothScrollTo(item.id)}
                  className={`text-left font-medium transition-all duration-300 hover:translate-x-2 group flex items-center justify-between ${
                    activeSection === item.id
                      ? 'text-architech-electric'
                      : 'text-muted-foreground hover:text-architech-electric'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span>{item.label}</span>
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </button>
              ))}
              
              {/* Mobile CTA */}
              <Button 
                className="mt-6 bg-gradient-electric hover:shadow-electric text-white font-semibold group relative overflow-hidden"
                onClick={() => smoothScrollTo('cta')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative z-10">Join Waitlist</span>
                <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;