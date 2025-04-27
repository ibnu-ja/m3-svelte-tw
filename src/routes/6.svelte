<script lang="ts">
  import InternalCard from "./_card.svelte";
  import Button from "$lib/buttons/Button.svelte";
  import BottomSheet from "$lib/containers/BottomSheet.svelte";
  import type { DocData } from "./+page.svelte";

  let open = $state(false);

  const minimalDemo = `{#if open}
  ${"<"}BottomSheet close={() => (open = false)}>Hello${"<"}/BottomSheet>
{/if}`;
  const relevantLinks = [
    {
      "title": "BottomSheet.sv",
      "link": "https://github.com/KTibow/m3-svelte/blob/main/src/lib/containers/BottomSheet.svelte"
    }
  ];

  let { showCode }: { showCode: (docData: DocData) => void } = $props();
</script>

<InternalCard title="Bottom Sheet"
              showCode={() => showCode({ name: "Bottom Sheet", minimalDemo, relevantLinks })}>
  {#snippet demo()}
    <Button type="tonal" onclick={() => (open = true)}>Open</Button>
    {#if open}
      <BottomSheet close={() => (open = false)}>Hello</BottomSheet>
    {/if}
  {/snippet}
</InternalCard>
