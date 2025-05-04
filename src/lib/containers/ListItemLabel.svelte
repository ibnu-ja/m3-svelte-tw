<script lang="ts">
  import { type Snippet } from "svelte";
  import type { HTMLAttributes, HTMLButtonAttributes, HTMLLabelAttributes } from "svelte/elements";
  import type { PrimitiveProps } from "$lib/primitive";
  import { Layer } from "$lib/index";

  interface Props extends PrimitiveProps {
    lines: 1 | 2 | 3 | "1" | "2" | "3";
    overline?: string;
    headline?: string;
    supporting?: string;
    extraOptions?: HTMLLabelAttributes;
    leading?: Snippet;
    trailing?: Snippet;
  }

  let {
    lines,
    overline,
    headline,
    supporting,
    extraOptions,
    leading,
    trailing,
    ...attrs
  }: Props = $props();

  let _lines = $derived(lines || (overline && supporting ? 3 : overline || supporting ? 2 : 1));
</script>

<label class="flex pt-2 pr-6 pb-4 pl-4 items-center gap-4 lines-{_lines}" {...extraOptions}>
  <Layer />
  {@render leading?.()}
  <div class="body">
    {#if overline}
      <p class="overline m3-font-label-small">{overline}</p>
    {/if}
    <p class="headline m3-font-body-large">{headline}</p>
    {#if supporting}
      <p class="supporting m3-font-body-medium">{supporting}</p>
    {/if}
  </div>
  {@render trailing?.()}
</label>

<style>
  .m3-container {
    align-items: center;
    padding: 0.5rem 1.5rem 0.5rem 1rem;
    gap: 1rem;

    position: relative;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    transition: background-color 200ms;
  }

  .lines-1 {
    height: 3.5rem;
  }

  .lines-2 {
    height: 4.5rem;
  }

  .lines-3 {
    height: 5.5rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    align-items: flex-start;
  }

  .leading,
  .trailing {
    display: contents;
    color: rgb(var(--m3-scheme-on-surface-variant));
  }

  .leading > :global(svg),
  .trailing > :global(svg) {
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
  }

  p {
    margin: 0;
  }

  .supporting,
  .overline {
    color: rgb(var(--m3-scheme-on-surface-variant));
  }

  .headline {
    color: rgb(var(--m3-scheme-on-surface));
  }
</style>
