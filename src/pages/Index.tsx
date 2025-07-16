import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FAQSection from "@/components/FAQSection";
import TeamSection from "@/components/TeamSection";
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
      <HowItWorksSection />
      <FAQSection />
      <TeamSection />
      <SimpleCTASection />
      <Footer />
    </div>
  );
};

export default Index;
