<script lang="ts">
  import { cn } from "$lib";
  import type { Snippet } from "svelte";
  import type { HTMLDialogAttributes } from "svelte/elements";

  type Props = {
    children?: Snippet;
    class?: HTMLDialogAttributes["class"];
    [key: string]: any;
  };

  let { children, class: className, ...attrs }: Props = $props();
</script>

<div class={cn("m-auto", "flex", "flex-col", "p-6", "w-full", className)} {...attrs}>
  {@render children?.()}
</div>
