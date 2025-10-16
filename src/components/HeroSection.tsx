import { Terminal, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BrandedButton } from "@/components/ui/branded-button";
import { BRANDING } from "@/lib/branding";
import { useTranslation } from "@/hooks/useTranslation";

const HeroSection = () => {
  const { t } = useTranslation();
  const [isInView, setIsInView] = useState(false);

  // Detect if hero section is in view for scroll animations
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Musical Grid Background */}
      <div className="absolute inset-0 musical-grid" />

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 w-32 h-32 border-l-2 border-t-2 border-primary/20 z-10" />
      <div className="absolute top-8 right-8 w-32 h-32 border-r-2 border-t-2 border-primary/20 z-10" />
      <div className="absolute bottom-8 left-8 w-32 h-32 border-l-2 border-b-2 border-primary/20 z-10" />
      <div className="absolute bottom-8 right-8 w-32 h-32 border-r-2 border-b-2 border-primary/20 z-10" />

      <div className="container px-4 md:px-6 relative z-20">
        <div className="flex flex-col items-center text-center gap-8 max-w-5xl mx-auto">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
           <img src="/logo-removebg.png" alt="The Architech" className="w-12 h-12" />
            <span className="text-2xl font-bold tracking-tight">The Architech</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={BRANDING.typography.headline.large}
          >
            Compose applications at the <span className="text-primary">speed of thought</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={BRANDING.typography.body.large}
          >
            One command. Complete architecture. Production ready.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <BrandedButton 
              variant="accent"
              onClick={() => smoothScrollTo("cta")}
              icon={<Terminal className="h-5 w-5" />}
            >
              Try the CLI
            </BrandedButton>
            <BrandedButton
              variant="outline"
              onClick={() => smoothScrollTo("cta")}
              icon={<Sparkles className="h-5 w-5" />}
            >
              Join Waitlist
            </BrandedButton>
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default HeroSection;