<script lang="ts">
  import {
    cn,
    type InternalItemListContext,
    internalItemListContextKey,
    listItemContent,
    type ListItemContentVariants
  } from "$lib";
  import type { PrimitiveProps } from "$lib/primitive";
  import Primitive from "$lib/primitive/Primitive.svelte";
  import { getContext, onDestroy, onMount } from "svelte";

  interface Props extends PrimitiveProps, ListItemContentVariants {
    text?: string;
  }

  let { class: className, as = "p", text, children, type = "headline", ...attrs }: Props = $props();

  let context = getContext<InternalItemListContext>(internalItemListContextKey)

  onMount(() => {
    context.listItemContentCount += 1
  })

  onDestroy(() => {
    context.listItemContentCount -= 1
  })

  let clampClass = $derived.by(() => {
    if ((context.lines === "2" && context.listItemContentCount === 2) || context.lines === "3" && context.listItemContentCount === 3) {
      return "line-clamp-1"
    }
    if (context.lines === "3" && context.listItemContentCount === 2) {
      return "line-clamp-2"
    }
  })
</script>

<Primitive {as} class={cn(listItemContent({ type }), clampClass, className)} {...attrs}>
  {#if text}
    {text}
  {:else}
    {@render children?.()}
  {/if}
</Primitive>
