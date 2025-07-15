import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Code, Zap, Box, Layers, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isTransformed, setIsTransformed] = useState(false);
  const [activeDemo, setActiveDemo] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsTransformed(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const codeStormItems = [
    "npm install...", "webpack.config.js", "babel.config.js", 
    "eslint.config.js", "tsconfig.json", "package.json",
    "docker-compose.yml", "nginx.conf", "routes/auth.js",
    "middleware/cors.js", "models/user.js", "controllers/auth.js"
  ];

  const modules = [
    { name: "Authentication", icon: Code, color: "from-blue-500 to-cyan-500" },
    { name: "Database", icon: Box, color: "from-purple-500 to-pink-500" },
    { name: "API Gateway", icon: Layers, color: "from-green-500 to-emerald-500" },
    { name: "Payment", icon: Zap, color: "from-orange-500 to-red-500" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Dynamic grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:20px_20px] animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 pt-20 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Revolutionary Content */}
          <div className="space-y-8">
            {/* Eye-catching label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-blue/10 border border-electric-blue/20 rounded-full text-sm font-medium text-electric-blue animate-glow-pulse">
              <Zap className="h-4 w-4" />
              The Industrial Revolution of Code
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-8xl font-black text-foreground leading-[0.9] tracking-tight">
                From{" "}
                <span className="relative">
                  <span className="text-transparent bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text">
                    Chaos
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500 animate-pulse"></div>
                </span>
                <br />
                to{" "}
                <span className="relative">
                  <span className="text-transparent bg-gradient-electric bg-clip-text">
                    Architecture
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-electric"></div>
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-light">
                Stop being a{" "}
                <span className="line-through text-red-400">configuration slave</span>.
                <br />
                Become the{" "}
                <span className="text-transparent bg-gradient-electric bg-clip-text font-semibold">
                  architect you were meant to be
                </span>.
              </p>

              <div className="bg-surface-elevated/50 border border-border p-6 rounded-2xl backdrop-blur-sm">
                <div className="text-sm text-muted-foreground mb-2">The brutal truth:</div>
                <div className="text-3xl font-bold text-red-400 mb-1">60% of your time</div>
                <div className="text-muted-foreground">wasted on configuration hell</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-electric hover:shadow-electric text-white font-semibold px-8 py-4 text-lg group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                Join the Revolution
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white px-8 py-4 text-lg group transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                See the Magic
              </Button>
            </div>
          </div>

          {/* Right side - Revolutionary Visual Transformation */}
          <div className="relative">
            <div className="relative bg-background/50 border border-border rounded-3xl p-8 backdrop-blur-xl">
              <div className="text-center mb-6">
                <div className="text-lg font-semibold text-foreground mb-2">
                  {isTransformed ? "✨ With The Architech" : "😩 Traditional Development"}
                </div>
                <div className="text-sm text-muted-foreground">
                  {isTransformed ? "Modular. Clean. Instant." : "Complex. Messy. Endless."}
                </div>
              </div>

              {/* Transformation Container */}
              <div className="relative h-80 overflow-hidden rounded-xl bg-background border border-border">
                {/* Code Storm (Before) */}
                <div className={`absolute inset-0 transition-all duration-2000 ${isTransformed ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}>
                  <div className="h-full bg-gradient-to-br from-red-950/20 to-orange-950/20 flex flex-wrap content-start gap-2 p-4 overflow-hidden">
                    {codeStormItems.map((item, index) => (
                      <div
                        key={index}
                        className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded border border-red-500/30 animate-float"
                        style={{ 
                          animationDelay: `${index * 100}ms`,
                          transform: `rotate(${Math.random() * 10 - 5}deg)`
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                </div>

                {/* Modular Architecture (After) */}
                <div className={`absolute inset-0 transition-all duration-2000 ${isTransformed ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                  <div className="h-full bg-gradient-to-br from-blue-950/20 to-cyan-950/20 flex flex-col justify-center items-center gap-4 p-6">
                    <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                      {modules.map((module, index) => (
                        <div
                          key={module.name}
                          className={`bg-gradient-to-br ${module.color} p-4 rounded-xl text-white text-center cursor-pointer transform hover:scale-105 transition-all duration-300 animate-fade-in-up`}
                          style={{ animationDelay: `${index * 200}ms` }}
                        >
                          <module.icon className="h-6 w-6 mx-auto mb-2" />
                          <div className="text-sm font-medium">{module.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Toggle Button */}
              <div className="flex justify-center mt-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsTransformed(!isTransformed)}
                  className="text-xs"
                >
                  {isTransformed ? "Show the Pain" : "Show the Solution"}
                </Button>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -top-4 -left-4 bg-background border border-border rounded-xl p-3 shadow-elevated animate-float">
              <div className="text-2xl font-bold text-transparent bg-gradient-electric bg-clip-text">10x</div>
              <div className="text-xs text-muted-foreground">Faster</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-background border border-border rounded-xl p-3 shadow-elevated animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-2xl font-bold text-transparent bg-gradient-electric bg-clip-text">100%</div>
              <div className="text-xs text-muted-foreground">Yours</div>
            </div>
          </div>
        </div>
      </div>

      {/* Revolutionary scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group">
        <div className="bg-electric-blue/20 border border-electric-blue/50 rounded-full p-3 group-hover:bg-electric-blue/30 transition-colors">
          <ChevronDown className="h-6 w-6 text-electric-blue" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;