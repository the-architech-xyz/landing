import { getBadgeClasses, type BrandedBadgeProps } from "@/lib/branding";

/**
 * THE ARCHITECH BRANDED BADGE COMPONENT
 * 
 * Reusable badge with consistent branding and styling
 * across all sections of the landing page.
 */
export function BrandedBadge({ 
  variant = 'primary', 
  children, 
  className = "" 
}: BrandedBadgeProps) {
  const badgeClasses = getBadgeClasses(variant);
  
  return (
    <div className={`${badgeClasses} ${className}`}>
      {children}
    </div>
  );
}
