<script lang="ts">
  import InternalCard from "./_card.svelte";
  import Button from "$lib/buttons/Button.svelte";
  import type { DocData, DocProps } from "./+page.svelte";
  import { BottomSheet, BottomSheetContainer, BottomSheetHandle, BottomSheetHandleContainer } from "$lib/containers/bottom-sheet";

  let open = $state(false);

  const minimalDemo = `{#if open}
  <BottomSheet close={() => (open = false)}>
    <BottomSheetContainer>
      <BottomSheetHandleContainer>
        <BottomSheetHandle></BottomSheetHandle>
      </BottomSheetHandleContainer>
      <div>
        Hello
      </div>
    </BottomSheetContainer>
  </BottomSheet>
{/if}`;
  const relevantLinks = [
    {
      "title": "BottomSheet.sv",
      "link": "https://github.com/KTibow/m3-svelte/blob/main/src/lib/containers/BottomSheet.svelte"
    }
  ];

  let { showCode }: DocProps = $props();
</script>

<InternalCard title="Bottom sheet" showCode={() => showCode({ name: "Bottom Sheet", minimalDemo, relevantLinks })}>
  {#snippet demo()}
    <Button type="tonal" onclick={() => (open = true)}>Open</Button>
    {#if open}
      <BottomSheet close={() => (open = false)}>
        <BottomSheetContainer>
          <BottomSheetHandleContainer>
            <BottomSheetHandle></BottomSheetHandle>
          </BottomSheetHandleContainer>
          <div>
            Hello
          </div>
        </BottomSheetContainer>
      </BottomSheet>
    {/if}
  {/snippet}
</InternalCard>
