<script lang="ts">
  import iconChevronLeft from "@ktibow/iconset-material-symbols/chevron-left";
  import iconChevronRight from "@ktibow/iconset-material-symbols/chevron-right";
  import Icon from "$lib/misc/Icon.svelte";
  import { Button } from "$lib/tw/buttons";
  import type { Snippet } from "svelte";

  let {
    list,
    value = $bindable(),
    initialIndex = 0,
    label,
    children,
  }: {
    list: string[];
    value?: string;
    initialIndex?: number;
    label?: string;
    children?: Snippet;
  } = $props();

  let index = $state.raw(initialIndex);
  $effect(() => { value = list[index]; });

  const left = () => { index = (index == 0 ? list.length : index) - 1; };
  const right = () => { index = (index + 1 == list.length ? -1 : index) + 1; };
</script>

<div class="flex items-center gap-2">
  <div
    role="group"
    aria-label={label ?? value}
    class="w-fit inline-grid grid-cols-[auto_auto] gap-[0.125rem] [--outer:1.25rem] [--half:var(--m3-shape-medium)] [--inner:var(--m3-shape-extra-small)] [print-color-adjust:exact]"
  >
    <Button
      variant="filled"
      size="xs"
      iconType="full"
      aria-label="Previous"
      class="![border-start-start-radius:var(--outer)] ![border-end-start-radius:var(--outer)] ![border-start-end-radius:var(--inner)] ![border-end-end-radius:var(--inner)] hover:![border-start-end-radius:var(--half)] hover:![border-end-end-radius:var(--half)] active:![border-start-end-radius:var(--half)] active:![border-end-end-radius:var(--half)] ![transition:border-start-end-radius_var(--m3-easing-fast-spatial),border-end-end-radius_var(--m3-easing-fast-spatial),box-shadow_var(--m3-easing-fast),background-color_var(--m3-easing-fast),color_var(--m3-easing-fast)]"
      onclick={left}
    >
      <Icon icon={iconChevronLeft} />
    </Button>
    <Button
      variant="filled"
      size="xs"
      iconType="full"
      aria-label="Next"
      class="![border-start-start-radius:var(--inner)] ![border-end-start-radius:var(--inner)] ![border-start-end-radius:var(--outer)] ![border-end-end-radius:var(--outer)] hover:![border-start-start-radius:var(--half)] hover:![border-end-start-radius:var(--half)] active:![border-start-start-radius:var(--half)] active:![border-end-start-radius:var(--half)] ![transition:border-start-start-radius_var(--m3-easing-fast-spatial),border-end-start-radius_var(--m3-easing-fast-spatial),box-shadow_var(--m3-easing-fast),background-color_var(--m3-easing-fast),color_var(--m3-easing-fast)]"
      onclick={right}
    >
      <Icon icon={iconChevronRight} />
    </Button>
  </div>
  {#if children}
    <span aria-hidden="true">{@render children()}</span>
  {/if}
</div>
