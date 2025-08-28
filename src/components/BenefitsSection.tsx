import { useState } from "react";
import { Zap, ArrowRight, Sparkles, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn, defaultViewport } from "@/lib/animations";

const BenefitsSection = () => {
  const [activeTab, setActiveTab] = useState("developers");

  const diffContent = {
    developers: {
      title: "Architect, Don't Just Assemble.",
      subtitle: "before vs after",
      content: [
        { before: "Setup Complexity: Overwhelming", after: "Setup Complexity: Simplified" },
        { before: "Repetitive Tasks: 80% of Time", after: "Repetitive Tasks: Automated" },
        { before: "Code Ownership: Limited", after: "Code Ownership: Full Control" },
        { before: "Deployment Risk: High", after: "Deployment Risk: Eliminated" },
        { before: "Focus: Scattered", after: "Focus: Pure Coding" }
      ]
    },
    founders: {
      title: "Build an Asset, Not Just an MVP.",
      subtitle: "before vs after",
      content: [
        { before: "Time to MVP: 6 Months", after: "Time to MVP: 2 Weeks" },
        { before: "Initial Cost: $200k+", after: "Initial Cost: $0 Infrastructure" },
        { before: "Scalability Risk: High", after: "Scalability Risk: Eliminated" },
        { before: "Investor Confidence: Low", after: "Investor Confidence: High" },
        { before: "Competitive Advantage: None", after: "Competitive Advantage: First Mover" }
      ]
    },
    product: {
      title: "From Spec to Production-Ready, Seamlessly.",
      subtitle: "before vs after",
      content: [
        { before: "Feature Velocity: Slow", after: "Feature Velocity: 10x Faster" },
        { before: "Prototype Quality: Throwaway", after: "Prototype Quality: Production Ready" },
        { before: "Dev Collaboration: Fragmented", after: "Dev Collaboration: Seamless" },
        { before: "User Feedback Loop: Weeks", after: "User Feedback Loop: Hours" },
        { before: "Final Product: Compromised", after: "Final Product: Exceptional" }
      ]
    }
  };

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="benefits"
      className="py-16 sm:py-24 bg-gradient-surface relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-architech-electric/10 border border-architech-electric/20 rounded-full text-sm font-medium text-architech-electric mb-6 sm:mb-8"
            variants={scaleIn}
          >
            <Sparkles className="h-4 w-4" />
            Real stories, real results
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-6xl font-satoshi font-bold text-foreground mb-4 sm:mb-6 leading-tight px-2"
            variants={fadeInUp}
          >
            From 3 Days to 3 Minutes.
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 font-inter font-normal"
            variants={fadeInUp}
          >
            The Architech eliminates 90% of a developer's repetitive work, so you can focus on building features, not fighting with Docker configs.
          </motion.p>
        </motion.div>

        {/* Persona Tabs */}
            <motion.div
          className="flex justify-center mb-8 sm:mb-12 px-4"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
          >
            <div className="flex bg-background/50 rounded-2xl p-2 backdrop-blur-sm border border-architech-border">
            {[
              { id: "developers", label: "Developers" },
              { id: "founders", label: "Founders" },
              { id: "product", label: "Product Teams" }
            ].map((tab) => (
                <button
                key={tab.id}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-base ${
                  activeTab === tab.id
                      ? 'bg-gradient-electric text-white shadow-lg'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                onClick={() => setActiveTab(tab.id)}
                >
                {tab.label}
                </button>
              ))}
            </div>
          </motion.div>

        {/* Code Diff Container */}
          <motion.div
          key={activeTab}
          className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          >
          <div className="glass-card rounded-3xl p-6 sm:p-8 lg:p-12 border border-architech-electric/20 bg-gradient-to-br from-architech-primary/5 to-architech-electric/5 relative overflow-hidden">
            
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
            </div>

            <div className="relative z-10">
              {/* File Header */}
                  <motion.div
                className="text-center mb-8"
                key={`${activeTab}-header`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="text-xs font-mono text-architech-electric/70 uppercase tracking-wider mb-2">
                  {diffContent[activeTab as keyof typeof diffContent].subtitle}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground font-mono">
                  {diffContent[activeTab as keyof typeof diffContent].title}
                </h3>
              </motion.div>

              {/* Diff Content */}
              <div className="bg-[#0d1117] rounded-2xl p-6 sm:p-8 border border-architech-border/30 font-mono text-sm sm:text-base overflow-x-auto">
                {/* Mobile Layout (Up/Down) - Hidden on lg+ */}
                <div className="lg:hidden space-y-2">
                  {diffContent[activeTab as keyof typeof diffContent].content.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {/* Before line */}
                      <div className="flex-shrink-0 w-8 text-center text-[#E06C75] font-bold">-</div>
                      <div className="text-[#E06C75] flex-1">
                        <span className="text-[#E06C75]">{item.before.split(': ')[0]}:</span>
                        <span className="text-[#E06C75] ml-2">{item.before.split(': ')[1]}</span>
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Separator */}
                  <div className="border-t border-architech-border/30 my-4"></div>
                  
                  {diffContent[activeTab as keyof typeof diffContent].content.map((item, index) => (
                    <motion.div
                      key={`after-${index}`}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index + 6) * 0.1 }}
                    >
                      {/* After line */}
                      <div className="flex-shrink-0 w-8 text-center text-[#64FFDA] font-bold">+</div>
                      <div className="text-[#64FFDA] flex-1">
                        <span className="text-[#64FFDA]">{item.after.split(': ')[0]}:</span>
                        <span className="text-[#64FFDA] ml-2">{item.after.split(': ')[1]}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Desktop Layout (Left/Right) - Hidden on mobile, visible on lg+ */}
                <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8">
                  {/* Before Column */}
                  <div className="space-y-4">
                    <motion.h3 
                      className="text-lg font-semibold text-[#E06C75] text-center mb-4"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      BEFORE
                    </motion.h3>
                      <div className="space-y-3">
                      {diffContent[activeTab as keyof typeof diffContent].content.map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="flex-shrink-0 w-6 text-center text-[#E06C75] font-bold">-</div>
                          <div className="text-[#E06C75] flex-1">
                            <span className="text-[#E06C75]">{item.before.split(': ')[0]}:</span>
                            <span className="text-[#E06C75] ml-2">{item.before.split(': ')[1]}</span>
                              </div>
                        </motion.div>
                      ))}
                              </div>
                            </div>

                  {/* After Column */}
                  <div className="space-y-4">
                    <motion.h3 
                      className="text-lg font-semibold text-[#64FFDA] text-center mb-4"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      AFTER
                    </motion.h3>
                    <div className="space-y-3">
                      {diffContent[activeTab as keyof typeof diffContent].content.map((item, index) => (
                        <motion.div
                          key={`after-${index}`}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="flex-shrink-0 w-6 text-center text-[#64FFDA] font-bold">+</div>
                          <div className="text-[#64FFDA] flex-1">
                            <span className="text-[#64FFDA]">{item.after.split(': ')[0]}:</span>
                            <span className="text-[#64FFDA] ml-2">{item.after.split(': ')[1]}</span>
                      </div>
                    </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Impact Summary */}
              <div className="text-center mt-8">
                <motion.div 
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-electric text-white rounded-full font-semibold text-lg"
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Zap className="h-5 w-5" />
                  <span>Launch 10x Faster</span>
                </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center max-w-4xl mx-auto mt-12 sm:mt-20 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <div className="glass-card rounded-3xl p-6 sm:p-8 lg:p-12 border border-architech-electric/20 bg-gradient-to-br from-architech-electric/5 to-purple-500/5">
            <Quote className="h-8 w-8 sm:h-12 sm:w-12 text-architech-electric/30 mx-auto mb-4 sm:mb-6" />
            
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              "The Architech will change how we think about{" "}
              <span className="text-transparent bg-gradient-electric bg-clip-text">
                building software
              </span>
              . It's not just faster—it's better."
            </blockquote>

            <motion.div
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-electric text-white rounded-full font-semibold text-base sm:text-lg hover:shadow-glow transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => smoothScrollTo("how-it-works")}
            >
              <Zap className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Launch 10x Faster</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;