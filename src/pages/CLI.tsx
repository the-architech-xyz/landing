import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Zap, GitBranch, Workflow, Copy, Check, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

/**
 * THE ARCHITECH CLI PAGE
 * 
 * Target: Power users who live in the terminal
 * Goal: 30-second hook → Send to GitHub/Docs
 * Design: Fast, minimal, terminal-native
 */

const CLI = () => {
  const [copied, setCopied] = useState(false);
  const [terminalStep, setTerminalStep] = useState(0);

  useEffect(() => {
    // Set dark mode by default (principal mode)
    document.documentElement.classList.add('dark');
  }, []);

  // Terminal animation steps
  const terminalSteps = [
    { text: "$ npx @the-architech/cli new my-saas", delay: 0 },
    { text: "✓ Parsing genome.ts...", delay: 800 },
    { text: "✓ Installing dependencies...", delay: 1400 },
    { text: "✓ Generating architecture...", delay: 2000 },
    { text: "✓ Configuring integrations...", delay: 2600 },
    { text: "✨ Project ready in 4.2s", delay: 3200, highlight: true },
  ];

  useEffect(() => {
    terminalSteps.forEach((step, index) => {
      setTimeout(() => {
        setTerminalStep(index + 1);
      }, step.delay);
    });
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm install -g @the-architech/cli");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section with Terminal Animation */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Musical Grid Background */}
        <div className="absolute inset-0 musical-grid opacity-50" />

        <div className="container-architech relative z-10 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center mb-8"
            >
              <div className="inline-block rounded-md px-4 py-2 bg-primary/10 border border-primary/30 text-primary text-sm font-bold tracking-wider">
                THE CLI
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-center mb-6 text-balance"
            >
              The Engine of <span className="text-primary">The Architech</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
            >
              Generate production-ready projects from the command line. No GUI. No distractions.
            </motion.p>

            {/* Terminal Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-card border border-primary/30 rounded-lg p-6 mb-8 font-mono text-sm"
            >
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-muted-foreground text-xs">terminal</span>
              </div>

              {/* Terminal Content */}
              <div className="space-y-2">
                {terminalSteps.slice(0, terminalStep).map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className={step.highlight ? "text-primary font-semibold" : ""}
                  >
                    {step.text}
                  </motion.div>
                ))}
                {terminalStep === terminalSteps.length && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="inline-block w-2 h-4 bg-primary ml-1 animate-pulse"
                  />
                )}
              </div>
            </motion.div>

            {/* Install Command Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-card border border-primary/50 rounded-lg p-6 flex items-center justify-between gap-4"
            >
              <code className="text-base flex-1 text-primary font-mono">
                npm install -g @the-architech/cli
              </code>
              <Button
                onClick={handleCopy}
                className="bg-primary hover:bg-primary/90 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 mr-2" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </>
                )}
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3-Step Magic */}
      <section className="section-padding bg-background">
        <div className="container-architech">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Three Commands. <span className="text-primary">Infinite Possibilities.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                number: "01",
                command: "new",
                full: "architech new my-app",
                description: "Start from zero",
                icon: Terminal,
              },
              {
                number: "02",
                command: "add",
                full: "architech add stripe auth",
                description: "Compose modules",
                icon: Workflow,
              },
              {
                number: "03",
                command: "enhance",
                full: "architech enhance --ai",
                description: "Let AI optimize",
                icon: Zap,
              },
            ].map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-card border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="flex items-center justify-between mb-4">
                  <step.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-bold text-primary px-3 py-1 bg-primary/10 border border-primary/30 rounded-md">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.command}</h3>
                <code className="text-sm text-primary block mb-3 font-mono bg-background/50 p-2 rounded">
                  {step.full}
                </code>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why CLI? */}
      <section className="section-padding bg-background">
        <div className="container-architech">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Built for <span className="text-primary">Automation</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Workflow,
                title: "CI/CD Integration",
                description: "Scriptable. Pipelines-ready.",
              },
              {
                icon: GitBranch,
                title: "Total Control",
                description: "Version your genome.ts in git.",
              },
              {
                icon: Zap,
                title: "Ultimate Speed",
                description: "No browser. Pure performance.",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 border border-primary/30 rounded-md flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
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
              Ready to <span className="text-primary">Build?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-lg px-8 h-14"
                asChild
              >
                <a
                  href="https://github.com/the-architech/cli"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Read the Docs
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/10 text-lg px-8 h-14"
                asChild
              >
                <a
                  href="https://www.npmjs.com/package/@the-architech/cli"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on NPM
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CLI;

