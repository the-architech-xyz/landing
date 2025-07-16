import { Palette, Code, Rocket, BarChart3, RotateCcw, Sparkles, Globe, Settings, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn, defaultViewport, floating } from "@/lib/animations";

const PlatformVisionSection = () => {
  const platformFeatures = [
    {
      icon: Palette,
      title: "Design-to-Code",
      description: "Design your interfaces in a visual tool (integrating Penpot's open source technology) and instantly transform them into a library of reusable components.",
      gradient: "bg-gradient-creative",
      coming: "Q3 2025"
    },
    {
      icon: Globe,
      title: "Integrated CMS & i18n",
      description: "Manage your application content and translations directly from the platform, with one click.",
      gradient: "bg-gradient-ocean",
      coming: "Q4 2025"
    },
    {
      icon: Rocket,
      title: "Automated DevOps & Analytics",
      description: "From one-click deployment on European clouds to performance and user behavior monitoring, everything is integrated.",
      gradient: "bg-gradient-sunset",
      coming: "Q1 2026"
    },
    {
      icon: Zap,
      title: "AI-Powered Project Management",
      description: "Connect your feature requests directly to AI agents for ultra-fast development cycles.",
      gradient: "bg-gradient-aurora",
      coming: "Q2 2026"
    }
  ];

  const cycleSteps = [
    { icon: Palette, label: "Design", color: "text-creative" },
    { icon: Code, label: "Code", color: "text-electric" },
    { icon: Rocket, label: "Deploy", color: "text-sunset" },
    { icon: BarChart3, label: "Analyze", color: "text-ocean" },
    { icon: RotateCcw, label: "Iterate", color: "text-aurora" }
  ];

  return (
    <section id="platform-vision" className="py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <motion.div 
        className="absolute top-20 left-20 w-32 h-32 bg-gradient-electric rounded-full opacity-5 blur-xl"
        animate={floating}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-creative rounded-full opacity-5 blur-xl"
        animate={{ ...floating, transition: { ...floating.transition, delay: 2 } }}
      />

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
            <Sparkles className="h-4 w-4" />
            The Future of Development
          </motion.div>

          <motion.h2 
            className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            variants={fadeInUp}
          >
            More Than Code Assembly.{" "}
            <br />
            <span className="text-transparent bg-gradient-rainbow bg-clip-text">
              Your Entire Product Lifecycle, Unified.
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-4xl mx-auto"
            variants={fadeInUp}
          >
            The Architech is designed to scale and become the only platform you need 
            to go from idea to success. The modular approach extends to every aspect 
            of product development.
          </motion.p>
        </motion.div>

        {/* Central Cycle Diagram */}
        {/* <motion.div 
          className="flex justify-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <div className="relative">
            <motion.div 
              className="w-32 h-32 rounded-full bg-gradient-electric flex items-center justify-center shadow-electric relative z-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="text-center">
                <motion.div 
                  className="text-white font-bold text-sm"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  The
                  <br />
                  Architech
                </motion.div>
              </div>
            </motion.div>

            {cycleSteps.map((step, index) => {
              const angle = (index * 72) - 90; // 360/5 = 72 degrees between each
              const radius = 120;
              const x = Math.cos(angle * Math.PI / 180) * radius;
              const y = Math.sin(angle * Math.PI / 180) * radius;
              
              return (
                <motion.div
                  key={step.label}
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="glass-card rounded-xl p-4 text-center min-w-[80px]">
                    <step.icon className={`h-6 w-6 mx-auto mb-2 text-architech-electric`} />
                    <div className="text-xs font-medium text-foreground">{step.label}</div>
                  </div>
                </motion.div>
              );
            })}

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-60 h-60 rounded-full border border-architech-border/30"></div>
            </div>
          </div>
        </motion.div> */}

        {/* Feature Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          {platformFeatures.map((feature, index) => {
            const Icon = feature.icon;
            const isLeft = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                variants={isLeft ? fadeInLeft : fadeInRight}
                className="group"
              >
                <div className="glass-card rounded-2xl p-8 h-full border border-architech-border hover:border-architech-electric/50 transition-all duration-300 relative overflow-hidden">
                  {/* Gradient overlay */}
                  <motion.div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{ background: `linear-gradient(135deg, var(--architech-electric), var(--architech-purple))` }}
                  />
                  
                  <div className="relative z-10">
                    {/* Icon and coming badge */}
                    <div className="flex items-start justify-between mb-4">
                      <motion.div 
                        className={`w-12 h-12 ${feature.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </motion.div>
                      
                      <motion.div 
                        className="px-3 py-1 bg-architech-electric/10 border border-architech-electric/20 rounded-full text-xs text-architech-electric font-medium"
                        whileHover={{ scale: 1.05 }}
                      >
                        {feature.coming}
                      </motion.div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-architech-electric transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <motion.div 
            className="max-w-2xl mx-auto glass-card rounded-3xl p-8 border border-architech-border hover:border-architech-electric/50 transition-all duration-500"
            whileHover={{ scale: 1.02 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Be Part of the Revolution
            </motion.h3>
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Join the early access program and help shape the future of development. 
              Your feedback will directly influence how we build the ultimate development platform.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformVisionSection; 