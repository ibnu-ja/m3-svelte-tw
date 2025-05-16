<script lang="ts">
  import Primitive from "$lib/primitive/Primitive.svelte";
  import type { PrimitiveProps } from "$lib/primitive";
  import { cn } from "$lib";
  import type { MouseEventHandler } from "svelte/elements";

  type Props = PrimitiveProps & {
    onclick: MouseEventHandler<HTMLButtonElement>
  }

  let { as = "button", class: className, onclick, ...attrs }:  = $props();
</script>

<Primitive
  class={cn(
    "m3-font-label-large",
    "flex",
    "self-stretch",
    "items-center",
    "m-0",
    "py-0",
    "px-2",
    "border-none",
    "bg-transparent",
    "text-inverse-primary",
    "cursor-pointer",
    "transition-all",
    "duration-200",
    className
  )}
  {onclick}
  <!--={() => {-->
  <!--  snackbar = undefined;-->
  <!--  action();-->
  <!--}}-->
  {attrs}
>
  {@render children?.()}
</Primitive>
<button onclick >a</button>