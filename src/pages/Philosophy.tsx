import { useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

/**
 * THE ARCHITECH PHILOSOPHY PAGE
 * 
 * Target: Believers, investors, future leaders
 * Goal: Explain the "why" → Build emotional connection
 * Design: Thought leadership, visionary, essay-like
 */

const Philosophy = () => {
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
                OUR VISION
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-balance"
            >
              The End of <span className="text-primary">Digital Craftsmanship</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Why we're building The Architech and what it means for the future of software development.
            </motion.p>
          </div>
        </div>
      </section>

      {/* The Manifesto */}
      <section className="section-padding bg-background">
        <div className="container-architech">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl leading-relaxed text-muted-foreground">
                Software development has reached an inflection point. For decades, we've been digital craftsmen—building 
                each application by hand, line by line, configuration by configuration.
              </p>
              <p className="text-xl leading-relaxed text-muted-foreground mt-6">
                But the tools haven't kept pace with our ambitions. We spend 70% of our time on setup, integration, 
                and maintenance. Only 30% on innovation.
              </p>
              <p className="text-xl leading-relaxed text-muted-foreground mt-6">
                <span className="text-primary font-semibold">It's time to evolve.</span> From artisans to architects. 
                From building to composing. From reinventing to orchestrating.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Part 1: The Problem */}
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
              Part 1: <span className="text-primary">The Innovation Tax</span>
            </h2>
          </motion.div>

          {/* The Pill Chart */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="rounded-full grid grid-cols-[70fr_30fr] h-24 overflow-hidden mb-4 shadow-lg">
              <div className="bg-gradient-to-r from-red-500 to-red-400 flex items-center justify-center text-2xl font-bold text-white">
                70%
              </div>
              <div className="bg-gradient-to-r from-primary/80 to-primary flex items-center justify-center text-2xl font-bold text-white">
                30%
              </div>
            </div>
            <p className="text-center text-muted-foreground text-sm">
              <span className="text-red-500 font-semibold">70% Setup & Integration</span>
              {" • "}
              <span className="text-primary font-semibold">30% Innovation</span>
            </p>
          </div>

          {/* Detailed Stats */}
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                According to Stack Overflow's 2023 Developer Survey, developers spend an average of{" "}
                <span className="text-red-500 font-semibold">17.3 hours per week</span> on setup, configuration, 
                and integration tasks.
              </p>
              <p>
                That's <span className="text-red-500 font-semibold">2.5 days per week</span> lost to work that 
                creates no unique value for your product.
              </p>
              <p className="text-2xl font-semibold text-foreground mt-8">
                We call this the <span className="text-primary">Innovation Tax</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Part 2: Our Solution */}
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
              Part 2: <span className="text-primary">The Composable Software Supply Chain</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              What if software development worked like manufacturing?
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Supply Chain Metaphor */}
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">The Old Way: Craftsmanship</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">×</span>
                    Build every component from scratch
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">×</span>
                    Reinvent authentication for every project
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">×</span>
                    Manually integrate each service
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">×</span>
                    Copy-paste boilerplate endlessly
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">
                  The New Way: <span className="text-primary">Architecture</span>
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Compose from battle-tested modules
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Declare your stack in genome.ts
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Automatic integration orchestration
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Focus on your unique value
                  </li>
                </ul>
              </div>
            </div>

            {/* Golden Core Doctrine */}
            <div className="p-8 bg-card border border-primary/30 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-center">
                Our Doctrine: <span className="text-primary">Golden Core, Agnostic Edges</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
                A standardized, opinionated core architecture that works with any framework, any database, any service. 
                The stability of structure with the flexibility of choice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Part 3: The Human Benefit */}
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
              Part 3: <span className="text-primary">From Artisan to Architect</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Before/After Comparison */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-8 bg-card border border-red-500/30 rounded-lg">
                <div className="text-red-500 font-bold mb-4">Before: The Artisan</div>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Spending days on boilerplate</li>
                  <li>Debugging integration conflicts</li>
                  <li>Reinventing solved problems</li>
                  <li>Lost in configuration files</li>
                </ul>
              </div>

              <div className="p-8 bg-card border border-primary/50 rounded-lg">
                <div className="text-primary font-bold mb-4">After: The Architect</div>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Orchestrating solutions in minutes</li>
                  <li>Composing proven patterns</li>
                  <li>Focusing on unique value</li>
                  <li>Shipping faster than ever</li>
                </ul>
              </div>
            </div>

            {/* Vision Statement */}
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-semibold leading-relaxed mb-4">
                Developers as <span className="text-primary">composers</span>, not builders.
              </p>
              <p className="text-xl text-muted-foreground">
                This is the future we're building.
              </p>
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
              Be Part of the <span className="text-primary">Movement</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-lg px-8 h-14"
                asChild
              >
                <a
                  href="https://discord.gg/sxhdEEWups"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Join Discord
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/10 text-lg px-8 h-14"
                asChild
              >
                <a href="/lightpaper">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Read Whitepaper
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

export default Philosophy;

