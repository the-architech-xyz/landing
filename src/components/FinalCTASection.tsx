import { useState, useEffect } from "react";
import { useForm, ValidationError } from '@formspree/react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle, Crown, Zap, Users, Clock, Shield, Lightbulb, Globe, Loader2 } from "lucide-react";

const FinalCTASection = () => {
  const [email, setEmail] = useState("");
  const [revolutionaryCount, setRevolutionaryCount] = useState(1847);
  
  // Replace 'your-form-id' with your actual Formspree form ID
  const [state, handleSubmit] = useForm("xdkkqkqv"); // You'll get this from Formspree

  useEffect(() => {
    const interval = setInterval(() => {
      setRevolutionaryCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit(e);
    if (state.succeeded) {
      setRevolutionaryCount(prev => prev + 1);
    }
  };

  if (state.succeeded) {
    return (
      <section className="py-32 bg-gradient-to-br from-electric-blue via-purple-600 to-green-500 relative overflow-hidden">
        {/* Celebration effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-white/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-white/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm mb-8 animate-bounce">
              <Crown className="h-12 w-12 text-white" />
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Welcome to the{" "}
              <span className="relative">
                <span className="text-yellow-300">Revolution!</span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-300 animate-pulse"></div>
              </span>
            </h2>
            
            <p className="text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Revolutionary #{revolutionaryCount.toLocaleString()} has joined the fight against configuration tyranny. 
              Your invitation to the alpha is coming soon.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Shield className="h-8 w-8 text-white mb-3 mx-auto" />
                <h3 className="font-bold text-white mb-2">Alpha Access</h3>
                <p className="text-white/80 text-sm">First to experience the revolution</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Lightbulb className="h-8 w-8 text-white mb-3 mx-auto" />
                <h3 className="font-bold text-white mb-2">Shape the Future</h3>
                <p className="text-white/80 text-sm">Your voice directs our mission</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Globe className="h-8 w-8 text-white mb-3 mx-auto" />
                <h3 className="font-bold text-white mb-2">Global Impact</h3>
                <p className="text-white/80 text-sm">Change software development forever</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-32 bg-gradient-to-br from-background via-electric-blue/10 to-purple-950/10 relative overflow-hidden">
      {/* Epic revolutionary background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-green-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Revolutionary countdown */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-electric-blue/10 border border-electric-blue/20 rounded-full text-electric-blue mb-8">
            <Users className="h-5 w-5" />
            <span className="font-mono font-semibold">{revolutionaryCount.toLocaleString()} revolutionaries joined</span>
            <Clock className="h-5 w-5 animate-pulse" />
          </div>
          
          <div className="animate-fade-in-up">
            <h2 className="text-6xl lg:text-8xl font-black text-foreground mb-8 leading-tight">
              The{" "}
              <span className="text-transparent bg-gradient-electric bg-clip-text">
                Revolution
              </span>
              <br />
              Starts{" "}
              <span className="text-transparent bg-gradient-to-r from-green-500 via-electric-blue to-purple-500 bg-clip-text border-b-2 border-green-500 pb-1">
                With You
              </span>
            </h2>

            <p className="text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Every great revolution needs its early adopters. Join the closed alpha and help us 
              liberate developers from configuration tyranny forever.
            </p>

            {/* Revolutionary signup */}
            <div className="bg-card/50 border border-electric-blue/20 backdrop-blur-xl rounded-3xl p-10 mb-12 max-w-3xl mx-auto relative overflow-hidden">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-electric opacity-5"></div>
              
              <div className="relative">
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Join the Revolutionary Alliance
                </h3>
                
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="relative">
                    <Input
                      type="email"
                      name="email"
                      placeholder="your-revolutionary-email@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-background/80 border-electric-blue/30 text-foreground placeholder:text-muted-foreground text-xl py-6 px-8 rounded-2xl focus:border-electric-blue focus:ring-electric-blue"
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <div className="w-8 h-8 bg-gradient-electric rounded-full flex items-center justify-center">
                        <Zap className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-electric hover:shadow-electric text-white font-bold py-6 text-xl rounded-2xl group relative overflow-hidden"
                    disabled={state.submitting}
                  >
                    {state.submitting ? (
                      <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                    ) : (
                      <Crown className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                    )}
                    {state.submitting ? "Joining the Alliance..." : "Claim My Revolutionary Status"}
                    {!state.submitting && <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />}
                  </Button>
                </form>

                {state.errors && Object.keys(state.errors).length > 0 && (
                  <p className="text-sm text-red-500 mt-4">There was an error submitting your email. Please try again.</p>
                )}

                <p className="text-sm text-muted-foreground mt-4">
                  Join the revolution. No spam, no corporate BS, just pure revolutionary updates.
                </p>
              </div>
            </div>

            {/* Revolutionary benefits */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-card/30 border border-border rounded-2xl p-8 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-electric rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Alpha Revolutionary Access
                </h3>
                <p className="text-muted-foreground">
                  Be among the first to wield The Architech's power and shape its evolution
                </p>
              </div>
              
              <div className="bg-card/30 border border-border rounded-2xl p-8 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-electric rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Revolutionary Council Voice
                </h3>
                <p className="text-muted-foreground">
                  Your feedback directly influences our mission and product roadmap
                </p>
              </div>
              
              <div className="bg-card/30 border border-border rounded-2xl p-8 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-electric rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Legacy Revolutionary Status
                </h3>
                <p className="text-muted-foreground">
                  Be remembered as one who helped liberate software development
                </p>
              </div>
            </div>

            {/* Final revolutionary call */}
            <div className="mt-16">
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-electric-blue/20 to-purple-500/20 border border-electric-blue/30 rounded-full backdrop-blur-sm">
                <Crown className="h-6 w-6 text-electric-blue animate-pulse" />
                <span className="text-lg font-semibold text-foreground">
                  The Future of Development is in Your Hands
                </span>
                <Zap className="h-6 w-6 text-electric-blue animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection; 