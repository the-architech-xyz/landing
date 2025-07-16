import { Clock, Shield, Download } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BenefitsSection = () => {
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  const benefits = [
    {
      icon: Clock,
      title: "10x Faster Development",
      headline: "Launch in days, not months",
      description: "Skip weeks of boilerplate setup. Focus on what makes your app unique.",
      stats: "90% faster time-to-market",
      color: "bg-gradient-electric",
      detailPoints: ["No more config files", "Instant deployments", "Pre-built integrations"]
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Quality", 
      headline: "Best practices built-in",
      description: "Every module follows enterprise standards for security, performance, and maintainability.",
      stats: "99.9% security compliance",
      color: "bg-gradient-success",
      detailPoints: ["Security by default", "Performance optimized", "Industry standards"]
    },
    {
      icon: Download,
      title: "100% Code Ownership",
      headline: "No vendor lock-in, ever",
      description: "Clean, readable code you can take anywhere. No proprietary dependencies.",
      stats: "Complete freedom",
      color: "bg-gradient-highlight",
      detailPoints: ["Export anytime", "Standard libraries", "Full control"]
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-gradient-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Developers Choose{" "}
            <span className="text-transparent bg-gradient-electric bg-clip-text">The Architech</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stop fighting the tools. Start building the future. Experience the joy of pure creation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredBenefit(index)}
              onMouseLeave={() => setHoveredBenefit(null)}
            >
              {/* Main Card */}
              <div className="glass-card rounded-3xl p-8 hover:shadow-glass transition-all duration-700 group-hover:scale-105 transform">
                
                {/* Icon with animated background */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 rounded-2xl ${benefit.color} flex items-center justify-center shadow-electric group-hover:shadow-glow transition-all duration-500 group-hover:scale-110`}>
                    <benefit.icon className="h-10 w-10 text-white" />
                  </div>
                  
                  {/* Animated glow ring */}
                  <div className={`absolute inset-0 w-20 h-20 rounded-2xl ${benefit.color} opacity-20 scale-110 blur-lg transition-all duration-500 ${hoveredBenefit === index ? 'opacity-40 scale-125' : ''}`}></div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-architech-electric transition-all duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-lg font-medium text-architech-electric">
                      {benefit.headline}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Expandable details */}
                  <div className={`overflow-hidden transition-all duration-500 ${hoveredBenefit === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="pt-4 space-y-2">
                      {benefit.detailPoints.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${benefit.color}`}></div>
                          <span className="text-sm text-muted-foreground">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-architech-border">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold text-architech-electric">
                        {benefit.stats}
                      </div>
                      <div className={`transition-all duration-300 ${hoveredBenefit === index ? 'translate-x-2' : ''}`}>
                        <div className="w-8 h-8 rounded-full bg-architech-electric/10 flex items-center justify-center">
                          <span className="text-xs font-bold text-architech-electric">→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating number indicator */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-electric text-white flex items-center justify-center text-sm font-bold shadow-electric">
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA with animation */}
        <div className="text-center mt-20">
          <div className="relative inline-block">
            <div className="glass-card rounded-2xl p-8 max-w-md mx-auto group cursor-pointer hover:shadow-glow transition-all duration-500" onClick={() => {
              const element = document.getElementById('cta');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}>
              <p className="text-lg text-muted-foreground mb-6">
                Ready to transform your development workflow?
              </p>
              <Button 
                className="bg-gradient-electric hover:shadow-electric text-white font-semibold group relative overflow-hidden w-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative z-10">Join Early Access Waitlist</span>
                <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;