import { useState } from "react";
import { Heart, Rocket, Shield, Users, Zap, ArrowRight, Sparkles, Quote, Clock, CheckCircle, TrendingUp, Brain, X, Check } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn, defaultViewport, floating, pulse } from "@/lib/animations";
import React from "react";

const BenefitsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Keep the emotional impact but simplify the interaction
  const benefits = [
    {
      id: "developer",
      category: "For the Developer",
      icon: Heart,
      title: "End the Burnout",
      subtitle: "Code with Joy Again",
      description: "Stop fighting with configs and focus on solving real problems. The Architech handles the tedious setup so you can build amazing features.",
      highlight: "It's time to find the joy in coding again.",
      impact: "90% less setup time",
      gradient: "from-pink-500 to-red-500",
      bgGradient: "from-pink-500/10 via-red-500/5 to-orange-500/10",
    },
    {
      id: "business", 
      category: "For the Business",
      icon: TrendingUp,
      title: "Launch Faster Than Competitors",
      subtitle: "Speed is Your Advantage",
      description: "While competitors spend months on infrastructure, you'll be in market getting real user feedback and iterating.",
      highlight: "Turn development costs into competitive advantage.",
      impact: "10x faster to market",
      gradient: "from-emerald-500 to-green-500",
      bgGradient: "from-emerald-500/10 via-green-500/5 to-teal-500/10",
    },
    {
      id: "product",
      category: "For the Product", 
      icon: Shield,
      title: "Zero Technical Debt",
      subtitle: "Built Right From Day One",
      description: "Enterprise-grade architecture and best practices built-in. Start with a foundation that scales instead of rebuilding later.",
      highlight: "Avoid the costly mistakes that create technical debt.",
      impact: "Zero refactoring needed",
      gradient: "from-purple-500 to-violet-500",
      bgGradient: "from-purple-500/10 via-violet-500/5 to-indigo-500/10",
    },
  ];

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Auto-advance every 8 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % benefits.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [activeIndex]); // Add activeIndex as dependency to reset timer on manual clicks

  return (
    <section
      id="benefits"
      className="py-24 bg-gradient-surface relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header with more emotional appeal */}
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
            From Frustration to Freedom
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            variants={fadeInUp}
          >
            Stop Wasting Your{" "}
            <span className="text-transparent bg-gradient-electric bg-clip-text">
              Talent
            </span>
            <br />
            Start Shipping Genius
          </motion.h2>

          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            The Architech transforms how your entire team thinks about building software. 
            Focus on innovation, not infrastructure.
          </motion.p>
        </motion.div>

        {/* Simplified but impactful showcase */}
        <div className="max-w-6xl mx-auto">
          
          {/* Benefit tabs - simpler navigation */}
          <motion.div
            className="flex justify-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
          >
            <div className="flex bg-background/50 rounded-2xl p-2 backdrop-blur-sm border border-architech-border">
              {benefits.map((benefit, index) => (
                <button
                  key={benefit.id}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeIndex === index
                      ? 'bg-gradient-electric text-white shadow-lg'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {benefit.category.replace('For the ', '')}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Active benefit showcase */}
          <motion.div
            key={activeIndex}
            className={`glass-card rounded-3xl p-8 lg:p-12 border border-architech-electric/20 bg-gradient-to-br ${benefits[activeIndex].bgGradient} relative overflow-hidden`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${benefits[activeIndex].gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                  >
                    {React.createElement(benefits[activeIndex].icon, { className: "h-8 w-8 text-white" })}
                  </motion.div>
                  
                  <div>
                    <div className="text-sm font-mono text-architech-electric uppercase tracking-wider">
                      {benefits[activeIndex].category}
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
                      {benefits[activeIndex].title}
                    </h3>
                    <div className="text-xl text-muted-foreground mt-1">
                      {benefits[activeIndex].subtitle}
                    </div>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {benefits[activeIndex].description}
                </p>

                {/* Emotional highlight */}
                <div className="relative pl-6 border-l-2 border-architech-electric/30 py-2">
                  <p className="text-xl font-semibold text-architech-electric italic">
                    {benefits[activeIndex].highlight}
                  </p>
                </div>

                {/* Impact metric */}
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-foreground">
                    {benefits[activeIndex].impact}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Measurable improvement
                  </div>
                </div>
              </div>

              {/* Enhanced visual element with real information */}
              <div className="relative">
                <div className="space-y-6">
                  {/* Live metrics showcase */}
                  <motion.div
                    className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div className="text-center mb-4">
                      {React.createElement(benefits[activeIndex].icon, { className: "h-12 w-12 text-architech-electric mx-auto mb-3" })}
                      <h4 className="text-lg font-semibold text-foreground">
                        {benefits[activeIndex].category} Impact
                      </h4>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {/* Dynamic metrics based on active benefit */}
                      {activeIndex === 0 && ( // Developer metrics
                        <>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-pink-400">15min</div>
                            <div className="text-xs text-muted-foreground">Average setup</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-red-400">90%</div>
                            <div className="text-xs text-muted-foreground">Time saved</div>
                          </div>
                        </>
                      )}
                      {activeIndex === 1 && ( // Business metrics
                        <>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-emerald-400">3 days</div>
                            <div className="text-xs text-muted-foreground">To market</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-400">80%</div>
                            <div className="text-xs text-muted-foreground">Cost reduction</div>
                          </div>
                        </>
                      )}
                      {activeIndex === 2 && ( // Product metrics
                        <>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-purple-400">100%</div>
                            <div className="text-xs text-muted-foreground">Test coverage</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-violet-400">0</div>
                            <div className="text-xs text-muted-foreground">Tech debt</div>
                          </div>
                        </>
                      )}
                    </div>
                  </motion.div>

                  {/* Before vs After comparison */}
                  <motion.div
                    className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h4 className="text-lg font-semibold text-foreground mb-4 text-center">
                      Before vs After
                    </h4>
                    
                    <div className="space-y-3">
                      {/* Dynamic before/after based on active benefit */}
                      {activeIndex === 0 && ( // Developer
                        <>
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <X className="h-4 w-4 text-red-400" />
                              <span className="text-red-400">2-4 weeks setup</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-green-400" />
                              <span className="text-green-400">15 minutes</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <X className="h-4 w-4 text-red-400" />
                              <span className="text-red-400">Config hell</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-green-400" />
                              <span className="text-green-400">Zero config</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <X className="h-4 w-4 text-red-400" />
                              <span className="text-red-400">DevOps stress</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-green-400" />
                              <span className="text-green-400">Pure coding joy</span>
                            </div>
                          </div>
                        </>
                      )}
                      {activeIndex === 1 && ( // Business
                        <>
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <X className="h-4 w-4 text-red-400" />
                              <span className="text-red-400">6-month runway</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-green-400" />
                              <span className="text-green-400">3-day launch</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <X className="h-4 w-4 text-red-400" />
                              <span className="text-red-400">$200K+ dev costs</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-green-400" />
                              <span className="text-green-400">$0 infrastructure</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <X className="h-4 w-4 text-red-400" />
                              <span className="text-red-400">Late to market</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-green-400" />
                              <span className="text-green-400">First-mover advantage</span>
                            </div>
                          </div>
                        </>
                      )}
                      {activeIndex === 2 && ( // Product
                        <>
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <X className="h-4 w-4 text-red-400" />
                              <span className="text-red-400">Quick & dirty MVP</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-green-400" />
                              <span className="text-green-400">Production-ready</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <X className="h-4 w-4 text-red-400" />
                              <span className="text-red-400">Technical debt</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-green-400" />
                              <span className="text-green-400">Clean architecture</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <X className="h-4 w-4 text-red-400" />
                              <span className="text-red-400">Rewrite needed</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-green-400" />
                              <span className="text-green-400">Scales infinitely</span>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </motion.div>

         
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Compelling closing statement */}
        <motion.div
          className="text-center max-w-4xl mx-auto mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <div className="glass-card rounded-3xl p-8 lg:p-12 border border-architech-electric/20 bg-gradient-to-br from-architech-electric/5 to-purple-500/5">
            <Quote className="h-12 w-12 text-architech-electric/30 mx-auto mb-6" />
            
            <blockquote className="text-2xl lg:text-3xl font-bold text-foreground mb-6 leading-tight">
              "The Architech isn't just a tool—it's a{" "}
              <span className="text-transparent bg-gradient-electric bg-clip-text">
                paradigm shift
              </span>{" "}
              for modern development."
            </blockquote>
            
            {/* <p className="text-lg text-muted-foreground mb-8">
              Join thousands of teams who've escaped the setup trap and are shipping faster than ever.
            </p> */}

            <motion.div
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-electric text-white rounded-full font-semibold text-lg hover:shadow-glow transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => smoothScrollTo("how-it-works")}
            >
              <Zap className="h-5 w-5" />
              <span>Experience the transformation</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;