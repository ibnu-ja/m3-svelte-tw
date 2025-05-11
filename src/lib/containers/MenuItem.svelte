<script lang="ts">
  import Icon from "$lib/misc/_icon.svelte";
  import Layer from "$lib/misc/Layer.svelte";
  import type { IconifyIcon } from "@iconify/types";
  import Primitive from "$lib/primitive/Primitive.svelte";
  import type { PrimitiveProps } from "$lib/primitive";
  import { cn } from "$lib/misc/utils";

  //export let icon: IconifyIcon | "space" | undefined = undefined;
  //export let disabled = false;

  type Props = PrimitiveProps & {
    disabled?: boolean;
    icon?: IconifyIcon | "space";
  };

  let { as = "button", class: className, disabled = false, children, icon }: Props = $props();
</script>

<Primitive
  {as}
  class={cn(
    "group",
    "m3-font-label-large",
    "flex",
    "items-center",
    "h-12",
    "py-0",
    "px-3",
    "whitespace-nowrap",
    "border-none",
    "relative",
    "bg-transparent",
    "text-on-surface",
    "cursor-pointer",
    "transition-all",
    "duration-200",
    "disabled:cursor-auto",
    "disabled:text-on-surface/38",
    className
  )}
  {disabled}
>
  <Layer />
  {#if icon === "space"}
    <span class="w-6 h-6 mr-3"></span>
  {:else if icon}
    <Icon
      height="1.5rem"
      width="1.5rem"
      class="group-disabled:text-on-surface/38 text-on-surface-variant mr-3"
      {icon}
    />
  {/if}
  {@render children?.()}
</Primitive>
