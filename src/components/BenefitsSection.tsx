import { useState } from "react";
import { Zap, Code, Shield, Database, Palette, TestTube, ChevronRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn, defaultViewport, floating, pulse } from "@/lib/animations";

const BenefitsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const benefits = [
    {
      icon: Zap,
      title: "Skip the Setup",
      description: "From idea to deployment in minutes, not weeks",
      details: [
        "Scripts & agents handle all configuration",
        "Pre-configured best practices",
        "Zero manual configuration",
      ],
      gradient: "bg-gradient-electric",
      iconColor: "text-white",
      primary: true,
    },
    {
      icon: Shield,
      title: "Built-in Security",
      description: "Enterprise-grade security from day one",
      details: [
        "JWT + OAuth2 authentication",
        "Role-based access control",
        "SOC 2 compliant infrastructure",
      ],
      gradient: "bg-gradient-icon-2",
      iconColor: "text-white",
      primary: false,
    },
    {
      icon: Code,
      title: "Clean Code",
      description: "Production-ready code you can maintain",
      details: [
        "TypeScript throughout",
        "Comprehensive testing",
        "Clear architecture",
      ],
      gradient: "bg-gradient-icon-3",
      iconColor: "text-white",
      primary: false,
    },
    {
      icon: Database,
      title: "Optimized Performance",
      description: "Built for scale from the start",
      details: [
        "Database optimization",
        "Caching strategies",
        "CDN integration",
      ],
      gradient: "bg-gradient-icon-4",
      iconColor: "text-white",
      primary: false,
    },
    {
      icon: Palette,
      title: "Beautiful Design System",
      description: "Accessible, responsive UI components",
      details: [
        "Figma design system",
        "Dark/light mode support",
        "Mobile-first responsive",
      ],
      gradient: "bg-gradient-icon-5",
      iconColor: "text-white",
      primary: false,
    },
    {
      icon: TestTube,
      title: "Built-in Testing",
      description: "Comprehensive test coverage out of the box",
      details: [
        "Unit & integration tests",
        "E2E testing setup",
        "CI/CD pipeline included",
      ],
      gradient: "bg-gradient-icon-6",
      iconColor: "text-white",
      primary: false,
    },
  ];

   const smoothScrollTo = (elementId: string) => {
     const element = document.getElementById(elementId);
     if (element) {
       element.scrollIntoView({ behavior: "smooth" });
     }
   };

  return (
    <section
      id="benefits"
      className="py-24 bg-gradient-surface relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-architech-electric/10 border border-architech-electric/20 rounded-full text-sm font-medium text-architech-electric mb-8"
            variants={scaleIn}
          >
            <Sparkles className="h-4 w-4" />
            Benefits
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            variants={fadeInUp}
          >
            Stop{" "}
            <span className="text-transparent bg-gradient-electric bg-clip-text">
              Rebuilding
            </span>
            <br />
            The Same Things
          </motion.h2>

          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Every project needs authentication, databases, and deployment. 
            We provide proven modules so you can focus on building what makes your product unique.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                variants={isEven ? fadeInLeft : fadeInRight}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="glass-card rounded-2xl p-6 h-full border border-architech-border hover:border-architech-electric/50 transition-all duration-300 relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, var(--architech-electric), var(--architech-purple))`,
                    }}
                  />

                  {/* Icon with floating animation */}
                  <motion.div
                    className={`w-12 h-12 ${benefit.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg relative z-10`}
                    animate={hoveredCard === index ? floating : {}}
                  >
                    <Icon className={`h-6 w-6 ${benefit.iconColor}`} />
                  </motion.div>

                  <div className="relative z-10">
                    <motion.h3
                      className="text-xl font-bold text-foreground mb-2 group-hover:text-architech-electric transition-colors duration-300"
                      animate={hoveredCard === index ? { x: [0, 2, 0] } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      {benefit.title}
                    </motion.h3>

                    <motion.p
                      className="text-muted-foreground mb-4 leading-relaxed"
                      animate={hoveredCard === index ? { x: [0, 1, 0] } : {}}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      {benefit.description}
                    </motion.p>

                    {/* Always visible details */}
                    <div className="border-t border-architech-border/50 pt-4 mt-4">
                      <ul className="space-y-2">
                        {benefit.details.map((detail, detailIndex) => (
                          <motion.li
                            key={detailIndex}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                            animate={
                              hoveredCard === index ? { x: [0, 3, 0] } : {}
                            }
                            transition={{
                              duration: 0.2,
                              delay: detailIndex * 0.05,
                            }}
                          >
                            <ChevronRight className="h-3 w-3 text-architech-electric" />
                            {detail}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Hover indicator */}
                    {/* <motion.div
                      className="flex items-center gap-1 text-sm text-architech-electric mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{ x: hoveredCard === index ? 5 : 0 }}
                    >
                      <span>Learn more</span>
                      <ChevronRight className="h-3 w-3" />
                    </motion.div> */}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full border border-architech-electric/20 text-architech-electric font-medium hover:shadow-glow transition-all duration-300 cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={pulse}
            onClick={() => smoothScrollTo("cta")}
          >
            <Sparkles className="h-4 w-4" />
            <span>Ready to experience the magic?</span>
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;