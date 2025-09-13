import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { FileText, Cpu, Download, ArrowRight } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useState } from "react";

const HowItWorksSection = () => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      number: "01",
      title: t('howItWorks.steps.describe.title'),
      description: t('howItWorks.steps.describe.description'),
      icon: FileText,
      details: [
        t('howItWorks.steps.describe.details.0'),
        t('howItWorks.steps.describe.details.1'),
        t('howItWorks.steps.describe.details.2'),
        t('howItWorks.steps.describe.details.3')
      ],
      codeExample: t('howItWorks.steps.describe.codeExample')
    },
    {
      number: "02", 
      title: t('howItWorks.steps.generate.title'),
      description: t('howItWorks.steps.generate.description'),
      icon: Cpu,
      details: [
        t('howItWorks.steps.generate.details.0'),
        t('howItWorks.steps.generate.details.1'),
        t('howItWorks.steps.generate.details.2'),
        t('howItWorks.steps.generate.details.3')
      ],
      codeExample: t('howItWorks.steps.generate.codeExample')
    },
    {
      number: "03",
      title: t('howItWorks.steps.deploy.title'), 
      description: t('howItWorks.steps.deploy.description'),
      icon: Download,
      details: [
        t('howItWorks.steps.deploy.details.0'),
        t('howItWorks.steps.deploy.details.1'),
        t('howItWorks.steps.deploy.details.2'),
        t('howItWorks.steps.deploy.details.3')
      ],
      codeExample: t('howItWorks.steps.deploy.codeExample')
    }
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 sm:py-32 bg-gradient-to-b from-background to-background/50 bg-architech-section-dark relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-satoshi font-bold text-foreground mb-6 leading-tight">
            {t('howItWorks.title')}{" "}
            <span className="text-transparent bg-gradient-to-r from-architech-brand-blue to-architech-brand-green bg-clip-text">
              {t('howItWorks.titleHighlight')}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('howItWorks.subtitle')}
          </p>
        </motion.div>

        {/* Active Focus Navigation - Desktop */}
        <motion.div
          className="max-w-4xl mx-auto mb-16 hidden md:block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
        >
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <motion.button
                key={step.number}
                onClick={() => setActiveStep(index)}
                className={`relative group transition-all duration-500 ${
                  activeStep === index ? 'scale-105' : 'hover:scale-105'
                }`}
                style={{
                  opacity: activeStep === index ? 1 : 0.4,
                  filter: activeStep === index ? 'none' : 'saturate(0.5)'
                }}
                whileHover={{ 
                  scale: 1.05,
                  opacity: 1,
                  filter: 'none'
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Step Circle */}
                <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${
                  activeStep === index
                    ? 'bg-gradient-to-r from-architech-brand-blue to-architech-brand-green shadow-2xl shadow-architech-brand-blue/25'
                    : 'bg-architech-surface/20 border-2 border-architech-brand-blue/30 group-hover:border-architech-brand-blue/60 group-hover:bg-architech-brand-blue/10'
                }`}>
                  <step.icon className={`w-8 h-8 lg:w-10 lg:h-10 transition-colors duration-300 ${
                    activeStep === index ? 'text-white' : 'text-architech-brand-blue group-hover:text-architech-brand-green'
                  }`} />
                </div>
                
                {/* Step Number */}
                <div className={`absolute -top-2 -right-2 w-6 h-6 lg:w-8 lg:h-8 rounded-full flex items-center justify-center text-xs lg:text-sm font-bold transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-architech-brand-green text-white'
                    : 'bg-architech-surface/40 text-muted-foreground group-hover:bg-architech-brand-blue/20 group-hover:text-architech-brand-blue'
                }`}>
                  {step.number}
                </div>
                
                {/* Step Title */}
                <div className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <div className={`text-sm lg:text-base font-medium transition-colors duration-300 ${
                    activeStep === index
                      ? 'text-architech-brand-blue'
                      : 'text-muted-foreground group-hover:text-foreground'
                  }`}>
                    {step.title}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Mobile Accordion Navigation */}
        <motion.div
          className="max-w-4xl mx-auto mb-16 md:hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
        >
          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.button
                key={step.number}
                onClick={() => setActiveStep(index)}
                className={`w-full p-4 rounded-xl transition-all duration-500 ${
                  activeStep === index
                    ? 'bg-gradient-to-r from-architech-brand-blue/10 to-architech-brand-green/10 border-2 border-architech-brand-blue/30'
                    : 'bg-architech-surface/20 border-2 border-architech-brand-blue/10 hover:border-architech-brand-blue/30'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-4">
                  {/* Step Circle */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${
                    activeStep === index
                      ? 'bg-gradient-to-r from-architech-brand-blue to-architech-brand-green shadow-2xl shadow-architech-brand-blue/25'
                      : 'bg-architech-surface/20 border-2 border-architech-brand-blue/30'
                  }`}>
                    <step.icon className={`w-6 h-6 transition-colors duration-300 ${
                      activeStep === index ? 'text-white' : 'text-architech-brand-blue'
                    }`} />
                  </div>
                  
                  {/* Step Number & Title */}
                  <div className="flex items-center space-x-3 flex-1">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                      activeStep === index
                        ? 'bg-architech-brand-green text-white'
                        : 'bg-architech-surface/40 text-muted-foreground'
                    }`}>
                      {step.number}
                    </div>
                    <div className={`text-base font-medium transition-colors duration-300 ${
                      activeStep === index
                        ? 'text-architech-brand-blue'
                        : 'text-muted-foreground'
                    }`}>
                      {step.title}
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Active Step Content - Desktop */}
        <motion.div
          key={activeStep}
          className="max-w-6xl mx-auto hidden md:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-architech-brand-blue to-architech-brand-green rounded-xl flex items-center justify-center mr-4">
                  {(() => {
                    const IconComponent = steps[activeStep].icon;
                    return <IconComponent className="w-6 h-6 text-white" />;
                  })()}
                </div>
                <div className="text-2xl sm:text-3xl font-satoshi font-bold text-architech-brand-blue">
                  {steps[activeStep].number}
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-satoshi font-bold text-foreground mb-4">
                {steps[activeStep].title}
              </h3>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {steps[activeStep].description}
              </p>

              <ul className="space-y-3">
                {steps[activeStep].details.map((detail, detailIndex) => (
                  <motion.li
                    key={detailIndex}
                    className="flex items-center text-foreground"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: detailIndex * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-architech-brand-blue to-architech-brand-green rounded-full mr-3 flex-shrink-0"></div>
                    {detail}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Code Example */}
            <div className="relative">
              <div className="glass-card rounded-2xl p-6 border border-architech-brand-blue/20 bg-gradient-to-br from-architech-brand-blue/5 to-architech-brand-green/5">
                <div className="bg-[#0D1B2A] rounded-xl p-6 border border-architech-brand-blue/30 font-mono text-sm overflow-x-auto">
                  <pre className="text-foreground whitespace-pre-wrap">
                    <code>{steps[activeStep].codeExample}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mobile Content - Accordion Style */}
        <motion.div
          key={`mobile-${activeStep}`}
          className="max-w-6xl mx-auto md:hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-6">
            {/* Content */}
            <div className="space-y-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-architech-brand-blue to-architech-brand-green rounded-xl flex items-center justify-center mr-4">
                  {(() => {
                    const IconComponent = steps[activeStep].icon;
                    return <IconComponent className="w-6 h-6 text-white" />;
                  })()}
                </div>
                <div className="text-2xl font-satoshi font-bold text-architech-brand-blue">
                  {steps[activeStep].number}
                </div>
              </div>

              <h3 className="text-2xl font-satoshi font-bold text-foreground mb-4">
                {steps[activeStep].title}
              </h3>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {steps[activeStep].description}
              </p>

              <ul className="space-y-3">
                {steps[activeStep].details.map((detail, detailIndex) => (
                  <motion.li
                    key={detailIndex}
                    className="flex items-center text-foreground"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: detailIndex * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-architech-brand-blue to-architech-brand-green rounded-full mr-3 flex-shrink-0"></div>
                    {detail}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Code Example */}
            <div className="relative">
              <div className="glass-card rounded-2xl p-4 border border-architech-brand-blue/20 bg-gradient-to-br from-architech-brand-blue/5 to-architech-brand-green/5">
                <div className="bg-[#0D1B2A] rounded-xl p-4 border border-architech-brand-blue/30 font-mono text-xs overflow-x-auto">
                  <pre className="text-foreground whitespace-pre-wrap">
                    <code>{steps[activeStep].codeExample}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16 sm:mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Want to learn more about our vision?
          </p>
          <motion.button
            className="bg-gradient-to-r from-architech-brand-blue to-architech-brand-green text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-architech-brand-blue/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.open('/lightpaper', '_blank');
            }}
          >
            Read Our Light Paper
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;