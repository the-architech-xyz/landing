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
              <div className="aspect-square rounded-3xl overflow-hidden relative shadow-2xl shadow-electric-blue/20">
                <motion.img
                  src={"/me.jpg"}
                  alt="Antoine, Founder of The Architech"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold">Antoine</h3>
                  <p className="text-lg text-white/80">Founder & Lead Architect</p>
                </div>
              </div>
              
              {/* Floating social links */}
              <motion.div 
                className="absolute -top-4 -right-4 flex flex-col gap-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              >
                {[
                  { icon: Github, href: "#", color: "hover:text-architech-electric" },
                  { icon: Linkedin, href: "#", color: "hover:text-blue-600" },
                  { icon: Twitter, href: "#", color: "hover:text-blue-400" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground ${social.color} transition-all duration-300 hover:shadow-glow`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <social.icon className="h-4 w-4" />
                  </motion.a>
                ))}
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
                  With nearly a decade of software development experience, 3 years as a CTO for multiple startups and tried to launch my own since few years, I've lived the 'Developer's Nightmare' firsthand. I've seen brilliant ideas and talented teams get crushed by the weight of technical complexity and repetitive setup.
                </motion.p>
                
                <motion.p 
                  className="leading-relaxed"
                  variants={fadeInUp}
                >
                  My passion is building complex systems that feel simple and intuitive. The Architech is the solution I've always wanted as a developer and a leader: a tool that eliminates friction, restores the joy of creation, and gives power back to the builders. I'm not just building a product; I'm building the future I want to work in.
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