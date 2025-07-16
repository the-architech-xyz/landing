import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import LiveDemoSection from "@/components/LiveDemoSection";
import SolutionSection from "@/components/SolutionSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import RevolutionaryVisionSection from "@/components/RevolutionaryVisionSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
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
      <ProblemSection />
      <LiveDemoSection />
      <SolutionSection />
      <TargetAudienceSection />
      <HowItWorksSection />
      <BenefitsSection />
      <RevolutionaryVisionSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
