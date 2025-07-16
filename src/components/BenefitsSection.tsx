import { Clock, Shield, Download } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "10x Faster Development",
      headline: "Launch in days, not months",
      description: "Skip weeks of boilerplate setup. Focus on what makes your app unique.",
      stats: "90% faster time-to-market",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Quality", 
      headline: "Best practices built-in",
      description: "Every module follows enterprise standards for security, performance, and maintainability.",
      stats: "99.9% security compliance",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Download,
      title: "100% Code Ownership",
      headline: "No vendor lock-in, ever",
      description: "Clean, readable code you can take anywhere. No proprietary dependencies.",
      stats: "Complete freedom",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
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
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-elevated transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-lg font-medium text-electric-blue">
                    {benefit.headline}
                  </p>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
                
                <div className="pt-4 border-t border-border">
                  <div className="text-sm font-semibold text-electric-blue">
                    {benefit.stats}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Simple CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to transform your development workflow?
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-electric-blue/10 border border-electric-blue/20 rounded-full text-electric-blue font-medium">
            Join thousands of developers who've made the switch
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;