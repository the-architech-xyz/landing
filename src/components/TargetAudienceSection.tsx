import { Crown, Zap, Rocket, Shield, Users, TrendingUp, Clock, Target, Lightbulb } from "lucide-react";
import { useState } from "react";

const TargetAudienceSection = () => {
  const [activeAudience, setActiveAudience] = useState(0);

  const revolutionaries = [
    {
      icon: Crown,
      title: "The Architects",
      subtitle: "For Visionary Developers",
      description: "Stop being a configuration slave. Reclaim your throne as the architect of digital empires.",
      painPoint: "Spending 60% of time on setup hell instead of creative architecture",
      solution: "Command specialized AI agents to handle the mundane while you focus on the masterpiece",
      benefits: [
        "Focus on high-value creative work",
        "Never write boilerplate again", 
        "Maintain architectural control",
        "Ship features 10x faster"
      ],
      stats: { value: "60%", label: "Time saved from config hell" },
      color: "from-blue-600 to-cyan-500",
      bgGradient: "from-blue-950/20 to-cyan-950/10"
    },
    {
      icon: Shield,
      title: "The Liberators", 
      subtitle: "For CTOs & Tech Leads",
      description: "Lead the revolution. Transform your team from configuration workers into innovation powerhouses.",
      painPoint: "Team drowning in technical debt and inconsistent code quality",
      solution: "Standardize excellence with AI agents that enforce best practices automatically",
      benefits: [
        "Enforce consistent code quality",
        "Eliminate technical debt at source",
        "Scale team velocity exponentially",
        "Reduce onboarding from weeks to days"
      ],
      stats: { value: "10x", label: "Team velocity increase" },
      color: "from-green-600 to-emerald-500", 
      bgGradient: "from-green-950/20 to-emerald-950/10"
    },
    {
      icon: Rocket,
      title: "The Pioneers",
      subtitle: "For Founders & Innovators", 
      description: "Your billion-dollar idea shouldn't die in configuration purgatory. Ship fast, validate faster.",
      painPoint: "Ideas dying in the valley of death between concept and MVP",
      solution: "Go from napkin sketch to production-ready app in hours, not months",
      benefits: [
        "MVP in days, not months",
        "Test 100 ideas with the cost of 1",
        "Focus budget on growth, not development",
        "Beat competition to market"
      ],
      stats: { value: "90%", label: "Faster time to market" },
      color: "from-purple-600 to-pink-500",
      bgGradient: "from-purple-950/20 to-pink-950/10"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-background via-electric-blue/5 to-background relative overflow-hidden">
      {/* Revolutionary background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-electric-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Revolutionary header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-electric-blue/10 border border-electric-blue/20 rounded-full text-electric-blue mb-8">
            <Target className="h-5 w-5" />
            <span className="font-semibold">The Revolutionary Coalition</span>
            <Target className="h-5 w-5" />
          </div>
          
          <h2 className="text-6xl lg:text-8xl font-black text-foreground mb-8 leading-tight">
            Every{" "}
            <span className="text-transparent bg-gradient-electric bg-clip-text">
              Revolution
            </span>
            <br />
            Needs Its{" "}
            <span className="relative">
              <span className="text-transparent bg-gradient-to-r from-purple-500 via-electric-blue to-green-500 bg-clip-text">
                Heroes
              </span>
              <div className="absolute -bottom-3 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-electric-blue to-green-500 animate-pulse"></div>
            </span>
          </h2>
          
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto font-light">
            Which revolutionary faction will you join in the fight against configuration tyranny?
          </p>
        </div>

        {/* Interactive Revolutionary Cards */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {revolutionaries.map((revolutionary, index) => {
              const Revolutionary = revolutionary.icon;
              const isActive = index === activeAudience;
              
              return (
                <div 
                  key={index}
                  className={`group cursor-pointer transition-all duration-500 ${
                    isActive ? 'scale-105 z-10' : 'scale-100 hover:scale-102'
                  }`}
                  onClick={() => setActiveAudience(index)}
                >
                  <div className={`relative bg-gradient-to-br ${revolutionary.bgGradient} border-2 rounded-3xl p-8 transition-all duration-500 ${
                    isActive 
                      ? 'border-electric-blue shadow-xl shadow-electric-blue/20' 
                      : 'border-border hover:border-electric-blue/50'
                  }`}>
                    {/* Revolutionary badge */}
                    <div className="absolute -top-4 -right-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${revolutionary.color} rounded-full flex items-center justify-center shadow-lg ${
                        isActive ? 'animate-pulse' : ''
                      }`}>
                        <Crown className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    {/* Hero icon */}
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${revolutionary.color} shadow-lg mb-6 transition-all duration-300 ${
                      isActive ? 'shadow-xl animate-glow-pulse' : 'group-hover:scale-110'
                    }`}>
                      <Revolutionary className="h-10 w-10 text-white" />
                    </div>

                    {/* Revolutionary identity */}
                    <div className="mb-6">
                      <h3 className={`text-2xl font-bold mb-2 transition-all duration-300 ${
                        isActive 
                          ? 'text-transparent bg-gradient-electric bg-clip-text' 
                          : 'text-foreground group-hover:text-electric-blue'
                      }`}>
                        {revolutionary.title}
                      </h3>
                      <p className="text-lg font-semibold text-muted-foreground mb-4">
                        {revolutionary.subtitle}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {revolutionary.description}
                      </p>
                    </div>

                    {/* The pain point */}
                    <div className="bg-red-950/20 border border-red-500/30 rounded-xl p-4 mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span className="text-sm font-semibold text-red-400">The Pain:</span>
                      </div>
                      <p className="text-sm text-red-300">{revolutionary.painPoint}</p>
                    </div>

                    {/* The solution */}
                    <div className="bg-green-950/20 border border-green-500/30 rounded-xl p-4 mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-semibold text-green-400">The Revolution:</span>
                      </div>
                      <p className="text-sm text-green-300">{revolutionary.solution}</p>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-3 mb-6">
                      {revolutionary.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-3">
                          <div className={`w-2 h-2 bg-gradient-to-br ${revolutionary.color} rounded-full`}></div>
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Revolutionary stat */}
                    <div className={`bg-card/50 border border-border rounded-xl p-4 text-center backdrop-blur-sm`}>
                      <div className={`text-3xl font-bold bg-gradient-to-br ${revolutionary.color} bg-clip-text text-transparent`}>
                        {revolutionary.stats.value}
                      </div>
                      <div className="text-xs text-muted-foreground">{revolutionary.stats.label}</div>
                    </div>

                    {/* Revolutionary glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${revolutionary.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500 ${
                      isActive ? 'opacity-5' : ''
                    }`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to arms */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-electric-blue/20 to-purple-500/20 border border-electric-blue/30 rounded-full backdrop-blur-sm">
            <Lightbulb className="h-6 w-6 text-electric-blue animate-pulse" />
            <span className="text-lg font-semibold text-foreground">
              Every Revolutionary Starts Somewhere
            </span>
            <Zap className="h-6 w-6 text-electric-blue animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;