import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ArchitectsCanvas from "@/components/ArchitectsCanvas";
import AudienceSection from "@/components/AudienceSection";
import BenefitsSectionSimplified from "@/components/BenefitsSectionSimplified";
import WhereWeFitSection from "@/components/WhereWeFitSection";
import FAQSection from "@/components/FAQSection";
import SimpleCTASection from "@/components/SimpleCTASection";
import Footer from "@/components/Footer";
import FloatingSocialWidget from "@/components/FloatingSocialWidget";
import HowItWorksSection from "@/components/HowItWorksSection";
import { useTranslation } from "@/hooks/useTranslation";
import ProductsSection from "@/components/ProductsSection";
/**
 * THE ARCHITECH - MAIN LANDING PAGE
 * Redesigned with "Technical Elegance" design system
 */

const Index = () => {
  const { t } = useTranslation();

  useEffect(() => {
    // Set dark mode by default (principal mode)
    document.documentElement.classList.add('dark');
  }, []);

  const handleSkipToMain = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.focus();
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      {/* Accessibility: Skip to main content link */}
      <a 
        href="#hero" 
        onClick={handleSkipToMain}
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-electric text-white px-4 py-2 z-50 font-inter text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-electric focus:ring-offset-2 focus:ring-offset-background"
      >
        {t('accessibility.skipToMain')}
      </a>
      
      <Navigation />
      <HeroSection />
      <ArchitectsCanvas />
      <AudienceSection />
      <BenefitsSectionSimplified />
      <HowItWorksSection />
      <ProductsSection />
      <WhereWeFitSection />
      <FAQSection />
      <SimpleCTASection />
      <Footer />
      <FloatingSocialWidget />
    </div>
  );
};

export default Index;
