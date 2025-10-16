import { motion } from "framer-motion";
import { FileCode, Sparkles, Rocket } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { BRANDING } from "@/lib/branding";
import { useTranslation } from "@/hooks/useTranslation";

/**
 * THE ARCHITECH HOW IT WORKS SECTION - V1.1
 * Developer-focused flow: Define → Generate → Customize
 * Accurately reflects the actual product workflow
 */

const HowItWorksSection = () => {
  const { t } = useTranslation();
  
  const steps = [
    {
      number: "01",
      title: t('howItWorks.steps.define.title'),
      description: t('howItWorks.steps.define.description'),
      icon: FileCode,
      codeSnippet: "export const genome = {\n  adapters: ['nextjs', 'drizzle'],\n  integrators: ['stripe', 'clerk']\n}"
    },
    {
      number: "02", 
      title: t('howItWorks.steps.generate.title'),
      description: t('howItWorks.steps.generate.description'),
      icon: Sparkles,
      codeSnippet: "$ architech generate\n\n✓ Analyzing...\n✓ Installing...\n✓ Ready!"
    },
    {
      number: "03",
      title: t('howItWorks.steps.customize.title'), 
      description: t('howItWorks.steps.customize.description'),
      icon: Rocket,
      codeSnippet: "npm run dev\n\n# Full code ownership\n# Modify freely"
    }
  ];

  return (
    <section
      id="how-it-works"
      className="section-padding bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--cyan-electric))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--cyan-electric))_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className={BRANDING.spacing.container}>
        {/* Section Header */}
        <SectionHeader section="howItWorks" />

        {/* All Steps in Single Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 lg:p-8 group"
            >
              {/* Step Number Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center rounded-md">
                  <step.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-sm font-bold text-primary bg-primary/10 border border-primary/30 px-3 py-1 rounded-md">
                  {step.number}
                </div>
              </div>

              {/* Step Title */}
              <h3 className="text-xl lg:text-2xl font-bold mb-3 text-balance group-hover:text-primary group-hover:scale-[1.02] transition-all origin-left">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {step.description}
              </p>

              {/* Code Snippet - Orange for step 02 (the magic moment) */}
              <div className="bg-background/50 border border-accent/20 rounded-md p-4 font-mono text-sm text-accent">
                {step.codeSnippet}
              </div>

              {/* Arrow to next step (hidden on last) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-primary/30">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
