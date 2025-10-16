import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { getButtonClasses, type BrandedButtonProps } from "@/lib/branding";

/**
 * THE ARCHITECH BRANDED BUTTON COMPONENT
 * 
 * Reusable button with consistent branding, animations, and styling
 * across all sections of the landing page.
 */
export function BrandedButton({ 
  variant = 'primary', 
  children, 
  onClick, 
  className = "",
  icon 
}: BrandedButtonProps) {
  const buttonClasses = getButtonClasses(variant);
  
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }} 
      whileTap={{ scale: 0.95 }}
    >
      <Button 
        size="lg"
        className={`${buttonClasses} ${className}`}
        onClick={onClick}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </Button>
    </motion.div>
  );
}
