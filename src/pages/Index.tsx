import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import ArchitectsCanvas from "@/components/ArchitectsCanvas";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSimplifiedSection from "@/components/HowItWorksSimplifiedSection";
import WhereWeFitSection from "@/components/WhereWeFitSection";
import FAQSection from "@/components/FAQSection";
import SimpleCTASection from "@/components/SimpleCTASection";
import Footer from "@/components/Footer";
import FloatingSocialWidget from "@/components/FloatingSocialWidget";
import HowItWorksSection from "@/components/HowItWorksSection";

const Index = () => {
  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Header />
      <HeroSection />
      {/* <SocialProofSection /> */}
      <ArchitectsCanvas />
      <BenefitsSection />
      <HowItWorksSection />
      {/* <HowItWorksSimplifiedSection /> */}
      <WhereWeFitSection />
      <FAQSection />
      <SimpleCTASection />
      <Footer />
      <FloatingSocialWidget />
    </div>
  );
};

export default Index;
