<!--suppress JSXUnresolvedComponent -->
<script lang="ts">
  import iconCircle from "@ktibow/iconset-material-symbols/circle-outline";
  import InternalCard from "./_card.svelte";
  import Button from "$lib/buttons/Button.svelte";
  import { Dialog, DialogButtonsContainer, DialogContainer } from "$lib/containers/dialog";
  import type { DocProps } from "./+page.svelte";
  import { Icon } from "$lib";
  import DialogIcon from "$lib/containers/dialog/DialogIcon.svelte";
  import DialogHeadline from "$lib/containers/dialog/DialogHeadline.svelte";

  let open = $state(false);

  //const dispatch = createEventDispatcher();
  const minimalDemo = `<Dialog bind:open>
  <DialogContainer>
    <DialogIcon icon={iconCircle} />
    <DialogHeadline>Hello</DialogHeadline>
    <!--content-->
    <div class="grow m3-font-body-medium text-on-surface-variant mb-6 relative animate-opacity duration-200">
      Anything is possible at ZomboCom! You can do anything at ZomboCom! The infinite is possible at
      ZomboCom! The unattainable is unknown at ZomboCom!
    </div>
    <!--TODO divider-->
    <DialogButtonsContainer>
      <Button type="text" onclick={() => (open = false)}>Cancel</Button>
      <Button type="text" onclick={() => (open = false)}>OK</Button>
    </DialogButtonsContainer>
  </DialogContainer>
</Dialog>`;
  const relevantLinks = [{
    "title": "Dialog.sv",
    "link": "https://github.com/KTibow/m3-svelte/blob/main/src/lib/containers/Dialog.svelte",
  }];

  let { showCode }: DocProps = $props();
</script>

<InternalCard title="Dialog" showCode={() => showCode( { name: "Dialog", minimalDemo, relevantLinks })}>
  {#snippet demo()}
    <Button type="tonal" onclick={() => (open = true)}>Open</Button>
    <Dialog closeOnClick={false} bind:open>
      <DialogContainer>
        <DialogIcon icon={iconCircle} />
        <DialogHeadline>Hello</DialogHeadline>
        <!--content-->
        <div class="grow m3-font-body-medium text-on-surface-variant mb-6 relative animate-opacity duration-200">
          Anything is possible at ZomboCom! You can do anything at ZomboCom! The infinite is possible at
          ZomboCom! The unattainable is unknown at ZomboCom!
        </div>
        <!--TODO divider-->
        <DialogButtonsContainer>
          <Button type="text" onclick={() => (open = false)}>Cancel</Button>
          <Button type="text" onclick={() => (open = false)}>OK</Button>
        </DialogButtonsContainer>
      </DialogContainer>
    </Dialog>
  {/snippet}
</InternalCard>
