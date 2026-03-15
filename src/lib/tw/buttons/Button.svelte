<script lang="ts" module>
  import { tv, type VariantProps } from "tailwind-variants";

  export const buttonVariants = tv({
    base: "tw-btn m3-layer inline-flex items-center justify-center border-none align-middle select-none [print-color-adjust:exact] cursor-pointer disabled:cursor-auto [&>svg]:shrink-0 [&>*]:shrink-0 [&>svg]:w-5 [&>svg]:h-5",
    variants: {
      size: {
        xs: "sz-xs h-[calc(2rem+(var(--density)*0.25rem))] px-3 gap-2 m3-font-label-large [--shape:1rem] [--square-shape:var(--m3-shape-medium)] [--pressed-shape:var(--m3-shape-small)]",
        s: "sz-s h-[calc(2.5rem+(var(--density)*0.25rem))] px-4 gap-2 m3-font-label-large [--shape:1.25rem] [--square-shape:var(--m3-shape-medium)] [--pressed-shape:var(--m3-shape-small)]",
        m: "sz-m h-[calc(3.5rem+(var(--density)*0.25rem))] px-6 gap-2 m3-font-title-medium [--shape:1.75rem] [--square-shape:var(--m3-shape-large)] [--pressed-shape:var(--m3-shape-medium)] [&>svg]:w-6 [&>svg]:h-6",
        l: "sz-l h-[calc(6rem+(var(--density)*0.25rem))] px-12 gap-3 m3-font-headline-small [--shape:3rem] [--square-shape:var(--m3-shape-extra-large)] [--pressed-shape:var(--m3-shape-large)] [&>svg]:w-8 [&>svg]:h-8",
        xl: "sz-xl h-[calc(8.5rem+(var(--density)*0.25rem))] px-16 gap-4 m3-font-headline-large [--shape:4.25rem] [--square-shape:var(--m3-shape-extra-large)] [--pressed-shape:var(--m3-shape-large)] [&>svg]:w-10 [&>svg]:h-10",
      },
      shape: {
        round: "shape-round",
        square: "shape-square",
      },
      color: {
        elevated: "bg-surface-container-low text-primary",
        filled: "bg-primary text-on-primary",
        tonal: "bg-secondary-container text-on-secondary-container",
        outlined:
          "bg-transparent text-on-surface-variant outline outline-1 -outline-offset-1 outline-outline-variant",
        text: "bg-transparent text-primary",
      },
      iconType: {
        none: "",
        left: "icon-left",
        full: "icon-full",
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
    ],
  });

  export type ButtonSize = VariantProps<typeof buttonVariants>["size"];
  export type ButtonShape = VariantProps<typeof buttonVariants>["shape"];
  export type ButtonVariant = VariantProps<typeof buttonVariants>["color"];
  export type ButtonIconType = VariantProps<typeof buttonVariants>["iconType"];

  import type { HTMLButtonAttributes, HTMLAttributes, HTMLLabelAttributes } from "svelte/elements";
  import type { Snippet } from "svelte";
  import type { AnchorAttrs, NotLink } from "$lib/misc/typing-utils";

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
    children: Snippet;
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
    ...props
  }: ButtonProps = $props();

  const buttonClass = $derived(buttonVariants({ size, shape, color: variant, iconType, class: className }));
</script>

