import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * THE ARCHITECH BADGE COMPONENT - "Technical Elegance"
 * 
 * Variants:
 * - default: Electric Cyan
 * - gold: Special moments (New, Beta, Premium)
 * - success: Success states
 * - warning: Warning states
 * - error: Error states
 * - outline: Minimal outline
 */

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold font-inter transition-architech focus:outline-none focus:ring-2 focus:ring-cyan-electric focus:ring-offset-2",
  {
    variants: {
      variant: {
        // Electric Cyan - Default badge
        default: "bg-cyan-electric/10 text-cyan-electric border border-cyan-electric/20 hover:bg-cyan-electric/20",
        
        // Gold/Amber - Special moments (New, Beta, Premium)
        gold: "bg-gold-accent/10 text-gold-accent border border-gold-accent/20 hover:bg-gold-accent/20",
        
        // Charcoal - Secondary
        secondary: "bg-surface-higher text-text-body border border-subtle hover:bg-surface-highest",
        
        // Success - Green
        success: "bg-state-success/10 text-state-success border border-state-success/20 hover:bg-state-success/20",
        
        // Warning - Gold
        warning: "bg-state-warning/10 text-state-warning border border-state-warning/20 hover:bg-state-warning/20",
        
        // Error - Red
        error: "bg-state-error/10 text-state-error border border-state-error/20 hover:bg-state-error/20",
        
        // Outline - Minimal
        outline: "text-text-body border border-subtle hover:bg-surface-elevated",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
