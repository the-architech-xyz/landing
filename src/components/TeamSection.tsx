import { Github, Linkedin, Twitter, Code, Zap } from "lucide-react";

const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Meet the{" "}
              <span className="text-transparent bg-gradient-electric bg-clip-text">Architect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The developer behind the revolution, building the future of software development.
            </p>
          </div>

          {/* Founder Card */}
          <div className="relative">
            <div className="glass-card rounded-3xl p-8 lg:p-12 shadow-glass">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Left: Photo & Social Links */}
                <div className="text-center lg:text-left">
                  <div className="relative inline-block mb-6">
                    {/* Placeholder for founder photo */}
                    <div className="w-48 h-48 mx-auto lg:mx-0 rounded-full bg-gradient-electric flex items-center justify-center shadow-electric">
                      <Code className="h-24 w-24 text-white" />
                    </div>
                    
                    {/* Floating badge */}
                    <div className="absolute -bottom-2 -right-2 bg-gradient-sunset rounded-full p-3 shadow-glow">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center lg:justify-start gap-4">
                    <a 
                      href="https://github.com/yourhandle" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="glass-button p-3 rounded-xl hover:shadow-glow transition-all duration-300"
                    >
                      <Github className="h-5 w-5 text-architech-electric" />
                    </a>
                    <a 
                      href="https://linkedin.com/in/yourhandle" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="glass-button p-3 rounded-xl hover:shadow-glow transition-all duration-300"
                    >
                      <Linkedin className="h-5 w-5 text-architech-electric" />
                    </a>
                    <a 
                      href="https://twitter.com/yourhandle" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="glass-button p-3 rounded-xl hover:shadow-glow transition-all duration-300"
                    >
                      <Twitter className="h-5 w-5 text-architech-electric" />
                    </a>
                  </div>
                </div>

                {/* Right: Story & Bio */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">
                      Antoine
                    </h3>
                    <p className="text-lg font-medium text-architech-electric mb-4">
                      Founder & Chief Architect
                    </p>
                  </div>

                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      <strong className="text-foreground">15+ years</strong> of building software, 
                      and I was tired of watching brilliant developers waste their creativity on setup hell.
                    </p>
                    
                    <p>
                      I've seen too many ambitious projects die in configuration purgatory. 
                      Too many "next weekend" side projects that never saw the light of day because 
                      the setup was more complex than the idea itself.
                    </p>
                    
                    <p>
                      <strong className="text-foreground">The Architech</strong> is my answer to this madness. 
                      A tool that gives developers back what we lost: <em>the joy of pure creation</em>.
                    </p>
                  </div>

                  {/* Experience Highlights */}
                  <div className="grid grid-cols-2 gap-6 pt-6 border-t border-architech-border">
                    <div>
                      <div className="text-2xl font-bold text-transparent bg-gradient-electric bg-clip-text">15+</div>
                      <div className="text-sm text-muted-foreground">Years Developing</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-transparent bg-gradient-sunset bg-clip-text">50+</div>
                      <div className="text-sm text-muted-foreground">Projects Shipped</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating quote */}
            <div className="absolute -top-6 -right-6 glass-card rounded-xl p-4 shadow-glow max-w-xs hidden lg:block">
              <div className="text-sm text-muted-foreground italic">
                "Every developer deserves to spend their time building magic, not fighting configs."
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="text-center mt-16">
            <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto">
              <h4 className="text-xl font-bold text-foreground mb-4">
                The Mission
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                To liberate developers from the tyranny of configuration and setup, 
                giving them back the creative freedom that made them fall in love with coding in the first place. 
                <strong className="text-foreground"> The Architech is more than a tool—it's a movement.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 