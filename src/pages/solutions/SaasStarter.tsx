import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, Code, Zap, Shield, CreditCard, Mail, Database, Layers, Terminal, Sparkles, FileText, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useGenomeById, useMarketplace } from "@/hooks/useMarketplace";
import { getGenomeCodeString, getModulesFromGenome } from "@/lib/marketplace-utils";

/**
 * THE ARCHITECH - SOLUTIONS: SAAS STARTER
 * 
 * Target: Founders looking to build SaaS quickly
 * Goal: Prove value with detailed case study → Drive generation
 * Design: Case study, tutorial-like, screenshot-heavy
 * 
 * Data: Uses real genome from marketplace
 */

const SaasStarter = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Set dark mode by default (principal mode)
    document.documentElement.classList.add('dark');
  }, []);

  const handleCopyGenome = () => {
    navigator.clipboard.writeText(genome);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Get real genome data from marketplace
  const genomeData = useGenomeById('saas-starter');
  const { modules: allModules } = useMarketplace();
  
  // Use the actual genome code from the package if available, otherwise generate from structure
  const genome = genomeData?.code || (genomeData ? getGenomeCodeString(genomeData) : '');
  
  // Get actual modules used in this genome
  const genomeModules = getModulesFromGenome(genomeData, allModules);
  
  // Extract tags from genome for display
  const tags = genomeData?.tags || ["Auth", "Payments", "Database", "Email", "Dashboard"];

  // Icon mapping for modules
  const iconMap: Record<string, any> = {
    'clerk': Shield,
    'stripe': CreditCard,
    'drizzle': Database,
    'resend': Mail,
    'nextjs': Terminal,
    'next': Terminal,
    'dashboard': Layers,
    'settings': Code,
    'analytics': Sparkles,
  };

  // Map modules to features with real data
  const features = genomeModules.map(module => {
    // Get icon from mapping
    const iconKey = Object.keys(iconMap).find(key => 
      module.id.toLowerCase().includes(key) || 
      module.name.toLowerCase().includes(key)
    );
    const Icon = iconKey ? iconMap[iconKey] : FileText;

    return {
      icon: Icon,
      name: module.name,
      tech: module.description || module.category,
      id: module.id,
      category: module.category
    };
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        {/* Musical Grid Background */}
        <div className="absolute inset-0 musical-grid opacity-50" />

        <div className="container-architech relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <div className="inline-block rounded-md px-4 py-2 bg-primary/10 border border-primary/30 text-primary text-sm font-bold tracking-wider">
                USE CASE
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-balance"
            >
              Build a Production-Ready SaaS in a <span className="text-primary">Weekend</span>
            </motion.h1>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-2 mb-8"
            >
              {tags.map((tag) => (
                <Badge key={tag} className="bg-primary/10 text-primary border-primary/30">
                  {tag}
                </Badge>
              ))}
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              From idea to first paying customer in 2 weeks, not 6 months.
            </motion.p>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className=" bg-background">
        <div className="container-architech">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
            <div className="p-6 bg-card border border-red-500/30 rounded-lg">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Building a production-ready SaaS requires integrating 20+ services before you can even start 
                on your unique value proposition. Authentication, payments, database, email, analytics—each one 
                takes days to set up properly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Genome */}
      <section className="section-padding bg-background">
        <div className="container-architech">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              The Solution: <span className="text-primary">One File</span>
            </h2>
            <div className="relative p-6 bg-card border border-primary/30 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span>genome.ts</span>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleCopyGenome}
                  className="text-muted-foreground hover:text-primary"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 mr-1" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-1" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
              <pre className="text-sm font-mono overflow-x-auto">
                <code className="text-primary">{genome}</code>
              </pre>
            </div>
            
            {/* CLI Command Callout */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-6 p-6 bg-primary/10 border border-primary/30 rounded-lg max-w-3xl mx-auto"
            >
              <p className="text-sm text-muted-foreground mb-3 text-center">
                <span className="text-primary font-bold">Try this genome:</span> Copy the code above and run:
              </p>
              <div className="bg-background/50 border border-primary/20 rounded-md p-4 font-mono text-sm text-primary text-center">
                architech generate --genome=saas-app
              </div>
              <p className="text-xs text-muted-foreground mt-3 text-center">
                ⚡ Estimated time: <span className="text-primary font-bold">~45 seconds</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-padding bg-background">
        <div className="container-architech">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">What You Get</h2>
            <p className="text-muted-foreground text-center mb-12">
              <span className="text-primary font-bold">{features.length} production-ready modules</span> pre-configured and ready to use
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="p-6 bg-card border border-border hover:border-primary/50 transition-colors group rounded-lg"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/10 border border-primary/30 rounded-md flex items-center justify-center">
                        <feature.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <h3 className="font-bold">{feature.name}</h3>
                        <p className="text-xs text-muted-foreground">{feature.tech}</p>
                      </div>
                    </div>
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  </div>
                  <Badge variant="outline" className="text-xs bg-primary/5 text-primary border-primary/30 mt-2">
                    {feature.category}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Technical Deep Dive */}
      <section className="section-padding bg-background">
        <div className="container-architech">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
            
            <div className="space-y-6">
              <div className="p-6 bg-card border border-primary/30 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-primary">Automatic Integration</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The Architech doesn't just install packages—it orchestrates them. When you declare Stripe + Clerk 
                  in your genome, it automatically configures the auth flow to handle subscription upgrades, webhook 
                  verification, and user metadata sync.
                </p>
              </div>

              <div className="p-6 bg-card border border-primary/30 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-primary">Best Practices Built-In</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every integration follows production-ready patterns. Error boundaries, loading states, TypeScript 
                  types, security headers—all configured correctly from day one.
                </p>
              </div>

              <div className="p-6 bg-card border border-primary/30 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-primary">Full Code Ownership</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You get the complete source code. No black boxes. Modify, extend, or eject at any time. 
                  It's your application, you own every line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section className="section-padding bg-background">
        <div className="container-architech">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Build Your <span className="text-primary">SaaS?</span>
            </h2>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-lg px-12 h-14"
              asChild
            >
              <a href="/#cta">
                <Zap className="mr-2 h-5 w-5" />
                Generate This Project Now
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Takes less than 5 minutes to get started
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SaasStarter;

