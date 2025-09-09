import { useState, useEffect } from "react";
import { Linkedin, X, ChevronUp } from "lucide-react";
import DiscordIcon from "@/components/DiscordIcon";
import { useTranslation } from "@/hooks/useTranslation";

const FloatingSocialWidget = () => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show widget after user scrolls down 300px
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Main Widget */}
      <div className={`transition-all duration-300 ${
        isExpanded ? 'scale-100 opacity-100' : 'scale-95 opacity-90'
      }`}>
        {/* Social Links */}
        <div className={`flex flex-col space-y-3 transition-all duration-300 ${
          isExpanded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
        }`}>
          {/* Discord Link */}
          <a
            href="https://discord.gg/sxhdEEWups"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            title={t('social.discord.title')}
          >
            <DiscordIcon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-semibold text-sm">{t('social.discord.text')}</span>
          </a>

          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/company/the-architech-ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            title={t('social.linkedin.title')}
          >
            <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-semibold text-sm">{t('social.linkedin.text')}</span>
          </a>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`mt-3 w-12 h-12 rounded-full bg-gradient-electric hover:shadow-electric text-white flex items-center justify-center transition-all duration-300 hover:scale-110 ${
            isExpanded ? 'rotate-180' : ''
          }`}
          title={isExpanded ? 'Close social links' : 'Open social links'}
        >
          {isExpanded ? (
            <X className="h-5 w-5" />
          ) : (
            <ChevronUp className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Pulse Animation for Attention */}
      {/* {!isExpanded && (
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-architech-electric rounded-full animate-ping opacity-75"></div>
      )} */}
    </div>
  );
};

export default FloatingSocialWidget;
