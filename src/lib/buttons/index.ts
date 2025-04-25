import { cva, type VariantProps } from "class-variance-authority";

// Define the CVA configuration for the button, aligned with M3 styles
export const buttonVariants = cva(
  // Base classes applied to all variants, matching .m3-container general styles
  [
    "inline-flex", // Use inline-flex for layout with icons/text
    "items-center", // Vertically center content
    "justify-center", // Horizontally center content
    "relative", // Needed for potential absolute positioned elements (like ripples)
    "h-10", // Fixed height: 2.5rem
    "rounded-full", // Fully rounded corners: var(--m3-util-rounding-full)
    "font-medium", // Medium font weight
    "text-sm", // Set base text size
    "overflow-hidden", // Hide overflow (e.g., for ripples)
    "transition-colors", // Animate color changes
    "transition-shadow", // Animate shadow changes
    "duration-200", // Transition duration
    "focus:outline-none", // Remove default focus outline
    "focus-visible:ring-2", // Add ring for keyboard focus
    "focus-visible:ring-offset-2", // Add offset to the focus ring
    "-webkit-tap-highlight-color: transparent", // Remove tap highlight on mobile
  ],
  {
    variants: {
      // Button type variants (controls background, text, border, shadow for ENABLED state)
      type: {
        elevated: [
          "bg-white", // --m3-scheme-surface-container-low
          "text-indigo-600", // --m3-scheme-primary
          "shadow", // --m3-util-elevation-1
          "focus-visible:ring-indigo-500", // Ring color for focus
        ],
        filled: [
          "bg-indigo-600", // --m3-scheme-primary
          "text-white", // --m3-scheme-on-primary
          "focus-visible:ring-indigo-300", // Lighter ring for contrast on dark bg
        ],
        tonal: [
          "bg-indigo-100", // --m3-scheme-secondary-container
          "text-indigo-700", // --m3-scheme-on-secondary-container
          "focus-visible:ring-indigo-500",
        ],
        outlined: [
          "border", // Add border
          "border-gray-400", // --m3-scheme-outline
          "text-indigo-600", // --m3-scheme-primary
          "bg-transparent", // Explicitly transparent background
          "focus-visible:ring-indigo-500",
        ],
        text: [
          "text-indigo-600", // --m3-scheme-primary
          "bg-transparent", // Explicitly transparent background
          "focus-visible:ring-indigo-500",
        ],
      },
      // Icon type variants (controls padding, width, gap)
      iconType: {
        none: ["px-6"], // Standard padding: 1.5rem
        left: ["pl-4", "pr-6", "gap-2"], // Padding for left icon: pl 1rem, pr 1.5rem, gap 0.5rem
        full: ["w-10", "p-0"], // Icon-only button: width 2.5rem, no padding
      },
      // Disabled state (used as a condition in compound variants)
      disabled: {
        true: [], // Disabled styles are handled via compound variants
        false: [], // Enabled styles are the defaults for each 'type'
      },
    },
    // Compound variants for interactions (hover) and specific overrides (disabled, text padding)
    compoundVariants: [
      // --- Enabled Hover States ---
      {
        type: "elevated",
        disabled: false,
        class: [
          "hover:shadow-md", // --m3-util-elevation-2
          "hover:bg-gray-50", // Slightly off-white background on hover
        ],
      },
      {
        type: "filled",
        disabled: false,
        class: [
          "hover:shadow", // --m3-util-elevation-1
          "hover:bg-indigo-700" // Slightly darker background on hover
        ],
      },
      {
        type: "tonal",
        disabled: false,
        class: [
          "hover:shadow", // --m3-util-elevation-1
          "hover:bg-indigo-200" // Slightly darker background on hover
        ],
      },
      {
        type: "outlined",
        disabled: false,
        class: ["hover:bg-indigo-50"], // Light background on hover
      },
      {
        type: "text",
        disabled: false,
        class: ["hover:bg-indigo-50"], // Light background on hover
      },

      // --- Disabled States ---
      {
        // Common text color and cursor for all disabled buttons
        disabled: true,
        class: [
          "text-black/38", // color: rgb(var(--m3-scheme-on-surface) / 0.38)
          "cursor-not-allowed",
        ],
      },
      {
        // Disabled background/shadow/border for elevated, filled, tonal
        type: ["elevated", "filled", "tonal"],
        disabled: true,
        class: [
          "bg-black/12", // background-color: rgb(var(--m3-scheme-on-surface) / 0.12)
          "shadow-none", // Remove shadow
          "border-none", // Ensure no border inherited
        ],
      },
      {
        // Disabled styles for outlined buttons
        type: "outlined",
        disabled: true,
        class: [
          "border",
          "border-black/12", // border: 0.0625rem solid rgb(var(--m3-scheme-on-surface) / 0.12)
          "bg-transparent", // Ensure background is transparent
          "shadow-none", // Remove shadow
        ],
      },
      {
        // Disabled styles for text buttons (mainly ensuring no bg/border/shadow)
        type: "text",
        disabled: true,
        class: ["bg-transparent", "shadow-none", "border-none"],
      },

      // --- Padding Overrides for Text Buttons ---
      {
        // Text button with no icon needs less padding
        type: "text",
        iconType: "none",
        class: ["px-3"], // padding: 0 0.75rem
      },
      {
        // Text button with left icon needs specific padding
        type: "text",
        iconType: "left",
        class: ["pl-3", "pr-4"], // padding: 0 1rem 0 0.75rem (adjusting from base iconType:left)
      },
    ],
    // Default variants if none are provided
    defaultVariants: {
      type: "elevated",
      iconType: "none",
      disabled: false,
    },
  }
);

// Define a type for the props based on the CVA variants
export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

// --- Example Usage ---
// console.log("Default (Elevated, None):", buttonVariants());
// console.log("Filled, Left Icon:", buttonVariants({ type: "filled", iconType: "left" }));
// console.log("Outlined, Disabled:", buttonVariants({ type: "outlined", disabled: true }));
// console.log("Text, Icon Only:", buttonVariants({ type: "text", iconType: "full" }));
// console.log("Text, None, Disabled:", buttonVariants({ type: "text", iconType: "none", disabled: true }));
