import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ArchitectsCanvas from "@/components/ArchitectsCanvas";
import UseCaseShowcase from "@/components/UseCaseShowcase";
import EcosystemSection from "@/components/EcosystemSection";
import WhereWeFitSection from "@/components/WhereWeFitSection";
import FAQSection from "@/components/FAQSection";
import TeamSection from "@/components/TeamSection";
import PlatformVisionSection from "@/components/PlatformVisionSection";
import SimpleCTASection from "@/components/SimpleCTASection";
import Footer from "@/components/Footer";

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
      <UseCaseShowcase />
      <ArchitectsCanvas />
      <EcosystemSection />
      <WhereWeFitSection />
      <FAQSection />
      <TeamSection />
      <PlatformVisionSection />
      <SimpleCTASection />
      <Footer />
    </div>
  );
};

export default Index;
