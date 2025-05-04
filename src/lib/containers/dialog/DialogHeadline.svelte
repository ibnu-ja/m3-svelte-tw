<script lang="ts">
  import { cn } from "$lib";
  import type { PrimitiveProps } from "$lib/primitive";
  import Primitive from "$lib/primitive/Primitive.svelte";

  interface Props extends PrimitiveProps {
    text?: string;
  }

  let { class: className, as = 'h4', text, children, ...attrs }: Props = $props();
</script>

<Primitive
  {as}
  class={cn(
    "m3-font-headline-small",
    "text-center",
    "text-on-surface",
    "mt-0",
    "mb-4",
    "animate-opacity",
    "duration-150",
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
