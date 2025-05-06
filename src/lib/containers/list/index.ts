import { cva, type VariantProps } from "class-variance-authority";

export { default as List } from "./List.svelte";

export { default as ListItem } from "./ListItem.svelte";

export { default as ListItemContent } from "./ListItemContent.svelte";

export { default as ListItemIcon } from "./ListItemIcon.svelte";

export { default as ListItemText } from "./ListItemText.svelte";

export { default as ListItemLeadingImage } from "./ListItemLeadingImage.svelte";

export const listItemLeadingImage = cva(["object-cover"], {
  variants: {
    type: {
      avatar: ["h-10", "rounded-full"],
      image: ["h-14"],
      thumbnail: ["h-16", "aspect-video", ],
    },
  },
});

export type ListItemLeadingImageVariants = VariantProps<typeof listItemLeadingImage>;

export const listItemContent = cva(["m-0"], {
  variants: {
    type: {
      overline: ["m3-font-label-small", "text-on-surface-variant"],
      headline: ["m3-font-body-large", "text-on-surface", "line-clamp-1"],
      supporting: ["m3-font-body-medium", "text-on-surface-variant", "line-clamp-1"],
    },
  },
});

export type ListItemContentVariants = VariantProps<typeof listItemContent>;

export const listItem = cva(
  [
    "relative",
    "grow",
    "flex",
    "pt-2",
    "pr-6",
    "pb-2",
    "pl-4",
    "items-center",
    "gap-4",
    "text-left",
  ],
  {
    variants: {
      lines: {
        "1": ["min-h-14"],
        "2": ["min-h-18"],
        "3": ["min-h-22", "py-3", "items-start"],
      },
    },
  },
);

export type ListItemVariants = Omit<VariantProps<typeof listItem>, "lines"> & {
  lines?: 1 | 2 | 3 | "1" | "2" | "3" | null;
};
