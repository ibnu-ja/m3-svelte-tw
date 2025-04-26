import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  // ─── BASE STYLES ─────────────────────────────────────────────────────────────
  [
    // layout & sizing
    "inline-flex",
    "items-center",
    "justify-center",
    "h-10", // 2.5rem

    // positioning & overflow
    "relative",
    "overflow-hidden",

    // padding & shape
    "px-6", // 1.5rem
    "rounded-full",

    // prevent inner flex children from shrinking
    "[&>*]:flex-shrink-0",

    // transitions & print/tap tweaks
    "transition-all",
    "duration-200",
    "[tap-highlight-color:transparent]",
    "print:print-color-adjust-exact",
    "webkit-print-color-adjust-exact",
  ],
  {
    // ─── VARIANTS ────────────────────────────────────────────────────────────────
    variants: {
      type: {
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
          "bg-transparent",
          "border",
          "border-[rgb(var(--m3-scheme-outline))]",
          "text-[rgb(var(--m3-scheme-primary))]",
        ],
        text: [
          "bg-transparent",
          "px-3", // override base px-6
          "text-[rgb(var(--m3-scheme-primary))]",
        ],
      },
      iconType: {
        none: [],
        left: [
          "pl-4", // 1rem
          "gap-2", // 0.5rem
        ],
        full: [
          "w-10", // 2.5rem
          "p-0",
        ],
      },
      disabled: {
        true: [
          "bg-[rgb(var(--m3-scheme-on-surface))/0.12]",
          "text-[rgb(var(--m3-scheme-on-surface))/0.38]",
          "cursor-auto",
          "shadow-none",
        ],
        false: [],
      },
    },

    // ─── COMPOUND VARIANTS ───────────────────────────────────────────────────────
    compoundVariants: [
      {
        disabled: true,
        type: "elevated",
        class: ["shadow-none", "hover:shadow-none"],
      },
      {
        disabled: true,
        type: "filled",
        class: ["hover:shadow-none"],
      },
      {
        disabled: true,
        type: "tonal",
        class: ["hover:shadow-none"],
      },
      {
        disabled: true,
        type: "outlined",
        class: ["border-[rgb(var(--m3-scheme-on-surface)/0.12)]"],
      },
      {
        disabled: true,
        type: "text",
        class: ["opacity-38"], // mimic forced-colors
      },
      {
        type: "text",
        iconType: "left",
        class: ["pr-4"], // override right padding
      },
    ],

    // ─── DEFAULTS ────────────────────────────────────────────────────────────────
    defaultVariants: {
      type: "elevated",
      iconType: "none",
      disabled: false,
    },
  },
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
