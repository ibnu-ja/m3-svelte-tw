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
        elevated: ["bg-surface-container-low", "shadow-elevation-1"],
        filled: ["bg-surface-container-highest", "forced-colors:outline-[0.125rem]"],
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

export const listItemContent = cva(
  ["m-0"],
  /*
   * 
  .supporting,
  .overline {
    color: rgb(var(--m3-scheme-on-surface-variant));
  }
  .headline {
    color: rgb(var(--m3-scheme-on-surface));
  } 
   */
  {
    variants: {
      type: {
        overline: ["m3-font-label-small", "text-on-surface-variant"],
        headline: ["m3-font-body-large", "text-on-surface", "line-clamp-1"],
        supporting: ["m3-font-body-medium", "text-on-surface-variant", "line-clamp-1"],
      },
    },
  },
);

export type ListItemContentVariants = VariantProps<typeof listItemContent>;

export const listItem = cva(
  ["relative", "grow", "flex", "pt-2", "pr-6", "pb-2", "pl-4", "items-center", "gap-4", "text-left"],
  {
    variants: {
      lines: {
        "1": ["h-14"],
        "2": ["h-18"],
        /*
        height: 5.5rem;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        align-items: flex-start;
         */
        "3": ["h-22", "py-4", "items-start"],
      },
    },
  },
);

//export type ListItemVariants = VariantProps<typeof listItem>;
export type ListItemVariants =
  Omit<VariantProps<typeof listItem>, "lines">
  & {
  /** accept either number or string */
  lines?: 1 | 2 | 3 | "1" | "2" | "3" | null;
};