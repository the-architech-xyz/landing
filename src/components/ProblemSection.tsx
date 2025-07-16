import { Skull, RotateCw, Zap, Timer, Activity, TrendingDown } from "lucide-react";
import { useState, useEffect } from "react";

const ProblemSection = () => {
  const [wastedHours, setWastedHours] = useState(0);
  const [wastedDays, setWastedDays] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWastedHours(prev => (prev >= 24 ? 0 : prev + 1));
      if (wastedHours === 23) {
        setWastedDays(prev => prev + 1);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [wastedHours]);

  const painPoints = [
    {
      icon: Skull,
      title: "The Death of 60%",
      description: "While you configure webpack, your competition ships features. Every hour in config hell is an hour stolen from innovation.",
      stat: "60% time wasted",
      color: "from-red-600 to-red-400",
      bgColor: "bg-red-950/20"
    },
    {
      icon: RotateCw,
      title: "The Infinite Loop",
      description: "Every new project = same 20+ files. Auth setup. Database migration. CI/CD. Deploy config. The cycle never ends.",
      stat: "20+ files per setup",
      color: "from-orange-600 to-orange-400",
      bgColor: "bg-orange-950/20"
    },
    {
      icon: TrendingDown,
      title: "The AI Trap",
      description: "GitHub Copilot makes you faster at doing the wrong things. You're still trapped in the same broken process, just with autocomplete.",
      stat: "0% process improvement",
      color: "from-yellow-600 to-yellow-400",
      bgColor: "bg-yellow-950/20"
    }
  ];

  return (
    <section id="problem" className="py-24 bg-gradient-to-br from-background via-red-950/5 to-background relative overflow-hidden">
      {/* Dramatic background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Time Thief Detector */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 mb-8 animate-glow-pulse">
            <Timer className="h-5 w-5" />
            <span className="font-mono text-sm">TIME THIEF DETECTED</span>
            <Activity className="h-5 w-5" />
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black text-foreground mb-8 leading-tight">
            The{" "}
            <span className="relative">
              <span className="text-transparent bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text">
                Configuration Hell
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 animate-pulse"></div>
            </span>
            <br />
            That's Killing Innovation
          </h2>
          
          <div className="bg-card/50 border border-red-500/20 rounded-2xl p-8 max-w-2xl mx-auto backdrop-blur-sm">
            <div className="text-sm text-muted-foreground mb-2">Live waste counter (hypothetical developer):</div>
            <div className="flex items-center justify-center gap-6 text-3xl font-mono font-bold">
              <div className="text-red-400">
                {wastedHours.toString().padStart(2, '0')}
                <span className="text-sm ml-1">hours</span>
              </div>
              <div className="text-orange-400">
                {wastedDays.toString().padStart(2, '0')}
                <span className="text-sm ml-1">days</span>
              </div>
            </div>
            <div className="text-muted-foreground text-sm mt-2">wasted on configuration today</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {painPoints.map((pain, index) => (
            <div 
              key={index}
              className={`group relative ${pain.bgColor} border border-red-500/20 rounded-3xl p-8 hover:shadow-xl hover:shadow-red-500/20 transition-all duration-500 hover:-translate-y-3 hover:scale-105`}
            >
              {/* Dramatic icon */}
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${pain.color} shadow-lg mb-6 group-hover:animate-pulse`}>
                <pain.icon className="h-10 w-10 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-orange-400 group-hover:bg-clip-text transition-all duration-300">
                {pain.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {pain.description}
              </p>

              {/* Shocking stat */}
              <div className="bg-background/50 border border-red-500/30 rounded-xl p-4 backdrop-blur-sm">
                <div className={`text-2xl font-bold bg-gradient-to-br ${pain.color} bg-clip-text text-transparent`}>
                  {pain.stat}
                </div>
                <div className="text-xs text-muted-foreground">Industry average</div>
              </div>

              {/* Dramatic glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pain.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Revolutionary call to action */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-full backdrop-blur-sm">
            <Zap className="h-6 w-6 text-electric-blue animate-pulse" />
            <span className="text-lg font-semibold text-foreground">
              There Has to Be a Better Way
            </span>
            <Zap className="h-6 w-6 text-electric-blue animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;