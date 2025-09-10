import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { FileText, Brain, Code, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

const HowItWorksSimplifiedSection = () => {
  const { t } = useTranslation();
  
  const steps = [
    {
      id: "blueprint",
      title: t('howItWorks.supplyChain.steps.blueprint.title'),
      subtitle: t('howItWorks.supplyChain.steps.blueprint.subtitle'),
      description: t('howItWorks.supplyChain.steps.blueprint.description'),
      icon: FileText,
      color: "from-architech-brand-blue to-architech-electric",
      example: t('howItWorks.supplyChain.steps.blueprint.example')
    },
    {
      id: "ai-architect",
      title: t('howItWorks.supplyChain.steps.aiArchitect.title'),
      subtitle: t('howItWorks.supplyChain.steps.aiArchitect.subtitle'),
      description: t('howItWorks.supplyChain.steps.aiArchitect.description'),
      icon: Brain,
      color: "from-architech-purple to-architech-violet",
      example: t('howItWorks.supplyChain.steps.aiArchitect.example')
    },
    {
      id: "your-code",
      title: t('howItWorks.supplyChain.steps.yourCode.title'),
      subtitle: t('howItWorks.supplyChain.steps.yourCode.subtitle'),
      description: t('howItWorks.supplyChain.steps.yourCode.description'),
      icon: Code,
      color: "from-architech-brand-green to-architech-emerald",
      example: t('howItWorks.supplyChain.steps.yourCode.example')
    }
  ];

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

        {/* Clean Steps */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className="text-center group"
                variants={fadeInUp}
                transition={{ delay: index * 0.2 }}
              >
                {/* Step Number */}
                <div className="relative mb-8">
                  <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-architech-electric to-architech-purple rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>

                {/* Step Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <div className="text-lg text-architech-electric font-medium">
                    {step.subtitle}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Example */}
                  <div className="mt-6 p-4 bg-architech-surface/20 border border-architech-border/30 rounded-xl">
                    <div className="text-sm text-muted-foreground font-mono text-left">
                      {step.example}
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-architech-electric to-transparent transform translate-x-6">
                    <ArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 h-4 w-4 text-architech-electric" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Clean Bottom CTA */}
          <motion.div
            className="text-center mt-16"
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
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSimplifiedSection;
