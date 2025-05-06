<script lang="ts">
  import { cn } from "$lib";
  import type { PrimitiveProps } from "$lib/primitive";
  import Primitive from "$lib/primitive/Primitive.svelte";
  import { type ListItemContentVariants } from "$lib/containers";

  let {
    class: className,
    as = "div",
    children,
    ...attrs
  }: PrimitiveProps & ListItemContentVariants = $props();
</script>

<Primitive {as} class={cn(["flex", "flex-col"], className)} {...attrs}>
  {@render children?.()}
</Primitive>
