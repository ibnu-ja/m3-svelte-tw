<script lang="ts">
  import { cn } from "$lib";
  import type { PrimitiveProps } from "$lib/primitive";
  import Primitive from "$lib/primitive/Primitive.svelte";

  interface Props extends PrimitiveProps {
    text?: string;
  }

  let { class: className, as = 'p', text, children, ...attrs }: Props = $props();
</script>

<Primitive
  {as}
  class={cn(
    "m3-font-headline-small",
    "m-0",
    className,
  )}
  {...attrs}
>
  {#if (text)}
    {text}
  {:else}
    {@render children?.()}
  {/if}
</Primitive>
