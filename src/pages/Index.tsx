import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ArchitectsCanvas from "@/components/ArchitectsCanvas";
import EcosystemSection from "@/components/EcosystemSection";
import WhereWeFitSection from "@/components/WhereWeFitSection";
import FAQSection from "@/components/FAQSection";
import TeamSection from "@/components/TeamSection";
import PlatformVisionSection from "@/components/PlatformVisionSection";
import SimpleCTASection from "@/components/SimpleCTASection";
import Footer from "@/components/Footer";
import FloatingSocialWidget from "@/components/FloatingSocialWidget";

const Index = () => {
  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <ArchitectsCanvas />
      <EcosystemSection />
      <WhereWeFitSection />
      <FAQSection />
      {/* <TeamSection /> */}
      {/* <PlatformVisionSection /> */}
      <SimpleCTASection />
      <Footer />
      <FloatingSocialWidget />
    </div>
  );
};

export default Index;
