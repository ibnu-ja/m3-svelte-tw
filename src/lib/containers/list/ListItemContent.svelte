<script lang="ts">
  import { cn } from "$lib";
  import type { Snippet } from "svelte";
  import Primitive from "$lib/primitive/Primitive.svelte";
  import type { PrimitiveProps } from "$lib/primitive";
  import type { ClassValue } from "clsx";

  type Props = PrimitiveProps & {
    children?: Snippet;
    class?: ClassValue;
    [key: string]: any;
  };

  let { as = "div", children, class: className, ...attrs }: Props = $props();
</script>

<Primitive {as} class={cn("grow", className)} {...attrs}>
  {@render children?.()}
</Primitive>
