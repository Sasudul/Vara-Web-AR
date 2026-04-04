import * as React from "react"
import { cn } from "@/src/lib/utils"
import { motion, HTMLMotionProps } from "motion/react"

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "default" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-none text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          {
            "bg-vara-charcoal text-vara-cream hover:bg-vara-charcoal/90": variant === "default",
            "border border-vara-charcoal bg-transparent hover:bg-vara-charcoal hover:text-vara-cream": variant === "outline",
            "hover:bg-vara-charcoal/10": variant === "ghost",
            "text-vara-charcoal underline-offset-4 hover:underline": variant === "link",
            "h-12 px-8 py-2": size === "default",
            "h-9 px-3": size === "sm",
            "h-14 px-10 text-base": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
