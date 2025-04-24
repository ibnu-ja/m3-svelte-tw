<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import Layer from "$lib/misc/Layer.svelte";
  import type { Snippet } from "svelte";
  import { cn } from "$lib/misc/utils";
  import { buttonVariant, type ButtonVariant } from "$lib/buttons";

  type ButtonProps = {
    variant: ButtonVariant["variant"]
    size: ButtonVariant["size"],
    className?: HTMLAttributes<any>["class"],
    children: Snippet
    disabled?: boolean
  }

  const { variant, size, className, children, disabled }: ButtonProps = $props();
</script>

<button
  {disabled}
  class={cn(buttonVariant({ variant, size }), className)}
>
  <Layer />
  {@render children()}
</button>
