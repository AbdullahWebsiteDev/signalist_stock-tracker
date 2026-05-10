import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Renders a styled <input> element and forwards native input props.
 *
 * Applies a default set of utility classes for sizing, borders, focus/disabled states, file input styling, and dark mode; merges any provided `className`, sets `data-slot="input"`, and forwards remaining props to the underlying element.
 *
 * @param className - Additional CSS classes to merge with the component's default styling.
 * @param type - Input `type` passed to the underlying element.
 * @returns The rendered input element with merged classes and forwarded props.
 */
function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30",
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

export { Input }
