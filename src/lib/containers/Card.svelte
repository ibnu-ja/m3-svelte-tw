<script lang="ts">
  import type { HTMLAttributes, MouseEventHandler } from "svelte/elements";
  import Primitive from "$lib/primitive/Primitive.svelte";
  import type { PrimitiveProps } from "$lib/primitive";
  import { type CardVariantProps, cardVariants } from "$lib/containers/index";
  import type { Snippet } from "svelte";
  import { cn } from "$lib/misc/utils";
  import { Layer } from "$lib";

  interface CardProps extends PrimitiveProps {
    type?: CardVariantProps["type"];
    clickable?: boolean;
    onclick?: MouseEventHandler<any> | null;
    class?: HTMLAttributes<any>["class"];
    children?: Snippet;
  }

  let {
    type = "elevated",
    as = "div",
    clickable = false,
    class: className,
    onclick,
    children,
    ...attrs
  }: CardProps = $props();

  $effect(() => {
    if (clickable) {
      as = "button";
    }
  });

  const preventDefault = (
    fn: ((this: Window, ev: MouseEvent) => any) | null,
  ): ((this: Window, ev: MouseEvent) => void) | null => {
    if (!fn) return null;
    return function (this: Window, ev: MouseEvent): void {
      ev.preventDefault();
      fn.call(this, ev);
    };
  };
</script>

<Primitive
  {as}
  class={cn(cardVariants({ type }), className)}
  onclick={onclick != null && preventDefault(onclick)}
  {...attrs}
>
  {#if clickable}
    <Layer />
  {/if}
  {@render children?.()}
</Primitive>

<style>
  /*:root {*/
  /*  --m3-card-shape: var(--m3-util-rounding-medium);*/
  /*}*/

  /*.m3-container {*/
  /*  flex-direction: column;*/
  /*  position: relative;*/
  /*  padding: 1rem; !* protip: use margin: -1rem (adjust as needed) to make images stretch to the end *!*/
  /*  border-radius: var(--m3-card-shape);*/
  /*  background-color: rgb(var(--m3-scheme-surface));*/
  /*  color: rgb(var(--m3-scheme-on-surface));*/
  /*}*/

  /*.type-elevated {*/
  /*  background-color: rgb(var(--m3-scheme-surface-container-low));*/
  /*}*/

  /*.type-filled {*/
  /*  background-color: rgb(var(--m3-scheme-surface-container-highest));*/
  /*}*/

  /*.type-outlined {*/
  /*  border: solid 0.0625rem rgb(var(--m3-scheme-outline-variant));*/
  /*}*/

  /*.type-elevated {*/
  /*  box-shadow: var(--m3-util-elevation-1);*/
  /*}*/

  /*@media print, (forced-colors: active) {*/
  /*  .type-filled {*/
  /*    outline: solid 0.125rem;*/
  /*  }*/
  /*}*/

  /*@media (forced-colors: active) {*/
  /*  .type-elevated {*/
  /*    outline: solid 0.125rem;*/
  /*  }*/
  /*}*/
</style>