{#if props.href != undefined}
  <a class={buttonClass} {...props}>
    {@render children()}
  </a>
{:else if "label" in props}
  {@const { label: _, ...extra } = props}
  <label class={buttonClass} {...extra}>
    {@render children()}
  </label>
{:else if "summary" in props}
  {@const { summary: _, ...extra } = props}
  <summary class={buttonClass} {...extra}>
    {@render children()}
  </summary>
{:else}
  <button type={props.onclick ? "button" : "submit"} class={buttonClass} {...props}>
    {@render children()}
  </button>
{/if}

<style>
  .tw-btn {
    border-radius: var(--shape);
    transition:
      border-radius var(--m3-easing-fast-spatial),
      box-shadow var(--m3-easing-fast),
      background-color var(--m3-easing-fast),
      color var(--m3-easing-fast);
  }

  .tw-btn > :global(svg) {
    fill: currentColor;
  }

  .tw-btn.color-elevated:not(:disabled, :has(> :global(input:disabled))):has(
      > :global(input:checked)
    ) {
    background-color: var(--m3c-primary);
    color: var(--m3c-on-primary);
  }

  .tw-btn.color-elevated:not(:disabled, :has(> :global(input:disabled))) {
    box-shadow: var(--m3-elevation-1);
  }

  @media (hover: hover) {
    .tw-btn.color-elevated:not(:disabled, :has(> :global(input:disabled))):hover {
      box-shadow: var(--m3-elevation-2);
    }
  }

  .tw-btn.color-filled:not(:disabled, :has(> :global(input:disabled))):has(
      > :global(input[type="checkbox"]:not(:checked))
    ),
  .tw-btn.color-filled:not(:disabled, :has(> :global(input:disabled))):has(
      > :global(input[type="radio"]:not(:checked))
    ) {
    background-color: var(--m3c-surface-container);
    color: var(--m3c-on-surface-variant);
  }

  .tw-btn.color-tonal:not(:disabled, :has(> :global(input:disabled))):has(
      > :global(input:checked)
    ) {
    background-color: var(--m3c-secondary);
    color: var(--m3c-on-secondary);
  }

  .tw-btn.color-outlined:not(:disabled, :has(> :global(input:disabled))):has(
      > :global(input:checked)
    ) {
    outline-color: var(--m3c-inverse-surface);
    background-color: var(--m3c-inverse-surface);
    color: var(--m3c-inverse-on-surface);
  }

  @media (hover: hover) {
    .tw-btn:is(.color-filled, .color-tonal):not(:disabled, label):hover {
      box-shadow: var(--m3-elevation-1);
    }
  }

  .tw-btn:disabled,
  .tw-btn:has(> :global(input:disabled)) {
    background-color: --translucent(var(--m3c-on-surface), 0.12);
    color: --translucent(var(--m3c-on-surface), 0.38);
    cursor: auto;
  }

  .tw-btn.color-outlined:has(> :global(input:disabled)) {
    background-color: transparent;
    outline-color: --translucent(var(--m3c-on-surface), 0.12);
  }

  .tw-btn.shape-square:not(:has(> :global(input:checked)), :global(:open) > summary),
  .tw-btn:not(.shape-square):is(:has(> :global(input:checked)), :global(:open) > summary) {
    border-radius: var(--square-shape);
  }

  .tw-btn:active:not(:disabled, :has(> :global(input:disabled))) {
    border-radius: var(--pressed-shape) !important;
  }

  .tw-btn > :global(input) {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    pointer-events: none;
  }

  .tw-btn.icon-left > :global(svg) {
    width: 1.25rem;
    height: 1.25rem;
  }

  .tw-btn.icon-full {
    width: calc(2rem + (var(--density) * 0.25rem));
    padding: 0;
  }

  .tw-btn.icon-full > :global(svg) {
    width: 1.25rem;
    height: 1.25rem;
  }

  .tw-btn.sz-s.icon-full {
    width: calc(2.5rem + (var(--density) * 0.25rem));
  }

  .tw-btn.sz-m.icon-full {
    width: calc(3.5rem + (var(--density) * 0.25rem));
  }

  .tw-btn.sz-m.icon-full > :global(svg) {
    width: 1.5rem;
    height: 1.5rem;
  }

  .tw-btn.sz-l.icon-full {
    width: calc(6rem + (var(--density) * 0.25rem));
  }

  .tw-btn.sz-l.icon-full > :global(svg) {
    width: 2rem;
    height: 2rem;
  }

  .tw-btn.sz-xl.icon-full {
    width: calc(8.5rem + (var(--density) * 0.25rem));
  }

  .tw-btn.sz-xl.icon-full > :global(svg) {
    width: 2.5rem;
    height: 2.5rem;
  }

  @media screen and (forced-colors: active) {
    .tw-btn:is(.color-elevated, .color-filled, .color-tonal) {
      background-color: transparent;
      border: 1px solid;
    }
    .tw-btn:disabled {
      opacity: 0.38;
    }
  }
</style>
