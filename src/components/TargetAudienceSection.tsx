import { Code, Settings, Rocket } from "lucide-react";

const TargetAudienceSection = () => {
  const audiences = [
    {
      icon: Code,
      title: "For Developers",
      description: "Gain back weeks of your life. Focus on the high-value code you love to write.",
      benefits: ["Skip boilerplate code", "Focus on unique features", "Maintain creative flow"]
    },
    {
      icon: Settings,
      title: "For CTOs & Tech Leads",
      description: "Standardize quality, slash technical debt, and 10x your team's velocity.",
      benefits: ["Consistent code quality", "Reduced technical debt", "Faster team onboarding"]
    },
    {
      icon: Rocket,
      title: "For Founders & Startups",
      description: "Go from idea to a robust MVP in days, not months. Test more, innovate faster.",
      benefits: ["Rapid prototyping", "Lower development costs", "Market validation speed"]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Built for the 
            <span className="text-transparent bg-gradient-electric bg-clip-text"> Architects of the Future</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're building the next unicorn or streamlining enterprise development, 
            The Architech adapts to your vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-surface border border-border rounded-3xl p-8 hover:shadow-elevated transition-all duration-500 hover:-translate-y-4"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-electric opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500"></div>
              
              {/* Icon */}
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-electric shadow-electric mb-8 group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                <audience.icon className="h-10 w-10 text-primary-foreground" />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-transparent group-hover:bg-gradient-electric group-hover:bg-clip-text transition-all duration-300">
                  {audience.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  "{audience.description}"
                </p>

                {/* Benefits list */}
                <ul className="space-y-3">
                  {audience.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-electric rounded-full"></div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-electric rounded-full opacity-20 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-accent rounded-full opacity-20 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;