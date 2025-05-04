<script lang="ts">
  import { cn } from "$lib/misc/utils";
  import { getContext, type Snippet } from "svelte";
  import type { SvelteHTMLElements } from "svelte/elements";
  import {
    type BottomSheetContext,
    internalBottomSheetContextKey,
  } from "$lib/containers/bottom-sheet/index";

  type Props = {
    children?: Snippet;
    class?: SvelteHTMLElements["div"]["class"];
    [key: string]: any;
  };

  let { children, class: className, ...attrs }: Props = $props();
  const context = getContext<BottomSheetContext>(internalBottomSheetContextKey);
</script>

<div
  onmousedown={(e) => {
    e.preventDefault();
    context.isDragging = true;
    context.startY = e.clientY;
  }}
  class={cn("flex", "items-center", "justify-center", "w-full", "h-12", "cursor-grab", className)}
  {...attrs}
>
  {@render children?.()}
</div>
