import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Loader2, AlertCircle, Linkedin, Copy } from "lucide-react";
import { WAITLIST_CONFIG } from "@/config/waitlist";
import DiscordIcon from "@/components/DiscordIcon";
import { SectionHeader } from "@/components/ui/section-header";
import { BrandedButton } from "@/components/ui/branded-button";
import { BRANDING } from "@/lib/branding";
import { useTranslation } from "@/hooks/useTranslation";

/**
 * THE ARCHITECH CTA SECTION - "Technical Elegance"
 * Bold, unmissable final call-to-action with new design system
 */

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
      setError(t('validation.emailRequired'));
      return;
    }

    if (!validateEmail(email)) {
      setError(t('validation.emailInvalid'));
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(WAITLIST_CONFIG.API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          language: t('language') === 'fr' ? 'fr' : 'en',
          source: 'landing_page_simple_cta'
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 409) {
          setError(t('waitlist.alreadyExists'));
          setWaitlistPosition(data.data?.position);
          return;
        }
        throw new Error(data.error || 'Failed to join waitlist');
      }

      if (data.data?.position) {
        setWaitlistPosition(data.data.position);
      }

      setIsSubmitted(true);
    } catch (err: any) {
      setError(err.message || t('waitlist.error'));
      console.error('Waitlist submission error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="section-padding bg-background">
        <div className="container-architech">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Badge with rounded corners and glow */}
            <div className="inline-block rounded-md px-4 py-2 bg-state-success/10 border border-state-success/30 text-state-success text-sm font-bold tracking-wider mb-6">
              WELCOME
            </div>
            
            <h2 className="font-geist text-4xl md:text-6xl font-bold tracking-tight mb-4">
              You're <span className="text-state-success">In</span>
            </h2>
            
            <p className="font-inter text-xl text-subtle mb-8">
              You're on the waitlist for the SaaS platform. The CLI is available now!
            </p>
            
            <div className="bg-surface-elevated border border-subtle p-6 max-w-md mx-auto grain-texture">
              <div className="text-sm text-subtle mb-2">{t('cta.position')}</div>
              <div className="text-2xl font-bold text-primary font-geist">
                {waitlistPosition ? `#${waitlistPosition}` : '🎯'}
              </div>
              <div className="text-sm text-subtle mt-2">
                SaaS platform coming soon
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="cta" className="section-padding bg-background">
      <div className={BRANDING.spacing.container}>
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Header */}
          <SectionHeader section="cta" />
          
          {/* CLI Install Box - HERO ELEMENT */}
          <div className="rounded-lg bg-card border-2 border-primary/40 p-8 mb-8 relative overflow-hidden">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-lg"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <Badge className="bg-primary/10 text-primary border-primary/30 px-3 py-1">
                  Free & Open Source
                </Badge>
              </div>
              
              <div className="flex items-center justify-center gap-3 mb-6 bg-background/50 rounded-md p-4 border border-border/50">
                <code className="font-mono text-lg md:text-xl text-foreground">
                  npm install -g @architech/cli
                </code>
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText('npm install -g @architech/cli');
                  }}
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-primary hover:bg-primary/10 p-2"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-white transition-colors px-8 py-3"
                >
                  <a href="/cli">Try CLI Now</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/10 text-primary px-8 py-3"
                >
                  <a href="/cli">View Docs</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-6 mb-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-state-success" />
              <span>Used by 1000+ developers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-state-success" />
              <span>MIT License</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-state-success" />
              <span>No Lock-in</span>
            </div>
          </div>

          {/* SAAS Waitlist - Secondary Option */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                Prefer a visual interface?
              </h3>
              <p className="text-sm text-muted-foreground">
                Join our waitlist for the upcoming SAAS platform
              </p>
            </div>

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
                    className={`flex-1 h-12 bg-card border-2 ${
                      error ? 'border-state-error focus:border-state-error' : 'border-border focus:border-primary'
                    } transition-colors`}
                  />
                  <Button 
                    type="submit"
                    size="lg"
                    disabled={isLoading}
                    className="bg-accent hover:bg-accent/90 transition-colors shadow-lg hover:shadow-accent/50"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span className="ml-2">{t('cta.joining')}</span>
                      </>
                    ) : (
                      <>
                        <span>{t('cta.joinWaitlist')}</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </div>
                
                {error && (
                  <div className="flex items-center gap-2 text-state-error text-sm bg-state-error/10 border border-state-error/20 p-3">
                    <AlertCircle className="h-4 w-4 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}
              </div>
            </form>

            <p className="font-inter text-sm text-muted-foreground mt-4">
              {t('cta.noSpamText')}
            </p>
          </div>

          {/* Secondary Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            <a href="/solutions/saas-starter" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              View Examples
            </a>
            <a href="/cli" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              CLI Documentation
            </a>
            <a href="/marketplace" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Browse Marketplace
            </a>
            <a 
              href="https://discord.gg/sxhdEEWups"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Join Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleCTASection;
