<script lang="ts">
  import type { HTMLAttributes, MouseEventHandler } from "svelte/elements";
  import { cn, ripple } from "$lib/misc/utils";
  import type { Snippet } from "svelte";
  import Primitive from "$lib/primitive/Primitive.svelte";
  import type { PrimitiveProps } from "$lib/primitive";
  import { type ButtonVariantProps, buttonVariants } from "./";

  type Props = PrimitiveProps & {
    iconType?: ButtonVariantProps["iconType"]
    type?: ButtonVariantProps["type"]
    //TODO handle type any
    onclick?: MouseEventHandler<any> | null
    children?: Snippet,
    //TODO handle type any
    class?: HTMLAttributes<any>["class"],
  }

  let { as = 'button', iconType = "none", type = "elevated", disabled = false, children, class: className, onclick, ...attrs }: Props = $props();

</script>

<Primitive
  {as}
  {disabled}
  {onclick}
  class={cn(buttonVariants({ type, iconType }), className)}
  {@attach ripple()}
  {...attrs}
>
  {@render children?.()}
</Primitive>
