import React from 'react';
import { motion } from 'framer-motion';
import { 
  fadeInUp, 
  fadeInDown, 
  scaleIn, 
  staggerContainer, 
  defaultViewport 
} from '@/lib/animations';

const WhereWeFitSection = () => {
  const comparisonData = [
    {
      capability: "Speed to V1",
      noCode: "⚡️⚡️⚡️",
      aiAssistants: "⚡️⚡️",
      classicDev: "⚡️",
      architech: "⚡️⚡️⚡️",
      architechHighlight: true
    },
    {
      capability: "Code Ownership & Control",
      noCode: "❌",
      aiAssistants: "✅",
      classicDev: "✅✅✅",
      architech: "✅✅✅",
      architechHighlight: true
    },
    {
      capability: "Architectural Design",
      noCode: "Pre-built",
      aiAssistants: "Manual",
      classicDev: "Manual",
      architech: "AI-Architected",
      architechHighlight: true
    },
    {
      capability: "Tech Stack Flexibility",
      noCode: "❌ (Locked)",
      aiAssistants: "✅ (Yours)",
      classicDev: "✅ (Yours)",
      architech: "✅ (Agnostic)",
      architechHighlight: true
    },
    {
      capability: "Primary Focus",
      noCode: "Building UIs",
      aiAssistants: "Completing Lines",
      classicDev: "Writing Code",
      architech: "Designing Systems",
      architechHighlight: true
    },
    {
      capability: "Final Output",
      noCode: "A Web App",
      aiAssistants: "Code Snippets",
      classicDev: "Your Application",
      architech: "A Full, Production-Ready Codebase",
      architechHighlight: true
    }
  ];

  return (
    <section 
      id="where-we-fit"
      className="min-h-screen bg-architech-section-light relative overflow-hidden py-16 sm:py-24"
    >
      {/* Background decorative pattern - consistent with other sections */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,169,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,169,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>
      
      {/* Floating architectural elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-3 h-3 bg-architech-brand-blue rounded-full opacity-20"
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-3/4 right-1/4 w-2 h-2 bg-architech-brand-green rounded-full opacity-30"
        animate={{
          y: [0, -20, 0],
          x: [0, -12, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          {/* Section Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-architech-brand-blue/10 border border-architech-brand-blue/20 rounded-full text-sm font-medium text-architech-brand-blue mb-6 sm:mb-8"
            variants={scaleIn}
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Where We Fit
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight px-2"
            variants={fadeInUp}
          >
            Speed AND Control.
            <br />
            <span className="text-transparent bg-gradient-to-r from-architech-brand-blue to-architech-brand-green bg-clip-text">
              No Compromises.
            </span>
          </motion.h2>
          
          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4"
            variants={fadeInUp}
          >
            How The Architech compares to the tools you already know.
          </motion.p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          className="glass-card rounded-3xl overflow-hidden border border-architech-brand-blue/20 bg-gradient-to-br from-architech-brand-blue/5 to-architech-brand-green/5 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={defaultViewport}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,169,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,169,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </div>

          <div className="relative z-10">
            {/* Table Header */}
            <div className="grid grid-cols-5 bg-gradient-to-r from-architech-brand-blue/10 to-architech-brand-green/10 border-b border-architech-brand-blue/30">
              <div className="p-4 sm:p-6 font-bold text-foreground text-base sm:text-lg">Capability</div>
              <div className="p-4 sm:p-6 text-center font-semibold text-muted-foreground text-xs sm:text-sm">
                No-Code Platforms<br />
                <span className="text-xs text-muted-foreground/60">(e.g., Bubble)</span>
              </div>
              <div className="p-4 sm:p-6 text-center font-semibold text-muted-foreground text-xs sm:text-sm">
                AI Code Assistants<br />
                <span className="text-xs text-muted-foreground/60">(e.g., Copilot)</span>
              </div>
              <div className="p-4 sm:p-6 text-center font-semibold text-muted-foreground text-xs sm:text-sm">
                Classic Development<br />
                <span className="text-xs text-muted-foreground/60">(Manual Setup)</span>
              </div>
              <div className="p-4 sm:p-6 text-center font-bold text-architech-brand-blue text-xs sm:text-sm border-l-2 border-architech-brand-blue bg-architech-brand-blue/5">
                The Architech<br />
                <span className="text-xs text-architech-brand-green font-semibold">✨ The Winner</span>
              </div>
            </div>

            {/* Table Rows */}
            {comparisonData.map((row, index) => (
              <motion.div
                key={row.capability}
                className={`grid grid-cols-5 border-b border-architech-brand-blue/10 hover:bg-architech-brand-blue/5 transition-all duration-300 group ${
                  index % 2 === 0 ? 'bg-architech-section-light/20' : 'bg-architech-section-light/40'
                }`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={defaultViewport}
                whileHover={{ scale: 1.01 }}
              >
                <div className="p-4 sm:p-6 font-semibold text-foreground border-r border-architech-brand-blue/20 text-sm sm:text-base">
                  {row.capability}
                </div>
                <div className="p-4 sm:p-6 text-center text-muted-foreground border-r border-architech-brand-blue/10 text-sm sm:text-base">
                  {row.noCode}
                </div>
                <div className="p-4 sm:p-6 text-center text-muted-foreground border-r border-architech-brand-blue/10 text-sm sm:text-base">
                  {row.aiAssistants}
                </div>
                <div className="p-4 sm:p-6 text-center text-muted-foreground border-r border-architech-brand-blue/10 text-sm sm:text-base">
                  {row.classicDev}
                </div>
                <div className={`p-4 sm:p-6 text-center font-semibold border-l-2 text-sm sm:text-base relative overflow-hidden ${
                  row.architechHighlight 
                    ? 'text-architech-brand-green bg-architech-brand-green/10 border-architech-brand-green' 
                    : 'text-architech-brand-blue border-architech-brand-blue'
                }`}>
                  {/* Subtle glow effect for highlighted cells */}
                  {row.architechHighlight && (
                    <div className="absolute inset-0 bg-gradient-to-r from-architech-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                  <span className="relative z-10">{row.architech}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Summary */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          <motion.div
            className="glass-card rounded-3xl p-6 sm:p-8 lg:p-12 border border-architech-brand-blue/20 bg-gradient-to-br from-architech-brand-blue/5 to-architech-brand-green/5 relative overflow-hidden max-w-4xl mx-auto"
            variants={fadeInUp}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,169,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,169,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            </div>

            <div className="relative z-10">
              <motion.p
                className="text-lg sm:text-xl text-muted-foreground mb-6 leading-relaxed"
                variants={fadeInUp}
              >
                The Architech is the only tool that delivers{" "}
                <span className="text-architech-brand-blue font-semibold">no-code speed</span>{" "}
                with{" "}
                <span className="text-architech-brand-green font-semibold">full-stack control</span>.
              </motion.p>
              
              <motion.div
                className="flex flex-wrap justify-center gap-4 text-sm sm:text-base"
                variants={fadeInUp}
              >
                <div className="flex items-center gap-2 px-4 py-2 bg-architech-brand-blue/10 border border-architech-brand-blue/20 rounded-full text-architech-brand-blue">
                  <span className="w-2 h-2 bg-architech-brand-blue rounded-full"></span>
                  <span>Enterprise-Grade</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-architech-brand-green/10 border border-architech-brand-green/20 rounded-full text-architech-brand-green">
                  <span className="w-2 h-2 bg-architech-brand-green rounded-full"></span>
                  <span>Full Ownership</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-architech-brand-blue/10 border border-architech-brand-blue/20 rounded-full text-architech-brand-blue">
                  <span className="w-2 h-2 bg-architech-brand-blue rounded-full"></span>
                  <span>Production-Ready</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhereWeFitSection;
