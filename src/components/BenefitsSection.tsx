import { useState, useRef, useEffect } from "react";
import { Heart, Rocket, Shield, Users, Zap, ArrowRight, Sparkles, Quote, Play, Pause } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn, defaultViewport } from "@/lib/animations";
import React from "react";

const BenefitsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const benefits = [
    {
      id: "developer",
      category: "For the Developer",
      title: "End the Burnout",
      subtitle: "Code with Joy Again",
      description: "Stop spending your days fighting with YAML files and dependency hell. The Architech handles the repetitive, frustrating setup so you can focus on solving complex problems and building beautiful features.",
      highlight: "It's time to find the joy in coding again.",
      cta: "See how it works",
      ctaTarget: "how-it-works",
      icon: Heart,
      bgGradient: "from-pink-500/10 via-red-500/5 to-orange-500/10",
      iconGradient: "from-pink-500 to-red-500",
      stats: [
        { label: "Setup time saved", value: "90%", color: "text-pink-400" },
        { label: "Focus on features", value: "100%", color: "text-red-400" }
      ]
    },
    {
      id: "business", 
      category: "For the Business",
      title: "Launch in Days, Not Quarters",
      subtitle: "Speed is Survival",
      description: "In today's market, speed is survival. While your competitors are still setting up their CI/CD, you'll be on the market, getting feedback from real users and iterating fast.",
      highlight: "Drastically reduce your development costs and your time-to-market.",
      cta: "Join the waitlist",
      ctaTarget: "cta",
      icon: Rocket,
      bgGradient: "from-emerald-500/10 via-green-500/5 to-teal-500/10",
      iconGradient: "from-emerald-500 to-green-500",
      stats: [
        { label: "Time to market", value: "10x faster", color: "text-emerald-400" },
        { label: "Development cost", value: "80% less", color: "text-green-400" }
      ]
    },
    {
      id: "product",
      category: "For the Product", 
      title: "Eliminate Technical Debt",
      subtitle: "Before It's Written",
      description: "Our specialized AI agents and modular architecture enforce best practices by default. You start with a clean, tested, and scalable foundation that grows with you.",
      highlight: "Avoid the poor initial choices that create technical debt down the line.",
      cta: "Learn more",
      ctaTarget: "faq",
      icon: Shield,
      bgGradient: "from-purple-500/10 via-violet-500/5 to-indigo-500/10",
      iconGradient: "from-purple-500 to-violet-500",
      stats: [
        { label: "Code quality", value: "Enterprise grade", color: "text-purple-400" },
        { label: "Technical debt", value: "Zero", color: "text-violet-400" }
      ]
    },
    {
      id: "team",
      category: "For the Team",
      title: "A Single Source of Truth",
      subtitle: "for Design, Code, and Ops",
      description: "The Architech's modular view and integrated platform reduce friction between teams. Designers, developers, and project managers work on a unified, consistent architecture.",
      highlight: "End conflicts over tech decisions.",
      cta: "Meet the team",
      ctaTarget: "team",
      icon: Users,
      bgGradient: "from-blue-500/10 via-cyan-500/5 to-sky-500/10",
      iconGradient: "from-blue-500 to-cyan-500",
      stats: [
        { label: "Team alignment", value: "100%", color: "text-blue-400" },
        { label: "Decision conflicts", value: "Eliminated", color: "text-cyan-400" }
      ]
    }
  ];

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Auto-advance with pause functionality
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % benefits.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [benefits.length, isPaused]);

  return (
    <section
      id="benefits"
      className="relative bg-gradient-surface py-24 lg:py-32 overflow-hidden"
      ref={sectionRef}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16 lg:mb-24"
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
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            The Architech doesn't just make you faster. It fundamentally improves the quality of your work and the sustainability of your business.
          </motion.p>
        </motion.div>

        {/* Interactive Benefits Showcase */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start max-w-7xl mx-auto">
          
          {/* Left: Navigation & Summary */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-3xl lg:text-4xl font-bold text-transparent bg-gradient-electric bg-clip-text leading-tight">
                Built for Everyone
              </h3>
              
              {/* Progress Control */}
              {/* <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className="w-8 h-8 rounded-full bg-architech-electric/10 hover:bg-architech-electric/20 flex items-center justify-center transition-colors"
                  title={isPaused ? "Resume auto-advance" : "Pause auto-advance"}
                >
                  {isPaused ? <Play className="h-4 w-4 text-architech-electric" /> : <Pause className="h-4 w-4 text-architech-electric" />}
                </button>
              </div> */}
            </div>
            
            {/* <p className="text-lg text-muted-foreground leading-relaxed">
              Four core transformations. Zero complexity. Total liberation for every role on your team.
            </p> */}

            {/* Progress Indicator */}
            {/* <div className="flex gap-2">
              {benefits.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'bg-architech-electric flex-1' : 'bg-muted/30 w-8'
                  }`}
                />
              ))}
            </div> */}

            {/* Benefit Navigation */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <motion.button
                  key={benefit.id}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                    activeIndex === index 
                      ? 'bg-gradient-electric/10 border-l-4 border-architech-electric shadow-lg' 
                      : 'hover:bg-muted/50 border-l-4 border-transparent'
                  }`}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsPaused(true);
                    setTimeout(() => setIsPaused(false), 5000); // Resume after 5s
                  }}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 bg-gradient-to-br ${benefit.iconGradient} rounded-lg flex items-center justify-center`}>
                      <benefit.icon className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-mono text-architech-electric font-semibold">
                        {benefit.category.replace('For the ', '')}
                      </div>
                      <div className="font-semibold text-foreground">
                        {benefit.title}
                      </div>
                    </div>
                    {activeIndex !== index && (
                      <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Global Quote */}
            <motion.div className="relative mt-8">
              <Quote className="absolute -top-2 -left-2 h-8 w-8 text-architech-electric/30" />
              <blockquote className="text-xl font-semibold text-architech-electric italic pl-8 border-l-4 border-architech-electric/30 py-2">
                The Architech isn't just a tool; it's a complete paradigm shift for modern development.
              </blockquote>
            </motion.div>
          </motion.div>

          {/* Right: Active Benefit Detail */}
          <motion.div
            className="lg:col-span-3"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
          >
            <motion.div
              key={activeIndex}
              className={`relative bg-gradient-to-br ${benefits[activeIndex].bgGradient} rounded-3xl border border-white/10 backdrop-blur-sm overflow-hidden p-8 lg:p-12`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 space-y-6">
                
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="text-sm font-mono font-bold text-architech-electric uppercase tracking-wider mb-2">
                      {benefits[activeIndex].category}
                    </div>
                    <h4 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                      {benefits[activeIndex].title}
                      <div className="text-2xl text-muted-foreground mt-1">
                        {benefits[activeIndex].subtitle}
                      </div>
                    </h4>
                  </div>
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefits[activeIndex].iconGradient} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 ml-6`}>
                    {React.createElement(benefits[activeIndex].icon, { className: "h-8 w-8 text-white" })}
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {benefits[activeIndex].description}
                </p>

                {/* Highlight Quote */}
                <div className="relative pl-6 border-l-2 border-architech-electric/30 py-2">
                  <p className="text-xl font-semibold text-architech-electric italic">
                    {benefits[activeIndex].highlight}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 pt-4">
                  {benefits[activeIndex].stats.map((stat, statIndex) => (
                    <motion.div
                      key={statIndex}
                      className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: statIndex * 0.1 }}
                    >
                      <div className={`text-3xl font-bold ${stat.color} mb-1`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Micro-CTA */}
                <motion.div 
                  className="pt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <button
                    onClick={() => smoothScrollTo(benefits[activeIndex].ctaTarget || "how-it-works")}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium text-foreground transition-all duration-200 group"
                  >
                    {benefits[activeIndex].cta}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </div>

              {/* Subtle glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefits[activeIndex].bgGradient} opacity-20 blur-3xl -z-10`} />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16 lg:mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <div className="glass-card rounded-3xl p-8 lg:p-12 border border-architech-electric/20 bg-gradient-to-br from-architech-electric/5 to-purple-500/5 max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
              The Architech is{" "}
              <span className="text-transparent bg-gradient-electric bg-clip-text">
                a strategic platform
              </span>{" "}
              that gives you speed, quality, AND freedom.
            </h3>
            
            <motion.div
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-electric text-white rounded-full font-semibold text-lg hover:shadow-glow transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => smoothScrollTo("how-it-works")}
            >
              <Zap className="h-5 w-5" />
              <span>See how it works</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;