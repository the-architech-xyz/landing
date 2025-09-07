import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInDown, staggerContainer, scaleIn, floating, defaultViewport } from "@/lib/animations";
import ContactModal from "@/components/ContactModal";

const HeroSection = () => {
  const [currentText, setCurrentText] = useState("");
  const [showModules, setShowModules] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const promptText = "A collaborative project management app with JWT auth and a modern design system";
  
  const modules = [
    { name: "Auth Service", color: "bg-gradient-electric", delay: 0 },
    { name: "Database", color: "bg-gradient-forest", delay: 200 },
    { name: "API Gateway", color: "bg-gradient-ocean", delay: 400 },
    { name: "UI Components", color: "bg-gradient-sunset", delay: 600 },
    { name: "CI/CD Pipeline", color: "bg-gradient-creative", delay: 800 },
    { name: "Monitoring", color: "bg-gradient-aurora", delay: 1000 }
  ];

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Detect if hero section is in view to prevent animation scroll issues
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    
    const heroElement = document.getElementById('hero');
    if (heroElement) {
      observer.observe(heroElement);
    }
    
    return () => {
      if (heroElement) {
        observer.unobserve(heroElement);
      }
    };
  }, []);

  useEffect(() => {
    if (currentText.length < promptText.length) {
      const timer = setTimeout(() => {
        setCurrentText(promptText.slice(0, currentText.length + 1));
      }, isMobile ? 80 : 50); // Slower typing on mobile for better readability
      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
      const timer = setTimeout(() => {
        setShowModules(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [currentText, promptText, isMobile]);

  // Reset animation every 12 seconds
  useEffect(() => {
    const resetTimer = setInterval(() => {
      setCurrentText("");
      setShowModules(false);
      setIsTyping(true);
    }, 12000);
    return () => clearInterval(resetTimer);
  }, []);

  const scrollToNext = () => {
    const element = document.getElementById('benefits');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

   const smoothScrollTo = (elementId: string) => {
     const element = document.getElementById(elementId);
     if (element) {
       element.scrollIntoView({ behavior: "smooth" });
     }
   };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-3 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 relative z-20">
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          
          {/* Hero Message */}
          <motion.div className="space-y-4 sm:space-y-6" variants={fadeInUp}>
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-7xl font-satoshi font-black leading-tight tracking-tight px-2"
              variants={fadeInDown}
            >
              <motion.span className="text-foreground">Stop Writing Boilerplate.</motion.span>
              <br />
              <motion.span className="text-foreground">
                <span className="text-transparent bg-gradient-brand bg-clip-text"> Start Architecting.</span>
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-inter font-medium px-4"
              variants={fadeInUp}
            >
              Open-source CLI that transforms blueprints into production-ready code. Start with battle-tested modules, customize as needed, deploy anywhere.
            </motion.p>
          </motion.div>

          {/* Primary CTA - Enhanced for mobile */}
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4" variants={fadeInUp}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="bg-gradient-electric hover:shadow-electric text-white font-semibold px-8 py-4 group w-full sm:w-auto h-14 sm:h-auto text-base sm:text-sm" 
                onClick={() => smoothScrollTo("cta")}
              >
                Join Waitlist
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="lg" 
                className="glass-button border-architech-border px-8 py-4 w-full sm:w-auto h-14 sm:h-auto text-base sm:text-sm"
                onClick={() => setIsContactModalOpen(true)}
              >
                Book Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Live Demo Card - Mobile optimized */}
          <motion.div 
            className="max-w-2xl mx-auto mt-12 sm:mt-16 px-4"
            variants={scaleIn}
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-architech-border">
              <div className="space-y-4 sm:space-y-6">
                <div className="text-left">
                  <div className="text-sm text-muted-foreground mb-2">Describe your app:</div>
                  <div className="bg-muted/30 rounded-lg p-3 sm:p-4 min-h-[60px] font-mono text-sm border">
                    <span className="text-architech-electric">{currentText}</span>
                    {isTyping && <span className="animate-pulse">|</span>}
                  </div>
                </div>

                {showModules && (isInView || !isMobile) && (
                  <motion.div 
                    className="space-y-3"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <div className="text-sm text-muted-foreground">Selected modules:</div>
                    <motion.div 
                      className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                    >
                      {modules.map((module, index) => (
                        <motion.div
                          key={module.name}
                          className={`${module.color} text-white px-4 py-3 sm:py-2 rounded-lg text-sm font-medium text-center shadow-lg`}
                          variants={scaleIn}
                          whileHover={{ scale: 1.05 }}
                        >
                          {module.name}
                        </motion.div>
                      ))}
                    </motion.div>
                    
                    <motion.div 
                      className="text-center pt-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                    >
                      <div className="text-sm text-muted-foreground">
                        <span className="text-architech-electric font-semibold">6 modules</span> assembled in 
                        <span className="text-architech-electric font-semibold"> 2.3 seconds</span>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator - More touch-friendly */}
      <motion.div 
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group z-30" 
        onClick={scrollToNext}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="glass-button rounded-full p-4 sm:p-3 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
          <ChevronDown className="h-6 w-6 sm:h-5 sm:w-5 text-architech-electric" />
        </div>
      </motion.div>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </section>
  );
};

export default HeroSection;