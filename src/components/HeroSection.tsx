import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Code, Zap, Box, Layers, ChevronDown, Timer } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isTransformed, setIsTransformed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsTransformed(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const codeStormItems = [
    "npm install...", "webpack.config.js", "babel.config.js", 
    "eslint.config.js", "tsconfig.json", "package.json",
    "docker-compose.yml", "nginx.conf", "routes/auth.js",
    "middleware/cors.js", "models/user.js", "controllers/auth.js"
  ];

  const modules = [
    { name: "Authentication", icon: Code, color: "bg-gradient-electric" },
    { name: "Database", icon: Box, color: "bg-gradient-forest" },
    { name: "API Gateway", icon: Layers, color: "bg-gradient-ocean" },
    { name: "Payment", icon: Zap, color: "bg-gradient-sunset" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Enhanced grid pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-gradient-electric opacity-5 animate-gradient-shift"></div>
      </div>
      
      <div className="container mx-auto px-6 pt-20 pb-16 relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Enhanced with Problem + Solution */}
          <div className="space-y-8 relative z-30">
            {/* Problem indicator */}
            <div className="flex items-center gap-4 p-4 glass-card rounded-xl shadow-glow backdrop-blur-sm">
              <Timer className="h-6 w-6 text-architech-danger" />
              <div>
                <div className="text-architech-danger font-semibold">The Brutal Reality</div>
                <div className="text-sm text-muted-foreground">Developers waste 60% of their time on configuration hell</div>
              </div>
            </div>

            {/* Solution label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-button rounded-full text-sm font-medium text-architech-electric backdrop-blur-sm">
              <Zap className="h-4 w-4" />
              The Industrial Revolution of Code
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.9] tracking-tight relative z-40">
                <span className="text-foreground">From </span>
                <span className="text-transparent bg-gradient-danger bg-clip-text border-b-2 border-architech-danger/50 pb-1">
                  Configuration Hell
                </span>
                <br />
                <span className="text-foreground">to </span>
                <span className="text-transparent bg-gradient-electric bg-clip-text border-b-2 border-architech-electric pb-1">
                  Architech Paradise
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-light relative z-40">
                Stop being a{" "}
                <span className="line-through text-architech-danger">configuration slave</span>.
                <br />
                Become the{" "}
                <span className="text-transparent bg-gradient-electric bg-clip-text font-semibold">
                  architect you were meant to be
                </span>.
              </p>

              {/* Enhanced problem stats */}
              <div className="grid grid-cols-2 gap-4 relative z-40">
                <div className="glass-card p-4 rounded-xl backdrop-blur-sm border border-architech-danger/30">
                  <div className="text-2xl font-bold text-architech-danger">60%</div>
                  <div className="text-sm text-muted-foreground">Time wasted on setup</div>
                </div>
                <div className="glass-card p-4 rounded-xl backdrop-blur-sm border border-architech-electric/30">
                  <div className="text-2xl font-bold text-architech-electric">10x</div>
                  <div className="text-sm text-muted-foreground">Faster with Architech</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-40">
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
                className="glass-button border-2 border-architech-electric text-architech-electric hover:bg-architech-electric hover:text-white px-8 py-4 text-lg group transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                See the Magic
              </Button>
            </div>
          </div>

          {/* Right side - Enhanced Visual Transformation */}
          <div className="relative z-30">
            <div className="relative glass-card rounded-3xl p-8 backdrop-blur-xl shadow-glass">
              <div className="text-center mb-6">
                <div className="text-lg font-semibold text-foreground mb-2">
                  {isTransformed ? "✨ With The Architech" : "😩 Traditional Development"}
                </div>
                <div className="text-sm text-muted-foreground">
                  {isTransformed ? "Modular. Clean. Instant." : "Complex. Messy. Endless."}
                </div>
              </div>

              {/* Enhanced Transformation Container */}
              <div className="relative h-80 overflow-hidden rounded-xl bg-background border border-architech-border">
                {/* Code Storm (Before) */}
                <div className={`absolute inset-0 transition-all duration-2000 ${isTransformed ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}>
                  <div className="h-full bg-gradient-danger flex flex-wrap content-start gap-2 p-4 overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/20"></div>
                    {codeStormItems.map((item, index) => (
                      <div
                        key={index}
                        className="text-xs bg-white/20 text-white px-2 py-1 rounded border border-white/30 relative z-10"
                        style={{ 
                          transform: `rotate(${Math.random() * 10 - 5}deg)`
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modular Architecture (After) */}
                <div className={`absolute inset-0 transition-all duration-2000 ${isTransformed ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                  <div className="h-full bg-gradient-aurora flex flex-col justify-center items-center gap-4 p-6 relative">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="grid grid-cols-2 gap-4 w-full max-w-sm relative z-10">
                      {modules.map((module, index) => (
                        <div
                          key={module.name}
                          className={`${module.color} p-4 rounded-xl text-white text-center cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-electric`}
                        >
                          <module.icon className="h-6 w-6 mx-auto mb-2" />
                          <div className="text-sm font-medium">{module.name}</div>
                        </div>
                      ))}
                    </div>
                    <div className="text-center text-sm text-white font-medium relative z-10">
                      Complete app in minutes, not months
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
                  className="text-xs glass-button border-architech-electric text-architech-electric hover:bg-architech-electric hover:text-white"
                >
                  {isTransformed ? "Show the Pain" : "Show the Solution"}
                </Button>
              </div>
            </div>

            {/* Enhanced floating stats */}
            <div className="absolute -top-4 -right-4 glass-card rounded-xl p-3 shadow-glow z-20">
              <div className="text-2xl font-bold text-transparent bg-gradient-rainbow bg-clip-text">100%</div>
              <div className="text-xs text-muted-foreground">Yours</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group z-30">
        <div className="glass-button rounded-full p-3 group-hover:shadow-glow transition-all duration-300">
          <ChevronDown className="h-6 w-6 text-architech-electric" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;