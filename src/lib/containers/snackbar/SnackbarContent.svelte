<script lang="ts">

  import Primitive from "$lib/primitive/Primitive.svelte";
  import type { PrimitiveProps } from "$lib/primitive";
  import { cn } from "$lib";

  let { as = "div", class: className, children, ...attrs }: PrimitiveProps = $props();
</script>

<Primitive {as} class={cn("fixed", "pb-1", "bottom-0", "left-1/2","transform", "-translate-1/2", "z-[3]")}>
  {@render children?.()}
</Primitive>
