<script lang="ts">
  import Switch from "$lib/forms/Switch.svelte";
  import Arrows from "./_arrows.svelte";
  import InternalCard from "./_card.svelte";
  import Card from "$lib/containers/Card.svelte";
  import CardClickable from "$lib/containers/CardClickable.svelte";
  import type { DocProps } from "./+page.svelte";

  let type: "elevated" | "filled" | "outlined" = $state("elevated");
  let clickable = $state(false);

  const minimalDemo = `<Card type="filled">Hello</Card>
<CardClickable type="filled" on:click={() => alert("!")}>Hello</CardClickable>`;
  const relevantLinks = [{
    "title": "Card.sv",
    "link": "https://github.com/KTibow/m3-svelte/blob/main/src/lib/containers/Card.svelte",
  },];

  let { showCode }: DocProps = $props();
</script>

<InternalCard title="Card" showCode={() => showCode({ name: "Card", minimalDemo, relevantLinks })}>
  <label>
    <Arrows list={["elevated", "filled", "outlined"]} bind:value={type} />
    {type[0].toUpperCase() + type.slice(1)}
  </label>
  <label>
    <Switch bind:checked={clickable} />
    {clickable ? "Clickable" : "Not clickable"}
  </label>
  {#snippet demo()}
    <div>
      <Card {clickable} {type}>Hello</Card>
    </div>
  {/snippet}
</InternalCard>
