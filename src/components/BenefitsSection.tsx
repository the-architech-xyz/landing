import { Zap, ArrowRight, Sparkles, Quote, CheckCircle, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn, defaultViewport } from "@/lib/animations";

const BenefitsSection = () => {
  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <section
      id="benefits"
      className="py-16 sm:py-24 bg-architech-section-dark relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >


          <motion.h2
            className="text-3xl sm:text-4xl lg:text-6xl font-satoshi font-bold text-foreground mb-4 sm:mb-6 leading-tight px-2"
            variants={fadeInUp}
          >
            The End of Boilerplate.
            <br />
            <span className="text-transparent bg-gradient-brand bg-clip-text">The Beginning of Creation.</span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 font-inter font-normal"
            variants={fadeInUp}
          >
            The Architech handles the 90% of code that's repetitive, so you can focus on the 10% that's unique to your genius.
          </motion.p>
        </motion.div>

        {/* Before/After Visual Section */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={defaultViewport}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* BEFORE - The Chaos */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={defaultViewport}
            >
              <div className="glass-card rounded-3xl p-8 border border-red-500/20 bg-gradient-to-br from-red-500/5 to-red-600/5 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                </div>

                <div className="relative z-10">
                  {/* BEFORE Header */}
                  <div className="text-center mb-8">
                    <div className="text-2xl font-bold text-red-500 mb-2">BEFORE</div>
                    <div className="text-sm text-red-400/70 uppercase tracking-wider">The Chaos</div>
                  </div>

                  {/* Simple Visual */}
                  <div className="bg-red-900/20 rounded-2xl p-8 mb-6 border border-red-500/30 min-h-[200px] flex items-center justify-center">
                    <div className="text-center">
                      <Clock className="w-16 h-16 text-red-400 mx-auto mb-4" />
                      <div className="text-2xl font-bold text-red-300 mb-2">Weeks</div>
                      <div className="text-red-400/70 text-sm">of setup time</div>
                    </div>
                  </div>

                  {/* Pain Points */}
                  <div className="space-y-4">
                    {[
                      "Weeks of tedious setup",
                      "Risky, non-scalable code", 
                      "Focus lost on infrastructure"
                    ].map((pain, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        viewport={defaultViewport}
                      >
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-red-300 font-medium">{pain}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AFTER - The Clarity */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={defaultViewport}
            >
              <div className="glass-card rounded-3xl p-8 border border-green-500/20 bg-gradient-to-br from-green-500/5 to-green-600/5 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                </div>

                <div className="relative z-10">
                  {/* AFTER Header */}
                  <div className="text-center mb-8">
                    <div className="text-2xl font-bold text-green-500 mb-2">AFTER</div>
                    <div className="text-sm text-green-400/70 uppercase tracking-wider">The Clarity</div>
                  </div>

                  {/* Simple Visual */}
                  <div className="bg-green-900/20 rounded-2xl p-8 mb-6 border border-green-500/30 min-h-[200px] flex items-center justify-center">
                    <div className="text-center">
                      <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                      <div className="text-2xl font-bold text-green-300 mb-2">Minutes</div>
                      <div className="text-green-400/70 text-sm">to production</div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-4">
                    {[
                      "Production-ready in minutes",
                      "Enterprise-grade architecture",
                      "Focus regained on creation"
                    ].map((benefit, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        viewport={defaultViewport}
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-green-300 font-medium">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        {/* <motion.div
          className="text-center max-w-4xl mx-auto mt-12 sm:mt-20 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <div className="glass-card rounded-3xl p-6 sm:p-8 lg:p-12 border border-architech-electric/20 bg-gradient-to-br from-architech-electric/5 to-purple-500/5">
            <Quote className="h-8 w-8 sm:h-12 sm:w-12 text-architech-electric/30 mx-auto mb-4 sm:mb-6" />
            
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              "The Architech will change how we think about{" "}
              <span className="text-transparent bg-gradient-brand bg-clip-text">
                building software
              </span>
              . It's not just faster—it's better."
            </blockquote>

            <motion.div
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-electric text-white rounded-full font-semibold text-base sm:text-lg hover:shadow-glow transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => smoothScrollTo("cta")}
            >
              <Zap className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Join Waitlist</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default BenefitsSection;