<script lang="ts" module>
  import { tv, type VariantProps } from "tailwind-variants";

  export const buttonVariants = tv({
    base: "tw-btn m3-layer inline-flex items-center justify-center border-none align-middle select-none [print-color-adjust:exact] cursor-pointer disabled:cursor-auto has-[>input:disabled]:cursor-auto [&>svg]:shrink-0 [&>*]:shrink-0 [&>svg]:w-5 [&>svg]:h-5 [&>svg]:fill-current [border-radius:var(--shape)] [transition:border-radius_var(--m3-easing-fast-spatial),_box-shadow_var(--m3-easing-fast),_background-color_var(--m3-easing-fast),_color_var(--m3-easing-fast)] [&>input]:absolute [&>input]:opacity-0 [&>input]:w-0 [&>input]:h-0 [&>input]:pointer-events-none disabled:bg-translucent-on-surface-12 disabled:text-translucent-on-surface-38 has-[>input:disabled]:bg-translucent-on-surface-12 has-[>input:disabled]:text-translucent-on-surface-38 [&:active:not(:disabled)]:[border-radius:var(--pressed-shape)!important] forced-colors:disabled:opacity-38",
    variants: {
      size: {
        xs: "sz-xs h-[calc(2rem+(var(--density)*0.25rem))] px-3 gap-2 font-label-large [--shape:1rem] [--square-shape:var(--m3-shape-medium)] [--pressed-shape:var(--m3-shape-small)]",
        s: "sz-s h-[calc(2.5rem+(var(--density)*0.25rem))] px-4 gap-2 font-label-large [--shape:1.25rem] [--square-shape:var(--m3-shape-medium)] [--pressed-shape:var(--m3-shape-small)]",
        m: "sz-m h-[calc(3.5rem+(var(--density)*0.25rem))] px-6 gap-2 font-title-medium [--shape:1.75rem] [--square-shape:var(--m3-shape-large)] [--pressed-shape:var(--m3-shape-medium)] [&>svg]:w-6 [&>svg]:h-6",
        l: "sz-l h-[calc(6rem+(var(--density)*0.25rem))] px-12 gap-3 font-headline-small [--shape:3rem] [--square-shape:var(--m3-shape-extra-large)] [--pressed-shape:var(--m3-shape-large)] [&>svg]:w-8 [&>svg]:h-8",
        xl: "sz-xl h-[calc(8.5rem+(var(--density)*0.25rem))] px-16 gap-4 font-headline-large [--shape:4.25rem] [--square-shape:var(--m3-shape-extra-large)] [--pressed-shape:var(--m3-shape-large)] [&>svg]:w-10 [&>svg]:h-10",
      },
      shape: {
        round: "shape-round",
        square: "shape-square",
      },
      color: {
        elevated: "bg-surface-container-low text-primary shadow-1 not-disabled:not-has-[>input:disabled]:data-[state=on]:bg-primary not-disabled:not-has-[>input:disabled]:data-[state=on]:text-on-primary not-disabled:not-has-[>input:disabled]:has-[>input:checked]:bg-primary not-disabled:not-has-[>input:disabled]:has-[>input:checked]:text-on-primary hover:not-disabled:not-has-[>input:disabled]:shadow-2 forced-colors:bg-transparent forced-colors:border forced-colors:border-solid",
        filled: "bg-primary text-on-primary data-[state=off]:bg-surface-container data-[state=off]:text-on-surface-variant has-[>input:is([type=checkbox],[type=radio]):not(:checked)]:bg-surface-container has-[>input:is([type=checkbox],[type=radio]):not(:checked)]:text-on-surface-variant hover:not-disabled:not-has-[>input:disabled]:shadow-1 forced-colors:bg-transparent forced-colors:border forced-colors:border-solid",
        tonal: "bg-secondary-container text-on-secondary-container not-disabled:not-has-[>input:disabled]:data-[state=on]:bg-secondary not-disabled:not-has-[>input:disabled]:data-[state=on]:text-on-secondary not-disabled:not-has-[>input:disabled]:has-[>input:checked]:bg-secondary not-disabled:not-has-[>input:disabled]:has-[>input:checked]:text-on-secondary hover:not-disabled:shadow-1 forced-colors:bg-transparent forced-colors:border forced-colors:border-solid",
        outlined: "bg-transparent text-on-surface-variant outline outline-1 -outline-offset-1 outline-outline-variant not-disabled:not-has-[>input:disabled]:data-[state=on]:outline-inverse-surface not-disabled:not-has-[>input:disabled]:data-[state=on]:bg-inverse-surface not-disabled:not-has-[>input:disabled]:data-[state=on]:text-inverse-on-surface not-disabled:not-has-[>input:disabled]:has-[>input:checked]:outline-inverse-surface not-disabled:not-has-[>input:disabled]:has-[>input:checked]:bg-inverse-surface not-disabled:not-has-[>input:disabled]:has-[>input:checked]:text-inverse-on-surface has-[>input:disabled]:outline-translucent-on-surface-12 has-[>input:disabled]:bg-transparent",
        text: "bg-transparent text-primary",
      },
      iconType: {
        none: "",
        left: "icon-left",
        full: "[w-auto] [p-0!]",
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
      { iconType: "full", size: "xs", class: "[width:calc(2rem+(var(--density)*0.25rem))] [padding:0]" },
      { iconType: "full", size: "s", class: "[width:calc(2.5rem+(var(--density)*0.25rem))] [padding:0]" },
      { iconType: "full", size: "m", class: "[width:calc(3.5rem+(var(--density)*0.25rem))] [padding:0]" },
      { iconType: "full", size: "l", class: "[width:calc(6rem+(var(--density)*0.25rem))] [padding:0]" },
      { iconType: "full", size: "xl", class: "[width:calc(8.5rem+(var(--density)*0.25rem))] [padding:0]" },
    ],
  });

  export type ButtonSize = VariantProps<typeof buttonVariants>["size"];
  export type ButtonShape = VariantProps<typeof buttonVariants>["shape"];
  export type ButtonVariant = VariantProps<typeof buttonVariants>["color"];
  export type ButtonIconType = VariantProps<typeof buttonVariants>["iconType"];

  import type { HTMLButtonAttributes, HTMLAttributes, HTMLAnchorAttributes, HTMLLabelAttributes } from "svelte/elements";
  import type { Snippet } from "svelte";
  import type { NotLink } from "$lib/misc/typing-utils";

  type AnchorAttrs = HTMLAnchorAttributes & { href: string };

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
</script>

<script lang="ts">
  import "$lib/etc/layer.js";

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

{#if "href" in props && props.href != undefined}
  {@const { disabled, href, ...rest } = props as AnchorAttrs & { disabled?: boolean }}
  <a
    bind:this={ref}
    data-slot="button"
    class={buttonClass}
    href={disabled ? undefined : href}
    aria-disabled={disabled ? true : undefined}
    role={disabled ? "link" : undefined}
    tabindex={disabled ? -1 : undefined}
    {...rest}
  >
    {@render children?.()}
  </a>
{:else if "label" in props}
  {@const { label: _, ...extra } = props}
  <label bind:this={ref} data-slot="button" class={buttonClass} {...extra}>
    {@render children?.()}
  </label>
{:else if "summary" in props}
  {@const { summary: _, ...extra } = props}
  <summary bind:this={ref} data-slot="button" class={buttonClass} {...extra}>
    {@render children?.()}
  </summary>
{:else}
  <button
    bind:this={ref}
    data-slot="button"
    type="button"
    class={buttonClass}
    {...props}
  >
    {@render children?.()}
  </button>
{/if}

<style>
  :global(.shape-square:not(:has(> input:checked)):not([data-state=on])),
  :global(.shape-round:is(:has(> input:checked), [data-state=on])) {
    border-radius: var(--square-shape);
  }
</style>
