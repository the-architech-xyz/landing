import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { FileText, Cpu, Download } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const HowItWorksSection = () => {
  const { t } = useTranslation();
  
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
            {t('howItWorks.title')}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('howItWorks.subtitle')}
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <div className="space-y-16 sm:space-y-24">
            {steps.map((step, index) => (
            <motion.div
                key={step.number}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
              variants={fadeInUp}
            >
                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-architech-brand-blue to-architech-brand-green rounded-xl flex items-center justify-center mr-4">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-satoshi font-bold text-architech-brand-blue">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-satoshi font-bold text-foreground mb-4">
                    {step.title}
                  </h3>

                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="flex items-center text-foreground"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-architech-brand-blue to-architech-brand-green rounded-full mr-3 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
          </div>

                {/* Code Example */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="glass-card rounded-2xl p-6 border border-architech-brand-blue/20 bg-gradient-to-br from-architech-brand-blue/5 to-architech-brand-green/5">
                    <div className="bg-[#0D1B2A] rounded-xl p-6 border border-architech-brand-blue/30 font-mono text-sm overflow-x-auto">
                      <pre className="text-foreground whitespace-pre-wrap">
                        <code>{step.codeExample}</code>
                      </pre>
                    </div>
                  </div>
                      </div>
                    </motion.div>
                  ))}
          </div>
        </motion.div>

        {/* CTA */}
        {/* <motion.div
          className="text-center mt-16 sm:mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to see it in action?
          </p>
          <motion.button
            className="bg-gradient-to-r from-architech-brand-blue to-architech-brand-green text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-architech-brand-blue/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('architects-canvas');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Watch Live Demo
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default HowItWorksSection;