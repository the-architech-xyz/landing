import { useState, useEffect } from "react";
import { ArrowUp, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-surface border-t border-architech-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-electric rounded-lg flex items-center justify-center shadow-electric">
                <span className="text-white font-black text-lg">A</span>
              </div>
              <div>
                <span className="text-xl font-bold text-foreground">The Architech</span>
                <div className="text-sm text-muted-foreground">Alpha Preview</div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-6">
              Liberating developers from configuration hell, one modular architecture at a time. 
              Build the magic, skip the setup.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://github.com/yourhandle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-button p-3 rounded-xl hover:shadow-glow transition-all duration-300 group"
              >
                <Github className="h-5 w-5 text-architech-electric group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="https://twitter.com/yourhandle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-button p-3 rounded-xl hover:shadow-glow transition-all duration-300 group"
              >
                <Twitter className="h-5 w-5 text-architech-electric group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="https://linkedin.com/in/yourhandle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-button p-3 rounded-xl hover:shadow-glow transition-all duration-300 group"
              >
                <Linkedin className="h-5 w-5 text-architech-electric group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Product</h3>
            <div className="space-y-3">
              <a href="#benefits" className="block text-muted-foreground hover:text-architech-electric transition-colors">
                Benefits
              </a>
              <a href="#how-it-works" className="block text-muted-foreground hover:text-architech-electric transition-colors">
                How It Works
              </a>
              <a href="#faq" className="block text-muted-foreground hover:text-architech-electric transition-colors">
                FAQ
              </a>
              <a href="#team" className="block text-muted-foreground hover:text-architech-electric transition-colors">
                Team
              </a>
            </div>
          </div>

          {/* Status */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Status</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-success rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">Alpha Development</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-aurora rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <span className="text-sm text-muted-foreground">2,847 on Waitlist</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-sunset rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <span className="text-sm text-muted-foreground">Q2 2025 Beta</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-architech-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 The Architech. All rights reserved. Building the future of development.
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-architech-electric transition-colors">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-architech-electric transition-colors">
              Terms
            </a>
            <a href="#" className="text-muted-foreground hover:text-architech-electric transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-electric rounded-full flex items-center justify-center shadow-electric hover:shadow-glow transition-all duration-300 ${
          showBackToTop 
            ? 'translate-y-0 opacity-100 scale-100' 
            : 'translate-y-16 opacity-0 scale-75 pointer-events-none'
        }`}
      >
        <ArrowUp className="h-5 w-5 text-white" />
      </button>
    </footer>
  );
};

export default Footer;