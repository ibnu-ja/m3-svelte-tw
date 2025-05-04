<script lang="ts">
  import { cn } from "$lib/misc/utils";
  import type { Snippet } from "svelte";
  import type { SvelteHTMLElements } from "svelte/elements";

  type Props = {
    children?: Snippet;
    class?: SvelteHTMLElements["div"]["class"];
    [key: string]: any;
  };

  let { class: className, ...attrs }: Props = $props();
</script>

<div
  class={cn(
    "bg-on-surface-variant/40",
    "w-8",
    "h-1",
    "rounded",
    "forced-colors:bg-[canvastext]",
    className,
  )}
  {...attrs}
></div>
