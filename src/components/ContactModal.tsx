import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const { t } = useTranslation();
  const [hoveredOption, setHoveredOption] = useState<number | null>(null);

  const contactOptions = [
    {
      id: 1,
      title: t('contact.options.scheduleCall.title'),
      description: t('contact.options.scheduleCall.description'),
      action: () => window.open('https://calendly.com/antoine-srvt/rdv-antoine', '_blank'),
      icon: Calendar,
      primary: true
    },
    {
      id: 2,
      title: t('contact.options.sendEmail.title'),
      description: t('contact.options.sendEmail.description'),
      action: () => window.open('mailto:antoine.srvt@gmail.com?subject=Regarding The Architech', '_blank'),
      icon: Mail,
      primary: false
    }
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal */}
        <motion.div
          className="relative w-full max-w-md bg-background border border-border shadow-xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-6 border-b border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-foreground flex items-center justify-center">
                  <MessageCircle className="h-4 w-4 text-background" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-foreground">{t('contact.title')}</h2>
                  <p className="text-sm text-muted-foreground">{t('contact.subtitle')}</p>
                </div>
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="h-8 w-8 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-3">
            {contactOptions.map((option, index) => {
              const Icon = option.icon;
              const isHovered = hoveredOption === index;

              return (
                <motion.button
                  key={option.id}
                  className={`w-full text-left p-4 border transition-all duration-200 group ${
                    option.primary 
                      ? 'bg-foreground border-foreground text-background hover:bg-foreground/90' 
                      : 'border-border hover:border-foreground/20 hover:bg-muted/50'
                  }`}
                  onMouseEnter={() => setHoveredOption(index)}
                  onMouseLeave={() => setHoveredOption(null)}
                  onClick={option.action}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`h-5 w-5 transition-colors ${
                      option.primary 
                        ? 'text-background' 
                        : 'text-muted-foreground group-hover:text-foreground'
                    }`} />
                    <div className="flex-1">
                      <div className={`font-medium ${
                        option.primary ? 'text-background' : 'text-foreground'
                      }`}>
                        {option.title}
                      </div>
                      <div className={`text-sm ${
                        option.primary 
                          ? 'text-background/70' 
                          : 'text-muted-foreground group-hover:text-muted-foreground'
                      }`}>
                        {option.description}
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Footer */}
          <div className="px-6 pb-6 pt-2">
            <p className="text-xs text-muted-foreground text-center">
              {t('contact.responseTime')}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactModal; 