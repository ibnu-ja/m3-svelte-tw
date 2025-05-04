<!--suppress JSXUnresolvedComponent -->
<script lang="ts">
  import iconCircle from "@ktibow/iconset-material-symbols/circle-outline";
  import InternalCard from "./_card.svelte";
  import Button from "$lib/buttons/Button.svelte";
  import Dialog from "$lib/containers/Dialog.svelte";
  import type { DocProps } from "./+page.svelte";
  import { Icon } from "$lib";

  let open = $state(false);

  //const dispatch = createEventDispatcher();
  const minimalDemo = `<Dialog bind:open>
  <h4 class="m3-font-headline-small text-on-surface mt-0 mb-4 animate-[opacity_150ms]">Hello</h4>
  <div class="grow m3-font-body-medium text-on-surface-variant mb-6 relative animate-[opacity_200ms]">
    Anything is possible at ZomboCom! You can do anything at ZomboCom! The infinite is possible at
    ZomboCom! The unattainable is unknown at ZomboCom!
  </div>
  <div class="flex justify-end gap-2 animation-[buttonsIn_500ms_var(--m3-easing-decel)] animate-[opacity_200ms_100ms_backwards]">
    <Button type="tonal" onclick={() => (open = false)}>OK</Button>
  </div>
</Dialog>;`;
  const relevantLinks = [{
    "title": "Dialog.sv",
    "link": "https://github.com/KTibow/m3-svelte/blob/main/src/lib/containers/Dialog.svelte",
  }];

  let { showCode }: DocProps = $props();
</script>

<InternalCard title="Dialog" showCode={() => showCode( { name: "Dialog", minimalDemo, relevantLinks })}>
  {#snippet demo()}
    <Button type="tonal" onclick={() => (open = true)}>Open</Button>
    <Dialog bind:open>
      <div class="m-auto flex flex-col p-6 w-full">
        <Icon icon={iconCircle} class="mb-4 shrink h-6 w-6 text-secondary self-center" />
        <!--headline/icon-->
        <h4 class="m3-font-headline-small text-center text-on-surface mt-0 mb-4 animate-opacity duration-150">Hello</h4>
        <!--content-->
        <div class="grow m3-font-body-medium text-on-surface-variant mb-6 relative animate-opacity duration-200">
          Anything is possible at ZomboCom! You can do anything at ZomboCom! The infinite is possible at
          ZomboCom! The unattainable is unknown at ZomboCom!
        </div>
        <div class="flex justify-end gap-2 animation-[buttonsIn_500ms_var(--m3-easing-decel),_opacity_200ms_100ms_backwards]">
          <Button type="text" onclick={() => (open = false)}>Cancel</Button>
          <Button type="text" onclick={() => (open = false)}>OK</Button>
        </div>
      </div>
    </Dialog>
  {/snippet}
</InternalCard>
