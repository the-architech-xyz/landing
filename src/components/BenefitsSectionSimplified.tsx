import { motion } from "framer-motion";
import { Clock, Puzzle, RotateCcw } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { BRANDING } from "@/lib/branding";
import { useTranslation } from "@/hooks/useTranslation";

/**
 * THE ARCHITECH BENEFITS SECTION - "WHY THIS EXISTS"
 * Brutalist, clean design with clear problem → solution flow
 * Focused on readability and visual hierarchy
 */

const BenefitsSectionSimplified = () => {
  const { t } = useTranslation();

  const painPoints = [
    {
      icon: Clock,
      title: "Setup Hell",
      description: "2-3 days just to start. Every. Single. Project."
    },
    {
      icon: Puzzle,
      title: "Integration Nightmare",
      description: "Tools don't talk to each other. You're the translator."
    },
    {
      icon: RotateCcw,
      title: "Repetition Fatigue",
      description: "Building the same auth flow for the 17th time."
    }
  ];

  return (
    <section
      id="benefits"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Musical Grid Background */}
      <div className="absolute inset-0 musical-grid opacity-50" />

      <div className={`${BRANDING.spacing.container} relative z-10`}>
        {/* Section Header */}
        <SectionHeader section="benefits" />

        {/* The Pill Chart - Centered, Visual Proof */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="max-w-xl mx-auto">
            {/* The Pill - Orange for Innovation Tax */}
            <div className="rounded-full grid grid-cols-[70fr_30fr] h-20 md:h-24 overflow-hidden mb-4 shadow-lg">
              <div className="bg-gradient-to-r from-accent to-accent/90 flex items-center justify-center text-xl md:text-2xl font-bold text-white">
                70%
              </div>
              <div className="bg-gradient-to-r from-primary/80 to-primary flex items-center justify-center text-xl md:text-2xl font-bold text-white">
                30%
              </div>
            </div>

            {/* Clean Legend - Orange & Blue */}
            <p className="text-center text-muted-foreground text-sm">
              <span className="text-accent font-semibold">70% Setup</span>
              {" • "}
              <span className="text-primary font-semibold">30% Building</span>
            </p>
          </div>
        </motion.div>

        {/* Conversational Text - After the Pill */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <p className="text-xl md:text-2xl leading-relaxed mb-4">
            Yes, Developers spend <span className="text-accent font-semibold">70% of their time</span> on setup, configuration, and integration.
          </p>
          {/* <p className="text-lg text-muted-foreground">
            Not building. Not creating. Just... configuring.
          </p> */}
        </motion.div>

        {/* "Why?" Introduction */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold">
            Why? <span className="text-muted-foreground font-normal">Here's where the 70% goes:</span>
          </h3>
        </motion.div>

        {/* Problem Cards - Brutalist Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-card border border-border hover:border-primary/50 transition-colors group"
            >
              <point.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold mb-2">{point.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Metrics - Concrete Impact */}
        {/* <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-accent/10 border border-accent/30 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">
                <span className="text-muted-foreground">6 weeks →</span> <span className="text-accent">2 hours</span>
              </div>
              <p className="text-sm text-muted-foreground">SaaS setup time</p>
            </div>
            <div className="p-6 bg-accent/10 border border-accent/30 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">
                <span className="text-muted-foreground">0 →</span> <span className="text-accent">100%</span>
              </div>
              <p className="text-sm text-muted-foreground">Code ownership</p>
            </div>
            <div className="p-6 bg-accent/10 border border-accent/30 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">
                <span className="text-muted-foreground">20+ →</span> <span className="text-accent">1</span>
              </div>
              <p className="text-sm text-muted-foreground">Integration files</p>
            </div>
          </div>
        </motion.div> */}

        {/* Solution Statement - Clean, Powerful, Single Color */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl md:text-3xl font-semibold leading-relaxed mb-6">
            The Architech eliminates the setup tax.
            <br />
            <span className="text-primary">Define once. Deploy forever.</span>
          </p>
          <a
            href="/philosophy"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Read our philosophy →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSectionSimplified;

