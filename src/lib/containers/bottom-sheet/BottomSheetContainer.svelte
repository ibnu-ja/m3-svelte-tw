<script lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements";
  import { getContext, type Snippet } from "svelte";
  import { cn } from "$lib/misc/utils";
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

<!--suppress HtmlUnknownAttribute -->
<div
  bind:clientHeight={context.containerHeightSignal}
  class={cn("py-0", "px-4", className)}
  ontouchstart={(e) => {
    context.isDragging = true;
    context.startY = e.touches[0].clientY;
  }}
  {...attrs}
>
  {@render children?.()}
</div>
