import { MessageSquare, Users, Eye, Brain, Wand2, Cpu, ArrowRight, CheckCircle, Clock, Check } from "lucide-react";
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

  // Auto-advance with pause functionality
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 6000); // Slightly longer for better readability
    
    return () => clearInterval(interval);
  }, [isPaused, steps.length, activeStep]); // Add activeStep as dependency to reset timer on manual clicks

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        className="absolute -top-3 -left-3 w-12 h-12 rounded-2xl bg-gradient-electric text-white flex items-center justify-center font-black text-lg shadow-electric z-20"
      >
        {number}
      </motion.div>
    );
  };

  // Enhanced Progress Component with stable rendering
  const EnhancedProgressIndicator = () => {
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
      <div className="max-w-4xl mx-auto mb-16">
        {/* Progress Line with Steps */}
        <div className="relative">
          {/* Step Nodes */}
          <div className="relative flex justify-between">
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
                      className="absolute top-8 hidden lg:block" 
                      style={{ 
                        left: '50%', 
                        marginLeft: '36px', // Half icon width (32px) + 4px padding
                        zIndex: 5 
                      }}
                    >
                      <motion.div
                        className={`h-0.5 rounded-full transition-colors duration-500 ${
                          isNextStepCompleted 
                            ? 'bg-green-500' 
                            : isActive 
                            ? 'bg-gradient-electric' 
                            : 'bg-muted/30'
                        }`}
                        style={{
                          // Calculate width to span between icons
                          width: 'clamp(60px, calc((100vw - 48rem) / 3), 180px)', // Responsive width with min/max
                          transformOrigin: 'left',
                        }}
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

                  {/* Hover Preview - Enhanced width and positioning */}
                  {!isActive && (
                    <div className="absolute top-20 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-[100]">
                      <div className="bg-background/95 backdrop-blur-sm border border-architech-border rounded-xl p-4 shadow-xl min-w-[280px] max-w-[320px]">
                        <div className="text-base font-semibold text-foreground mb-2">{step.title}</div>
                        <div className="text-sm text-muted-foreground leading-relaxed mb-3">{step.description}</div>
                        
                        {/* Mini features list */}
                        <div className="space-y-1">
                          {step.details.slice(0, 2).map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-center gap-2 text-xs text-muted-foreground">
                              <div className="w-1 h-1 rounded-full bg-architech-electric/60" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                        
                        {/* Tooltip arrow */}
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
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Background decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
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
            From Idea to{" "}
            <span className="text-transparent bg-gradient-electric bg-clip-text">
              Production
            </span>
            <br />
            In Minutes
          </motion.h2>

          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            The Architech is your master AI orchestrator that assembles battle-tested modules 
            like LEGO blocks. No code generation—just intelligent composition of proven components 
            tailored to your exact needs.
          </motion.p>
        </motion.div>

        {/* Enhanced Progress Indicator */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          className="relative z-30"
        >
          <EnhancedProgressIndicator />
        </motion.div>

        {/* Auto-advance indicator */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
            {!isPaused ? (
              <>
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-500"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                Auto-advancing every 6 seconds • Click any step to reset timer
              </>
            ) : (
              <>
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                Paused • Hover away to resume
              </>
            )}
          </div>
        </div>

        {/* Active step display with enhanced transitions */}
        <motion.div
          className="glass-card rounded-3xl p-8 lg:p-12 border border-architech-electric/20 max-w-6xl mx-auto mb-16 relative z-10"
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
              <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                        <span className="text-muted-foreground">{detail}</span>
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
                        className="bg-muted/30 rounded-lg p-4 border border-dashed border-architech-electric/30"
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
                      
                      {/* Enhanced progress bar */}
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
                              <div className="font-semibold text-foreground">{rec.tech}</div>
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
                              <span className="text-sm text-foreground">{output.file.replace('✓ ', '')}</span>
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
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-electric text-white rounded-full font-semibold text-lg hover:shadow-glow transition-all duration-300 cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => smoothScrollTo("cta")}
          >
            <Wand2 className="h-5 w-5" />
            <span>Start building now</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;