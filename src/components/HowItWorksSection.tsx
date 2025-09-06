import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn, defaultViewport } from "@/lib/animations";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    if (!sectionRef.current || !stepsContainerRef.current) return;

    // Create the main timeline with proper ScrollTrigger
    // Now the trigger is the steps container, not the entire section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: stepsContainerRef.current, // Changed from sectionRef to stepsContainerRef
        start: "top center", // Start when steps container reaches center of viewport
        end: "+=150%", // Pin for 150% of viewport height
        pin: true,
        pinSpacing: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          
          // Step 1: 0-0.33
          if (progress < 0.33) {
            if (currentStep !== 1) {
              setCurrentStep(1);
              gsap.to(step1Ref.current, { opacity: 1, scale: 1, duration: 0.3 });
              gsap.to(step2Ref.current, { opacity: 0, scale: 0.8, duration: 0.3 });
              gsap.to(step3Ref.current, { opacity: 0, scale: 0.8, duration: 0.3 });
            }
          }
          // Step 2: 0.33-0.66
          else if (progress < 0.66) {
            if (currentStep !== 2) {
              setCurrentStep(2);
              gsap.to(step1Ref.current, { opacity: 0, scale: 0.8, duration: 0.3 });
              gsap.to(step2Ref.current, { opacity: 1, scale: 1, duration: 0.3 });
              gsap.to(step3Ref.current, { opacity: 0, scale: 0.8, duration: 0.3 });
            }
          }
          // Step 3: 0.66-1
          else {
            if (currentStep !== 3) {
              setCurrentStep(3);
              gsap.to(step1Ref.current, { opacity: 0, scale: 0.8, duration: 0.3 });
              gsap.to(step2Ref.current, { opacity: 0, scale: 0.8, duration: 0.3 });
              gsap.to(step3Ref.current, { opacity: 1, scale: 1, duration: 0.3 });
            }
          }
        }
      }
    });

    // Initial setup - show only step 1
    gsap.set(step2Ref.current, { opacity: 0, scale: 0.8 });
    gsap.set(step3Ref.current, { opacity: 0, scale: 0.8 });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [currentStep]);

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="min-h-screen bg-[#0D1B2A] relative overflow-hidden"
    >
      {/* Background decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,169,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,169,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-16 sm:py-24">
        
        {/* Header - This scrolls normally */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-architech-brand-blue/10 border border-architech-brand-blue/20 rounded-full text-sm font-medium text-architech-brand-blue mb-6 sm:mb-8"
            variants={scaleIn}
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            How It Works
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-6xl font-satoshi font-bold text-[#F8F9FA] mb-4 sm:mb-6 leading-tight px-2"
            variants={fadeInUp}
          >
            From Vision to{" "}
            <span className="text-transparent bg-gradient-to-r from-architech-brand-blue to-architech-brand-green bg-clip-text">
              Production
            </span>
            <br />
            In Three Steps
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-[#F8F9FA]/80 max-w-3xl mx-auto px-4 font-inter"
            variants={fadeInUp}
          >
            The Architech transforms your ideas into production-ready applications using battle-tested, 
            open-source modules. No proprietary dependencies, no lock-in. Ever.
          </motion.p>
        </motion.div>

        {/* Steps Container - This is where the scroll pinning starts */}
        <div 
          ref={stepsContainerRef}
          className="relative w-full max-w-6xl mx-auto" 
          style={{ minHeight: '80vh' }}
        >
          
          {/* Step 1: Blueprint Your Vision */}
          <div
            ref={step1Ref}
            className="w-full"
          >
            <motion.div
              className="text-center mb-8 sm:mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={fadeInUp}
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-satoshi font-bold text-[#F8F9FA] mb-4">
                1. Blueprint Your Vision
              </h3>
              <p className="text-lg text-[#F8F9FA]/80 max-w-2xl mx-auto">
                Describe your intent. The AI suggests a stack. You always have the final say.
              </p>
            </motion.div>

            <div className="glass-card rounded-3xl p-6 sm:p-8 lg:p-12 border border-architech-brand-blue/20 bg-gradient-to-br from-architech-brand-blue/5 to-architech-brand-green/5 relative overflow-hidden">
              <div className="bg-[#0D1B2A] rounded-2xl p-6 sm:p-8 border border-architech-brand-blue/30 font-mono text-sm sm:text-base overflow-x-auto">
                <div className="space-y-3">
                  <div className="text-architech-brand-blue"># Describe your app:</div>
                  <div className="text-[#F8F9FA]">
                    <span className="text-architech-brand-blue">description:</span> 
                    <span className="text-architech-brand-green ml-2">"A collaborative project management app with a modern design system."</span>
                  </div>
                  <div className="text-architech-brand-blue"># AI suggests a stack (you can edit this):</div>
                  <div className="text-[#F8F9FA]">
                    <span className="text-architech-brand-blue">stack:</span>
                  </div>
                  <div className="ml-4 space-y-2">
                    <div className="text-[#F8F9FA]">
                      <span className="text-architech-brand-blue">framework:</span> 
                      <span className="text-architech-brand-green ml-2">"React (Next.js)"</span>
                    </div>
                    <div className="text-[#F8F9FA]">
                      <span className="text-architech-brand-blue">styling:</span> 
                      <span className="text-architech-brand-green ml-2">"TailwindCSS"</span>
                    </div>
                    <div className="text-[#F8F9FA]">
                      <span className="text-architech-brand-blue">database:</span> 
                      <span className="text-architech-brand-green ml-2">"PostgreSQL (Supabase)"</span>
                    </div>
                    <div className="text-[#F8F9FA]">
                      <span className="text-architech-brand-blue">auth:</span> 
                      <span className="text-architech-brand-green ml-2">"JWT (Auth.js)"</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Let the AI Architect */}
          <div
            ref={step2Ref}
            className="w-full absolute top-0 left-0 right-0"
          >
            <motion.div
              className="text-center mb-8 sm:mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={fadeInUp}
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-satoshi font-bold text-[#F8F9FA] mb-4">
                2. Let the AI Architect
              </h3>
              <p className="text-lg text-[#F8F9FA]/80 max-w-2xl mx-auto">
                The AI orchestrates battle-tested, open-source modules into a robust system.
              </p>
            </motion.div>

            <div className="glass-card rounded-3xl p-6 sm:p-8 lg:p-12 border border-architech-brand-blue/20 bg-gradient-to-br from-architech-brand-blue/5 to-architech-brand-green/5 relative overflow-hidden">
              <div className="relative">
                {/* Central Blueprint Node */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-architech-brand-blue to-architech-brand-green rounded-full flex items-center justify-center shadow-lg shadow-architech-brand-blue/30">
                      <svg className="h-12 w-12 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                      <div className="text-sm font-semibold text-architech-brand-blue">Blueprint</div>
                    </div>
                  </div>
                </div>

                {/* Tech Blocks Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                  {[
                    { name: "Auth.js", color: "from-architech-brand-blue to-architech-brand-green" },
                    { name: "Supabase", color: "from-architech-brand-green to-architech-brand-blue" },
                    { name: "TailwindCSS", color: "from-architech-brand-blue to-architech-brand-green" },
                    { name: "Next.js", color: "from-architech-brand-green to-architech-brand-blue" }
                  ].map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className="relative group"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {/* Connection Line */}
                      <div className="absolute top-1/2 left-1/2 w-16 h-0.5 bg-gradient-to-r from-architech-brand-blue to-architech-brand-green transform -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
                      
                      {/* Tech Block */}
                      <div className={`bg-gradient-to-br ${tech.color} rounded-xl p-4 text-center shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                        <div className="text-white font-semibold text-sm">{tech.name}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Own Your Code, Instantly */}
          <div
            ref={step3Ref}
            className="w-full absolute top-0 left-0 right-0"
          >
            <motion.div
              className="text-center mb-8 sm:mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={fadeInUp}
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-satoshi font-bold text-[#F8F9FA] mb-4">
                3. Own Your Code, Instantly
              </h3>
              <p className="text-lg text-[#F8F9FA]/80 max-w-2xl mx-auto">
                Get production-ready code you fully own. No proprietary dependencies, no lock-in. Ever.
              </p>
            </motion.div>

            <div className="glass-card rounded-3xl p-6 sm:p-8 lg:p-12 border border-architech-brand-blue/20 bg-gradient-to-br from-architech-brand-blue/5 to-architech-brand-green/5 relative overflow-hidden">
              <div className="bg-[#0D1B2A] rounded-2xl p-6 sm:p-8 border border-architech-brand-blue/30 font-mono text-sm sm:text-base overflow-x-auto">
                <pre className="text-[#F8F9FA] whitespace-pre-wrap">
                  <code>
{`// You get clean, standard code.

import { withAuth } from '@lib/auth';
import { useDatabase } from '@lib/db';
import { Button, Card } from '@lib/ui-components';

function DashboardPage({ user }) {
  const { data: projects } = useDatabase('projects').select('*');

  return (
    <Layout user={user}>
      <h1>Welcome, {user.name}</h1>
      {/* Your logic here */}
      <Button>Create New Project</Button>
    </Layout>
  );
}

export default withAuth(DashboardPage);`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Step Indicator */}
        <motion.div
          className="text-center text-[#F8F9FA]/60 text-sm mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="flex gap-2">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentStep === step 
                      ? 'bg-architech-brand-blue scale-125' 
                      : 'bg-[#F8F9FA]/30'
                  }`}
                />
              ))}
            </div>
            <span>Step {currentStep} of 3</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="text-center text-[#F8F9FA]/60 text-sm mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-architech-brand-blue animate-pulse"></div>
            <span>Scroll to explore each step</span>
            <div className="w-2 h-2 rounded-full bg-architech-brand-blue animate-pulse"></div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12 sm:mt-16 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-architech-brand-blue to-architech-brand-green text-white rounded-full font-semibold text-base sm:text-lg hover:shadow-lg transition-all duration-300 cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => smoothScrollTo("cta")}
          >
            <svg className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Join Waitlist</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
