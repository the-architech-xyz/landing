import { useState } from "react";
import { ChevronDown, Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn, defaultViewport } from "@/lib/animations";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      category: "Ownership",
      question: "Do I really own my code, or is this another vendor lock-in?",
      answer: "Absolutely 100% ownership. The Architech generates clean, standard code that you can export, modify, and deploy anywhere. No vendor lock-in, no dependencies on our platform. It's your code, your rules, your freedom.",
    },
    {
      category: "Difference",
      question: "How is this different from GitHub Copilot and other AI assistants?",
      answer: "Copilot makes you faster at the same broken process. The Architech changes the entire process. Instead of generating code snippets, we use specialized AI agents to build complete, modular applications. You're orchestrating expert systems, not debugging AI code.",
    },
    {
      category: "Technology",
      question: "What technologies are supported?",
      answer: "The Architech is tech-agnostic by design. We start with popular stacks (React, Next.js, Node.js, Python, etc.) and our modular architecture means you can add agents for any technology. You're never locked into our tech choices.",
    },
    {
      category: "Access",
      question: "When can I get access?",
      answer: "We're currently in closed alpha with select developers. Join our waitlist to get early access and help shape the future of development. Beta access begins Q2 2025.",
    },
    {
      category: "Business",
      question: "What's the business model?",
      answer: "The Architech Core will remain open source. Premium features like advanced AI agents, enterprise integrations, and priority support will be available via transparent subscription pricing. We believe in sustainable open source.",
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Ownership: "bg-gradient-success", 
      Difference: "bg-gradient-electric",
      Technology: "bg-gradient-ocean",
      Access: "bg-gradient-sunset",
      Business: "bg-gradient-creative"
    };
    return colors[category] || "bg-gradient-electric";
  };

  return (
    <section id="faq" className="py-24 bg-gradient-surface relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-32 h-32 bg-architech-electric rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-architech-purple rounded-full blur-xl"></div>
      </div>

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
            <HelpCircle className="h-4 w-4" />
            Frequently Asked Questions
          </motion.div>

          <motion.h2 
            className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            variants={fadeInUp}
          >
            Got{" "}
            <span className="text-transparent bg-gradient-electric bg-clip-text">
              Questions?
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Everything you need to know about The Architech and how it will 
            transform your development workflow.
          </motion.p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass-card rounded-2xl border border-architech-border hover:border-architech-electric/50 transition-all duration-300 overflow-hidden"
              >
                <motion.button
                  className="w-full p-6 text-left focus:outline-none group"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      {/* Category badge */}
                      <motion.div 
                        className={`${getCategoryColor(faq.category)} rounded-xl p-2 text-white text-xs font-semibold min-w-fit`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {faq.category}
                      </motion.div>
                      
                      {/* Question */}
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-architech-electric transition-colors duration-300 flex-1">
                        {faq.question}
                      </h3>
                    </div>
                    
                    {/* Toggle icon */}
                    <motion.div
                      animate={{ rotate: openFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex-shrink-0 ml-4"
                    >
                      {openFAQ === index ? (
                        <Minus className="h-5 w-5 text-architech-electric" />
                      ) : (
                        <Plus className="h-5 w-5 text-muted-foreground group-hover:text-architech-electric transition-colors" />
                      )}
                    </motion.div>
                  </div>
                </motion.button>

                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ 
                        duration: 0.3,
                        ease: "easeInOut",
                        opacity: { duration: 0.2 }
                      }}
                      className="overflow-hidden"
                    >
                      <motion.div 
                        className="px-6 pb-6"
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <div className="border-t border-architech-border/50 pt-4 ml-0">
                          <motion.p 
                            className="text-muted-foreground leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                          >
                            {faq.answer}
                          </motion.p>
                          
                          {/* Info box for some FAQs */}
                          {index === 3 && (
                            <motion.div 
                              className="mt-4 glass-card rounded-xl p-4 bg-architech-electric/5 border border-architech-electric/20"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.2, duration: 0.3 }}
                            >
                              <div className="flex items-center gap-2 text-sm text-architech-electric font-medium">
                                <span>💡</span>
                                <span>Pro tip: Early waitlist members get priority access and special pricing!</span>
                              </div>
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full border border-architech-electric/20 text-architech-electric font-medium hover:shadow-glow transition-all duration-300 cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('cta');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            <HelpCircle className="h-4 w-4" />
            <span>Still have questions? Let's chat!</span>
            <ChevronDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;