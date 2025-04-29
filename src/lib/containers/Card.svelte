<script lang="ts">
  import type { HTMLAttributes, MouseEventHandler } from "svelte/elements";
  import Primitive from "$lib/primitive/Primitive.svelte";
  import type { PrimitiveProps } from "$lib/primitive";
  import { type CardVariantProps, cardVariants } from "$lib/containers/index";
  import type { Snippet } from "svelte";
  import { cn } from "$lib/misc/utils";
  import { Layer } from "$lib";

  interface CardProps extends PrimitiveProps {
    type?: CardVariantProps["type"];
    clickable?: boolean;
    //TODO fix any type
    onclick?: MouseEventHandler<any> | null;
    class?: HTMLAttributes<any>["class"];
    children?: Snippet;
  }

  let {
    type = "elevated",
    as = "div",
    clickable = false,
    class: className,
    onclick,
    children,
    ...attrs
  }: CardProps = $props();

  $effect(() => {
    if (clickable) {
      as = "button";
    }
  });

  const handleOnClick = (e: MouseEvent & { currentTarget: any }) => {
    if (onclick != null) {
      e.preventDefault();
      onclick(e);
    }
  };
</script>

<Primitive
  {as}
  class={cn(cardVariants({ type }), className)}
  onclick={handleOnClick}
  {...attrs}
>
  {#if clickable}
    <Layer />
  {/if}
  {@render children?.()}
</Primitive>
