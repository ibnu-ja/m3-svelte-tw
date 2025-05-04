<script lang="ts">
  import type { IconifyIcon } from "@iconify/types";
  import type { Snippet } from "svelte";
  import type { SvelteHTMLElements } from "svelte/elements";
  import { cn } from "$lib/misc/utils";

  type Props = {
    icon: IconifyIcon
    width?: string
    height?: string
    children?: Snippet;
    class?: SvelteHTMLElements["svg"]["class"];
    [key: string]: any;
  };

  let { icon, width = "1em", height = "1em", class: className }: Props = $props();
</script>

<svg {width} {height} class={cn(className)} viewBox="0 0 {icon.width} {icon.height}">
  {@html icon.body}
</svg>
