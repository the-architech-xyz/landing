import { Clock, Shield, Download, Heart } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Drastic Time Savings",
      headline: "Launch MVPs in days, not months",
      description: "Skip the weeks of boilerplate setup and configuration. Focus on what makes your app unique.",
      stats: "90% faster time-to-market"
    },
    {
      icon: Shield,
      title: "Industrial-Grade Quality", 
      headline: "Best practices for security and testing are built-in",
      description: "Every generated module follows enterprise-grade standards for security, performance, and maintainability.",
      stats: "99.9% security compliance"
    },
    {
      icon: Download,
      title: "True Ownership & No Lock-in",
      headline: "Get high-quality, exportable code that is 100% yours",
      description: "Clean, readable code you can take anywhere. No proprietary dependencies or vendor lock-in.",
      stats: "100% code ownership"
    },
    {
      icon: Heart,
      title: "The Joy of Creation, Restored",
      headline: "Focus on the creative work you love. We handle the rest",
      description: "Rediscover why you became a developer. Build features, not infrastructure.",
      stats: "Developer happiness ↑"
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Freedom to Build 
            <span className="text-transparent bg-gradient-electric bg-clip-text"> What Matters</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stop fighting the tools. Start building the future. The Architech gives you 
            superpowers without the complexity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-surface border border-border rounded-3xl p-8 hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
            >
              {/* Background effect */}
              <div className="absolute inset-0 bg-gradient-electric opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500"></div>
              
              {/* Header */}
              <div className="flex items-start space-x-6 mb-6">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-electric shadow-electric group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                  <benefit.icon className="h-10 w-10 text-primary-foreground" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-transparent group-hover:bg-gradient-electric group-hover:bg-clip-text transition-all duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-sm font-medium text-electric-blue">
                    {benefit.stats}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  "{benefit.headline}"
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-electric rounded-full opacity-20 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-accent rounded-full opacity-20 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call-to-action section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-electric rounded-3xl p-12 shadow-electric">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are already building faster, 
              smarter, and with more joy.
            </p>
            <button className="bg-background text-foreground hover:bg-surface-elevated px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-300 shadow-elevated">
              Get Early Access Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;