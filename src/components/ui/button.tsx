import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * THE ARCHITECH BUTTON COMPONENT - "Technical Elegance"
 * 
 * Variants:
 * - default: Electric Cyan primary action
 * - secondary: Charcoal with cyan border
 * - ghost: Transparent with cyan text
 * - gold: Special moments (New, Beta, Premium)
 * - destructive: Error states
 * - link: Text link
 */

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium font-inter transition-architech focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-electric focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Electric Cyan - Primary CTA
        default: "bg-cyan-electric text-white hover:bg-cyan-light active:bg-cyan-dark shadow-cyan",
        
        // Charcoal with Cyan border - Secondary action
        secondary: "bg-surface-elevated text-text-body border border-cyan-electric hover:bg-surface-higher hover:shadow-cyan",
        
        // Transparent with Cyan text - Tertiary action
        ghost: "text-cyan-electric hover:bg-surface-elevated hover:text-cyan-light",
        
        // Gold/Amber - Special moments (New, Beta, Premium features)
        gold: "bg-gold-accent text-white hover:bg-gold-light active:bg-gold-dark shadow-gold",
        
        // Outline - Minimal border
        outline: "border border-subtle bg-transparent text-text-body hover:bg-surface-elevated hover:border-medium",
        
        // Destructive - Error states
        destructive: "bg-state-error text-white hover:opacity-90",
        
        // Link - Simple text link
        link: "text-cyan-electric underline-offset-4 hover:underline hover:text-cyan-light",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-4 text-sm",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
