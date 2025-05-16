<script lang="ts">
  import Primitive from "$lib/primitive/Primitive.svelte";
  import { cn } from "$lib/misc/utils";
  import type { PrimitiveProps } from "$lib/primitive";

  let { as = "div", class: className, children, ...attrs }: PrimitiveProps = $props();
</script>

<Primitive
  {as}
  class={cn(
    "m3-container",
    "flex",
    "items-center",
    "py-0",
    "px-4",
    "min-w-80",
    "max-w-240",
    "min-h-12",
    "rounded-xs",
    "shadow-elevation-3",
    "bg-inverse-surface",
    "text-inverse-on-surface",
    "animate-[snackbarIn_500ms_var(--m3-easing-decel),_opacity_100ms_var(--m3-easing-decel)]",
    className,
  )}
  {...attrs}
>
  {@render children?.()}
</Primitive>

