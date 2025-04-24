import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariant = cva(
  // Base styles for the button
  [
    "inline-flex items-center justify-center whitespace-nowrap",
    "rounded-full h-10 transition-all duration-200",
    "cursor-pointer relative overflow-hidden",
    // Disabled state
    "disabled:bg-[rgb(var(--m3-scheme-on-surface)/.12)] disabled:text-[rgb(var(--m3-scheme-on-surface)/.38)] disabled:cursor-auto",
    // Touch highlight removal
    "[&::-webkit-tap-highlight-color]:transparent",
    // Print color adjust
    "print:[print-color-adjust:exact] print:[-webkit-print-color-adjust:exact]",
    // Prevent children from shrinking
    "[&>*]:flex-shrink-0",
  ],
  {
    variants: {
      variant: {
        elevated: [
          "bg-[rgb(var(--m3-scheme-surface-container-low))]",
          "text-[rgb(var(--m3-scheme-primary))]",
          "shadow-[var(--m3-util-elevation-1)]",
          "hover:shadow-[var(--m3-util-elevation-2)]",
        ],
        filled: [
          "bg-[rgb(var(--m3-scheme-primary))]",
          "text-[rgb(var(--m3-scheme-on-primary))]",
          "hover:shadow-[var(--m3-util-elevation-1)]",
        ],
        tonal: [
          "bg-[rgb(var(--m3-scheme-secondary-container))]",
          "text-[rgb(var(--m3-scheme-on-secondary-container))]",
          "hover:shadow-[var(--m3-util-elevation-1)]",
        ],
        outlined: [
          "bg-transparent border border-[rgb(var(--m3-scheme-outline))] text-[rgb(var(--m3-scheme-primary))]",
        ],
        text: ["bg-transparent", "px-3", "text-[rgb(var(--m3-scheme-primary))]"],
      },
      size: {
        default: "px-6",
        "icon-left": ["pl-4 gap-2", "[&>svg]:w-[1.125rem] [&>svg]:h-[1.125rem]"],
        "icon-full": ["w-10 p-0", "[&>svg]:w-6 [&>svg]:h-6"],
      },
    },
    compoundVariants: [
      {
        variant: "text",
        size: "icon-left",
        class: "pr-4",
      },
    ],
    defaultVariants: {
      variant: "filled",
      size: "default",
    },
  },
);

export type ButtonVariant = VariantProps<typeof buttonVariant>;
