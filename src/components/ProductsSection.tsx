import { motion } from "framer-motion";
import { Terminal, Users, Sparkles, ArrowRight } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { Badge } from "@/components/ui/badge";
import { useMarketplace } from "@/hooks/useMarketplace";

/**
 * THE ARCHITECH PRODUCTS SECTION - "Three Ways to Build"
 * Brutalist, clean design showing product ladder: CLI → Team → SAAS
 * Single color focus with strategic accent use
 * Uses real marketplace stats
 */

const ProductsSection = () => {
  const { t } = useTranslation();
  const { stats, genomes } = useMarketplace();

  const products = [
    {
      icon: Terminal,
      title: "CLI",
      tagline: "For Developers",
      description: "Command-line power. Generate projects instantly. Store your preferred stacks. Full control.",
      features: [
        "TypeScript-first",
        "Open source",
        `${stats.totalModules}+ modules`,
        "Zero lock-in"
      ],
      ctaText: "Explore CLI",
      ctaLink: "/cli",
      available: true,
      colorScheme: "primary" // Blue
    },
    {
      icon: Users,
      title: "Team",
      tagline: "For Collaboration",
      description: "Internal marketplace. Share genomes across your team. Never lose sight of your standards.",
      features: [
        "Private modules",
        "Shared templates",
        "Team governance",
        "Instant onboarding"
      ],
      ctaText: "See Team Features",
      ctaLink: "/for-teams",
      available: true,
      colorScheme: "primary" // Blue
    },
    {
      icon: Sparkles,
      title: "SAAS",
      tagline: "For Creators",
      description: "No-code power. AI-generated apps. The simplicity of no-code without the limitations.",
      features: [
        "Natural language",
        "Visual interface",
        "AI-powered",
        "Full code ownership"
      ],
      ctaText: "Join Waitlist",
      ctaLink: "#cta",
      available: false,
      colorScheme: "accent" // Orange for creators
    }
  ];

  return (
    <section id="products" className="section-padding bg-background relative overflow-hidden">
      {/* Musical Grid Background */}
      <div className="absolute inset-0 musical-grid opacity-50" />

      <div className="container-architech relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="inline-block rounded-md px-4 py-2 bg-primary/10 border border-primary/30 text-primary text-sm font-bold tracking-wider mb-6">
            THREE WAYS TO BUILD
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-balance">
            Choose Your <span className="text-primary">Path</span>
          </h2>
      
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((product, index) => {
            const isAccent = product.colorScheme === "accent";
            const iconColor = isAccent ? "text-accent" : "text-primary";
            const iconBg = isAccent ? "bg-accent/10" : "bg-primary/10";
            const iconBorder = isAccent ? "border-accent/30" : "border-primary/30";
            const hoverBorder = isAccent ? "hover:border-accent/50" : "hover:border-primary/50";
            
            return (
              <motion.div
                key={product.title}
                className={`p-6 bg-card border border-border ${hoverBorder} transition-colors group relative`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Coming Soon Badge */}
                {!product.available && (
                  <Badge 
                    variant="default" 
                    className="absolute top-4 right-4 bg-accent text-white border-0 text-xs"
                  >
                    Coming Soon
                  </Badge>
                )}

                {/* Icon */}
                <div className={`w-12 h-12 ${iconBg} border ${iconBorder} flex items-center justify-center mb-4 rounded-md`}>
                  <product.icon className={`w-6 h-6 ${iconColor} group-hover:scale-110 transition-transform`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2">
                  {product.title}
                </h3>

                {/* Tagline */}
                <div className={`${iconColor} text-xs font-semibold uppercase tracking-wider mb-4`}>
                  {product.tagline}
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-muted-foreground text-sm">
                      <span className={`${iconColor} font-bold mr-2 text-xs`}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a 
                  href={product.ctaLink}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-md ${isAccent ? 'bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20' : 'bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20'} font-semibold transition-all text-sm`}
                >
                  <span>{product.ctaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

