import { MessageSquare, Users, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn, defaultViewport, numberCounter } from "@/lib/animations";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Define Your Intent",
      description: "Describe your application and select the modules you need.",
      details: ["Choose your tech stack", "Define core features", "Set requirements"],
      gradient: "bg-gradient-electric"
    },
    {
      number: "02", 
      icon: Users,
      title: "Orchestrate the Agents",
      description: "The Architech commands the right AI agents to generate each module.",
      details: ["AuthAgent handles security", "DesignAgent creates UI", "TestAgent writes tests"],
      gradient: "bg-gradient-ocean"
    },
    {
      number: "03",
      icon: Eye,
      title: "Supervise & Create",
      description: "Review the high-quality code, add your unique logic, and deploy.",
      details: ["Clean, readable code", "Full ownership", "Ready to deploy"],
      gradient: "bg-gradient-aurora"
    }
  ];

  const AnimatedNumber = ({ number, index }: { number: string; index: number }) => {
    return (
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={defaultViewport}
        transition={{ 
          delay: index * 0.2,
          type: "spring",
          stiffness: 200,
          damping: 15
        }}
        className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-gradient-electric text-white flex items-center justify-center font-black text-lg shadow-electric z-10"
      >
        {number}
      </motion.div>
    );
  };

  return (
    <section id="how-it-works" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-architech-electric rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-architech-purple rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-architech-cyan rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-architech-electric/10 border border-architech-electric/20 rounded-full text-sm font-medium text-architech-electric mb-8"
            variants={scaleIn}
          >
            <Users className="h-4 w-4" />
            How It Works
          </motion.div>

          <motion.h2 
            className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            variants={fadeInUp}
          >
            Three Steps to{" "}
            <span className="text-transparent bg-gradient-electric bg-clip-text">
              Production
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            The Architech orchestrates specialized AI agents to build your application. 
            Each agent is an expert in their domain, working together to create something extraordinary.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isMiddle = index === 1;
            const animationVariant = isMiddle ? fadeInUp : (index === 0 ? fadeInLeft : fadeInRight);
            
            return (
              <motion.div
                key={step.number}
                variants={animationVariant}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative group"
              >
                {/* Connection line to next step */}
                {index < steps.length - 1 && (
                  <motion.div 
                    className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-architech-electric to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={defaultViewport}
                    transition={{ delay: index * 0.3 + 0.5, duration: 0.6 }}
                  />
                )}

                <div className="glass-card rounded-3xl p-8 relative border border-architech-border group-hover:border-architech-electric/50 transition-all duration-500 group-hover:shadow-glow">
                  {/* Animated number badge */}
                  <AnimatedNumber number={step.number} index={index} />
                  
                  {/* Icon with gradient background */}
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl ${step.gradient} flex items-center justify-center mb-6 shadow-lg relative`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Icon className="h-8 w-8 text-white" />
                    
                    {/* Glow effect */}
                    <motion.div 
                      className={`absolute inset-0 rounded-2xl ${step.gradient} opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500`}
                    />
                  </motion.div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-architech-electric transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {step.description}
                    </p>

                    {/* Detail points with staggered animation */}
                    <motion.div 
                      className="space-y-3 pt-4"
                      initial="hidden"
                      whileInView="visible"
                      viewport={defaultViewport}
                      variants={staggerContainer}
                    >
                      {step.details.map((detail, detailIndex) => (
                        <motion.div
                          key={detailIndex}
                          variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: {
                              opacity: 1,
                              x: 0,
                              transition: {
                                delay: index * 0.2 + detailIndex * 0.1,
                                duration: 0.5
                              }
                            }
                          }}
                          className="flex items-center gap-3"
                        >
                          <motion.div 
                            className={`w-2 h-2 rounded-full ${step.gradient}`}
                            whileHover={{ scale: 1.5 }}
                          />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced CTA */}
        <motion.div 
          className="text-center mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <motion.div 
            className="max-w-md mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="glass-card rounded-2xl p-8 border border-architech-border hover:border-architech-electric/50 transition-all duration-300">
              <motion.p 
                className="text-lg text-muted-foreground mb-6"
                variants={fadeInUp}
              >
                Ready to see it in action?
              </motion.p>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  className="bg-gradient-electric hover:shadow-electric text-white font-semibold group relative overflow-hidden w-full"
                  onClick={() => {
                    const element = document.getElementById('cta');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full"
                    whileHover={{ x: "200%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">Experience The Magic</span>
                  <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;