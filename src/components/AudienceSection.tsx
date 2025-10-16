import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Package, Zap, Code2, Sparkles, Wand2, Rocket, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { useMarketplace } from "@/hooks/useMarketplace";

/**
 * THE ARCHITECH AUDIENCE SECTION - Brutalist Design
 * Unified section with tabs for Builders vs Creators
 * Features sharp corners, blue/orange color coding
 * Uses real marketplace stats
 */

type Audience = "builders" | "creators";

const AudienceSection = () => {
  const { t } = useTranslation();
  const [activeAudience, setActiveAudience] = useState<Audience>("builders");
  const { stats } = useMarketplace();

  const builderFeatures = [
    {
      icon: Terminal,
      title: "CLI-First Experience",
      description: "Powerful command-line interface designed for developers who live in the terminal.",
    },
    {
      icon: Package,
      title: "Module Marketplace",
      description: `Access ${stats.totalModules}+ production-ready modules or publish your own to the community.`,
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized build pipeline that compiles your genome to production in seconds.",
    },
    {
      icon: Code2,
      title: "Full Control",
      description: "Opinionated core with flexible periphery. Customize everything that matters.",
    },
  ];

  const creatorCapabilities = [
    {
      icon: Brain,
      title: "Natural Language",
      description: "Describe your app in plain English. Our AI translates vision to architecture.",
    },
    {
      icon: Wand2,
      title: "Instant Prototypes",
      description: "From idea to working prototype in minutes, not weeks.",
    },
    {
      icon: Rocket,
      title: "Production Ready",
      description: "AI-generated code follows best practices and scales with your business.",
    },
  ];

  return (
    <section id="audience" className="section-padding bg-card/30 relative overflow-hidden">
      <div className="container-architech">
        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex border border-border bg-background">
            <button
              onClick={() => setActiveAudience("builders")}
              className={`px-8 py-4 text-sm font-bold tracking-wider transition-architech border-r border-border ${
                activeAudience === "builders"
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-muted-foreground hover:text-foreground"
              }`}
            >
              FOR BUILDERS
            </button>
            <button
              onClick={() => setActiveAudience("creators")}
              className={`px-8 py-4 text-sm font-bold tracking-wider transition-architech ${
                activeAudience === "creators"
                  ? "bg-accent text-accent-foreground"
                  : "bg-background text-muted-foreground hover:text-foreground"
              }`}
            >
              FOR CREATORS
            </button>
          </div>
        </div>

        {/* Builders Content */}
        {activeAudience === "builders" && (
          <motion.div
            key="builders"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 text-primary text-sm font-bold tracking-wider">
                FOR BUILDERS
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight font-geist">
                Your expertise, <span className="text-primary">amplified</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-inter">
                Built by developers, for developers. The Architech CLI gives you complete control over your application
                architecture while eliminating boilerplate.
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <a href="/cli">
                  <Terminal className="mr-2 h-5 w-5" />
                  Install CLI
                </a>
              </Button>
            </div>

            {/* Right: Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {builderFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 bg-card border border-border hover:border-primary/50 transition-colors group"
                >
                  <feature.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary group-hover:scale-[1.02] transition-all origin-left">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Builders Code Example */}
        {activeAudience === "builders" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 p-8 bg-background border border-border font-geist-mono text-sm"
          >
            <div className="flex items-center gap-2 mb-4 text-muted-foreground">
              <div className="w-3 h-3 bg-destructive" />
              <div className="w-3 h-3 bg-accent" />
              <div className="w-3 h-3 bg-primary" />
              <span className="ml-4">terminal</span>
            </div>
            <div className="space-y-2">
              <div>
                <span className="text-primary">$</span> <span className="text-foreground">architech init my-app</span>
              </div>
              <div className="text-muted-foreground">✓ Genome initialized</div>
              <div className="mt-4">
                <span className="text-primary">$</span>{" "}
                <span className="text-foreground">architech add auth payments analytics</span>
              </div>
              <div className="text-muted-foreground">✓ Modules orchestrated</div>
              <div className="mt-4">
                <span className="text-primary">$</span> <span className="text-foreground">architech deploy</span>
              </div>
              <div className="text-muted-foreground">✓ Application live in 12s</div>
            </div>
          </motion.div>
        )}

        {/* Creators Content */}
        {activeAudience === "creators" && (
          <motion.div
            key="creators"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left: AI Demo */}
            <div className="order-2 lg:order-1">
              <div className="p-8 bg-card border border-border space-y-6">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Sparkles className="h-4 w-4 text-accent" />
                  <span>AI-Powered Builder</span>
                </div>

                {/* User Input */}
                <div className="p-4 bg-accent/5 border-l-4 border-accent">
                  <p className="text-foreground font-inter">
                    "I need a SaaS platform for dog walking services with booking, payments, and real-time GPS tracking."
                  </p>
                </div>

                {/* AI Response */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                      <Sparkles className="h-3 w-3 text-accent-foreground" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <p className="text-sm text-muted-foreground">Analyzing requirements...</p>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent" />
                          <span>User authentication & profiles</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent" />
                          <span>Booking system with calendar</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent" />
                          <span>Stripe payment integration</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent" />
                          <span>Real-time GPS tracking module</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent" />
                          <span>Notification system</span>
                        </div>
                      </div>
                      <div className="pt-2">
                        <span className="text-accent font-medium">✓ Genome generated</span>
                        <span className="text-muted-foreground ml-2">Ready to deploy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 text-accent text-sm font-bold tracking-wider">
                FOR CREATORS
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight font-geist">
                Your vision, <span className="text-accent">realized</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-inter">
                No code required. Describe your application in natural language and watch as AI orchestrates the perfect
                architecture for your needs.
              </p>

              <div className="space-y-4 pt-4">
                {creatorCapabilities.map((capability, index) => (
                  <motion.div
                    key={capability.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-4 p-4 rounded-lg border border-transparent hover:border-accent/50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0">
                      <capability.icon className="h-6 w-6 text-accent group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 group-hover:text-accent group-hover:scale-[1.02] transition-all origin-left">{capability.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{capability.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <a href="/#cta">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Join Waitlist
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default AudienceSection;

