import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle, Loader2, AlertCircle, Linkedin, Users } from "lucide-react";
import { WAITLIST_CONFIG } from "@/config/waitlist";
import DiscordIcon from "@/components/DiscordIcon";
import { useTranslation } from "@/hooks/useTranslation";

const SimpleCTASection = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [waitlistPosition, setWaitlistPosition] = useState<number | null>(null);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      // Using Waitlist.email API
      const response = await fetch(`${WAITLIST_CONFIG.API_URL}/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          waitlist: WAITLIST_CONFIG.WAITLIST_ID,
          email: email.trim().toLowerCase(),
          metadata: {
            source: 'landing_page_simple_cta',
            timestamp: new Date().toISOString()
          }
        }),
      });

      const body = await response.json();

      if (!response.ok) {
        throw new Error(body.message || 'Failed to join waitlist');
      }

      // Set position if returned by API
      if (body.position) {
        setWaitlistPosition(body.position);
      }

      setIsSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'Failed to join the waitlist. Please try again.');
      console.error('Waitlist submission error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-architech-section-light">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-success mb-6 animate-fade-in-up">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Welcome to the{" "}
              <span className="text-transparent bg-gradient-brand bg-clip-text">Revolution!</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              You're on the waitlist for the SaaS platform. The CLI is available now!
            </p>
            
            <div className="glass-card rounded-2xl p-6 max-w-md mx-auto">
              <div className="text-sm text-muted-foreground mb-2">Your position</div>
              <div className="text-2xl font-bold text-transparent bg-gradient-electric bg-clip-text">
                #{waitlistPosition || '🎯'}
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                SaaS platform coming soon
              </div>
            </div>
            
            {/* Share section */}
            {/* <div className="mt-8 glass-card rounded-xl p-4 max-w-sm mx-auto">
              <div className="text-sm text-muted-foreground mb-2">Share and move up in line</div>
              <div className="text-xs text-architech-electric">Each referral = +10 positions</div>
            </div> */}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="cta" className="py-24 bg-architech-section-light">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('cta.title.line1')}{" "}
            <span className="text-transparent bg-gradient-brand bg-clip-text">{t('cta.title.line2')}</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
            {t('cta.subtitle')}
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <Input
                  type="email"
                  name="email"
                  placeholder={t('cta.emailPlaceholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                  className={`flex-1 h-12 glass-card border-architech-border focus:border-architech-electric transition-all duration-300 ${
                    error ? 'border-architech-danger focus:border-architech-danger' : ''
                  }`}
                />
                <Button 
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="bg-gradient-electric hover:shadow-electric text-white font-semibold px-6 group relative overflow-hidden disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span className="ml-2">{t('cta.joining')}</span>
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      <span className="relative z-10">{t('cta.joinWaitlist')}</span>
                      <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </div>
              
              {/* Error display */}
              {error && (
                <div className="flex items-center gap-2 text-architech-danger text-sm bg-architech-danger/10 border border-architech-danger/20 rounded-lg p-3">
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}
            </div>
          </form>

          <p className="text-sm text-muted-foreground mt-4">
            No spam, ever. Just updates on the revolution.
          </p>

          {/* Beautiful OR Divider */}
          <div className="flex items-center my-8">
            <div className="flex-grow border-t border-architech-border"></div>
    
            <div className="flex-grow border-t border-architech-border"></div>
          </div>

          {/* Community Links - High Conversion */}
          <div>
            <p className="text-sm text-muted-foreground mb-4 text-center">
              Join our community for early access & updates
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://discord.gg/sxhdEEWups"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                <DiscordIcon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Join Discord</span>
              </a>
              <a
                href="https://www.linkedin.com/company/the-architech-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Follow on LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Enhanced social proof */}
          {/* <div className="mt-8 glass-card rounded-xl p-6 max-w-md mx-auto group hover:shadow-glow transition-all duration-300">
            <div className="text-2xl font-bold text-transparent bg-gradient-rainbow bg-clip-text">
              500+
            </div>
            <div className="text-sm text-muted-foreground">
              Developers already waiting
            </div>
            <div className="text-xs text-architech-electric mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              +12 joined today
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default SimpleCTASection; 