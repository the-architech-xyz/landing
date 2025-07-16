import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Crown, Users, Globe, Code, Lightbulb, Heart } from "lucide-react";

const RevolutionaryVisionSection = () => {
  const [activeManifesto, setActiveManifesto] = useState(0);
  
  const manifestoPoints = [
    {
      icon: Crown,
      title: "The End of Technofeudalism",
      description: "No more vendor lock-in. No more platform dependency. Your code, your rules, your ownership.",
      quote: "True power comes from owning your creation, not renting it."
    },
    {
      icon: Lightbulb,
      title: "The Joy of Creation Returns",
      description: "Stop being a configuration slave. Become the architect you were meant to be.",
      quote: "Code should spark joy, not despair."
    },
    {
      icon: Users,
      title: "The Collective Revolution",
      description: "When developers focus on innovation instead of setup, humanity advances faster.",
      quote: "Individual liberation leads to collective progress."
    },
    {
      icon: Globe,
      title: "The Democratization of Power",
      description: "Complex software should be accessible to every brilliant mind, not just the ones with infinite patience.",
      quote: "Great ideas shouldn't die in configuration hell."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveManifesto((prev) => (prev + 1) % manifestoPoints.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 bg-gradient-to-br from-background via-electric-blue/5 to-purple-950/10 relative overflow-hidden">
      {/* Epic background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Revolutionary header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-electric-blue/10 border border-electric-blue/20 rounded-full text-electric-blue mb-8">
            <Crown className="h-5 w-5" />
            <span className="font-semibold">The Manifesto</span>
            <Crown className="h-5 w-5" />
          </div>
          
          <h2 className="text-6xl lg:text-8xl font-black text-foreground mb-8 leading-tight">
            This Is More Than{" "}
            <span className="text-transparent bg-gradient-electric bg-clip-text">
              Software
            </span>
            <br />
            This Is{" "}
            <span className="relative">
              <span className="text-transparent bg-gradient-to-r from-purple-500 via-electric-blue to-green-500 bg-clip-text">
                Revolution
              </span>
              <div className="absolute -bottom-3 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-electric-blue to-green-500 animate-pulse"></div>
            </span>
          </h2>
          
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto font-light italic">
            "We are not just changing how software is built. We are liberating the creative spirit of every developer on Earth."
          </p>
        </div>

        {/* Interactive Manifesto */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Manifesto Points */}
            <div className="space-y-8">
              {manifestoPoints.map((point, index) => {
                const isActive = index === activeManifesto;
                const Icon = point.icon;
                
                return (
                  <div 
                    key={index}
                    className={`group cursor-pointer transition-all duration-500 ${
                      isActive ? 'scale-105' : 'scale-100 opacity-70 hover:opacity-100'
                    }`}
                    onClick={() => setActiveManifesto(index)}
                  >
                    <div className={`p-8 rounded-3xl border-2 transition-all duration-500 ${
                      isActive 
                        ? 'border-electric-blue bg-electric-blue/10 shadow-xl shadow-electric-blue/20' 
                        : 'border-border bg-card hover:border-electric-blue/50'
                    }`}>
                      <div className="flex items-start gap-6">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                          isActive 
                            ? 'bg-gradient-electric shadow-electric' 
                            : 'bg-muted group-hover:bg-gradient-electric'
                        }`}>
                          <Icon className={`h-8 w-8 transition-all duration-300 ${
                            isActive ? 'text-white' : 'text-foreground group-hover:text-white'
                          }`} />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className={`text-2xl font-bold mb-3 transition-all duration-300 ${
                            isActive 
                              ? 'text-transparent bg-gradient-electric bg-clip-text' 
                              : 'text-foreground group-hover:text-electric-blue'
                          }`}>
                            {point.title}
                          </h3>
                          
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            {point.description}
                          </p>
                          
                          <blockquote className={`text-lg font-medium italic transition-all duration-300 ${
                            isActive ? 'text-electric-blue' : 'text-muted-foreground'
                          }`}>
                            "{point.quote}"
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Visual Representation */}
            <div className="relative">
              <div className="bg-card border border-border rounded-3xl p-8 relative overflow-hidden">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    The Developer's Journey
                  </h3>
                  <p className="text-muted-foreground">
                    From configuration slave to creative architect
                  </p>
                </div>

                {/* Journey visualization */}
                <div className="space-y-6">
                  {/* Before */}
                  <div className="bg-red-950/20 border border-red-500/30 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="font-semibold text-red-400">Before: The Broken Process</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs text-red-300">
                      <div className="bg-red-500/20 p-2 rounded">Config Files</div>
                      <div className="bg-red-500/20 p-2 rounded">Setup Hell</div>
                      <div className="bg-red-500/20 p-2 rounded">Bug Fixing</div>
                      <div className="bg-red-500/20 p-2 rounded">More Config</div>
                      <div className="bg-red-500/20 p-2 rounded">Deployment</div>
                      <div className="bg-red-500/20 p-2 rounded">Debugging</div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <div className="bg-gradient-electric rounded-full p-3 animate-bounce">
                      <ArrowRight className="h-6 w-6 text-white rotate-90" />
                    </div>
                  </div>

                  {/* After */}
                  <div className="bg-green-950/20 border border-green-500/30 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="font-semibold text-green-400">After: The Architech Way</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs text-green-300">
                      <div className="bg-green-500/20 p-2 rounded">Define Intent</div>
                      <div className="bg-green-500/20 p-2 rounded">Create Features</div>
                      <div className="bg-green-500/20 p-2 rounded">Deploy</div>
                      <div className="bg-green-500/20 p-2 rounded">Innovate</div>
                      <div className="bg-green-500/20 p-2 rounded">Scale</div>
                      <div className="bg-green-500/20 p-2 rounded">Celebrate</div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-gradient-electric rounded-full flex items-center justify-center animate-pulse">
                    <Heart className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Revolutionary CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-electric-blue/20 via-purple-500/20 to-green-500/20 border border-electric-blue/30 rounded-3xl p-12 max-w-4xl mx-auto backdrop-blur-sm">
            <h3 className="text-4xl font-bold text-foreground mb-6">
              Join the Revolution
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every great revolution starts with individuals who refuse to accept the status quo. 
              The Industrial Revolution of Software Development starts with you.
            </p>
            
            <Button 
              size="lg" 
              className="bg-gradient-electric hover:shadow-electric text-white font-semibold px-12 py-6 text-xl group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <Zap className="mr-3 h-6 w-6 group-hover:animate-pulse" />
              Start Your Revolution
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryVisionSection;