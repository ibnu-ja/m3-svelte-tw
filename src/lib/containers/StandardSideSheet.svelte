<script lang="ts">
  import { type Snippet } from "svelte";
  import iconX from "@ktibow/iconset-material-symbols/close";
  import Button from "$lib/buttons/Button.svelte";
  import Icon from "$lib/misc/_icon.svelte";

  let {
    headline,
    children,
    onclose,
  }: { headline: string; children: Snippet; onclose?: () => void } = $props();

  const handleOnClick = (e: MouseEvent & { currentTarget: any }) => {
    if (onclose != null) {
      e.preventDefault();
      onclose();
    }
  };
</script>

<div class="flex flex-col">
  <div class="flex items-center content-between p-6">
    <span class="m3-font-title-large">{headline}</span>
    <Button class="text-on-surface-variant" iconType="full" type="text" onclick={handleOnClick}>
      <Icon icon={iconX} />
    </Button>
  </div>
  {@render children()}
</div>
