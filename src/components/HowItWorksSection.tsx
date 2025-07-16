import { MessageSquare, Users, Eye } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Define Your Intent",
      description: "Describe your application and select the modules you need.",
      details: ["Choose your tech stack", "Define core features", "Set requirements"]
    },
    {
      number: "02", 
      icon: Users,
      title: "Orchestrate the Agents",
      description: "The Architech commands the right AI agents to generate each module.",
      details: ["AuthAgent handles security", "DesignAgent creates UI", "TestAgent writes tests"]
    },
    {
      number: "03",
      icon: Eye,
      title: "Supervise & Create",
      description: "Review the high-quality code, add your unique logic, and deploy.",
      details: ["Clean, readable code", "Full ownership", "Ready to deploy"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Build in{" "}
            <span className="text-transparent bg-gradient-electric bg-clip-text">3 Steps</span>
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
                <div className="w-32 h-32 bg-gradient-electric rounded-full flex items-center justify-center shadow-electric animate-glow-pulse">
                  <span className="text-3xl font-bold text-primary-foreground">{step.number}</span>
                </div>
                
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-32 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-electric-blue to-transparent"></div>
                )}
              </div>

              {/* Content */}
              <div className={`flex-1 ${index % 2 === 1 ? 'lg:order-first' : ''}`}>
                <div className="bg-card border border-border rounded-3xl p-8 hover:shadow-elevated transition-all duration-300 group">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-electric shadow-electric mb-6 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-8 w-8 text-primary-foreground" />
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
                        <div className="w-2 h-2 bg-gradient-electric rounded-full"></div>
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Visual element for alternating layout */}
              <div className={`flex-shrink-0 ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                <div className="w-64 h-48 bg-gradient-surface border border-border rounded-2xl flex items-center justify-center">
                  <step.icon className="h-20 w-20 opacity-20" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;