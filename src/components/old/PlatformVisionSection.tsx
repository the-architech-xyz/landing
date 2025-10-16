import { Palette, Code, Rocket, BarChart3, RotateCcw, Sparkles, Globe, Settings, Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn, defaultViewport, floating } from "@/lib/animations";
import { useTranslation } from "@/hooks/useTranslation";

const PlatformVisionSection = () => {
  const { t } = useTranslation();
  
  const platformFeatures = [
    {
      icon: Palette,
      title: t('platformVision.features.designToCode.title'),
      description: t('platformVision.features.designToCode.description'),
      gradient: "bg-gradient-creative",
      coming: t('platformVision.features.designToCode.coming')
    },
    {
      icon: Globe,
      title: t('platformVision.features.cmsI18n.title'),
      description: t('platformVision.features.cmsI18n.description'),
      gradient: "bg-gradient-icon-2",
      coming: t('platformVision.features.cmsI18n.coming')
    },
    {
      icon: Rocket,
      title: t('platformVision.features.devopsAnalytics.title'),
      description: t('platformVision.features.devopsAnalytics.description'),
      gradient: "bg-gradient-icon-3",
      coming: t('platformVision.features.devopsAnalytics.coming')
    },
    {
      icon: Zap,
      title: t('platformVision.features.aiProjectManagement.title'),
      description: t('platformVision.features.aiProjectManagement.description'),
      gradient: "bg-primary",
      coming: t('platformVision.features.aiProjectManagement.coming')
    }
  ];

  const cycleSteps = [
    { icon: Palette, label: t('platformVision.cycleSteps.design'), color: "text-architech-purple" },
    { icon: Code, label: t('platformVision.cycleSteps.code'), color: "text-architech-electric" },
    { icon: Rocket, label: t('platformVision.cycleSteps.deploy'), color: "text-muted-foreground" },
    { icon: BarChart3, label: t('platformVision.cycleSteps.analyze'), color: "text-muted-foreground" },
    { icon: RotateCcw, label: t('platformVision.cycleSteps.iterate'), color: "text-architech-electric" }
  ];

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="platform-vision" className="py-16 sm:py-24 bg-architech-section-dark relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="text-center mb-12 sm:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-architech-electric/10 border border-architech-electric/20 text-sm font-medium text-architech-electric mb-6 sm:mb-8"
            variants={scaleIn}
          >
            <Sparkles className="h-4 w-4" />
            {t('platformVision.badge')}
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight px-2"
            variants={fadeInUp}
          >
            {t('platformVision.title.line1')}{" "}
            <span className="text-transparent bg-gradient-brand bg-clip-text">
              {t('platformVision.title.line2')}
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto px-4"
            variants={fadeInUp}
          >
            {t('platformVision.subtitle')}
          </motion.p>
        </motion.div>

        {/* Feature Grid - Mobile optimized */}
        <motion.div 
          className="relative max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          {/* Timeline Line - Vertical on mobile, horizontal on desktop */}
          <motion.div 
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-architech-electric via-architech-purple to-architech-electric/30 transform -translate-x-0.5 z-10 hidden lg:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />

          <div className="space-y-8 sm:space-y-16">
            {platformFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const isLeft = index % 2 === 0;
              const delay = index * 0.2;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay, duration: 0.6 }}
                  className="relative"
                >
                  {/* Mobile: Single column layout */}
                  <div className="lg:hidden">
                    <motion.div
                      className="w-full group"
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="glass-card p-6 border border-architech-border hover:border-architech-electric/50 transition-all duration-300 relative overflow-hidden">
                        {/* Gradient overlay */}
                        <motion.div 
                          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                          style={{ background: `linear-gradient(135deg, var(--architech-electric), var(--architech-purple))` }}
                        />
                        
                        <div className="relative z-10">
                          {/* Header with Icon and Timeline Badge */}
                          <div className="flex items-start justify-between mb-4">
                            <motion.div 
                              className={`w-12 h-12 ${feature.gradient} flex items-center justify-center shadow-lg`}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <Icon className="h-6 w-6 text-white" />
                            </motion.div>
                            
                            <motion.div 
                              className="px-3 py-1 bg-architech-electric/10 border border-architech-electric/20 text-xs font-medium text-architech-electric"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: delay + 0.3, type: "spring" }}
                            >
                              {feature.coming}
                            </motion.div>
                          </div>
                          
                          <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Desktop: Left/Right alternating layout */}
                  <div className="hidden lg:block">
                    {/* Left Card */}
                    {isLeft && (
                      <>
                        <motion.div
                          className="w-1/2 pr-12 group"
                          whileHover={{ y: -8 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          <div className="glass-card p-6 border border-architech-border hover:border-architech-electric/50 transition-all duration-300 relative overflow-hidden">
                            {/* Gradient overlay */}
                            <motion.div 
                              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                              style={{ background: `linear-gradient(135deg, var(--architech-electric), var(--architech-purple))` }}
                            />
                            
                            {/* Connecting Line to Timeline - From right edge of card */}
                            <motion.div 
                              className="absolute -right-12 top-6 w-12 h-0.5 bg-gradient-to-r from-architech-electric/80 to-architech-electric/50 z-20"
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              transition={{ delay: delay + 0.5, duration: 0.6 }}
                            />
                            
                            <div className="relative z-10">
                              {/* Header with Icon and Timeline Badge */}
                              <div className="flex items-start justify-between mb-4">
                                <motion.div 
                                  className={`w-12 h-12 ${feature.gradient} flex items-center justify-center shadow-lg`}
                                  whileHover={{ scale: 1.1, rotate: 5 }}
                                  transition={{ type: "spring", stiffness: 300 }}
                                >
                                  <Icon className="h-6 w-6 text-white" />
                                </motion.div>
                                
                                <motion.div 
                                  className="px-3 py-1 bg-architech-electric/10 border border-architech-electric/20 text-xs font-medium text-architech-electric"
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: delay + 0.3, type: "spring" }}
                                >
                                  {feature.coming}
                                </motion.div>
                              </div>
                              
                              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      </>
                    )}

                    {/* Right Card */}
                    {!isLeft && (
                      <>
                        <motion.div
                          className="w-1/2 pl-12 group ml-auto"
                          whileHover={{ y: -8 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          <div className="glass-card p-6 border border-architech-border hover:border-architech-electric/50 transition-all duration-300 relative overflow-hidden">
                            {/* Gradient overlay */}
                            <motion.div 
                              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                              style={{ background: `linear-gradient(135deg, var(--architech-electric), var(--architech-purple))` }}
                            />
                            
                            {/* Connecting Line to Timeline - From left edge of card */}
                            <motion.div 
                              className="absolute -left-12 top-6 w-12 h-0.5 bg-gradient-to-l from-architech-electric/80 to-architech-electric/50 z-20"
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              transition={{ delay: delay + 0.5, duration: 0.6 }}
                            />
                            
                            <div className="relative z-10">
                              {/* Header with Icon and Timeline Badge */}
                              <div className="flex items-start justify-between mb-4">
                                <motion.div 
                                  className={`w-12 h-12 ${feature.gradient} flex items-center justify-center shadow-lg`}
                                  whileHover={{ scale: 1.1, rotate: 5 }}
                                  transition={{ type: "spring", stiffness: 300 }}
                                >
                                  <Icon className="h-6 w-6 text-white" />
                                </motion.div>
                                
                                <motion.div 
                                  className="px-3 py-1 bg-architech-electric/10 border border-architech-electric/20 text-xs font-medium text-architech-electric"
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: delay + 0.3, type: "spring" }}
                                >
                                  {feature.coming}
                                </motion.div>
                              </div>
                              
                              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Enhanced CTA - Mobile optimized */}
        <motion.div
          className="text-center mt-12 sm:mt-20 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white font-semibold text-base sm:text-lg hover:shadow-glow transition-all duration-300 cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => smoothScrollTo("cta")}
          >
            <span>{t('platformVision.cta')}</span>
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformVisionSection; 