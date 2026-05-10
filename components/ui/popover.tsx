"use client"

import * as React from "react"
import { Popover as PopoverPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

/**
 * Wraps the Radix Popover root, forwarding all received props and adding a `data-slot="popover"` attribute.
 *
 * @param props - Props forwarded to the underlying Popover root component
 * @returns A Popover root element with forwarded props and `data-slot="popover"`
 */
function Popover({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />
}

/**
 * Renders a popover trigger element with a `data-slot` attribute and forwards all received props to it.
 *
 * @param props - Props applied to the underlying Popover trigger element.
 * @returns The rendered Popover trigger React element.
 */
function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
}

/**
 * Renders the popover's content inside a Radix Portal with default layout, styling, and enter/exit animations.
 *
 * @param className - Additional CSS class names to merge with the component's defaults
 * @param align - Alignment of the content relative to the trigger (defaults to `"center"`)
 * @param sideOffset - Distance in pixels between the trigger and the content (defaults to `4`)
 * @returns The rendered popover content element
 */
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
}

/**
 * Renders a Radix Popover.Anchor element with a `data-slot` attribute for styling and selection.
 *
 * @param props - Props forwarded to the underlying Radix `Popover.Anchor` element
 * @returns A Radix `Popover.Anchor` element with `data-slot="popover-anchor"` and all provided props applied
 */
function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />
}

/**
 * Renders a popover header container with default layout and typography classes.
 *
 * @param className - Additional CSS classes to merge with the default header styles
 * @returns The popover header element (`div`) with `data-slot="popover-header"`
 */
function PopoverHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="popover-header"
      className={cn("flex flex-col gap-1 text-sm", className)}
      {...props}
    />
  )
}

/**
 * Renders a styled title element for a popover.
 *
 * @param props - Standard `h2` element props. The `className` prop is merged with the default `font-medium` title styling.
 * @returns The rendered `h2`-compatible element used as the popover title (includes `data-slot="popover-title"`).
 */
function PopoverTitle({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <div
      data-slot="popover-title"
      className={cn("font-medium", className)}
      {...props}
    />
  )
}

/**
 * Renders a styled description paragraph for a popover.
 *
 * @returns A `p` element with popover description styling and any provided props
 */
function PopoverDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="popover-description"
      className={cn("text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
}
