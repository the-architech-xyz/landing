import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { FileText, Brain, Code, ArrowRight, Download, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { useState } from "react";

const HowItWorksSimplifiedSection = () => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState<'blueprint' | 'generation' | 'code'>('blueprint');
  
  const steps = [
    {
      id: "blueprint" as const,
      title: t('howItWorks.supplyChain.steps.blueprint.title'),
      description: t('howItWorks.supplyChain.steps.blueprint.description'),
      icon: FileText,
      color: "from-architech-brand-blue to-architech-electric",
      yamlExample: t('howItWorks.supplyChain.steps.blueprint.yamlExample')
    },
    {
      id: "generation" as const,
      title: t('howItWorks.supplyChain.steps.generation.title'),
      description: t('howItWorks.supplyChain.steps.generation.description'),
      icon: Brain,
      color: "from-architech-purple to-architech-violet",
      checklist: t('howItWorks.supplyChain.steps.generation.checklist', { returnObjects: true }) as string[]
    },
    {
      id: "code" as const,
      title: t('howItWorks.supplyChain.steps.code.title'),
      description: t('howItWorks.supplyChain.steps.code.description'),
      icon: Code,
      color: "from-architech-brand-green to-architech-emerald",
      codeExample: t('howItWorks.supplyChain.steps.code.codeExample')
    }
  ];

  const currentStep = steps.find(step => step.id === activeStep);

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-6">
        {/* Clean Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            {t('howItWorks.supplyChain.title')}{" "}
            <span className="text-transparent bg-gradient-to-r from-architech-brand-blue to-architech-electric bg-clip-text">
              {t('howItWorks.supplyChain.titleHighlight')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('howItWorks.supplyChain.subtitle')}
          </p>
        </motion.div>

        {/* Interactive Step Navigation */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
        >
          {/* Step Icons with Numbers */}
          <div className="flex justify-center items-center gap-8 lg:gap-16 mb-8">
            {steps.map((step, index) => (
              <motion.button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`relative group transition-all duration-300 ${
                  activeStep === step.id ? 'scale-110' : 'hover:scale-105'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Step Icon */}
                <div className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 ${
                  activeStep === step.id 
                    ? 'shadow-2xl shadow-architech-electric/25' 
                    : 'group-hover:shadow-xl'
                }`}>
                  <step.icon className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                </div>
                
                {/* Step Number */}
                <div className="absolute -top-2 -right-2 w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-architech-electric to-architech-purple rounded-full flex items-center justify-center text-white font-bold text-xs lg:text-sm">
                  {index + 1}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Step Navigation Buttons */}
          <div className="flex justify-center gap-2">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeStep === step.id
                    ? 'bg-architech-electric text-white shadow-lg'
                    : 'bg-architech-surface/20 text-muted-foreground hover:bg-architech-electric/10 hover:text-foreground'
                }`}
              >
                {t(`howItWorks.supplyChain.navigation.${step.id}`)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Active Step Content */}
        <motion.div
          key={activeStep}
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Description */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${currentStep?.color} rounded-xl flex items-center justify-center`}>
                  {currentStep?.icon && <currentStep.icon className="h-6 w-6 text-white" />}
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
                  {currentStep?.title}
                </h3>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {currentStep?.description}
              </p>
            </div>

            {/* Right Column - Visual Content */}
            <div className="relative">
              {activeStep === 'blueprint' && (
                <div className="bg-architech-surface/20 border border-architech-border/30 rounded-xl p-6">
                  <div className="text-sm text-muted-foreground font-mono whitespace-pre-wrap">
                    {currentStep?.yamlExample}
                  </div>
                </div>
              )}

              {activeStep === 'generation' && (
                <div className="space-y-4">
                  {currentStep?.checklist?.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-architech-surface/10 border border-architech-border/20 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-6 h-6 bg-gradient-to-br from-architech-brand-green to-architech-emerald rounded-full flex items-center justify-center">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-foreground font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeStep === 'code' && (
                <div className="bg-architech-surface/20 border border-architech-border/30 rounded-xl p-6">
                  <div className="text-sm text-muted-foreground font-mono whitespace-pre-wrap">
                    {currentStep?.codeExample}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Clean Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg border-architech-electric/30 hover:border-architech-electric hover:bg-architech-electric/5"
              onClick={() => {
                // Link to whitepaper or detailed docs
                window.open('/whitepaper', '_blank');
              }}
            >
              <Download className="h-5 w-5 mr-2" />
              {t('howItWorks.supplyChain.cta.button')}
            </Button>
            <div className="text-sm text-muted-foreground">
              {t('howItWorks.supplyChain.cta.description')}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSimplifiedSection;
