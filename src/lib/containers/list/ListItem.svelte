<script lang="ts">
  import { type Snippet } from "svelte";
  import type { PrimitiveProps } from "$lib/primitive";
  import { cn, Layer, listItem, type ListItemVariants } from "$lib";
  import Primitive from "$lib/primitive/Primitive.svelte";

  interface Props extends PrimitiveProps, ListItemVariants {
    overline?: string;
    headline?: string;
    supporting?: string;
    leading?: Snippet;
    trailing?: Snippet;
    //maybe should change prop name
    clickable?: boolean;
  }

  //TODO line height variant props apply clamp on ListItemContent

  let {
    as = "div",
    lines,
    overline,
    headline,
    supporting,
    class: className,
    leading,
    trailing,
    children,
    clickable = false,
    ...attrs
  }: Props = $props();

  let _lines = $derived(typeof lines == "number" ? (String(lines) as "1" | "2" | "3") : lines);
</script>

<Primitive
  {as}
  class={cn(
    listItem({ lines: _lines }),
    (as === "button" || as === "label" || as === "a" || clickable) && "cursor-pointer select-none",
    className,
  )}
  {...attrs}
>
  {#if as === "button" || as === "label" || as === "a" || clickable}
    <Layer />
  {/if}
  {#if leading}
    {@render leading()}
  {/if}
  {@render children?.()}
  {#if trailing}
    {@render trailing()}
  {/if}
</Primitive>
