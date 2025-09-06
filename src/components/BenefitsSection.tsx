import { Zap, TrendingUp, Target, Clock, AlertTriangle, BarChart3, ArrowRight } from "lucide-react";
import ModernPieChart from "./ModernPieChart";
import { useScrollTriggerGSAP } from "@/hooks/useScrollTriggerGSAP";

const BenefitsSection = () => {
  const { containerRef, stickyRef, setContentRef, activeIndex } = useScrollTriggerGSAP();

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const problemCards = [
    {
      icon: AlertTriangle,
      number: "42%",
      title: "The Debt of Day One",
      description: "Of a developer's time is lost dealing with technical debt, often caused by poor initial architecture and rushed setup decisions.",
      source: "Stripe / Chalmers University",
      color: "red"
    },
    {
      icon: BarChart3,
      number: "67%",
      title: "The Illusion of AI Assistance",
      description: "More time is spent debugging and refactoring when using AI code generators without a proper framework and architectural foundation.",
      source: "Harness",
      color: "orange"
    },
    {
      icon: Clock,
      number: "3-5 Days",
      title: "The Chaos of Configuration",
      description: "This is the average time spent on project setup, configuration, and boilerplate before writing a single unique feature.",
      source: "Industry Average",
      color: "purple"
    }
  ];

  console.log('BenefitsSection rendering', { 
    problemCards: problemCards.length, 
    activeIndex,
    containerRef: !!containerRef.current,
    stickyRef: !!stickyRef.current
  });

  const solutionStats = [
    {
      icon: TrendingUp,
      metric: "2-3x",
      title: "Deploy More Frequently",
      description: "Our modular architecture aligns with best practices that have proven to double or triple deployment velocity.",
      color: "green"
    },
    {
      icon: Target,
      metric: "41%",
      title: "Productivity Increase",
      description: "By providing a standardized, high-quality foundation, we eliminate the root causes of technical debt and context switching.",
      color: "blue"
    },
    {
      icon: Zap,
      metric: "100%",
      title: "Production-Ready",
      description: "Start with a project that's engineered for growth, reducing the risk of costly refactoring later.",
      color: "purple"
    }
  ];

  const pieChartData = [
    {
      label: "Innovation Tax",
      percentage: 70,
      color: "#ef4444",
      description: "Meetings, configuration, debugging, technical debt, and non-feature work that drains productivity."
    },
    {
      label: "Actual Coding",
      percentage: 30,
      color: "#22c55e",
      description: "Pure feature development and creative problem-solving - the work that truly matters."
    }
  ];


  return (
    <>
      {/* Header Section */}
      <section className="py-16 sm:py-24 bg-architech-section-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-satoshi font-bold text-foreground mb-4 sm:mb-6 leading-tight px-2">
              You're Paying a Tax on Innovation.
              <br />
              <span className="text-transparent bg-gradient-brand bg-clip-text">You Just Don't See It.</span>
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4 font-inter font-normal">
              Research shows developers waste over <span className="text-architech-brand-red font-semibold">70% of their time</span> on non-feature work. This is the hidden cost of modern software development.
          </p>
        </div>
      </div>
      </section>

      {/* Sticky Scroll Section */}
      <section 
        ref={containerRef}
        className="bg-architech-section-dark relative overflow-hidden"
        style={{ height: '220vh', minHeight: '220vh' }}
      >
        <div className="sticky-wrapper" style={{ height: '100vh', position: 'sticky', top: '5vh' }}>
          {/* Debug indicator */}
          <div className="fixed top-4 right-4 z-50 bg-black/80 text-white p-2 rounded text-sm">
            Active Index: {activeIndex} / {problemCards.length - 1}
            </div>

          <div className="container mx-auto px-4 sm:px-6">
            <div 
              ref={stickyRef}
              className="grid lg:grid-cols-2 gap-16 items-center h-[90vh]"
            >
              
              {/* Left Side - Content Cards */}
              <div className="relative h-full">
                <div className="tabs-content-container h-full">
                  {problemCards.map((card, index) => (
                    <div
                      key={index}
                      ref={setContentRef(index)}
                      className="tabs-content"
                    >
                      <div className="space-y-6">
                        {/* Icon and Title */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-16 h-16 rounded-2xl bg-${card.color}-500/20 flex items-center justify-center`}>
                            <card.icon className={`w-8 h-8 text-${card.color}-500`} />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-muted-foreground mb-1">
                              Problem {index + 1}
                            </div>
                            <h3 className="text-3xl sm:text-4xl font-bold text-foreground">
                              {card.title}
                            </h3>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-4">
                          <div className="w-full h-px bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent"></div>
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            {card.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="text-center space-y-6">
                        {/* Large Number */}
                        <div className="relative">
                          <div className={`text-9xl font-black text-${card.color}-500 mb-2`}>
                            {card.number}
                          </div>
                          <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                        </div>
                        
                        {/* Source */}
                        <div className="glass-card rounded-xl p-4 border border-muted-foreground/20 bg-gradient-to-br from-white/5 to-white/2">
                          <div className="text-sm text-muted-foreground/70">
                            <span className="font-medium">Source:</span> {card.source}
                          </div>
                        </div>

                        {/* Progress Dots */}
                        <div className="flex justify-center gap-2">
                          {problemCards.map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                i === index 
                                  ? `bg-${card.color}-500 w-8` 
                                  : i < index 
                                    ? 'bg-green-500' 
                                    : 'bg-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                  <button
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-architech-brand-blue to-architech-brand-purple text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-architech-brand-blue/25 transition-all duration-300 group"
                    onClick={() => smoothScrollTo("cta")}
                  >
                    <Zap className="w-5 h-5" />
                    <span>Eliminate the Tax. Start Architecting.</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                            </div>

              {/* Right Side - Visual (Pie Chart) - Static */}
              <div className="relative h-full flex items-center justify-center">
                <ModernPieChart 
                  data={pieChartData}
                  className="mx-auto"
                />
                    </div>
                  </div>
                </div>
              </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 sm:py-24 bg-architech-section-dark relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              The Architech eliminates the Innovation Tax
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              By providing a standardized, high-quality foundation that scales with your vision.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BenefitsSection;