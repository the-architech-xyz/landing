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

  const promptText = "A collaborative project management app with JWT auth and a modern design system";
  
  const modules = [
    { name: "Auth Service", color: "bg-gradient-electric", delay: 0 },
    { name: "Database", color: "bg-gradient-forest", delay: 200 },
    { name: "API Gateway", color: "bg-gradient-ocean", delay: 400 },
    { name: "UI Components", color: "bg-gradient-sunset", delay: 600 },
    { name: "CI/CD Pipeline", color: "bg-gradient-creative", delay: 800 },
    { name: "Monitoring", color: "bg-gradient-aurora", delay: 1000 }
  ];

  useEffect(() => {
    if (currentText.length < promptText.length) {
      const timer = setTimeout(() => {
        setCurrentText(promptText.slice(0, currentText.length + 1));
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
      const timer = setTimeout(() => {
        setShowModules(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [currentText, promptText]);

  // Reset animation every 8 seconds
  useEffect(() => {
    const resetTimer = setInterval(() => {
      setCurrentText("");
      setShowModules(false);
      setIsTyping(true);
    }, 12000); // Increased to 12 seconds for better viewing time
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
      
      <div className="container mx-auto px-6 py-20 relative z-20">
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          
          {/* Hero Message */}
          <motion.div className="space-y-6" variants={fadeInUp}>
            <motion.h1 
              className="text-5xl lg:text-7xl font-black leading-tight tracking-tight"
              variants={fadeInDown}
            >
              <motion.span className="text-foreground">Skip the Setup.</motion.span>
              <br />
              <motion.span className="text-transparent bg-gradient-electric bg-clip-text">Build the Magic.</motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
              variants={fadeInUp}
            >
              Stop rebuilding authentication, databases, and deployment pipelines. 
              The Architech assembles proven modules so you can focus on what makes your product unique.
            </motion.p>
          </motion.div>

          {/* Primary CTA - Prominently displayed */}
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" variants={fadeInUp}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-gradient-electric hover:shadow-electric text-white font-semibold px-8 py-4 group" onClick={() => smoothScrollTo("cta")}>
                Get Early Access
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }}>
              <Button 
                variant="outline" 
                size="lg" 
                className="glass-button border-architech-border px-8 py-4"
                onClick={() => setIsContactModalOpen(true)}
              >
                Book Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Live Demo Card */}
          <motion.div 
            className="max-w-2xl mx-auto mt-16"
            variants={scaleIn}
          >
            <div className="glass-card rounded-2xl p-8 border border-architech-border">
              <div className="space-y-6">
                <div className="text-left">
                  <div className="text-sm text-muted-foreground mb-2">Describe your app:</div>
                  <div className="bg-muted/30 rounded-lg p-4 min-h-[60px] font-mono text-sm border">
                    <span className="text-architech-electric">{currentText}</span>
                    {isTyping && <span className="animate-pulse">|</span>}
                  </div>
                </div>

                {showModules && (
                  <motion.div 
                    className="space-y-3"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <div className="text-sm text-muted-foreground">Selected modules:</div>
                    <motion.div 
                      className="grid grid-cols-2 gap-3"
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                    >
                      {modules.map((module, index) => (
                        <motion.div
                          key={module.name}
                          className={`${module.color} text-white px-4 py-2 rounded-lg text-sm font-medium text-center shadow-lg`}
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

      {/* Clean scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group z-30" 
        onClick={scrollToNext}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="glass-button rounded-full p-3 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
          <ChevronDown className="h-5 w-5 text-architech-electric" />
        </div>
      </motion.div>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </section>
  );
};

export default HeroSection;