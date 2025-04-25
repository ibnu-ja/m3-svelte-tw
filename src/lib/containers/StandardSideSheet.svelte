<script lang="ts">
  import { type Snippet } from "svelte";
  import iconX from "@ktibow/iconset-material-symbols/close";
  import Button from "$lib/buttons/Button.svelte";
  import Icon from "$lib/misc/_icon.svelte";

  let { headline, children, onclose }: { headline: string, children: Snippet, onclose: () => void } = $props();
</script>

<div class="m3-container flex">
  <div class="header">
    <span class="m3-font-title-large">{headline}</span>
    <Button iconType="full" onclick={() => onclose()}>
      <Icon icon={iconX} />
    </Button>
  </div>
  {@render children()}
</div>

<style>
    .m3-container {
        flex-direction: column;
    }

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 1.5rem;
    }

    .header > :global(button.m3-container) {
        color: rgb(var(--m3-scheme-on-surface-variant));
    }
</style>
