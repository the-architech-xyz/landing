import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Check, Loader2, ChevronDown } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const LanguageSwitcher = () => {
  const { changeLanguage, currentLanguage } = useTranslation();
  const [isChanging, setIsChanging] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  const handleLanguageChange = async (languageCode: string) => {
    if (languageCode === currentLanguage) return;
    
    setIsChanging(true);
    try {
      await changeLanguage(languageCode);
    } finally {
      // Add a small delay for smooth transition
      setTimeout(() => setIsChanging(false), 300);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="group flex items-center gap-1 w-12 h-10 hover:bg-accent/50 transition-all duration-200 relative overflow-hidden"
          disabled={isChanging}
        >
          <motion.div
            className="flex items-center gap-1"
            whileHover={{ scale: isChanging ? 1 : 1.05 }}
            whileTap={{ scale: isChanging ? 1 : 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isChanging ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Loader2 className="w-4 h-4 animate-spin text-architech-brand-blue" />
                </motion.div>
              ) : (
                <motion.span 
                  key="flag"
                  className="text-lg group-hover:scale-110 transition-transform duration-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  {currentLang.flag}
                </motion.span>
              )}
            </AnimatePresence>
            <ChevronDown className={`w-3 h-3 group-hover:rotate-180 transition-transform duration-200 ${isChanging ? 'opacity-50' : ''}`} />
          </motion.div>
          
          {/* Subtle hover effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-architech-brand-blue/5 to-architech-brand-green/5 opacity-0 group-hover:opacity-100"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: isChanging ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-40 p-2 bg-background/95 backdrop-blur-sm border border-border/50 shadow-xl"
        sideOffset={8}
      >
        <div className="space-y-1">
          {languages.map((language) => (
            <DropdownMenuItem
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`group relative flex items-center gap-2 cursor-pointer p-2 transition-all duration-200 ${
                currentLanguage === language.code 
                  ? 'bg-gradient-to-r from-architech-brand-blue/20 to-architech-brand-green/20 border border-architech-brand-blue/30' 
                  : 'hover:bg-accent/50'
              } ${isChanging ? 'opacity-50 pointer-events-none' : ''}`}
              disabled={isChanging}
            >
              <motion.div
                className="flex items-center gap-2 w-full"
                whileHover={isChanging ? {} : { x: 2 }}
                transition={{ duration: 0.1 }}
              >
                <motion.span 
                  className="text-xl group-hover:scale-110 transition-transform duration-200"
                  animate={isChanging ? { scale: 0.9 } : { scale: 1 }}
                >
                  {language.flag}
                </motion.span>
                <span className="font-medium text-sm">{language.name}</span>
                <AnimatePresence>
                  {currentLanguage === language.code && (
                    <motion.div
                      className="ml-auto"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Check className="w-4 h-4 text-architech-brand-blue" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              
              {/* Hover effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-architech-brand-blue/5 to-architech-brand-green/5 opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: isChanging ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              />
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;