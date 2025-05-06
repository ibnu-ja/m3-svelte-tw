<script lang="ts">
  import { setContext, type Snippet } from "svelte";
  import type { PrimitiveProps } from "$lib/primitive";
  import {
    cn,
    type InternalItemListContext,
    internalItemListContextKey,
    Layer,
    listItem,
    type ListItemVariants,
  } from "$lib";
  import Primitive from "$lib/primitive/Primitive.svelte";
  import type { ClassValue } from "clsx";

  type Props = PrimitiveProps & ListItemVariants & {
    leading?: Snippet;
    trailing?: Snippet;
    //maybe should change prop name
    clickable?: boolean;
  }

  //TODO line height variant props apply clamp on ListItemContent

  let {
    as = "div",
    lines,
    headline,
    class: className,
    leading,
    trailing,
    children,
    clickable = false,
    ...attrs
  }: Props = $props();

  let _lines = $derived(typeof lines == "number" ? (String(lines) as "1" | "2" | "3") : lines);

  let context: InternalItemListContext = $state({
    lines: "1",
    listItemContentCount: 0,
    listItemImageType: null,
  });

  $effect(() => {
    if (_lines) {
      context.lines = _lines;
    }
  });

  setContext<InternalItemListContext>(internalItemListContextKey, context);

  let thumbnailLeadingClass: ClassValue = $derived(
    context.listItemImageType === "thumbnail" && ["pl-0", "py-3"],
  );

  let clickableClass: ClassValue = $derived(
    (as === "button" || as === "label" || as === "a" || clickable) && [
      "cursor-pointer",
      "select-none",
    ],
  );
</script>

<Primitive
  {as}
  class={cn(listItem({ lines: _lines }), thumbnailLeadingClass, clickableClass, className)}
  {...attrs}
>
  {#if as === "button" || as === "label" || as === "a" || clickable}
    <Layer />
  {/if}
  {@render leading?.()}
  {@render children?.()}
  {@render trailing?.()}
</Primitive>
