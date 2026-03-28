<script lang="ts" module>
  import { tv, type VariantProps } from "tailwind-variants";

  export const fabVariants = tv({
    base: "m3-layer inline-flex items-center justify-center border-none align-middle select-none [print-color-adjust:exact] cursor-pointer duration-m3-slow ease-m3-standard transition-[border-radius,box-shadow,background-color,color] overflow-hidden forced-colors:outline forced-colors:outline-solid",
    variants: {
      size: {
        normal: "h-d-14 rounded-2xl font-title-medium [&>svg]:w-6 [&>svg]:h-6",
        medium: "h-d-20 rounded-[1.25rem] font-title-large [&>svg]:w-7 [&>svg]:h-7",
        large:  "h-d-24 rounded-[1.75rem] font-headline-small [&>svg]:w-9 [&>svg]:h-9",
      },
      color: {
        primary: "bg-primary text-on-primary",
        secondary: "bg-secondary text-on-secondary",
        tertiary: "bg-tertiary text-on-tertiary",
        "primary-container": "bg-primary-container text-on-primary-container",
        "secondary-container": "bg-secondary-container text-on-secondary-container",
        "tertiary-container": "bg-tertiary-container text-on-tertiary-container",
      },
      elevation: {
        normal: "shadow-3 hover:not-disabled:shadow-4",
        lowered: "shadow-1 hover:not-disabled:shadow-2",
        none: "shadow-none",
      },
      extended: {
        true:  "",
        false: "",
      },
    },
    compoundVariants: [
      // icon-only: square (w = h, no horizontal padding)
      { extended: false, size: "normal", class: "w-d-14 px-0" },
      { extended: false, size: "medium", class: "w-d-20 px-0" },
      { extended: false, size: "large",  class: "w-d-24 px-0" },
      // extended: horizontal padding
      { extended: true, size: "normal", class: "px-4" },
      { extended: true, size: "medium", class: "px-[1.625rem]" },
      { extended: true, size: "large",  class: "px-7" },
    ],
    defaultVariants: {
      size: "normal",
      color: "primary-container",
      elevation: "normal",
      extended: false,
    },
  });

  export type FABSize  = VariantProps<typeof fabVariants>["size"];
  export type FABColor = VariantProps<typeof fabVariants>["color"];
  export type FABElevation = VariantProps<typeof fabVariants>["elevation"];
</script>

<script lang="ts">
  import type { IconifyIcon } from "@iconify/types";
  import type { HTMLButtonAttributes } from "svelte/elements";
  import Icon from "$lib/misc/Icon.svelte";
  import { slide } from "svelte/transition";
  import { easeEmphasized } from "$lib/misc/easing";

  import "$lib/etc/layer.js";

  type ContentProps =
    | { icon: IconifyIcon; text?: undefined }
    | { icon?: undefined; text: string }
    | { icon: IconifyIcon; text: string };

  export type FABProps = {
    size?: FABSize;
    color?: FABColor;
    elevation?: FABElevation;
    class?: string;
    ref?: HTMLElement | null;
  } & ContentProps & HTMLButtonAttributes;

  let {
    size = "normal",
    color = "primary-container",
    elevation = "normal",
    class: className = "",
    icon,
    text,
    ref = $bindable(null),
    ...props
  }: FABProps = $props();

  const iconSize = $derived(size == "large" ? 36 : size == "medium" ? 28 : 24);
  const textGapClass = $derived(
    size == "normal" ? "ms-2" : size == "medium" ? "ms-3" : "ms-4",
  );
  const fabClass = $derived(
    fabVariants({ size, color, elevation, extended: !!text, class: className })
  );
</script>

<button
  bind:this={ref}
  type="button"
  data-slot="fab"
  class={fabClass}
  {...props}
>
  {#if icon}
    <Icon {icon} size={iconSize} />
  {/if}
  {#if text}
    <span
      class={icon ? textGapClass : ""}
      transition:slide={{ axis: "x", duration: 500, easing: easeEmphasized }}
    >
      {text}
    </span>
  {/if}
</button>
