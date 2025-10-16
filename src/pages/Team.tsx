import { useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Users, Code, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

/**
 * THE ARCHITECH TEAM PAGE
 * 
 * Target: Investors, candidates, journalists, contributors
 * Goal: Build trust and authenticity
 * Design: Human, warm, credible
 */

const Team = () => {
  useEffect(() => {
    // Set dark mode by default (principal mode)
    document.documentElement.classList.add('dark');
  }, []);

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
                THE TEAM
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-balance"
            >
              Built by Developers, <span className="text-primary">for Developers</span>
            </motion.h1>

            {/* Manifesto */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              We believe in open source, elegant simplicity, and giving power back to creators.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-background">
        <div className="container-architech">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">The Founder</h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-[300px_1fr] gap-8 items-start p-8 bg-card border border-border rounded-lg"
            >
              {/* Photo */}
              <div className="flex flex-col items-center md:items-start">
                <div className="w-64 h-64 bg-primary/10 border-2 border-primary/30 rounded-lg flex items-center justify-center mb-4">
                  {/* Placeholder - replace with actual photo */}
                  <Users className="h-24 w-24 text-primary" />
                </div>
                
                {/* Social Links */}
                <div className="flex gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-background border border-border hover:border-primary transition-colors rounded-md"
                  >
                    <Github className="h-5 w-5 text-primary" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-background border border-border hover:border-primary transition-colors rounded-md"
                  >
                    <Linkedin className="h-5 w-5 text-primary" />
                  </a>
                  <a
                    href="mailto:antoine.srvt@gmail.com"
                    className="p-2 bg-background border border-border hover:border-primary transition-colors rounded-md"
                  >
                    <Mail className="h-5 w-5 text-primary" />
                  </a>
                </div>
              </div>

              {/* Bio */}
              <div>
                <h3 className="text-2xl font-bold mb-2">Antoine Servat</h3>
                <div className="text-primary text-sm font-semibold mb-6">Founder & Architect</div>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    After spending years building startups and watching talented developers waste 70% of their time 
                    on repetitive setup tasks, I knew there had to be a better way.
                  </p>
                  <p>
                    The Architech is my answer to the Innovation Tax. It's the tool I wish I had when I was spending 
                    weeks setting up authentication flows instead of shipping features users wanted.
                  </p>
                  <p>
                    This isn't just a product—it's a movement to transform how we build software.
                  </p>
                </div>

                <a
                  href="/philosophy"
                  className="inline-flex items-center gap-2 text-primary font-semibold mt-6 hover:gap-3 transition-all"
                >
                  Read the full story
                  <span>→</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background">
        <div className="container-architech">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Code,
                  title: "Open Source First",
                  description: "The CLI and core architecture are open source. No black boxes, no vendor lock-in.",
                },
                {
                  icon: Heart,
                  title: "Developer Empathy",
                  description: "Every feature is born from real pain points. We build what developers actually need.",
                },
                {
                  icon: Users,
                  title: "Community Driven",
                  description: "The marketplace is built by the community, for the community. Your voice matters.",
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-card border border-border text-center"
                >
                  <div className="w-12 h-12 bg-primary/10 border border-primary/30 rounded-md flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="section-padding bg-background">
        <div className="container-architech">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="p-8 bg-card border border-primary/30 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">
                Join the <span className="text-primary">Revolution</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're looking for passionate architects, developers, and designers who want to fundamentally change 
                how software is built.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg px-8 h-14"
                  asChild
                >
                  <a href="mailto:antoine.srvt@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Get in Touch
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/10 text-lg px-8 h-14"
                  asChild
                >
                  <a
                    href="https://github.com/the-architech"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    Contributing Guidelines
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;

