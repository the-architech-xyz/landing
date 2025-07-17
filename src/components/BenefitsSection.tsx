import { useState } from "react";
import { Heart, Rocket, Shield, Users, Zap, ArrowRight, Sparkles, Quote, Clock, CheckCircle, TrendingUp, Brain, X, Check, Flame, Target, Crown, Coffee, Zap as Lightning, Star, Award, Gem, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn, defaultViewport, floating, pulse } from "@/lib/animations";
import React from "react";

const BenefitsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // More authentic, human-centered benefits with real personality
  const benefits = [
    {
      id: "developer",
      category: "Developers",
      icon: Flame,
      title: "Remember Why You Started Coding",
      subtitle: "The joy is back",
      description: "You got into this to build amazing things, not fight with Docker configs for 3 days. The Architech handles the boring stuff so you can focus on what matters.",
      highlight: "Code with passion, not frustration.",
      impact: "From 3 days to 15 minutes",
      gradient: "from-pink-500 to-red-500",
      bgGradient: "from-pink-500/10 via-red-500/5 to-orange-500/10",
      story: "Sarah, a senior dev, went from 'I hate my job' to 'I can't wait to build this' in one afternoon.",
      pain: "The setup trap",
      solution: "Instant project scaffolding"
    },
    {
      id: "business", 
      category: "Founders",
      icon: Crown,
      title: "Beat Your Competitors to Market",
      subtitle: "Speed is everything",
      description: "While they're still arguing about tech stacks, you'll have real users giving you feedback. That's the difference between success and failure.",
      highlight: "Launch first, iterate fast.",
      impact: "Months → Days",
      gradient: "from-emerald-500 to-green-500",
      bgGradient: "from-emerald-500/10 via-green-500/5 to-teal-500/10",
      story: "Mike's startup launched in 3 days instead of 6 months. They got their first 100 users before their competitors even started coding.",
      pain: "Slow time to market",
      solution: "Instant deployment"
    },
    {
      id: "product",
      category: "Product Teams", 
      icon: Gem,
      title: "Build It Right the First Time",
      subtitle: "No more technical debt",
      description: "Stop building MVPs that become technical nightmares. Start with enterprise-grade architecture that actually scales.",
      highlight: "Quality from day one.",
      impact: "Zero rewrites needed",
      gradient: "from-purple-500 to-violet-500",
      bgGradient: "from-purple-500/10 via-violet-500/5 to-indigo-500/10",
      story: "The team at Flow built their entire platform without a single 'we need to rewrite this' moment.",
      pain: "Technical debt accumulation",
      solution: "Production-ready from start"
    },
  ];

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Auto-advance every 8 seconds - pause on mobile for better UX
  React.useEffect(() => {
    if (isMobile) return; // Don't auto-advance on mobile
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % benefits.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [activeIndex, isMobile]);

  const nextBenefit = () => {
    setActiveIndex((prev) => (prev + 1) % benefits.length);
  };

  const prevBenefit = () => {
    setActiveIndex((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  return (
    <section
      id="benefits"
      className="py-16 sm:py-24 bg-gradient-surface relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header with authentic, human appeal */}
        <motion.div
          className="text-center mb-12 sm:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-architech-electric/10 border border-architech-electric/20 rounded-full text-sm font-medium text-architech-electric mb-6 sm:mb-8"
            variants={scaleIn}
          >
            <Sparkles className="h-4 w-4" />
            Real stories, real results
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight px-2"
            variants={fadeInUp}
          >
            Stop Building{" "}
            <span className="text-transparent bg-gradient-electric bg-clip-text">
              Infrastructure
            </span>
            <br />
            Start Building Dreams
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4"
            variants={fadeInUp}
          >
            The Architech isn't just another tool—it's the difference between 
            spending your time on what matters vs. what doesn't.
          </motion.p>
        </motion.div>

        {/* Mobile-First Benefits Showcase */}
        <div className="max-w-6xl mx-auto">
          
          {/* Mobile: Swipeable Cards with Navigation */}
          <div className="sm:hidden">
            <motion.div
              className="relative mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={fadeInUp}
            >
              {/* Progress Dots */}
              <div className="flex justify-center gap-2 mb-6">
                {benefits.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex 
                        ? 'bg-architech-electric w-6' 
                        : 'bg-muted hover:bg-architech-electric/50'
                    }`}
                    onClick={() => setActiveIndex(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="absolute top-1/2 -translate-y-1/2 left-2 z-20">
                <motion.button
                  className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-architech-border flex items-center justify-center text-architech-electric hover:bg-architech-electric/10 transition-all duration-300"
                  onClick={prevBenefit}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="h-5 w-5" />
                </motion.button>
              </div>
              
              <div className="absolute top-1/2 -translate-y-1/2 right-2 z-20">
                <motion.button
                  className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-architech-border flex items-center justify-center text-architech-electric hover:bg-architech-electric/10 transition-all duration-300"
                  onClick={nextBenefit}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="h-5 w-5" />
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Desktop: Tab Navigation */}
          <motion.div
            className="hidden sm:flex justify-center mb-8 sm:mb-12 px-4"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
          >
            <div className="flex bg-background/50 rounded-2xl p-2 backdrop-blur-sm border border-architech-border">
              {benefits.map((benefit, index) => (
                <button
                  key={benefit.id}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-base ${
                    activeIndex === index
                      ? 'bg-gradient-electric text-white shadow-lg'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {benefit.category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Active benefit showcase - Mobile optimized */}
          <motion.div
            key={activeIndex}
            className={`glass-card rounded-3xl p-6 sm:p-8 lg:p-12 border border-architech-electric/20 bg-gradient-to-br ${benefits[activeIndex].bgGradient} relative overflow-hidden mx-4 sm:mx-0`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
            </div>

            <div className="relative z-10">
              {/* Mobile: Single Column Layout */}
              <div className="sm:hidden space-y-6">
                {/* Header */}
                <div className="text-center">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${benefits[activeIndex].gradient} rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4`}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                  >
                    {React.createElement(benefits[activeIndex].icon, { className: "h-8 w-8 text-white" })}
                  </motion.div>
                  
                  <div className="text-sm font-mono text-architech-electric uppercase tracking-wider mb-2">
                    For {benefits[activeIndex].category}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {benefits[activeIndex].title}
                  </h3>
                  <div className="text-lg text-muted-foreground">
                    {benefits[activeIndex].subtitle}
                  </div>
                </div>

                {/* Description */}
                <p className="text-base text-muted-foreground leading-relaxed text-center">
                  {benefits[activeIndex].description}
                </p>

                {/* Impact Highlight */}
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm text-center">
                  <div className="text-2xl font-bold text-foreground mb-2">
                    {benefits[activeIndex].impact}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    That's the difference
                  </div>
                </div>

                {/* Before/After Cards */}
                <div className="space-y-4">
                  <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
                    <div className="text-sm text-red-400 font-semibold mb-2">Before</div>
                    <div className="text-foreground text-base">{benefits[activeIndex].pain}</div>
                  </div>
                  <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
                    <div className="text-sm text-green-400 font-semibold mb-2">After</div>
                    <div className="text-foreground text-base">{benefits[activeIndex].solution}</div>
                  </div>
                </div>
              </div>

              {/* Desktop: Two Column Layout */}
              <div className="hidden sm:grid lg:grid-cols-2 gap-8 sm:gap-12 items-start lg:items-center">
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
                        For {benefits[activeIndex].category}
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

                  {/* Pain point and solution */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                      <div className="text-sm text-red-400 font-semibold mb-1">The Problem</div>
                      <div className="text-foreground text-base">{benefits[activeIndex].pain}</div>
                    </div>
                    <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                      <div className="text-sm text-green-400 font-semibold mb-1">The Solution</div>
                      <div className="text-foreground text-base">{benefits[activeIndex].solution}</div>
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-foreground">
                      {benefits[activeIndex].impact}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      That's the difference
                    </div>
                  </div>
                </div>

                {/* Visual element */}
                <div className="relative">
                  <div className="space-y-6">
                    {/* Personal testimonial card */}
                    <motion.div
                      className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <div className="text-center mb-4">
                        {React.createElement(benefits[activeIndex].icon, { className: "h-12 w-12 text-architech-electric mx-auto mb-3" })}
                        <h4 className="text-lg font-semibold text-foreground">
                          What will change for you
                        </h4>
                      </div>
                      
                      <div className="space-y-4">
                        {/* Dynamic content based on active benefit */}
                        {activeIndex === 0 && (
                          <>
                            <div className="text-center p-3 bg-pink-500/10 rounded-lg">
                              <div className="text-lg font-bold text-pink-400">Before</div>
                              <div className="text-sm text-muted-foreground">"I spend more time on setup than coding"</div>
                            </div>
                            <div className="text-center p-3 bg-green-500/10 rounded-lg">
                              <div className="text-lg font-bold text-green-400">After</div>
                              <div className="text-sm text-muted-foreground">"I'm building features in minutes"</div>
                            </div>
                          </>
                        )}
                        {activeIndex === 1 && (
                          <>
                            <div className="text-center p-3 bg-red-500/10 rounded-lg">
                              <div className="text-lg font-bold text-red-400">Before</div>
                              <div className="text-sm text-muted-foreground">"We're 6 months behind schedule"</div>
                            </div>
                            <div className="text-center p-3 bg-emerald-500/10 rounded-lg">
                              <div className="text-lg font-bold text-emerald-400">After</div>
                              <div className="text-sm text-muted-foreground">"We launched before our competitors"</div>
                            </div>
                          </>
                        )}
                        {activeIndex === 2 && (
                          <>
                            <div className="text-center p-3 bg-orange-500/10 rounded-lg">
                              <div className="text-lg font-bold text-orange-400">Before</div>
                              <div className="text-sm text-muted-foreground">"We need to rewrite this"</div>
                            </div>
                            <div className="text-center p-3 bg-purple-500/10 rounded-lg">
                              <div className="text-lg font-bold text-purple-400">After</div>
                              <div className="text-sm text-muted-foreground">"It scales perfectly"</div>
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
                        The transformation
                      </h4>
                      
                      <div className="space-y-3">
                        {/* Dynamic before/after based on active benefit */}
                        {activeIndex === 0 && (
                          <>
                            <div className="flex items-center justify-between text-sm">
                              <div className="flex items-center gap-2">
                                <X className="h-4 w-4 text-red-400" />
                                <span className="text-red-400">Docker configs for days</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-green-400" />
                                <span className="text-green-400">15 minutes setup</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <div className="flex items-center gap-2">
                                <X className="h-4 w-4 text-red-400" />
                                <span className="text-red-400">Fighting with tools</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-green-400" />
                                <span className="text-green-400">Building features</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <div className="flex items-center gap-2">
                                <X className="h-4 w-4 text-red-400" />
                                <span className="text-red-400">Burnout & frustration</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-green-400" />
                                <span className="text-green-400">Joy & creativity</span>
                              </div>
                            </div>
                          </>
                        )}
                        {activeIndex === 1 && (
                          <>
                            <div className="flex items-center justify-between text-sm">
                              <div className="flex items-center gap-2">
                                <X className="h-4 w-4 text-red-400" />
                                <span className="text-red-400">6-month development</span>
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
                        {activeIndex === 2 && (
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
            </div>
          </motion.div>
        </div>

        {/* Authentic closing statement */}
        <motion.div
          className="text-center max-w-4xl mx-auto mt-12 sm:mt-20 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <div className="glass-card rounded-3xl p-6 sm:p-8 lg:p-12 border border-architech-electric/20 bg-gradient-to-br from-architech-electric/5 to-purple-500/5">
            <Quote className="h-8 w-8 sm:h-12 sm:w-12 text-architech-electric/30 mx-auto mb-4 sm:mb-6" />
            
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              "The Architech changed how we think about{" "}
              <span className="text-transparent bg-gradient-electric bg-clip-text">
                building software
              </span>
              . It's not just faster—it's better."
            </blockquote>
            
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
              Join hundreds of teams who've rediscovered the joy of building.
            </p>

            <motion.div
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-electric text-white rounded-full font-semibold text-base sm:text-lg hover:shadow-glow transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => smoothScrollTo("how-it-works")}
            >
              <Zap className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>See how it works</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;