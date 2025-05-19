<script lang="ts">
  import { cn, ripple } from "$lib/misc/utils";
  import type { Snippet } from "svelte";
  import type { BaseProps } from "$lib/primitive";
  import { type ButtonVariantProps, buttonVariants } from "./index";
  import type { KeyboardEventHandler, MouseEventHandler } from "svelte/elements";
  import { Button as ButtonPrimitive } from "bits-ui";

  type Props = BaseProps & {
    iconType?: ButtonVariantProps["iconType"]
    type?: ButtonVariantProps["type"]
    onclick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
    onkeydown?: KeyboardEventHandler<HTMLButtonElement | HTMLAnchorElement>
    children?: Snippet,
  }

  let {
    iconType = "none",
    type = "elevated",
    disabled = false,
    children,
    class: className,
    onclick,
    onkeydown,
    ...attrs
  }: Props = $props();

</script>

<ButtonPrimitive.Root
  {disabled}
  {onclick}
  {onkeydown}
  class={cn(buttonVariants({ type, iconType }), className)}
  {@attach ripple()}
  {...attrs}
>
  {@render children?.()}
</ButtonPrimitive.Root>
