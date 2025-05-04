<script lang="ts">
  import { cn, Icon } from "$lib";
  import type { Snippet } from "svelte";
  import type { HTMLDialogAttributes } from "svelte/elements";
  import iconCircle from "@ktibow/iconset-material-symbols/circle-outline";

  type Props = {
    children?: Snippet;
    class?: HTMLDialogAttributes["class"];
    [key: string]: any;
  };

  let { children, class: className, ...attrs }: Props = $props();
</script>

<Icon
  icon={iconCircle}
  class={cn("mb-4", "shrink", "h-6", "w-6", "text-secondary", "self-center", className)}
  {...attrs}
/>
