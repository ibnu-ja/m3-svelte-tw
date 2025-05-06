<script lang="ts">
  import { cn, listItemContent, type ListItemContentVariants } from "$lib";
  import type { PrimitiveProps } from "$lib/primitive";
  import Primitive from "$lib/primitive/Primitive.svelte";

  interface Props extends PrimitiveProps, ListItemContentVariants {
    text?: string;
  }

  let { class: className, as = "p", text, children, type = "headline", ...attrs }: Props = $props();
</script>

<Primitive {as} class={cn(listItemContent({ type }), className)} {...attrs}>
  {#if text}
    {text}
  {:else}
    {@render children?.()}
  {/if}
</Primitive>
