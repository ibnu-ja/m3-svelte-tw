import { cva, type VariantProps } from "class-variance-authority";

export const cardVariants = cva(
  [
    "flex",
    "flex-col",
    "relative",
    "p-4",
    "border-shape",
    "bg-surface",
    "text-on-surface",
    "rounded-md",
    "cursor-pointer",
    "[text-align:inherit]",
    "[font:inherit]",
    "[letter-spacing:inherit]",
  ],
  {
    variants: {
      type: {
        elevated: [
          "bg-surface-container-low",
          "shadow-elevation-1",
        ],
        filled: [
          "bg-surface-container-highest",
          "forced-colors:outline-[0.125rem]",
        ],
        outlined: [
          "outline-[0.0625rem]",
          "outline-(--m3-scheme-outline)", // /src/app.css:36
          "forced-colors:outline-[0.125rem]",
        ],
      },
    },

    defaultVariants: {
      type: "elevated",
    },
  },
);

export type CardVariantProps = VariantProps<typeof cardVariants>;
