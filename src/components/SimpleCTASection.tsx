import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle } from "lucide-react";

const SimpleCTASection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      console.log("Email submitted:", email);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-gradient-surface">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-success mb-6">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Welcome to the{" "}
              <span className="text-transparent bg-gradient-electric bg-clip-text">Revolution!</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              You're on the waitlist. We'll send your alpha access invitation soon.
            </p>
            
            <div className="glass-card rounded-2xl p-6 max-w-md mx-auto">
              <div className="text-sm text-muted-foreground mb-2">Your position</div>
              <div className="text-2xl font-bold text-transparent bg-gradient-electric bg-clip-text">
                #2,848
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                Alpha access coming Q2 2025
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="cta" className="py-24 bg-gradient-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to{" "}
            <span className="text-transparent bg-gradient-electric bg-clip-text">Skip the Setup?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
            Join the waitlist and be among the first to experience 
            the future of development.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 glass-card border-architech-border focus:border-architech-electric"
              />
              <Button 
                type="submit"
                size="lg"
                className="bg-gradient-electric hover:shadow-electric text-white font-semibold px-6 group"
              >
                Join Waitlist
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </form>

          <p className="text-sm text-muted-foreground mt-4">
            No spam, ever. Just updates on the revolution.
          </p>

          {/* Simple social proof */}
          <div className="mt-8 glass-card rounded-xl p-4 max-w-sm mx-auto">
            <div className="text-2xl font-bold text-transparent bg-gradient-rainbow bg-clip-text">
              2,847
            </div>
            <div className="text-sm text-muted-foreground">
              Developers already waiting
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleCTASection; 