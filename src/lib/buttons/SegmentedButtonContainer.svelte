<script lang="ts">
  import { cn } from "$lib/misc/utils";
  import type { PrimitiveProps } from "$lib/primitive";
  import type { SvelteHTMLElements } from "svelte/elements";
  import Primitive from "$lib/primitive/Primitive.svelte";

  type Props = PrimitiveProps & {
    class?: SvelteHTMLElements["div"]["class"];
  };

  let { children, class: className, ...attrs }: Props = $props();
</script>

<Primitive
  as="div"
  class={cn(
    "inline-flex",
    "border",
    "border-outline",
    "h-10",
    "rounded-full",
    "overflow-hidden",
    "[&>input]:absolute",
    "[&>input]:opacity-0",
    "[&>input]:pointer-events-none",
    className,
  )}
  {...attrs}
>
  {@render children?.()}
</Primitive>
