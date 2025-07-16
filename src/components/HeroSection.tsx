import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentText, setCurrentText] = useState("");
  const [showModules, setShowModules] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  const promptText = "A collaborative project management app with JWT auth and a modern design system";
  
  const modules = [
    { name: "Auth Service", color: "bg-gradient-electric", delay: 0 },
    { name: "Database", color: "bg-gradient-forest", delay: 200 },
    { name: "API Gateway", color: "bg-gradient-ocean", delay: 400 },
    { name: "UI Components", color: "bg-gradient-sunset", delay: 600 },
    { name: "CI/CD Pipeline", color: "bg-gradient-creative", delay: 800 },
    { name: "Monitoring", color: "bg-gradient-aurora", delay: 1000 }
  ];

  useEffect(() => {
    if (currentText.length < promptText.length) {
      const timer = setTimeout(() => {
        setCurrentText(promptText.slice(0, currentText.length + 1));
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
      const timer = setTimeout(() => {
        setShowModules(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [currentText, promptText]);

  // Reset animation every 8 seconds
  useEffect(() => {
    const resetTimer = setInterval(() => {
      setCurrentText("");
      setShowModules(false);
      setIsTyping(true);
    }, 12000); // Increased to 12 seconds for better viewing time
    return () => clearInterval(resetTimer);
  }, []);

  const scrollToNext = () => {
    const element = document.getElementById('benefits');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-3 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Hero Message */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight">
              <span className="text-foreground">Skip the Setup.</span>
              <br />
              <span className="text-transparent bg-gradient-rainbow bg-clip-text">Build the Magic.</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              The Architech uses specialized AI agents to handle the tedious setup and infrastructure, 
              so you can focus on building what makes your app unique.
            </p>
          </div>

          {/* Primary CTA - Prominently displayed */}
          <div className="space-y-4 mb-8">
            <Button 
              size="lg" 
              className="bg-gradient-electric hover:shadow-electric text-white font-semibold px-8 py-4 text-lg group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              Join the Early Access Waitlist
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <p className="text-sm text-muted-foreground">
              No credit card required • Join 2,847 developers
            </p>
          </div>

          {/* Compact Demo Card - Expands when modules appear */}
          <div className={`relative mx-auto transition-all duration-700 ${
            showModules ? 'max-w-4xl' : 'max-w-2xl'
          }`}>
            <div className={`glass-card rounded-3xl shadow-glass transition-all duration-700 ease-out mx-auto ${
              showModules 
                ? 'p-8 w-full transform scale-[1.01]' 
                : 'p-6 w-full transform scale-100'
            }`}>
              
              {/* Always visible input section */}
              <div className="mb-6">
                <div className="text-left mb-3">
                  <div className="text-sm text-muted-foreground mb-2">Try it: Describe your app</div>
                  <div className="bg-background border border-architech-border rounded-xl p-4 font-mono text-left min-h-[50px] flex items-center">
                    <span className="text-foreground">{currentText}</span>
                    {isTyping && (
                      <span className="ml-1 w-0.5 h-5 bg-architech-electric animate-pulse"></span>
                    )}
                  </div>
                </div>
              </div>

              {/* Transformation Arrow - appears when modules show */}
              <div className={`flex justify-center mb-6 transition-all duration-500 ${
                showModules ? 'opacity-100 scale-110' : 'opacity-0 scale-75 h-0 mb-0'
              }`}>
                <div className="text-architech-electric">
                  <ArrowRight className="h-6 w-6" />
                </div>
              </div>

              {/* Generated Modules - expandable section */}
              <div className={`transition-all duration-700 ease-out ${
                showModules 
                  ? 'opacity-100 max-h-96 transform translate-y-0' 
                  : 'opacity-0 max-h-0 transform translate-y-4 overflow-hidden'
              }`}>
                <div className="text-left mb-4">
                  <div className="text-sm text-muted-foreground">Your production-ready app:</div>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                  {modules.map((module, index) => (
                    <div
                      key={module.name}
                      className={`${module.color} rounded-xl p-3 text-white text-center transform transition-all duration-500 ${
                        showModules 
                          ? 'translate-y-0 opacity-100 scale-100' 
                          : 'translate-y-8 opacity-0 scale-95'
                      }`}
                      style={{ 
                        transitionDelay: showModules ? `${module.delay}ms` : '0ms'
                      }}
                    >
                      <div className="text-sm font-medium">{module.name}</div>
                      <div className="text-xs opacity-80 mt-1">Ready to deploy</div>
                    </div>
                  ))}
                </div>

                {/* Magic completion message */}
                <div className={`mt-6 text-center transition-all duration-500 delay-1200 ${
                  showModules ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 glass-button rounded-full text-architech-electric font-medium">
                    ✨ Complete in 3 minutes
                  </div>
                </div>
              </div>
            </div>

            {/* Floating "100% Yours" badge */}
            <div className="absolute -top-3 -right-3 glass-card rounded-xl p-2 shadow-glow">
              <div className="text-sm font-bold text-transparent bg-gradient-electric bg-clip-text">100%</div>
              <div className="text-xs text-muted-foreground">Yours</div>
            </div>
          </div>
        </div>
      </div>

      {/* Clean scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group z-30" onClick={scrollToNext}>
        <div className="glass-button rounded-full p-3 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
          <ChevronDown className="h-5 w-5 text-architech-electric" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;