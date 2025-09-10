import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { 
  Clock, 
  AlertTriangle, 
  FileText, 
  Settings, 
  CheckCircle, 
  Zap, 
  Code, 
  Rocket,
  ArrowRight
} from "lucide-react";

const BenefitsBeforeAfterSection = () => {
  const beforeItems = [
    { icon: Clock, text: "Des semaines de configuration", color: "text-red-500" },
    { icon: AlertTriangle, text: "Erreurs de configuration", color: "text-red-500" },
    { icon: FileText, text: "Documentation complexe", color: "text-red-500" },
    { icon: Settings, text: "Outils multiples à maîtriser", color: "text-red-500" }
  ];

  const afterItems = [
    { icon: Zap, text: "Prêt en quelques minutes", color: "text-green-500" },
    { icon: CheckCircle, text: "Configuration automatique", color: "text-green-500" },
    { icon: Code, text: "Code propre et documenté", color: "text-green-500" },
    { icon: Rocket, text: "Déploiement immédiat", color: "text-green-500" }
  ];

  return (
    <section id="benefits" className="py-24 bg-gradient-to-b from-background to-background/50">
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
            La Fin du{" "}
            <span className="text-transparent bg-gradient-brand bg-clip-text">
              Travail Répétitif
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comparez l'expérience de développement traditionnelle avec Architech
          </p>
        </motion.div>

        {/* Before/After Comparison */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Before Column */}
            <motion.div
              className="bg-red-50/10 border border-red-200/20 rounded-2xl p-8 lg:p-10"
              variants={fadeInUp}
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-sm font-medium text-red-500 mb-4">
                  <AlertTriangle className="h-4 w-4" />
                  Le Chaos Manuel
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Développement Traditionnel
                </h3>
                <p className="text-muted-foreground">
                  Des semaines de configuration manuelle
                </p>
              </div>

              <div className="space-y-4">
                {beforeItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-red-500/5 rounded-lg border border-red-200/20"
                    variants={fadeInUp}
                    transition={{ delay: index * 0.1 }}
                  >
                    <item.icon className={`h-5 w-5 ${item.color} flex-shrink-0`} />
                    <span className="text-foreground font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-red-500/5 rounded-lg border border-red-200/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">2-4 semaines</div>
                  <div className="text-sm text-muted-foreground">Temps de configuration</div>
                </div>
              </div>
            </motion.div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <motion.div
                className="w-12 h-12 bg-gradient-electric rounded-full flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <ArrowRight className="h-6 w-6 text-white" />
              </motion.div>
            </div>

            {/* After Column */}
            <motion.div
              className="bg-green-50/10 border border-green-200/20 rounded-2xl p-8 lg:p-10"
              variants={fadeInUp}
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-sm font-medium text-green-500 mb-4">
                  <CheckCircle className="h-4 w-4" />
                  La Clarté Architecturale
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Avec Architech
                </h3>
                <p className="text-muted-foreground">
                  Prêt à produire en quelques minutes
                </p>
              </div>

              <div className="space-y-4">
                {afterItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-green-500/5 rounded-lg border border-green-200/20"
                    variants={fadeInUp}
                    transition={{ delay: index * 0.1 }}
                  >
                    <item.icon className={`h-5 w-5 ${item.color} flex-shrink-0`} />
                    <span className="text-foreground font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-green-500/5 rounded-lg border border-green-200/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">2-3 minutes</div>
                  <div className="text-sm text-muted-foreground">Temps de génération</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile Arrow */}
          <div className="md:hidden flex justify-center my-8">
            <motion.div
              className="w-12 h-12 bg-gradient-electric rounded-full flex items-center justify-center"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <ArrowRight className="h-6 w-6 text-white rotate-90" />
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-12"
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-electric/10 border border-electric-blue/20 rounded-full text-electric-blue font-medium">
              <Zap className="h-4 w-4" />
              90% de temps économisé sur la configuration
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsBeforeAfterSection;
