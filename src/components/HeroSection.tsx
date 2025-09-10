import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInDown, staggerContainer, scaleIn, floating, defaultViewport } from "@/lib/animations";
import ContactModal from "@/components/ContactModal";
import AnimatedBlueprint from "@/components/AnimatedBlueprint";
import { useTranslation } from "@/hooks/useTranslation";

const HeroSection = () => {
  const { t } = useTranslation();
  const [currentText, setCurrentText] = useState("");
  const [showModules, setShowModules] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const promptText = t('hero.prompt');
  
  const modules = [
    { name: t('hero.modules.authService'), color: "bg-gradient-electric", delay: 0 },
    { name: t('hero.modules.database'), color: "bg-gradient-forest", delay: 200 },
    { name: t('hero.modules.apiGateway'), color: "bg-gradient-ocean", delay: 400 },
    { name: t('hero.modules.uiComponents'), color: "bg-gradient-sunset", delay: 600 },
    { name: t('hero.modules.cicdPipeline'), color: "bg-gradient-creative", delay: 800 },
    { name: t('hero.modules.monitoring'), color: "bg-gradient-aurora", delay: 1000 }
  ];

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Detect if hero section is in view to prevent animation scroll issues
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // More sensitive threshold for mobile to prevent scroll jumps
        const threshold = isMobile ? 0.3 : 0.5;
        setIsInView(entry.isIntersecting && entry.intersectionRatio >= threshold);
      },
      { 
        threshold: [0.1, 0.3, 0.5, 0.7, 0.9],
        rootMargin: isMobile ? '-10% 0px -10% 0px' : '0px'
      }
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
  }, [isMobile]);

  // Detect scrolling to prevent animations during scroll on mobile
  useEffect(() => {
    if (!isMobile) return;

    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isMobile]);

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
    const element = document.getElementById('interactive-demo');
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

      {/* Animated Blueprint Background */}
      <AnimatedBlueprint className="z-0" />
      
      <div className="container mx-auto px-4 sm:px-6 pt-24 pb-16 sm:py-20 relative z-20">
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          
          {/* Hero Message - Minimalist */}
          <motion.div className="space-y-8 sm:space-y-12" variants={fadeInUp}>
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-8xl font-satoshi font-black leading-tight tracking-tight px-2"
              variants={fadeInDown}
            >
              <motion.span className="text-foreground">{t('hero.title.line1')}</motion.span>
              <br />
              <motion.span className="text-foreground">
                <span className="text-transparent bg-gradient-brand bg-clip-text">{t('hero.title.line2')}</span>
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-inter font-medium px-4"
              variants={fadeInUp}
            >
              {t('hero.subtitle')}
            </motion.p>
          </motion.div>

          {/* Single CTA - Centered */}
          <motion.div className="flex justify-center items-center px-4 w-full" variants={fadeInUp}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                className="bg-gradient-electric hover:shadow-electric text-white font-semibold px-12 py-6 text-lg group w-full max-w-xs" 
                onClick={() => smoothScrollTo("interactive-demo")}
              >
                {t('hero.cta.primary')}
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>

      {/* Enhanced scroll indicator - Centered */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group z-30" 
        onClick={scrollToNext}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="glass-button rounded-full p-4 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
          <ChevronDown className="h-6 w-6 text-architech-electric" />
        </div>
      </motion.div>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </section>
  );
};

export default HeroSection;