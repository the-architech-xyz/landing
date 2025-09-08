import React, { useState, useEffect } from 'react';
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
import { useTranslation } from '@/hooks/useTranslation';

interface IconData {
  icon: LucideIcon;
  text: string;
  level?: number;
  color?: string;
}

type ComparisonValue = string | IconData;

const WhereWeFitSection = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const comparisonData = [
    {
      capability: t('whereWeFit.comparison.targetAudience.capability'),
      noCode: t('whereWeFit.comparison.targetAudience.noCode'),
      aiBuilders: t('whereWeFit.comparison.targetAudience.aiBuilders'),
      aiAssistants: t('whereWeFit.comparison.targetAudience.aiAssistants'),
      architech: t('whereWeFit.comparison.targetAudience.architech'),
      architechHighlight: true
    },
    {
      capability: t('whereWeFit.comparison.primaryGoal.capability'),
      noCode: t('whereWeFit.comparison.primaryGoal.noCode'),
      aiBuilders: t('whereWeFit.comparison.primaryGoal.aiBuilders'),
      aiAssistants: t('whereWeFit.comparison.primaryGoal.aiAssistants'),
      architech: t('whereWeFit.comparison.primaryGoal.architech'),
      architechHighlight: true
    },
    {
      capability: t('whereWeFit.comparison.speedToV1.capability'),
      noCode: { icon: Zap, text: t('whereWeFit.comparison.speedToV1.noCode'), level: 3 },
      aiBuilders: { icon: Zap, text: t('whereWeFit.comparison.speedToV1.aiBuilders'), level: 3 },
      aiAssistants: { icon: Zap, text: t('whereWeFit.comparison.speedToV1.aiAssistants'), level: 2 },
      architech: { icon: Zap, text: t('whereWeFit.comparison.speedToV1.architech'), level: 3 },
      architechHighlight: true
    },
    {
      capability: t('whereWeFit.comparison.codeOwnership.capability'),
      noCode: { icon: X, text: t('whereWeFit.comparison.codeOwnership.noCode'), color: "text-red-500" },
      aiBuilders: { icon: X, text: t('whereWeFit.comparison.codeOwnership.aiBuilders'), color: "text-red-500" },
      aiAssistants: { icon: Check, text: t('whereWeFit.comparison.codeOwnership.aiAssistants'), color: "text-green-500" },
      architech: { icon: Check, text: t('whereWeFit.comparison.codeOwnership.architech'), color: "text-green-500" },
      architechHighlight: true
    },
    {
      capability: t('whereWeFit.comparison.architecture.capability'),
      noCode: t('whereWeFit.comparison.architecture.noCode'),
      aiBuilders: t('whereWeFit.comparison.architecture.aiBuilders'),
      aiAssistants: t('whereWeFit.comparison.architecture.aiAssistants'),
      architech: t('whereWeFit.comparison.architecture.architech'),
      architechHighlight: true
    },
    {
      capability: t('whereWeFit.comparison.scalability.capability'),
      noCode: { icon: Lock, text: t('whereWeFit.comparison.scalability.noCode'), color: "text-orange-500" },
      aiBuilders: { icon: HelpCircle, text: t('whereWeFit.comparison.scalability.aiBuilders'), color: "text-yellow-500" },
      aiAssistants: { icon: Check, text: t('whereWeFit.comparison.scalability.aiAssistants'), color: "text-green-500" },
      architech: { icon: Check, text: t('whereWeFit.comparison.scalability.architech'), color: "text-green-500" },
      architechHighlight: true
    },
    {
      capability: t('whereWeFit.comparison.security.capability'),
      noCode: { icon: Lock, text: t('whereWeFit.comparison.security.noCode'), color: "text-orange-500" },
      aiBuilders: { icon: HelpCircle, text: t('whereWeFit.comparison.security.aiBuilders'), color: "text-yellow-500" },
      aiAssistants: { icon: Check, text: t('whereWeFit.comparison.security.aiAssistants'), color: "text-green-500" },
      architech: { icon: Check, text: t('whereWeFit.comparison.security.architech'), color: "text-green-500" },
      architechHighlight: true
    },
    {
      capability: t('whereWeFit.comparison.flexibility.capability'),
      noCode: t('whereWeFit.comparison.flexibility.noCode'),
      aiBuilders: t('whereWeFit.comparison.flexibility.aiBuilders'),
      aiAssistants: t('whereWeFit.comparison.flexibility.aiAssistants'),
      architech: t('whereWeFit.comparison.flexibility.architech'),
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
            {t('whereWeFit.badge')}
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight px-2"
            variants={fadeInUp}
          >
            {t('whereWeFit.title.line1')} <span className="text-transparent bg-gradient-to-r from-architech-brand-blue to-architech-brand-green bg-clip-text">{t('whereWeFit.title.line2')}</span>
          </motion.h2>
          
          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4"
            variants={fadeInUp}
          >
            {t('whereWeFit.subtitle')}
          </motion.p>
        </motion.div>

        {/* Comparison Table - Desktop / Mobile Cards */}
        {isMobile ? (
          /* Mobile Responsive Table Version */
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

            <div className="relative z-10 overflow-x-auto">
              {/* Mobile Table Header */}
              <div className="grid grid-cols-5 bg-gradient-to-r from-architech-brand-blue/10 to-architech-brand-green/10 border-b border-architech-brand-blue/30 min-w-[600px]">
                <div className="p-3 font-bold text-foreground text-sm">{t('whereWeFit.tableHeaders.capability')}</div>
                <div className="p-3 text-center font-semibold text-muted-foreground text-xs">
                  {t('whereWeFit.tableHeaders.noCode')}<br />
                  <span className="text-xs text-muted-foreground/60">{t('whereWeFit.tableHeaders.platforms')}</span>
                </div>
                <div className="p-3 text-center font-semibold text-muted-foreground text-xs">
                  {t('whereWeFit.tableHeaders.ai')}<br />
                  <span className="text-xs text-muted-foreground/60">{t('whereWeFit.tableHeaders.builders')}</span>
                </div>
                <div className="p-3 text-center font-semibold text-muted-foreground text-xs">
                  {t('whereWeFit.tableHeaders.ai')}<br />
                  <span className="text-xs text-muted-foreground/60">{t('whereWeFit.tableHeaders.assistants')}</span>
                </div>
                <div className="p-3 text-center font-bold text-architech-brand-blue text-xs border-l-2 border-architech-brand-blue bg-architech-brand-blue/5">
                  {t('whereWeFit.tableHeaders.the')}<br />
                  <span className="text-xs text-architech-brand-green font-semibold">{t('whereWeFit.tableHeaders.architech')} ✨</span>
                </div>
              </div>

              {/* Mobile Table Rows */}
              {comparisonData.map((row, index) => (
                <motion.div
                  key={row.capability}
                  className={`grid grid-cols-5 border-b border-architech-brand-blue/10 hover:bg-architech-brand-blue/5 transition-all duration-300 group min-w-[600px] ${
                    index % 2 === 0 ? 'bg-architech-section-light/20' : 'bg-architech-section-light/40'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={defaultViewport}
                >
                  {/* Capability Column */}
                  <div className="p-3 font-semibold text-foreground border-r border-architech-brand-blue/20 text-sm">
                    {row.capability}
                  </div>
                  
                  {/* No-Code Column */}
                  <div className="p-3 text-center text-muted-foreground border-r border-architech-brand-blue/10 text-sm">
                    {typeof row.noCode === 'object' ? (
                      <div className="flex flex-col items-center gap-1">
                        {(row.noCode as IconData).level && (
                          <div className="flex gap-1">
                            {Array.from({ length: 3 }).map((_, i) => {
                              const IconComponent = (row.noCode as IconData).icon;
                              return (
                                <IconComponent 
                                  key={i} 
                                  className={`w-3 h-3 ${i < (row.noCode as IconData).level! ? 'text-yellow-500' : 'text-gray-300'}`} 
                                />
                              );
                            })}
                          </div>
                        )}
                        <span className="text-xs">{(row.noCode as IconData).text}</span>
                      </div>
                    ) : (
                      <span className="text-xs">{row.noCode}</span>
                    )}
                  </div>
                  
                  {/* AI Builders Column */}
                  <div className="p-3 text-center text-muted-foreground border-r border-architech-brand-blue/10 text-sm">
                    {typeof row.aiBuilders === 'object' ? (
                      <div className="flex flex-col items-center gap-1">
                        {(row.aiBuilders as IconData).level && (
                          <div className="flex gap-1">
                            {Array.from({ length: 3 }).map((_, i) => {
                              const IconComponent = (row.aiBuilders as IconData).icon;
                              return (
                                <IconComponent 
                                  key={i} 
                                  className={`w-3 h-3 ${i < (row.aiBuilders as IconData).level! ? 'text-yellow-500' : 'text-gray-300'}`} 
                                />
                              );
                            })}
                          </div>
                        )}
                        <span className="text-xs">{(row.aiBuilders as IconData).text}</span>
                      </div>
                    ) : (
                      <span className="text-xs">{row.aiBuilders}</span>
                    )}
                  </div>
                  
                  {/* AI Assistants Column */}
                  <div className="p-3 text-center text-muted-foreground border-r border-architech-brand-blue/10 text-sm">
                    {typeof row.aiAssistants === 'object' ? (
                      <div className="flex flex-col items-center gap-1">
                        {(row.aiAssistants as IconData).level && (
                          <div className="flex gap-1">
                            {Array.from({ length: 3 }).map((_, i) => {
                              const IconComponent = (row.aiAssistants as IconData).icon;
                              return (
                                <IconComponent 
                                  key={i} 
                                  className={`w-3 h-3 ${i < (row.aiAssistants as IconData).level! ? 'text-yellow-500' : 'text-gray-300'}`} 
                                />
                              );
                            })}
                          </div>
                        )}
                        <span className="text-xs">{(row.aiAssistants as IconData).text}</span>
                      </div>
                    ) : (
                      <span className="text-xs">{row.aiAssistants}</span>
                    )}
                  </div>
                  
                  {/* The Architech Column - Highlighted */}
                  <div className={`p-3 text-center font-semibold text-sm relative overflow-hidden ${
                    row.architechHighlight 
                      ? 'text-architech-brand-green bg-architech-brand-green/10 border-l-2 border-architech-brand-green' 
                      : 'text-architech-brand-blue border-l-2 border-architech-brand-blue'
                  }`}>
                    {typeof row.architech === 'object' ? (
                      <div className="flex flex-col items-center gap-1">
                        {(row.architech as IconData).level && (
                          <div className="flex gap-1">
                            {Array.from({ length: 3 }).map((_, i) => {
                              const IconComponent = (row.architech as IconData).icon;
                              return (
                                <IconComponent 
                                  key={i} 
                                  className={`w-3 h-3 ${i < (row.architech as IconData).level! ? 'text-architech-brand-green' : 'text-gray-300'}`} 
                                />
                              );
                            })}
                          </div>
                        )}
                        <span className="text-xs font-bold">{(row.architech as IconData).text}</span>
                      </div>
                    ) : (
                      <span className="text-xs font-bold">{row.architech}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Mobile scroll indicator */}
            <div className="absolute bottom-4 right-4 bg-architech-brand-blue/20 text-architech-brand-blue text-xs px-2 py-1 rounded-full">
              {t('whereWeFit.scrollIndicator')}
            </div>
          </motion.div>
        ) : (
          /* Desktop Table Version */
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
              <div className="p-4 sm:p-6 font-bold text-foreground text-base sm:text-lg">{t('whereWeFit.tableHeaders.capability')}</div>
              <div className="p-4 sm:p-6 text-center font-semibold text-muted-foreground text-xs sm:text-sm">
                {t('whereWeFit.tableHeaders.noCodePlatforms')}<br />
                <span className="text-xs text-muted-foreground/60">{t('whereWeFit.tableHeaders.noCodeExamples')}</span>
              </div>
              <div className="p-4 sm:p-6 text-center font-semibold text-muted-foreground text-xs sm:text-sm">
                {t('whereWeFit.tableHeaders.aiBuilders')}<br />
                <span className="text-xs text-muted-foreground/60">{t('whereWeFit.tableHeaders.aiBuildersExamples')}</span>
              </div>
              <div className="p-4 sm:p-6 text-center font-semibold text-muted-foreground text-xs sm:text-sm">
                {t('whereWeFit.tableHeaders.aiAssistants')}<br />
                <span className="text-xs text-muted-foreground/60">{t('whereWeFit.tableHeaders.aiAssistantsExamples')}</span>
              </div>
              <div className="p-4 sm:p-6 text-center font-bold text-architech-brand-blue text-xs sm:text-sm border-l-2 border-architech-brand-blue bg-architech-brand-blue/5">
                {t('whereWeFit.tableHeaders.theArchitech')}<br />
                <span className="text-xs text-architech-brand-green font-semibold">✨ {t('whereWeFit.tableHeaders.theWinner')}</span>
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
        )}

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
