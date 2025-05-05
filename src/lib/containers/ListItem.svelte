<script lang="ts">
  import { type Snippet } from "svelte";
  import type { PrimitiveProps } from "$lib/primitive";
  import ListItemText from "$lib/containers/list-item/ListItemText.svelte";
  import { cn, Layer } from "$lib/index";
  import Primitive from "$lib/primitive/Primitive.svelte";
  import { listItem, type ListItemVariants } from "$lib/containers/index";

  interface Props extends PrimitiveProps, ListItemVariants {
    overline?: string;
    headline?: string;
    supporting?: string;
    leading?: Snippet;
    trailing?: Snippet;
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
    ...attrs
  }: Props = $props();

  let _lines = $derived(typeof lines == "number" ? (String(lines) as "1" | "2" | "3") : lines);
</script>

<Primitive {as}
           class={cn(listItem({lines: _lines }), className, (as === "button" || as === "label" || as === "a") && "cursor-pointer select-none")}
           {...attrs}>
  {#if as === "button" || as === "label" || as === "a" }
    <Layer />
  {/if}
  <!--{@render leading?.()}-->
  {#if leading}
    <!--<div class="leading">-->
      {@render leading()}
    <!--</div>-->
  {/if}
  {@render children?.()}
  <!--{@render trailing?.()}-->
  {#if trailing}
    <!--<div class="trailing m3-font-label-small">-->
      {@render trailing()}
    <!--</div>-->
  {/if}
</Primitive>
