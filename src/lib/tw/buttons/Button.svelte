<script lang="ts" module>
  import { tv, type VariantProps } from "tailwind-variants";

  export const buttonVariants = tv({
    base: "m3-layer inline-flex items-center justify-center border-none align-middle select-none [print-color-adjust:exact] cursor-pointer disabled:cursor-auto has-[>input:disabled]:cursor-auto [&>svg]:shrink-0 [&>*]:shrink-0 [&>svg]:w-5 [&>svg]:h-5 [&>svg]:fill-current transition-[border-radius,box-shadow,background-color,color] ease-m3-fast-spatial duration-m3-fast-spatial [&>input]:absolute [&>input]:opacity-0 [&>input]:w-0 [&>input]:h-0 [&>input]:pointer-events-none disabled:bg-translucent-on-surface-12 disabled:text-translucent-on-surface-38 has-[>input:disabled]:bg-translucent-on-surface-12 has-[>input:disabled]:text-translucent-on-surface-38 forced-colors:disabled:opacity-38",
    variants: {
      size: {
        xs: "sz-xs h-d-8 px-3 gap-2 font-label-large",
        s: "sz-s h-d-10 px-4 gap-2 font-label-large",
        m: "sz-m h-d-14 px-6 gap-2 font-title-medium [&>svg]:w-6 [&>svg]:h-6",
        l: "sz-l h-d-24 px-12 gap-3 font-headline-small [&>svg]:w-8 [&>svg]:h-8",
        xl: "sz-xl h-d-34 px-16 gap-4 font-headline-large [&>svg]:w-10 [&>svg]:h-10",
      },
      shape: {
        round: "",
        square: "",
      },
      color: {
        elevated: "bg-surface-container-low text-primary shadow-1 not-disabled:not-has-[>input:disabled]:data-[state=on]:bg-primary not-disabled:not-has-[>input:disabled]:data-[state=on]:text-on-primary not-disabled:not-has-[>input:disabled]:has-[>input:checked]:bg-primary not-disabled:not-has-[>input:disabled]:has-[>input:checked]:text-on-primary hover:not-disabled:not-has-[>input:disabled]:shadow-2 forced-colors:bg-transparent forced-colors:border forced-colors:border-solid disabled:bg-translucent-on-surface-12 disabled:text-translucent-on-surface-38 has-[>input:disabled]:bg-translucent-on-surface-12 has-[>input:disabled]:text-translucent-on-surface-38",
        filled: "bg-primary text-on-primary data-[state=off]:bg-surface-container data-[state=off]:text-on-surface-variant has-[>input:is([type=checkbox],[type=radio]):not(:checked)]:bg-surface-container has-[>input:is([type=checkbox],[type=radio]):not(:checked)]:text-on-surface-variant hover:not-disabled:not-has-[>input:disabled]:shadow-1 forced-colors:bg-transparent forced-colors:border forced-colors:border-solid disabled:bg-translucent-on-surface-12 disabled:text-translucent-on-surface-38 has-[>input:disabled]:bg-translucent-on-surface-12 has-[>input:disabled]:text-translucent-on-surface-38",
        tonal: "bg-secondary-container text-on-secondary-container not-disabled:data-[state=on]:bg-secondary not-disabled:data-[state=on]:text-on-secondary not-disabled:not-has-[>input:disabled]:has-[>input:checked]:bg-secondary not-disabled:not-has-[>input:disabled]:has-[>input:checked]:text-on-secondary hover:not-disabled:shadow-1 forced-colors:bg-transparent forced-colors:border forced-colors:border-solid disabled:bg-translucent-on-surface-12 disabled:text-translucent-on-surface-38 has-[>input:disabled]:bg-translucent-on-surface-12 has-[>input:disabled]:text-translucent-on-surface-38",
        outlined: "bg-transparent text-on-surface-variant outline outline-1 -outline-offset-1 outline-outline-variant not-disabled:not-has-[>input:disabled]:data-[state=on]:outline-inverse-surface not-disabled:not-has-[>input:disabled]:data-[state=on]:bg-inverse-surface not-disabled:not-has-[>input:disabled]:data-[state=on]:text-inverse-on-surface not-disabled:not-has-[>input:disabled]:has-[>input:checked]:outline-inverse-surface not-disabled:not-has-[>input:disabled]:has-[>input:checked]:bg-inverse-surface not-disabled:not-has-[>input:disabled]:has-[>input:checked]:text-inverse-on-surface has-[>input:disabled]:outline-translucent-on-surface-12 has-[>input:disabled]:bg-transparent disabled:bg-transparent disabled:text-on-surface-variant",
        text: "bg-transparent text-primary disabled:bg-transparent disabled:text-translucent-on-surface-38 has-[>input:disabled]:bg-transparent has-[>input:disabled]:text-translucent-on-surface-38",
      },
      iconType: {
        none: "",
        left: "icon-left",
        full: "w-auto p-0",
      },
    },
    defaultVariants: {
      size: "s",
      shape: "round",
      color: "filled",
      iconType: "none",
    },
    compoundVariants: [
      { size: "l", color: "outlined", class: "outline-2 -outline-offset-2" },
      { size: "xl", color: "outlined", class: "outline-3 -outline-offset-3" },

      { iconType: "full", size: "xs", class: "w-d-8" },
      { iconType: "full", size: "s", class: "w-d-10" },
      { iconType: "full", size: "m", class: "w-d-14" },
      { iconType: "full", size: "l", class: "w-d-24" },
      { iconType: "full", size: "xl", class: "w-d-34" },

      { size: "xs", shape: "round", class: "rounded-2xl not-disabled:not-has-[>input:disabled]:has-[>input:checked]:rounded-xl not-disabled:not-has-[>input:disabled]:data-[state=on]:rounded-xl" },
      { size: "s", shape: "round", class: "rounded-[1.25rem] not-disabled:not-has-[>input:disabled]:has-[>input:checked]:rounded-xl not-disabled:not-has-[>input:disabled]:data-[state=on]:rounded-xl" },
      { size: "m", shape: "round", class: "rounded-[1.75rem] not-disabled:not-has-[>input:disabled]:has-[>input:checked]:rounded-2xl not-disabled:not-has-[>input:disabled]:data-[state=on]:rounded-2xl" },
      { size: "l", shape: "round", class: "rounded-[3rem] not-disabled:not-has-[>input:disabled]:has-[>input:checked]:rounded-[1.75rem] not-disabled:not-has-[>input:disabled]:data-[state=on]:rounded-[1.75rem]" },
      { size: "xl", shape: "round", class: "rounded-[4.25rem] not-disabled:not-has-[>input:disabled]:has-[>input:checked]:rounded-[1.75rem] not-disabled:not-has-[>input:disabled]:data-[state=on]:rounded-[1.75rem]" },

      { size: "xs", shape: "square", class: "rounded-xl" },
      { size: "s", shape: "square", class: "rounded-xl" },
      { size: "m", shape: "square", class: "rounded-2xl" },
      { size: "l", shape: "square", class: "rounded-[1.75rem]" },
      { size: "xl", shape: "square", class: "rounded-[1.75rem]" },

      { size: "xs", class: "[&:active:not(:disabled)]:rounded-lg" },
      { size: "s", class: "[&:active:not(:disabled)]:rounded-lg" },
      { size: "m", class: "[&:active:not(:disabled)]:rounded-xl" },
      { size: "l", class: "[&:active:not(:disabled)]:rounded-2xl" },
      { size: "xl", class: "[&:active:not(:disabled)]:rounded-2xl" },
    ],
  });

  export type ButtonSize = VariantProps<typeof buttonVariants>["size"];
  export type ButtonShape = VariantProps<typeof buttonVariants>["shape"];
  export type ButtonVariant = VariantProps<typeof buttonVariants>["color"];
  export type ButtonIconType = VariantProps<typeof buttonVariants>["iconType"];
