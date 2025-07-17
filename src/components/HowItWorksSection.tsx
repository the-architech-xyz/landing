import { MessageSquare, Users, Eye, Brain, Wand2, Cpu, ArrowRight, CheckCircle, Clock, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn, defaultViewport, numberCounter } from "@/lib/animations";
import { useState, useEffect } from "react";
import React from "react";

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAiThinking, setIsAiThinking] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(false);
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

  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Describe Your Vision",
      shortTitle: "Describe",
      description: "Tell us what you're building in plain English - no technical jargon needed.",
      details: [
        "Natural language input",
        "Business requirements focus", 
        "User story driven",
      ],
      gradient: "bg-gradient-electric",
      demo: {
        userInput: "I need a SaaS for team project management with real-time collaboration, file sharing, and custom workflows",
        placeholder: "Describe your app idea..."
      }
    },
    {
      number: "02", 
      icon: Brain,
      title: "AI Analyzes & Maps",
      shortTitle: "Analyze",
      description: "Our AI understands your needs and translates them into technical requirements.",
      details: [
        "Requirement analysis",
        "Feature decomposition",
        "Technical mapping",
      ],
      gradient: "bg-gradient-icon-1",
      demo: {
        analysisSteps: [
          "Analyzing: 'team project management' → Multi-tenancy + RBAC",
          "Analyzing: 'real-time collaboration' → WebSocket + Operational Transform", 
          "Analyzing: 'file sharing' → Object Storage + CDN",
          "Analyzing: 'custom workflows' → Rule Engine + State Machine"
        ]
      }
    },
    {
      number: "03",
      icon: Cpu,
      title: "Smart Tech Selection", 
      shortTitle: "Select",
      description: "AI selects optimal modules from 1000+ battle-tested options with reasoning.",
      details: [
        "Performance optimization",
        "Scalability consideration", 
        "Best practice adherence",
      ],
      gradient: "bg-gradient-creative",
      demo: {
        recommendations: [
          { tech: "Next.js 15", reason: "Full-stack + Edge ready", confidence: 98 },
          { tech: "Neon + Prisma", reason: "Scalable PostgreSQL", confidence: 95 },
          { tech: "Socket.io", reason: "Real-time reliability", confidence: 92 },
          { tech: "AWS S3", reason: "Enterprise file storage", confidence: 97 }
        ]
      }
    },
    {
      number: "04",
      icon: Wand2, 
      title: "Generate & Deploy",
      shortTitle: "Deploy",
      description: "Get your complete, configured codebase ready for development.",
      details: [
        "Complete project structure",
        "All integrations working",
        "Production deployment ready",
      ],
      gradient: "bg-gradient-success",
      demo: {
        outputs: [
          { file: "Authentication system", status: "configured" },
          { file: "Database schema", status: "migrated" },
          { file: "API endpoints", status: "documented" },
          { file: "Frontend components", status: "styled" },
          { file: "Deployment pipeline", status: "active" }
        ]
      }
    },
  ];

  // Enhanced AI thinking simulation
  useEffect(() => {
    if (activeStep === 1) {
      setIsAiThinking(true);
      setAnalysisProgress(0);
      
      const progressInterval = setInterval(() => {
        setAnalysisProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            setIsAiThinking(false);
            return 100;
          }
          return prev + 2;
        });
      }, 50);

      return () => clearInterval(progressInterval);
    }
  }, [activeStep]);

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('how-it-works');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Auto-advance with pause functionality - only when in view and not mobile
  useEffect(() => {
    if (isPaused || !isInView || isMobile) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isPaused, steps.length, activeStep, isInView, isMobile]);

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  // Mobile Progress Indicator
  const MobileProgressIndicator = () => {
    return (
      <div className="sm:hidden mb-8">
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mb-6">
            {steps.map((_, index) => (
              <motion.button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeStep 
                    ? 'bg-architech-electric w-6' 
                    : index < activeStep
                    ? 'bg-green-500'
                    : 'bg-muted hover:bg-architech-electric/50'
                }`}
                onClick={() => setActiveStep(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-2 z-20">
            <motion.button
              className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-architech-border flex items-center justify-center text-architech-electric hover:bg-architech-electric/10 transition-all duration-300"
              onClick={prevStep}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-2 z-20">
            <motion.button
              className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-architech-border flex items-center justify-center text-architech-electric hover:bg-architech-electric/10 transition-all duration-300"
              onClick={nextStep}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  };

  // Desktop Progress Indicator
  const DesktopProgressIndicator = () => {
    const handleStepClick = (index: number) => {
      setActiveStep(index);
    };

    const handleMouseEnter = () => {
      setIsPaused(true);
    };

    const handleMouseLeave = () => {
      setIsPaused(false);
    };

    return (
      <div className="hidden sm:block max-w-4xl mx-auto mb-12 sm:mb-16 px-4">
        <div className="relative">
          <div className="relative flex justify-between items-start">
            {steps.map((step, index) => {
              const isActive = index === activeStep;
              const isCompleted = index < activeStep;
              const isUpcoming = index > activeStep;
              const isNextStepCompleted = index + 1 <= activeStep;

              return (
                <motion.div
                  key={index}
                  className="flex flex-col items-center cursor-pointer group relative"
                  onClick={() => handleStepClick(index)}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Step Node */}
                  <motion.div
                    className={`relative w-16 h-16 rounded-2xl flex items-center justify-center border-2 transition-all duration-500 ${
                      isActive 
                        ? 'bg-gradient-electric border-architech-electric shadow-glow scale-110' 
                        : isCompleted
                        ? 'bg-green-500 border-green-500'
                        : 'bg-background border-muted hover:border-architech-electric/50'
                    }`}
                    animate={{ scale: isActive ? 1.1 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Icon */}
                    <motion.div
                      animate={{ rotate: isActive ? 360 : 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      {isCompleted ? (
                        <CheckCircle className="h-8 w-8 text-white" />
                      ) : (
                        <step.icon className={`h-8 w-8 ${
                          isActive ? 'text-white' : isUpcoming ? 'text-muted-foreground' : 'text-foreground'
                        }`} />
                      )}
                    </motion.div>

                    {/* Active pulse animation */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-architech-electric"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </motion.div>

                  {/* Connecting Line to Next Step */}
                  {index < steps.length - 1 && (
                    <div 
                      className="absolute top-8 left-full w-12 h-0.5 z-5" 
                      style={{ marginLeft: '8px' }}
                    >
                      <motion.div
                        className={`h-0.5 rounded-full transition-colors duration-500 ${
                          isNextStepCompleted 
                            ? 'bg-green-500' 
                            : isActive 
                            ? 'bg-gradient-electric' 
                            : 'bg-muted/30'
                        }`}
                        initial={{ scaleX: 0 }}
                        animate={{ 
                          scaleX: isNextStepCompleted ? 1 : isActive ? 1 : 0
                        }}
                        transition={{ 
                          duration: 0.8, 
                          delay: isActive ? 0.3 : 0,
                          ease: "easeInOut" 
                        }}
                      />
                    </div>
                  )}

                  {/* Step Label */}
                  <div className="mt-4 text-center min-h-[3rem] flex flex-col justify-center">
                    <div className={`text-sm font-semibold transition-colors ${
                      isActive ? 'text-architech-electric' : 'text-foreground'
                    }`}>
                      {step.shortTitle}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Step {step.number}
                    </div>
                  </div>

                  {/* Hover Preview */}
                  {!isActive && (
                    <div className="absolute top-20 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-[100]">
                      <div className="bg-background/95 backdrop-blur-sm border border-architech-border rounded-xl p-4 shadow-xl min-w-[280px] max-w-[320px]">
                        <div className="text-base font-semibold text-foreground mb-2">{step.title}</div>
                        <div className="text-sm text-muted-foreground leading-relaxed mb-3">{step.description}</div>
                        
                        <div className="space-y-1">
                          {step.details.slice(0, 2).map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-center gap-2 text-xs text-muted-foreground">
                              <div className="w-1 h-1 rounded-full bg-architech-electric/60" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-background/95 border-l border-t border-architech-border rotate-45" />
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="how-it-works"
      className="py-16 sm:py-24 bg-background relative overflow-hidden"
    >
      {/* Background decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
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
            <Users className="h-4 w-4" />
            How It Works
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight px-2"
            variants={fadeInUp}
          >
            From Idea to{" "}
            <span className="text-transparent bg-gradient-electric bg-clip-text">
              Production
            </span>
            <br />
            In Minutes
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4"
            variants={fadeInUp}
          >
            The Architech is your master AI orchestrator that assembles battle-tested modules 
            like LEGO blocks. No code generation—just intelligent composition of proven components 
            tailored to your exact needs.
          </motion.p>
        </motion.div>

        {/* Progress Indicators */}
        <MobileProgressIndicator />
        <DesktopProgressIndicator />

        {/* Auto-advance indicator - Desktop only */}
        <div className="hidden sm:block text-center mb-6 sm:mb-8 px-4">
          <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
            {!isPaused ? (
              <>
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-500"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <span>Auto-advancing every 6 seconds • Click any step to reset timer</span>
              </>
            ) : (
              <>
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                <span>Paused • Hover away to resume</span>
              </>
            )}
          </div>
        </div>

        {/* Active step display with enhanced transitions */}
        <motion.div
          className="glass-card rounded-3xl p-6 sm:p-8 lg:p-12 border border-architech-electric/20 max-w-6xl mx-auto mb-12 sm:mb-16 relative z-10 mx-4 sm:mx-0"
          layout
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.95 }}
              transition={{ 
                duration: 0.7, 
                type: "spring", 
                stiffness: 100,
                damping: 20
              }}
            >
              {/* Mobile: Single Column Layout */}
              <div className="sm:hidden space-y-6">
                {/* Header */}
                <div className="text-center">
                  <motion.div 
                    className={`w-16 h-16 ${steps[activeStep].gradient} rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {React.createElement(steps[activeStep].icon, { className: "h-8 w-8 text-white" })}
                  </motion.div>
                  
                  <div className="text-sm text-muted-foreground mb-2">
                    Step {steps[activeStep].number}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {steps[activeStep].title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-base text-muted-foreground leading-relaxed text-center">
                  {steps[activeStep].description}
                </p>

                {/* Details */}
                <div className="space-y-3">
                  {steps[activeStep].details.map((detail, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <motion.div 
                        className={`w-2 h-2 rounded-full ${steps[activeStep].gradient}`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                      />
                      <span className="text-sm text-muted-foreground">{detail}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Demo */}
                <div className="bg-background/50 rounded-2xl p-4 border border-architech-border/50">
                  {/* Step-specific demo content */}
                  {activeStep === 0 && (
                    <div className="space-y-4">
                      <div className="text-sm text-muted-foreground">Your input:</div>
                      <div className="bg-muted/30 rounded-lg p-3 min-h-[60px] font-mono text-sm border border-architech-electric/30">
                        <div className="text-sm text-architech-electric italic">
                          "{steps[0].demo?.userInput}"
                        </div>
                      </div>
                    </div>
                  )}

                  {activeStep === 1 && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          <Brain className="h-4 w-4" />
                        </motion.div>
                        AI Analysis in progress...
                      </div>
                      
                      <div className="w-full bg-muted rounded-full h-2 mb-4">
                        <motion.div
                          className="h-2 bg-gradient-electric rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${analysisProgress}%` }}
                          transition={{ duration: 0.1 }}
                        />
                      </div>

                      <div className="space-y-2">
                        {steps[1].demo?.analysisSteps?.slice(0, 2).map((step, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ 
                              opacity: analysisProgress > (index + 1) * 50 ? 1 : 0.3,
                              x: 0 
                            }}
                            transition={{ delay: index * 0.5 }}
                            className="flex items-center gap-3 p-2 bg-background/30 rounded-lg"
                          >
                            <motion.div 
                              className={`w-2 h-2 rounded-full ${
                                analysisProgress > (index + 1) * 50 ? 'bg-green-500' : 'bg-muted'
                              }`}
                              animate={analysisProgress > (index + 1) * 50 ? { scale: [1, 1.2, 1] } : {}}
                              transition={{ duration: 0.3 }}
                            />
                            <span className="text-xs text-foreground">{step}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeStep === 2 && (
                    <div className="space-y-4">
                      <div className="text-sm text-muted-foreground">Recommended Stack:</div>
                      <div className="space-y-2">
                        {steps[2].demo?.recommendations?.slice(0, 2).map((rec, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="flex items-center justify-between p-2 bg-background/30 rounded-lg border border-architech-border/30"
                          >
                            <div>
                              <div className="font-semibold text-foreground text-sm">{rec.tech}</div>
                              <div className="text-xs text-muted-foreground">{rec.reason}</div>
                            </div>
                            <div className="text-xs font-semibold text-green-500">
                              {rec.confidence}%
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeStep === 3 && (
                    <div className="space-y-4">
                      <div className="text-sm text-muted-foreground">Generated project:</div>
                      <div className="space-y-2">
                        {steps[3].demo?.outputs?.slice(0, 3).map((output, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="flex items-center justify-between p-2 bg-background/30 rounded"
                          >
                            <div className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-green-500" />
                              <span className="text-sm text-foreground">{output.file}</span>
                            </div>
                            <span className="text-xs text-green-500 bg-green-500/10 px-2 py-1 rounded">
                              {output.status}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Desktop: Two Column Layout */}
              <div className="hidden sm:grid lg:grid-cols-2 gap-8 sm:gap-12 items-start lg:items-center">
                {/* Step info with enhanced animations */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      className={`w-16 h-16 ${steps[activeStep].gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {React.createElement(steps[activeStep].icon, { className: "h-8 w-8 text-white" })}
                    </motion.div>
                    <div>
                      <motion.div 
                        className="text-sm text-muted-foreground"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        Step {steps[activeStep].number}
                      </motion.div>
                      <motion.h3 
                        className="text-3xl font-bold text-foreground"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {steps[activeStep].title}
                      </motion.h3>
                    </div>
                  </div>

                  <motion.p 
                    className="text-xl text-muted-foreground mb-8 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {steps[activeStep].description}
                  </motion.p>

                  <div className="space-y-3">
                    {steps[activeStep].details.map((detail, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <motion.div 
                          className={`w-2 h-2 rounded-full ${steps[activeStep].gradient}`}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                        />
                        <span className="text-base text-muted-foreground">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Step demo with enhanced visual feedback */}
                <motion.div 
                  className="bg-background/50 rounded-2xl p-6 border border-architech-border/50"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {/* Step 1: User Input */}
                  {activeStep === 0 && (
                    <motion.div 
                      className="space-y-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="text-sm text-muted-foreground">Your input:</div>
                      <motion.div 
                        className="bg-muted/30 rounded-lg p-4 min-h-[60px] font-mono text-sm border"
                        initial={{ borderColor: "rgba(0,0,0,0.1)" }}
                        animate={{ borderColor: "rgba(59,130,246,0.3)" }}
                        transition={{ delay: 0.5, duration: 0.3 }}
                      >
                        <div className="text-sm text-architech-electric italic">
                          "{steps[0].demo?.userInput}"
                        </div>
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Step 2: AI Analysis with enhanced animation */}
                  {activeStep === 1 && (
                    <motion.div 
                      className="space-y-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          <Brain className="h-4 w-4" />
                        </motion.div>
                        AI Analysis in progress...
                      </div>
                      
                      <div className="w-full bg-muted rounded-full h-2 mb-4">
                        <motion.div
                          className="h-2 bg-gradient-electric rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${analysisProgress}%` }}
                          transition={{ duration: 0.1 }}
                        />
                      </div>

                      <div className="space-y-3">
                        {steps[1].demo?.analysisSteps?.map((step, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ 
                              opacity: analysisProgress > (index + 1) * 25 ? 1 : 0.3,
                              x: 0 
                            }}
                            transition={{ delay: index * 0.5 }}
                            className="flex items-center gap-3 p-3 bg-background/30 rounded-lg"
                          >
                            <motion.div 
                              className={`w-2 h-2 rounded-full ${
                                analysisProgress > (index + 1) * 25 ? 'bg-green-500' : 'bg-muted'
                              }`}
                              animate={analysisProgress > (index + 1) * 25 ? { scale: [1, 1.2, 1] } : {}}
                              transition={{ duration: 0.3 }}
                            />
                            <span className="text-sm text-foreground">{step}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Tech Selection */}
                  {activeStep === 2 && (
                    <motion.div 
                      className="space-y-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="text-sm text-muted-foreground">Recommended Stack:</div>
                      <div className="space-y-3">
                        {steps[2].demo?.recommendations?.map((rec, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="flex items-center justify-between p-3 bg-background/30 rounded-lg border border-architech-border/30"
                            whileHover={{ scale: 1.02, borderColor: "rgba(59,130,246,0.3)" }}
                          >
                            <div>
                              <div className="font-semibold text-foreground text-base">{rec.tech}</div>
                              <div className="text-xs text-muted-foreground">{rec.reason}</div>
                            </div>
                            <motion.div 
                              className="text-sm font-semibold text-green-500"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                            >
                              {rec.confidence}% match
                            </motion.div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Output Generation */}
                  {activeStep === 3 && (
                    <motion.div 
                      className="space-y-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="text-sm text-muted-foreground">Generated project:</div>
                      <div className="space-y-2">
                        {steps[3].demo?.outputs?.map((output, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="flex items-center justify-between p-2 bg-background/30 rounded"
                            whileHover={{ x: 4 }}
                          >
                            <div className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-green-500" />
                              <span className="text-sm text-foreground">{output.file}</span>
                            </div>
                            <motion.span 
                              className="text-xs text-green-500 bg-green-500/10 px-2 py-1 rounded"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.6 + index * 0.1 }}
                            >
                              {output.status}
                            </motion.span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Enhanced CTA */}
        <motion.div
          className="text-center mt-12 sm:mt-16 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-electric text-white rounded-full font-semibold text-base sm:text-lg hover:shadow-glow transition-all duration-300 cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => smoothScrollTo("cta")}
          >
            <Wand2 className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>Start building now</span>
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;