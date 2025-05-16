<script lang="ts">
  import Switch from "$lib/forms/Switch.svelte";
  import InternalCard from "./_card.svelte";
  import Button from "$lib/buttons/Button.svelte";
  import Snackbar, { type SnackbarIn } from "$lib/containers/Snackbar.svelte";
  import SnackbarAnim from "$lib/containers/SnackbarAnim.svelte";
  import type { DocProps } from "./+page.svelte";

  let animation = $state(true);
  let snackbar: ((data: SnackbarIn) => void) | undefined = $state();

  const minimalDemo = `${"<"}script lang="ts">
  let snackbar: (data: SnackbarIn) => void;
${"<"}/script>

${"<"}Button type="tonal" on:click={() => snackbar({ message: "Hello", closable: true })}>Show${"<"}/Button>
${"<"}Snackbar bind:show={snackbar} />`;

  const relevantLinks = [{
    "title": "Snackbar.sv",
    "link": "https://github.com/KTibow/m3-svelte/blob/main/src/lib/containers/Snackbar.svelte",
  }, {
    "title": "SnackbarAnim.sv",
    "link": "https://github.com/KTibow/m3-svelte/blob/main/src/lib/containers/SnackbarAnim.svelte",
  }];

  let { showCode }: DocProps = $props();

  let Comp = $derived(animation ? SnackbarAnim : Snackbar)

</script>

<InternalCard title="Snackbar" showCode={() => showCode({ name: "Snackbar", minimalDemo, relevantLinks })}>
  <label>
    <Switch bind:checked={animation} />
    {animation ? "#key animated" : "#if animated"}
  </label>
  {#snippet demo()}
    <Button type="tonal" onclick={() => snackbar?.({ message: "Hello", closable: true })}>Show</Button>
    <Comp bind:show={snackbar} />
  {/snippet}
</InternalCard>
