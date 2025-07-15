import { Cable, RotateCw, Bot } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Cable,
      title: "The 60% Waste",
      description: "Spend less time fighting configurations and more time building unique features.",
      color: "text-red-400"
    },
    {
      icon: RotateCw,
      title: "Reinventing the Wheel",
      description: "Stop rebuilding the same authentication, CI/CD, and project setup for every new idea.",
      color: "text-orange-400"
    },
    {
      icon: Bot,
      title: "The AI that Dehumanizes",
      description: "Current AI tools turn you into a 'bug-checker'. Reclaim your role as an architect.",
      color: "text-yellow-400"
    }
  ];

  return (
    <section id="problem" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Vicious Cycle of 
            <span className="text-transparent bg-gradient-electric bg-clip-text"> Modern Development</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every developer knows the frustration. You have a brilliant idea, but before you can build it, 
            you're trapped in endless configuration cycles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-elevated transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-surface-elevated mb-6 group-hover:shadow-glow transition-all duration-300`}>
                <problem.icon className={`h-8 w-8 ${problem.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-transparent group-hover:bg-gradient-electric group-hover:bg-clip-text transition-all duration-300">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-electric opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Visual separator */}
        <div className="flex items-center justify-center mt-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-border"></div>
          <div className="mx-8 w-12 h-12 bg-gradient-electric rounded-full flex items-center justify-center animate-glow-pulse">
            <div className="w-6 h-6 bg-primary-foreground rounded-full"></div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-border"></div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;