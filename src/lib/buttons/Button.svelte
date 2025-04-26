<script lang="ts">
  import type { HTMLAttributes, MouseEventHandler } from "svelte/elements";
  import Layer from "$lib/misc/Layer.svelte";
  import { cn } from "$lib/misc/utils";
  import { buttonVariants, type ButtonVariantProps } from "$lib/buttons";
  import type { Snippet } from "svelte";

  /*
  *   import type { HTMLButtonAttributes } from "svelte/elements";
  import Layer from "$lib/misc/Layer.svelte";
  export let display = "inline-flex";
  export let extraOptions: HTMLButtonAttributes = {};
  export let iconType: "none" | "left" | "full" = "none";
  export let type: "elevated" | "filled" | "tonal" | "outlined" | "text";
  export let disabled = false;
  * */

  type ButtonProps = {
    iconType?: ButtonVariantProps["iconType"]
    type?: ButtonVariantProps["type"]
    disabled?: ButtonVariantProps["disabled"]
    onclick?: MouseEventHandler<HTMLButtonElement> | null
    children?: Snippet,
    className?: HTMLAttributes<HTMLButtonElement>["class"]
  }

  let { iconType = "none", type = "elevated", disabled = false, children, className, onclick }: ButtonProps = $props();

</script>

<button
  {disabled}
  {onclick}
  class={cn(buttonVariants({ type, iconType }), className)}
>
  <Layer />
  {@render children?.()}
</button>
