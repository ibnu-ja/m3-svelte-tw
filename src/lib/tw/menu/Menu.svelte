<script lang="ts" module>
  import { tv, type VariantProps } from "tailwind-variants";

  export const menuVariants = tv({
    base: "relative flex flex-col py-2 bg-surface-container shadow-2 min-w-28 max-w-[17.5rem] [border-radius:var(--m3-menu-shape)] [print-color-adjust:exact]",
    variants: {
      variant: {
        baseline: "",
        // vertical: reserved
      },
    },
    defaultVariants: { variant: "baseline" },
  });

  export const menuItemVariants = tv({
    base: "m3-layer font-label-large flex items-center border-none bg-transparent text-on-surface cursor-pointer px-3 gap-3 disabled:opacity-38 disabled:cursor-auto [height:--m3-density(3rem)]",
    variants: {
      variant: {
        baseline: "",
        // vertical: reserved
      },
      color: {
        standard: "",
        // vibrant: reserved (vertical only)
      },
    },
    defaultVariants: { variant: "baseline", color: "standard" },
  });

  export type MenuVariant = VariantProps<typeof menuVariants>["variant"];
  export type MenuItemVariant = VariantProps<typeof menuItemVariants>["variant"];
  export type MenuItemColor = VariantProps<typeof menuItemVariants>["color"];
</script>
