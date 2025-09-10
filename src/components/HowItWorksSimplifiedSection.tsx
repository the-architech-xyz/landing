import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { FileText, Brain, Code, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorksSimplifiedSection = () => {
  const steps = [
    {
      id: "blueprint",
      title: "Blueprint",
      subtitle: "Votre Intention",
      description: "Décrivez votre application en langage naturel",
      icon: FileText,
      color: "from-blue-600 to-blue-400",
      example: "Une app de gestion de tâches avec authentification JWT et base de données PostgreSQL"
    },
    {
      id: "ai-architect",
      title: "AI Architect",
      subtitle: "Notre Orchestration",
      description: "Notre IA sélectionne et configure les modules optimaux",
      icon: Brain,
      color: "from-purple-600 to-purple-400",
      example: "Sélection automatique des adapters: Auth, Database, UI, API Gateway"
    },
    {
      id: "your-code",
      title: "Your Code",
      subtitle: "Votre Propriété",
      description: "Code généré, documenté et prêt pour la production",
      icon: Code,
      color: "from-green-600 to-green-400",
      example: "Structure complète avec tests, documentation et configuration de déploiement"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            The Supply Chain for{" "}
            <span className="text-transparent bg-gradient-brand bg-clip-text">
              Modern Software
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un processus simple en 3 étapes pour transformer votre vision en application
          </p>
        </motion.div>

        {/* Steps */}
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
                  <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-electric rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>

                {/* Step Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <div className="text-lg text-muted-foreground font-medium">
                    {step.subtitle}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Example */}
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
                    <div className="text-sm text-muted-foreground font-mono text-left">
                      {step.example}
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-electric-blue to-transparent transform translate-x-6">
                    <ArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 h-4 w-4 text-electric-blue" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-16"
            variants={fadeInUp}
          >
            <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg"
                onClick={() => {
                  // Link to whitepaper or detailed docs
                  window.open('/whitepaper', '_blank');
                }}
              >
                <Download className="h-5 w-5 mr-2" />
                Lire notre Whitepaper
              </Button>
              <div className="text-sm text-muted-foreground">
                Pour les détails techniques complets
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSimplifiedSection;
