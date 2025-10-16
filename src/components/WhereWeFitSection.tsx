import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { BRANDING } from "@/lib/branding";
import { useTranslation } from "@/hooks/useTranslation";

/**
 * THE ARCHITECH WHERE WE FIT SECTION - Simplified & Brutalist
 * Clean comparison table showing key differentiators
 * Reduced from 723 lines to ~200 lines
 */

const WhereWeFitSection = () => {
  const { t } = useTranslation();

  // Top 5 differentiators - what sets The Architech apart
  const comparisons = [
    {
      feature: "Production-Ready Code",
      description: "Deploy immediately, no cleanup needed",
      noCode: true,
      aiBuilders: false,
      copilots: false,
      architech: true,
    },
    {
      feature: "100% Code Ownership",
      description: "No black boxes, no vendor lock-in",
      noCode: false,
      aiBuilders: false,
      copilots: true,
      architech: true,
    },
    {
      feature: "Orchestrated Integrations",
      description: "Modules work together automatically",
      noCode: false,
      aiBuilders: false,
      copilots: false,
      architech: true,
    },
    {
      feature: "Best Practices Built-In",
      description: "TypeScript, ESLint, testing configured",
      noCode: false,
      aiBuilders: false,
      copilots: false,
      architech: true,
    },
    {
      feature: "Modular & Extensible",
      description: "Add, remove, or swap modules anytime",
      noCode: false,
      aiBuilders: false,
      copilots: false,
      architech: true,
    },
  ];

  const tools = [
    { key: "noCode", label: "No-Code Tools", subtext: "Webflow, Bubble" },
    { key: "aiBuilders", label: "AI Builders", subtext: "v0, Lovable" },
    { key: "copilots", label: "AI Copilots", subtext: "GitHub Copilot" },
    { key: "architech", label: "The Architech", subtext: "Our Approach", highlight: true },
  ];

  return (
    <section id="where-we-fit" className="section-padding bg-background relative overflow-hidden">
      {/* Musical Grid Background */}
      <div className="absolute inset-0 musical-grid opacity-50" />

      <div className={BRANDING.spacing.container}>
        {/* Section Header */}
        <SectionHeader section="whereWeFit" />

        {/* Comparison Table - Desktop */}
        <div className="hidden md:block max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-lg overflow-hidden"
          >
            {/* Table Header */}
            <div className="grid grid-cols-5 border-b border-border bg-background">
              <div className="p-4 font-bold text-sm">Feature</div>
              {tools.map((tool) => (
                <div
                  key={tool.key}
                  className={`p-4 text-center border-l border-border ${
                    tool.highlight ? "bg-primary/5" : ""
                  }`}
                >
                  <div className={`font-bold text-sm ${tool.highlight ? "text-primary" : ""}`}>
                    {tool.label}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{tool.subtext}</div>
                </div>
              ))}
            </div>

            {/* Table Rows */}
            {comparisons.map((comparison, index) => (
              <motion.div
                key={comparison.feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="grid grid-cols-5 border-b border-border last:border-b-0 hover:bg-background/50 transition-colors"
              >
                <div className="p-4 font-medium text-sm">{comparison.feature}</div>
                {tools.map((tool) => {
                  const value = comparison[tool.key as keyof typeof comparison] as boolean;
                  return (
                    <div
                      key={tool.key}
                      className={`p-4 flex items-center justify-center border-l border-border ${
                        tool.highlight ? "bg-primary/5" : ""
                      }`}
                    >
                      {value ? (
                        <Check className={`h-5 w-5 ${tool.highlight ? "text-primary" : "text-muted-foreground"}`} />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground/30" />
                      )}
                    </div>
                  );
                })}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile View - Stacked Cards */}
        <div className="md:hidden space-y-6">
          {tools.map((tool, toolIndex) => (
            <motion.div
              key={tool.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: toolIndex * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 bg-card border ${
                tool.highlight ? "border-primary/50" : "border-border"
              } rounded-lg`}
            >
              <div className="mb-4">
                <div className={`font-bold text-lg ${tool.highlight ? "text-primary" : ""}`}>
                  {tool.label}
                </div>
                <div className="text-sm text-muted-foreground">{tool.subtext}</div>
              </div>
              <div className="space-y-3">
                {comparisons.map((comparison) => {
                  const value = comparison[tool.key as keyof typeof comparison] as boolean;
                  return (
                    <div key={comparison.feature} className="flex items-center justify-between">
                      <span className="text-sm">{comparison.feature}</span>
                      {value ? (
                        <Check className={`h-5 w-5 ${tool.highlight ? "text-primary" : "text-muted-foreground"}`} />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground/30" />
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          className="text-center mt-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-muted-foreground">
            The only tool that combines{" "}
            <span className="text-primary font-semibold">instant generation</span> with{" "}
            <span className="text-primary font-semibold">full ownership</span> and{" "}
            <span className="text-primary font-semibold">modular architecture</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhereWeFitSection;
