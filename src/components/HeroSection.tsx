import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-architech.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                Stop <span className="text-transparent bg-gradient-electric bg-clip-text">Configuring</span>.
                <br />
                Start <span className="text-transparent bg-gradient-electric bg-clip-text">Creating</span>.
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                The Architech is a revolutionary tool that uses specialized AI agents to generate 
                complete, production-ready applications in minutes, not weeks. 
                <span className="text-foreground font-medium"> Reclaim your time and your creativity.</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-electric hover:shadow-electric text-primary-foreground font-semibold px-8 py-4 text-lg group"
              >
                Join the Waitlist for Early Access
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-border hover:bg-surface-elevated px-8 py-4 text-lg group"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-transparent bg-gradient-electric bg-clip-text">10x</div>
                <div className="text-sm text-muted-foreground">Faster Development</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-transparent bg-gradient-electric bg-clip-text">60%</div>
                <div className="text-sm text-muted-foreground">Less Configuration</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-transparent bg-gradient-electric bg-clip-text">100%</div>
                <div className="text-sm text-muted-foreground">Code Ownership</div>
              </div>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative animate-fade-in-up">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="The Architech AI agents generating modular applications"
                className="w-full h-auto rounded-2xl shadow-elevated"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-electric rounded-full animate-float shadow-glow"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-accent rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;