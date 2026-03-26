<script lang="ts" module>
  import { tv } from "tailwind-variants";

  export const buttonGroupVariants = tv({
    base: "grid grid-flow-col auto-cols-fr gap-[0.125rem] [border-radius:var(--m3-shape-full)] overflow-hidden",
  });

  import type { Snippet } from "svelte";
  import type { DivAttrs } from "$lib/misc/typing-utils";

  export type ButtonGroupProps = {
    class?: string;
    children: Snippet;
  } & DivAttrs;
</script>

<script lang="ts">
  let {
    class: className = "",
    children,
    ...extra
  }: ButtonGroupProps = $props();

  const groupClass = $derived(buttonGroupVariants({ class: className }));
</script>

<div class={groupClass} {...extra}>
  {@render children()}
</div>
