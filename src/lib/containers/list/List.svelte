<script lang="ts">
  import { cn, type ListItemContentVariants } from "$lib";
  import type { PrimitiveProps } from "$lib/primitive";
  import Primitive from "$lib/primitive/Primitive.svelte";

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
