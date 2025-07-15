import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle } from "lucide-react";

const FinalCTASection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would typically send the email to your backend
      console.log("Email submitted:", email);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-gradient-electric">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-background/20 mb-8">
              <CheckCircle className="h-10 w-10 text-primary-foreground" />
            </div>
            <h2 className="text-4xl font-bold text-primary-foreground mb-4">
              Welcome to the Revolution!
            </h2>
            <p className="text-xl text-primary-foreground/90">
              You're now on the waitlist for early access to The Architech. 
              We'll be in touch soon with exclusive updates and your invitation to join the alpha.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-electric">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-8">
              Be a Part of the Revolution.
              <br />
              <span className="text-primary-foreground/80">Be an Architect.</span>
            </h2>

            <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              The Architech is currently in a closed alpha. Join the waitlist to get 
              exclusive early access, influence the roadmap, and be among the first 
              to experience the future of software development.
            </p>

            {/* Waitlist form */}
            <div className="bg-background/10 backdrop-blur-lg rounded-3xl p-8 mb-12 max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-background/80 border-background/20 text-foreground placeholder:text-muted-foreground text-lg py-4 px-6 rounded-xl"
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-background text-foreground hover:bg-surface-elevated font-semibold py-4 text-lg rounded-xl group shadow-elevated"
                >
                  Request My Early Access
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>

              <p className="text-sm text-primary-foreground/70 mt-4">
                No spam, ever. Unsubscribe at any time.
              </p>
            </div>

            {/* Benefits of joining */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-background/10 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                  Early Access
                </h3>
                <p className="text-primary-foreground/80">
                  Be among the first to experience The Architech's power
                </p>
              </div>
              
              <div className="bg-background/10 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                  Shape the Future
                </h3>
                <p className="text-primary-foreground/80">
                  Your feedback will directly influence our roadmap
                </p>
              </div>
              
              <div className="bg-background/10 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                  Exclusive Updates
                </h3>
                <p className="text-primary-foreground/80">
                  Get insider insights into our development process
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;