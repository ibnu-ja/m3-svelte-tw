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

<div
  class={cn(
    "flex",
    "justify-end",
    "gap-2",
    "animation-[buttonsIn_500ms_var(--m3-easing-decel),_opacity_200ms_100ms_backwards]",
    className,
  )}
  {...attrs}
>
  {@render children?.()}
</div>
