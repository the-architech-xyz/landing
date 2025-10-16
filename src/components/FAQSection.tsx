import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import ContactModal from "@/components/ContactModal";
import { SectionHeader } from "@/components/ui/section-header";
import { BRANDING } from "@/lib/branding";
import { useTranslation } from "@/hooks/useTranslation";

/**
 * THE ARCHITECH FAQ SECTION - "Technical Elegance"
 * Clean, scannable accordion with new design system
 */

const FAQSection = () => {
  const { t } = useTranslation();
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const faqs = [
    {
      category: t('faq.questions.whatIsArchitech.category'),
      question: t('faq.questions.whatIsArchitech.question'),
      answer: t('faq.questions.whatIsArchitech.answer'),
    },
    {
      category: t('faq.questions.howDoesItWork.category'),
      question: t('faq.questions.howDoesItWork.question'),
      answer: t('faq.questions.howDoesItWork.answer'),
    },
    {
      category: t('faq.questions.vsCreateNextApp.category'),
      question: t('faq.questions.vsCreateNextApp.question'),
      answer: t('faq.questions.vsCreateNextApp.answer'),
    },
    {
      category: t('faq.questions.production.category'),
      question: t('faq.questions.production.question'),
      answer: t('faq.questions.production.answer'),
    },
    {
      category: t('faq.questions.canIEject.category'),
      question: t('faq.questions.canIEject.question'),
      answer: t('faq.questions.canIEject.answer'),
    },
    {
      category: t('faq.questions.whatTechnologies.category'),
      question: t('faq.questions.whatTechnologies.question'),
      answer: t('faq.questions.whatTechnologies.answer'),
    },
    {
      category: t('faq.questions.isItSecure.category'),
      question: t('faq.questions.isItSecure.question'),
      answer: t('faq.questions.isItSecure.answer'),
    },
    {
      category: t('faq.questions.canICustomize.category'),
      question: t('faq.questions.canICustomize.question'),
      answer: t('faq.questions.canICustomize.answer'),
    },
    {
      category: t('faq.questions.pricing.category'),
      question: t('faq.questions.pricing.question'),
      answer: t('faq.questions.pricing.answer'),
    },
  ];

  return (
    <section id="faq" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--cyan-electric))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--cyan-electric))_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className={BRANDING.spacing.container}>
        {/* Section Header */}
        <SectionHeader section="faq" />

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border hover:border-primary/50 transition-colors overflow-hidden rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full p-6 text-left focus:outline-none group"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1">
                      <Badge variant={index === openFAQ ? "default" : "outline"} className="text-xs whitespace-nowrap">
                        {faq.category}
                      </Badge>
                      
                      <h3 className="text-base sm:text-lg font-semibold group-hover:text-primary transition-colors flex-1">
                        {faq.question}
                      </h3>
                    </div>

                    <motion.div
                      animate={{ rotate: openFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0"
                    >
                      {openFAQ === index ? (
                        <Minus className="h-5 w-5 text-primary" />
                      ) : (
                        <Plus className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      )}
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="border-t border-subtle pt-4">
                          <p className="font-inter text-sm sm:text-base text-subtle leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-semibold text-lg hover:bg-primary/90 transition-colors rounded-md group"
          >
            <span>{t('faq.cta')}</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </section>
  );
};

export default FAQSection;
