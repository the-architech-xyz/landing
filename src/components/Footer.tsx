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
              <div className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <img
                  src="/logo.png"
                  alt="The Architech Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-foreground">
                  The Architech
                </span>
                <div className="text-sm text-muted-foreground">
                  Alpha Preview
                </div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-6">
              Liberating developers from configuration hell, one modular
              architecture at a time. Build the magic, skip the setup.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/antoinesrvt/" // Updated with real LinkedIn
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button p-3 rounded-xl hover:shadow-glow transition-all duration-300 group"
              >
                <Linkedin className="h-5 w-5 text-architech-electric group-hover:scale-110 transition-transform duration-300" />
              </a>
              
              {/* Contact Email */}
              <a
                href="mailto:antoine.srvt@gmail.com"
                className="glass-button p-3 rounded-xl hover:shadow-glow transition-all duration-300 group"
              >
                <div className="h-5 w-5 text-architech-electric group-hover:scale-110 transition-transform duration-300 flex items-center justify-center text-xs font-bold">
                  @
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Product
            </h3>
            <div className="space-y-3">
              <a
                href="#benefits"
                className="block text-muted-foreground hover:text-architech-electric transition-colors"
              >
                Benefits
              </a>
              <a
                href="#how-it-works"
                className="block text-muted-foreground hover:text-architech-electric transition-colors"
              >
                How It Works
              </a>
              <a
                href="#faq"
                className="block text-muted-foreground hover:text-architech-electric transition-colors"
              >
                FAQ
              </a>
              <a
                href="#team"
                className="block text-muted-foreground hover:text-architech-electric transition-colors"
              >
                Team
              </a>
            </div>
          </div>

          {/* Status */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Status
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-muted-foreground">
                  Alpha Development
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-architech-electric rounded-full"></div>
                <span className="text-sm text-muted-foreground">
                  Open Waitlist
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-architech-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 The Architech. All rights reserved. Building the future of
            development.
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a
              href="#"
              className="text-muted-foreground hover:text-architech-electric transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-architech-electric transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-architech-electric transition-colors"
            >
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
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-16 opacity-0 scale-75 pointer-events-none"
        }`}
      >
        <ArrowUp className="h-5 w-5 text-white" />
      </button>
    </footer>
  );
};

export default Footer;