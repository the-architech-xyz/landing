import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Shield, 
  Zap, 
  Lock, 
  Users, 
  CheckCircle, 
  GitBranch,
  Settings,
  TrendingUp,
  Mail,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

/**
 * THE ARCHITECH FOR TEAMS / ENTERPRISE PAGE
 * 
 * Target: CTOs, Engineering Managers, Technical Decision-makers
 * Goal: Sell internal marketplace → Request demo
 * Design: Professional, B2B, ROI-focused
 */

const ForTeams = () => {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Set dark mode by default (principal mode)
    document.documentElement.classList.add('dark');
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual form submission
    console.log({ email, company, message });
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding min-h-[60vh] flex items-center justify-center bg-background relative overflow-hidden">
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
                FOR TEAMS
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-balance"
            >
              Scale Your Engineering <span className="text-primary">Standards</span>, Not Your Boilerplate
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8"
            >
              The Architech for Teams lets you create a private marketplace of validated modules, ensuring every 
              new project is compliant, secure, and production-ready from day one.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-lg px-12 h-14"
                onClick={() => {
                  const formSection = document.getElementById('demo-form');
                  formSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Request an Enterprise Demo
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem - CTO's Pain */}
      <section className="section-padding bg-background">
        <div className="container-architech">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Chaos of <span className="text-red-500">Inconsistency</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every engineering leader faces the same challenges
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: GitBranch,
                title: "Stack Inconsistency",
                description: "Each team reinvents its own stack, creating technical debt and knowledge silos.",
                stat: "40% slower onboarding",
              },
              {
                icon: Users,
                title: "Slow Onboarding",
                description: "A new developer takes days to configure their environment to be productive.",
                stat: "3-5 days lost per hire",
              },
              {
                icon: Shield,
                title: "Security Risks",
                description: "How do you ensure every project uses the correct auth library version and complies with standards?",
                stat: "Untracked vulnerabilities",
              },
            ].map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-card border border-red-500/30 hover:border-red-500/50 transition-colors"
              >
                <problem.icon className="h-8 w-8 text-red-500 mb-4" />
                <h3 className="text-lg font-bold mb-2">{problem.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {problem.description}
                </p>
                <div className="text-xs font-semibold text-red-500">{problem.stat}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution - Internal Marketplace */}
      <section className="section-padding bg-background">
        <div className="container-architech">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Internal <span className="text-primary">"Golden Path"</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stop fighting "Shadow IT." Give your teams a tool they love, while maintaining control.
            </p>
          </motion.div>

          {/* 3-Step Visual */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {[
              {
                number: "01",
                title: "Curate",
                description: "Your team of architects defines and publishes validated modules in your private marketplace.",
                icon: Lock,
                visual: "Modules with validation seal",
              },
              {
                number: "02",
                title: "Generate",
                description: "Developers generate new projects using only approved building blocks, guaranteeing 100% compliance.",
                icon: Zap,
                visual: "Assembly from validated blocks",
              },
              {
                number: "03",
                title: "Govern",
                description: "Update a module once, notify or auto-update all projects that use it. Security patches in minutes, not weeks.",
                icon: Settings,
                visual: "Update propagation",
              },
            ].map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-card border border-primary/30 hover:border-primary/50 transition-colors group"
              >
                <div className="flex items-center justify-between mb-4">
                  <step.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-bold text-primary px-3 py-1 bg-primary/10 border border-primary/30 rounded-md">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {step.description}
                </p>
                <div className="text-xs text-primary/70 italic">{step.visual}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits - ROI Section */}
      <section className="section-padding bg-background">
        <div className="container-architech">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Velocity, Consistency, and <span className="text-primary">Governance</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: TrendingUp,
                metric: "90%",
                title: "Faster Onboarding",
                description: "New developers productive in hours, not days",
              },
              {
                icon: CheckCircle,
                metric: "100%",
                title: "Standards Compliance",
                description: "Every project follows your internal best practices",
              },
              {
                icon: Zap,
                metric: "40%",
                title: "Faster Feature Delivery",
                description: "Teams spend time on features, not setup",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">{benefit.metric}</div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Request Form */}
      <section id="demo-form" className="section-padding bg-background">
        <div className="container-architech">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your <span className="text-primary">Engineering Workflow?</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Schedule a personalized demo and see how The Architech can work for your team.
              </p>
            </motion.div>

            {!isSubmitted ? (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="p-8 bg-card border border-primary/30 rounded-lg space-y-6"
              >
                <div>
                  <label className="block text-sm font-semibold mb-2">Work Email</label>
                  <Input
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-background border-2 border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Company Name</label>
                  <Input
                    type="text"
                    placeholder="Your Company Inc."
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                    className="bg-background border-2 border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Message (Optional)</label>
                  <textarea
                    placeholder="Tell us about your team size and main challenges..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 bg-background border-2 border-border focus:border-primary rounded-md resize-none transition-colors"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-lg h-14"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Request Demo
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  We'll get back to you within 24 hours.
                </p>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="p-8 bg-card border border-primary/50 rounded-lg text-center"
              >
                <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
                <p className="text-muted-foreground">
                  We'll be in touch within 24 hours to schedule your personalized demo.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForTeams;

