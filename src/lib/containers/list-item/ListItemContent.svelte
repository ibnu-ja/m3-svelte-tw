<script lang="ts">
  import { cn } from "$lib";
  import type { PrimitiveProps } from "$lib/primitive";
  import Primitive from "$lib/primitive/Primitive.svelte";
  import { listItemContent, type ListItemContentVariants } from "$lib/containers";

  interface Props extends PrimitiveProps, ListItemContentVariants {
    text?: string;
  }

  let { class: className, as = "div", text, children, type = "headline", ...attrs }: Props = $props();
</script>

<Primitive {as} class={cn(listItemContent({ type }), className)} {...attrs}>
  {#if text}
    {text}
  {:else}
    {@render children?.()}
  {/if}
</Primitive>
