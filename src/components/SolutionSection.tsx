import { Boxes, Users } from "lucide-react";

const SolutionSection = () => {
  return (
    <section id="solution" className="py-24 bg-gradient-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Industrial Revolution of 
            <span className="text-transparent bg-gradient-electric bg-clip-text"> Software Development</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto font-light italic">
            "We didn't give the blacksmith a smarter hammer. We built the entire production line."
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Modular Architecture */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-electric shadow-electric">
              <Boxes className="h-10 w-10 text-primary-foreground" />
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Modular Architecture
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The Architech generates apps organized into clean, independent modules. 
                You think in terms of systems, not files.
              </p>
              
              {/* Module visualization */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-xl p-4 hover:border-electric-blue transition-colors">
                  <div className="w-8 h-8 bg-gradient-electric rounded-lg mb-3"></div>
                  <h4 className="font-semibold text-foreground mb-1">Auth Module</h4>
                  <p className="text-sm text-muted-foreground">Security & permissions</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 hover:border-electric-blue transition-colors">
                  <div className="w-8 h-8 bg-gradient-electric rounded-lg mb-3"></div>
                  <h4 className="font-semibold text-foreground mb-1">API Module</h4>
                  <p className="text-sm text-muted-foreground">Data & endpoints</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 hover:border-electric-blue transition-colors">
                  <div className="w-8 h-8 bg-gradient-electric rounded-lg mb-3"></div>
                  <h4 className="font-semibold text-foreground mb-1">UI Module</h4>
                  <p className="text-sm text-muted-foreground">Components & styling</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 hover:border-electric-blue transition-colors">
                  <div className="w-8 h-8 bg-gradient-electric rounded-lg mb-3"></div>
                  <h4 className="font-semibold text-foreground mb-1">Deploy Module</h4>
                  <p className="text-sm text-muted-foreground">CI/CD & infrastructure</p>
                </div>
              </div>
            </div>
          </div>

          {/* Specialized AI Agents */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-electric shadow-electric">
              <Users className="h-10 w-10 text-primary-foreground" />
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Specialized AI Agents
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                You command a team of experts. Our AuthAgent knows security. 
                Our DesignAgent knows accessibility.
              </p>
              
              {/* Agent cards */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4 bg-card border border-border rounded-xl p-4 hover:border-electric-blue transition-colors">
                  <div className="w-12 h-12 bg-gradient-electric rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-primary-foreground font-bold">A</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">AuthAgent</h4>
                    <p className="text-sm text-muted-foreground">Implements OAuth, JWT, role-based permissions</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 bg-card border border-border rounded-xl p-4 hover:border-electric-blue transition-colors">
                  <div className="w-12 h-12 bg-gradient-electric rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-primary-foreground font-bold">D</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">DesignAgent</h4>
                    <p className="text-sm text-muted-foreground">Creates accessible, responsive interfaces</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 bg-card border border-border rounded-xl p-4 hover:border-electric-blue transition-colors">
                  <div className="w-12 h-12 bg-gradient-electric rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-primary-foreground font-bold">T</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">TestAgent</h4>
                    <p className="text-sm text-muted-foreground">Generates comprehensive test suites</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;