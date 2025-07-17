import { Github, Linkedin, Twitter, MapPin, Code, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn, defaultViewport, floating } from "@/lib/animations";

const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <motion.div 
        className="absolute top-10 right-10 w-20 h-20 bg-gradient-electric rounded-full opacity-10 blur-xl"
        animate={floating}
      />
      <motion.div 
        className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-creative rounded-full opacity-10 blur-xl"
        animate={{ ...floating, transition: { ...floating.transition, delay: 1.5 } }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-architech-electric/10 border border-architech-electric/20 rounded-full text-sm font-medium text-architech-electric mb-8"
            variants={scaleIn}
          >
            <Code className="h-4 w-4" />
            Meet the Builder
          </motion.div>

          <motion.h2 
            className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            variants={fadeInUp}
          >
            Built by{" "}
            <span className="text-transparent bg-gradient-electric bg-clip-text">
              Developers
            </span>
            <br />
            For Developers
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            The Architech is born from real frustration with the current state of development tooling. 
            We're building the platform we wish we had.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
          >
            {/* Photo */}
            <motion.div 
              className="relative group"
              variants={fadeInLeft}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="aspect-square rounded-3xl overflow-hidden relative shadow-2xl shadow-electric-blue/20 max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                <motion.img
                  src={"/me.jpg"}
                  alt="Antoine, Founder of The Architech"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white">
                  <h3 className="text-xl md:text-2xl font-bold">Antoine</h3>
                  <p className="text-base md:text-lg text-white/80">Founder & Lead Architect</p>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-white/70">Building the future</span>
                  </div>
                </div>
              </div>
              
              {/* Real LinkedIn link only */}
              <motion.div 
                className="absolute -top-4 -right-4"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              >
                <motion.a
                  href="https://www.linkedin.com/in/antoinesrvt/" // Updated with real LinkedIn
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-blue-600 transition-all duration-300 hover:shadow-glow group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div 
              className="space-y-6"
              variants={fadeInRight}
            >
              <div>
                <motion.h3 
                  className="text-3xl font-bold text-foreground mb-2"
                  whileHover={{ color: "hsl(var(--architech-electric))" }}
                  transition={{ duration: 0.3 }}
                >
                  From the Founder
                </motion.h3>
                
                <motion.div 
                  className="flex items-center gap-2 text-muted-foreground mt-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <MapPin className="h-4 w-4" />
                  <span>Building from France</span>
                </motion.div>
              </div>

              <motion.div 
                className="space-y-4 prose prose-lg prose-invert text-muted-foreground max-w-none"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
              >
                <motion.p 
                  className="leading-relaxed"
                  variants={fadeInUp}
                >
                  After nearly a decade building software and 3 years as CTO across multiple startups, I've watched brilliant ideas die not from lack of vision, but from <span className="text-architech-electric font-medium">configuration hell</span>.
                </motion.p>
                
                <motion.p 
                  className="leading-relaxed"
                  variants={fadeInUp}
                >
                  I've seen teams spend 70% of their time on setup, authentication, deployment pipelines, and database schemas instead of building what makes their product unique. The same solutions, built over and over, with the same bugs, the same security vulnerabilities.
                </motion.p>

                <motion.p 
                  className="leading-relaxed"
                  variants={fadeInUp}
                >
                  <span className="text-foreground font-medium">The Architech was born from frustration.</span> Why should every developer rebuild authentication? Why should every startup waste months on DevOps? Why isn't there a better way?
                </motion.p>
                
                <motion.p 
                  className="leading-relaxed"
                  variants={fadeInUp}
                >
                  This isn't just another tool - it's a <span className="text-transparent bg-gradient-electric bg-clip-text font-medium">revolution against complexity</span>. I'm building the platform I wish I had when I was drowning in configuration files at 2 AM, dreaming of focusing on the magic instead of the plumbing.
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div 
          className="text-center mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <motion.div 
            className="max-w-2xl mx-auto glass-card rounded-3xl p-8 border border-architech-border hover:border-architech-electric/50 transition-all duration-500 group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-foreground mb-4 group-hover:text-architech-electric transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Our Mission
            </motion.h3>
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              To give every developer superpowers. To eliminate the tedious setup work that 
              prevents us from building amazing things. To democratize enterprise-grade architecture 
              and make it accessible to everyone.
            </motion.p>
            
            <motion.div 
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-architech-electric/10 rounded-full text-sm text-architech-electric font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            >
              <Zap className="h-4 w-4" />
              <span>Building the future, one module at a time</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection; 