import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  X, 
  Check, 
  Lock, 
  HelpCircle, 
  Users, 
  Target, 
  Clock, 
  Code, 
  Building, 
  TrendingUp, 
  Shield, 
  Settings,
  LucideIcon
} from 'lucide-react';
import { 
  fadeInUp, 
  fadeInDown, 
  scaleIn, 
  staggerContainer, 
  defaultViewport 
} from '@/lib/animations';

interface IconData {
  icon: LucideIcon;
  text: string;
  level?: number;
  color?: string;
}

type ComparisonValue = string | IconData;

const WhereWeFitSection = () => {
  const comparisonData = [
    {
      capability: "Target Audience",
      noCode: "Non-Developers",
      aiBuilders: "Designers / PMs",
      aiAssistants: "Developers",
      architech: "Developers & Architects",
      architechHighlight: true
    },
    {
      capability: "Primary Goal",
      noCode: "Build UIs & Simple Apps",
      aiBuilders: "Generate UI Components",
      aiAssistants: "Write Code Faster",
      architech: "Design & Build Systems",
      architechHighlight: true
    },
    {
      capability: "Speed to V1",
      noCode: { icon: Zap, text: "Very Fast", level: 3 },
      aiBuilders: { icon: Zap, text: "Very Fast", level: 3 },
      aiAssistants: { icon: Zap, text: "Fast", level: 2 },
      architech: { icon: Zap, text: "Very Fast", level: 3 },
      architechHighlight: true
    },
    {
      capability: "Code Ownership & Control",
      noCode: { icon: X, text: "Platform Lock-in", color: "text-red-500" },
      aiBuilders: { icon: X, text: "Code is final output", color: "text-red-500" },
      aiAssistants: { icon: Check, text: "Your codebase", color: "text-green-500" },
      architech: { icon: Check, text: "100% Yours", color: "text-green-500" },
      architechHighlight: true
    },
    {
      capability: "Architecture",
      noCode: "Pre-built (Black Box)",
      aiBuilders: "AI-Generated (Opaque)",
      aiAssistants: "Manual",
      architech: "AI-Architected (Transparent)",
      architechHighlight: true
    },
    {
      capability: "Scalability",
      noCode: { icon: Lock, text: "Limited by Platform", color: "text-orange-500" },
      aiBuilders: { icon: HelpCircle, text: "Uncertain", color: "text-yellow-500" },
      aiAssistants: { icon: Check, text: "Depends on you", color: "text-green-500" },
      architech: { icon: Check, text: "Built-in Best Practices", color: "text-green-500" },
      architechHighlight: true
    },
    {
      capability: "Security",
      noCode: { icon: Lock, text: "Platform's Responsibility", color: "text-orange-500" },
      aiBuilders: { icon: HelpCircle, text: "Depends on generation", color: "text-yellow-500" },
      aiAssistants: { icon: Check, text: "Your responsibility", color: "text-green-500" },
      architech: { icon: Check, text: "Via Secure Modules", color: "text-green-500" },
      architechHighlight: true
    },
    {
      capability: "Flexibility / Customization",
      noCode: "Low",
      aiBuilders: "Low",
      aiAssistants: "High",
      architech: "High",
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
            Built for <span className="text-transparent bg-gradient-to-r from-architech-brand-blue to-architech-brand-green bg-clip-text">Production.</span>
          </motion.h2>
          
          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4"
            variants={fadeInUp}
          >
            A New Class of Tool. How The Architech combines the best of every world, without the compromises.
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
                <span className="text-xs text-muted-foreground/60">(e.g., Bubble, Webflow)</span>
              </div>
              <div className="p-4 sm:p-6 text-center font-semibold text-muted-foreground text-xs sm:text-sm">
                No-Code AI Builders<br />
                <span className="text-xs text-muted-foreground/60">(e.g., Vercel v0, Lovable)</span>
              </div>
              <div className="p-4 sm:p-6 text-center font-semibold text-muted-foreground text-xs sm:text-sm">
                AI Code Assistants<br />
                <span className="text-xs text-muted-foreground/60">(e.g., Copilot, Cursor)</span>
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
                  {typeof row.noCode === 'object' ? (
                    <div className="flex flex-col items-center gap-2">
                      {(row.noCode as IconData).level && (
                        <div className="flex gap-1">
                          {Array.from({ length: 3 }).map((_, i) => {
                            const IconComponent = (row.noCode as IconData).icon;
                            return (
                              <IconComponent 
                                key={i} 
                                className={`w-4 h-4 ${i < (row.noCode as IconData).level! ? 'text-yellow-500' : 'text-gray-300'}`} 
                              />
                            );
                          })}
                        </div>
                      )}
                      {(row.noCode as IconData).icon && !(row.noCode as IconData).level && (
                        (() => {
                          const IconComponent = (row.noCode as IconData).icon;
                          return <IconComponent className={`w-5 h-5 ${(row.noCode as IconData).color || 'text-muted-foreground'}`} />;
                        })()
                      )}
                      <span className={(row.noCode as IconData).color || 'text-muted-foreground'}>{(row.noCode as IconData).text}</span>
                    </div>
                  ) : (
                    row.noCode
                  )}
                </div>
                <div className="p-4 sm:p-6 text-center text-muted-foreground border-r border-architech-brand-blue/10 text-sm sm:text-base">
                  {typeof row.aiBuilders === 'object' ? (
                    <div className="flex flex-col items-center gap-2">
                      {(row.aiBuilders as IconData).level && (
                        <div className="flex gap-1">
                          {Array.from({ length: 3 }).map((_, i) => {
                            const IconComponent = (row.aiBuilders as IconData).icon;
                            return (
                              <IconComponent 
                                key={i} 
                                className={`w-4 h-4 ${i < (row.aiBuilders as IconData).level! ? 'text-yellow-500' : 'text-gray-300'}`} 
                              />
                            );
                          })}
                        </div>
                      )}
                      {(row.aiBuilders as IconData).icon && !(row.aiBuilders as IconData).level && (
                        (() => {
                          const IconComponent = (row.aiBuilders as IconData).icon;
                          return <IconComponent className={`w-5 h-5 ${(row.aiBuilders as IconData).color || 'text-muted-foreground'}`} />;
                        })()
                      )}
                      <span className={(row.aiBuilders as IconData).color || 'text-muted-foreground'}>{(row.aiBuilders as IconData).text}</span>
                    </div>
                  ) : (
                    row.aiBuilders
                  )}
                </div>
                <div className="p-4 sm:p-6 text-center text-muted-foreground border-r border-architech-brand-blue/10 text-sm sm:text-base">
                  {typeof row.aiAssistants === 'object' ? (
                    <div className="flex flex-col items-center gap-2">
                      {(row.aiAssistants as IconData).level && (
                        <div className="flex gap-1">
                          {Array.from({ length: 3 }).map((_, i) => {
                            const IconComponent = (row.aiAssistants as IconData).icon;
                            return (
                              <IconComponent 
                                key={i} 
                                className={`w-4 h-4 ${i < (row.aiAssistants as IconData).level! ? 'text-yellow-500' : 'text-gray-300'}`} 
                              />
                            );
                          })}
                        </div>
                      )}
                      {(row.aiAssistants as IconData).icon && !(row.aiAssistants as IconData).level && (
                        (() => {
                          const IconComponent = (row.aiAssistants as IconData).icon;
                          return <IconComponent className={`w-5 h-5 ${(row.aiAssistants as IconData).color || 'text-muted-foreground'}`} />;
                        })()
                      )}
                      <span className={(row.aiAssistants as IconData).color || 'text-muted-foreground'}>{(row.aiAssistants as IconData).text}</span>
                    </div>
                  ) : (
                    row.aiAssistants
                  )}
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
                  <div className="relative z-10">
                    {typeof row.architech === 'object' ? (
                      <div className="flex flex-col items-center gap-2">
                        {(row.architech as IconData).level && (
                          <div className="flex gap-1">
                            {Array.from({ length: 3 }).map((_, i) => {
                              const IconComponent = (row.architech as IconData).icon;
                              return (
                                <IconComponent 
                                  key={i} 
                                  className={`w-4 h-4 ${i < (row.architech as IconData).level! ? 'text-architech-brand-green' : 'text-gray-300'}`} 
                                />
                              );
                            })}
                          </div>
                        )}
                        {(row.architech as IconData).icon && !(row.architech as IconData).level && (
                          (() => {
                            const IconComponent = (row.architech as IconData).icon;
                            return <IconComponent className={`w-5 h-5 ${(row.architech as IconData).color || 'text-architech-brand-green'}`} />;
                          })()
                        )}
                        <span className={(row.architech as IconData).color || 'text-architech-brand-green'}>{(row.architech as IconData).text}</span>
                      </div>
                    ) : (
                      row.architech
                    )}
                  </div>
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
                The Architech is the only tool that combines{" "}
                <span className="text-architech-brand-blue font-semibold">AI-architected systems</span>{" "}
                with{" "}
                <span className="text-architech-brand-green font-semibold">100% code ownership</span>{" "}
                and{" "}
                <span className="text-architech-brand-blue font-semibold">production-ready scalability</span>.
              </motion.p>
              
              <motion.div
                className="flex flex-wrap justify-center gap-4 text-sm sm:text-base"
                variants={fadeInUp}
              >
                <div className="flex items-center gap-2 px-4 py-2 bg-architech-brand-blue/10 border border-architech-brand-blue/20 rounded-full text-architech-brand-blue">
                  <Building className="w-4 h-4" />
                  <span>Transparent Architecture</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-architech-brand-green/10 border border-architech-brand-green/20 rounded-full text-architech-brand-green">
                  <Shield className="w-4 h-4" />
                  <span>Secure Modules</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-architech-brand-blue/10 border border-architech-brand-blue/20 rounded-full text-architech-brand-blue">
                  <TrendingUp className="w-4 h-4" />
                  <span>Built-in Best Practices</span>
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
