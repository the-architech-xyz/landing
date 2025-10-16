import { motion } from "framer-motion";
import { getSectionHeader, getBadgeClasses, getHeadlineClasses, getBodyClasses, type SectionHeaderProps } from "@/lib/branding";

/**
 * THE ARCHITECH SECTION HEADER COMPONENT
 * 
 * Reusable section header with consistent branding, animations, and styling
 * across all sections of the landing page.
 */
export function SectionHeader({ section, className = "" }: SectionHeaderProps) {
  const config = getSectionHeader(section);
  
  return (
    <motion.div
      className={`text-center mb-16 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Badge */}
      <div className={getBadgeClasses('primary')}>
        {config.badge}
      </div>
      
      {/* Headline */}
      <h2 className={`${getHeadlineClasses('base')} mb-4`}>
        {config.title.split(config.highlight)[0]}
        <span className="text-primary"> {config.highlight}</span>
      </h2>
      
      {/* Subtitle */}
      <p className={getBodyClasses('large')}>
        {config.subtitle}
      </p>
    </motion.div>
  );
}
