import { MessageSquare, Users, Eye } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Define Your Intent",
      description: "Describe your application and select the modules you need.",
      details: ["Choose your tech stack", "Define core features", "Set requirements"],
      gradient: "bg-gradient-electric"
    },
    {
      number: "02", 
      icon: Users,
      title: "Orchestrate the Agents",
      description: "The Architech commands the right AI agents to generate each module.",
      details: ["AuthAgent handles security", "DesignAgent creates UI", "TestAgent writes tests"],
      gradient: "bg-gradient-ocean"
    },
    {
      number: "03",
      icon: Eye,
      title: "Supervise & Create",
      description: "Review the high-quality code, add your unique logic, and deploy.",
      details: ["Clean, readable code", "Full ownership", "Ready to deploy"],
      gradient: "bg-gradient-aurora"
    }
  ];

  return (
    <section className="py-24 bg-gradient-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Build in{" "}
            <span className="text-transparent bg-gradient-rainbow bg-clip-text">3 Steps</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The Architech transforms complex development workflows into a simple, 
            three-step process that puts you back in control.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative flex flex-col lg:flex-row items-center gap-12 mb-16 last:mb-0"
            >
              {/* Step number and connector */}
              <div className="relative flex-shrink-0">
                <div className={`w-32 h-32 ${step.gradient} rounded-full flex items-center justify-center shadow-electric animate-glow-pulse`}>
                  <span className="text-3xl font-bold text-white">{step.number}</span>
                </div>
                
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-32 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-electric"></div>
                )}
              </div>

              {/* Content */}
              <div className={`flex-1 ${index % 2 === 1 ? 'lg:order-first' : ''}`}>
                <div className="glass-card rounded-3xl p-8 hover:shadow-glass transition-all duration-500 group">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${step.gradient} shadow-electric mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Title and description */}
                  <h3 className="text-3xl font-bold text-foreground mb-4 group-hover:text-transparent group-hover:bg-gradient-electric group-hover:bg-clip-text transition-all duration-300">
                    {step.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-3">
                        <div className={`w-3 h-3 ${step.gradient} rounded-full animate-glow-pulse`}></div>
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Enhanced visual element */}
              <div className={`flex-shrink-0 ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                <div className={`w-64 h-48 ${step.gradient} rounded-2xl flex items-center justify-center relative overflow-hidden group`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <step.icon className="h-20 w-20 text-white/80 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center gap-4 glass-card rounded-3xl p-8 shadow-glow">
            <h3 className="text-2xl font-bold text-foreground">
              Ready to{" "}
              <span className="text-transparent bg-gradient-sunset bg-clip-text">revolutionize</span>
              {" "}your workflow?
            </h3>
            <p className="text-muted-foreground">
              Join the architectural revolution. Build like never before.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;