</script>

<script lang="ts">
  import type { Snippet } from "svelte";
  import PressElement from "$lib/tw/primitive/PressElement.svelte";

  type ActionProps =
    | AnchorAttrs
    | (NotLink<HTMLLabelAttributes> & { label: true })
    | (NotLink<HTMLAttributes<HTMLElement>> & { summary: true })
    | NotLink<HTMLButtonAttributes>;

  export type ButtonProps = {
    size?: ButtonSize;
    shape?: ButtonShape;
    variant?: ButtonVariant;
    iconType?: ButtonIconType;
    class?: string;
    children?: Snippet;
    ref?: HTMLElement | null;
  } & ActionProps;

  import "$lib/etc/layer.js";
  import type { AnchorAttrs, NotLink } from "$lib/misc/typing-utils";
  import type { HTMLAttributes, HTMLButtonAttributes, HTMLLabelAttributes } from "svelte/elements";

  let {
    size = "s",
    shape = "round",
    variant = "filled",
    iconType = "none",
    class: className = "",
    children,
    ref = $bindable(null),
    ...props
  }: ButtonProps = $props();

  const buttonClass = $derived(buttonVariants({ size, shape, color: variant, iconType, class: className }));
</script>

<PressElement
  bind:ref
  data-slot="button"
  class={buttonClass}
  {...props}
>
  {@render children?.()}
</PressElement>
