import { useState } from "react";
import { ChevronDown, Plus, Minus, HelpCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn, defaultViewport } from "@/lib/animations";
import ContactModal from "@/components/ContactModal";
import { useTranslation } from "@/hooks/useTranslation";

const FAQSection = () => {
  const { t } = useTranslation();
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const faqs = [
    {
      category: t('faq.questions.whatIsArchitech.question'),
      question: t('faq.questions.whatIsArchitech.question'),
      answer: t('faq.questions.whatIsArchitech.answer'),
    },
    {
      category: t('faq.questions.howDoesItWork.question'),
      question: t('faq.questions.howDoesItWork.question'),
      answer: t('faq.questions.howDoesItWork.answer'),
    },
    {
      category: t('faq.questions.whatTechnologies.question'),
      question: t('faq.questions.whatTechnologies.question'),
      answer: t('faq.questions.whatTechnologies.answer'),
    },
    {
      category: t('faq.questions.isItSecure.question'),
      question: t('faq.questions.isItSecure.question'),
      answer: t('faq.questions.isItSecure.answer'),
    },
    {
      category: t('faq.questions.canICustomize.question'),
      question: t('faq.questions.canICustomize.question'),
      answer: t('faq.questions.canICustomize.answer'),
    },
    {
      category: t('faq.questions.pricing.question'),
      question: t('faq.questions.pricing.question'),
      answer: t('faq.questions.pricing.answer'),
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Ownership: "bg-gradient-success", 
      Integration: "bg-gradient-electric",
      Customization: "bg-gradient-forest",
      Difference: "bg-gradient-ocean",
      Technology: "bg-gradient-sunset",
      Commercial: "bg-gradient-creative",
      Timeline: "bg-gradient-aurora",
      Access: "bg-gradient-electric",
      Business: "bg-gradient-forest",
      Documentation: "bg-gradient-ocean",
      Product: "bg-gradient-sunset"
    };
    return colors[category] || "bg-gradient-electric";
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-architech-section-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-32 h-32 bg-architech-electric rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-architech-purple rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight px-2"
            variants={fadeInUp}
          >
            {t('faq.title.line1')}{" "}
            <span className="text-transparent bg-gradient-brand bg-clip-text">
              {t('faq.title.line2')}
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4"
            variants={fadeInUp}
          >
            {t('faq.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                  key={index}
                variants={fadeInUp}
                className="glass-card rounded-2xl border border-architech-border hover:border-architech-electric/50 transition-all duration-300 overflow-hidden"
              >
                <motion.button
                  className="w-full p-4 sm:p-6 text-left focus:outline-none group"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 sm:gap-4 flex-1">
                  {/* Category badge - Larger for mobile */}
                      <motion.div 
                        className={`${getCategoryColor(faq.category)} rounded-xl p-2 sm:p-2 text-white text-xs font-semibold min-w-fit`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {faq.category}
                      </motion.div>
                      
                      {/* Question */}
                      <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-architech-electric transition-colors duration-300 flex-1">
                        {faq.question}
                      </h3>
                    </div>

                    {/* Toggle icon - Larger for mobile */}
                    <motion.div
                      animate={{ rotate: openFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex-shrink-0 ml-3 sm:ml-4 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
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
                        className="px-4 sm:px-6 pb-4 sm:pb-6"
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <div className="border-t border-architech-border/50 pt-4 ml-0">
                          <motion.p 
                            className="text-sm sm:text-base text-muted-foreground leading-relaxed"
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

        {/* CTA - Mobile optimized */}
        <motion.div 
          className="text-center mt-12 sm:mt-16 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-electric text-white rounded-full font-semibold text-base sm:text-lg hover:shadow-glow transition-all duration-300 cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsContactModalOpen(true)}
          >
            <span>{t('faq.cta')}</span>
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
          </motion.div>
        </motion.div>
      </div>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </section>
  );
};

export default FAQSection;