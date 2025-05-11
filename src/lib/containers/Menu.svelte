<script lang="ts">
  import { cn } from "$lib/misc/utils";
  import Primitive from "$lib/primitive/Primitive.svelte";
  import type { PrimitiveProps } from "$lib/primitive";

  let { class: className, as = "div", children }: PrimitiveProps = $props();
</script>

<Primitive
  {as}
  class={cn(
    "m3-container",
    "flex",
    "relative",
    "rounded-xs",
    "flex-col",
    "px-0",
    "py-2",
    "min-w-28",
    "max-w-70",
    "bg-surface-container",
    "z-[2]",
    "shadow-elevation-2",
    className,
  )}
>
  {@render children?.()}
</Primitive>
