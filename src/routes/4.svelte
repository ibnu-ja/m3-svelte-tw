<script lang="ts">
  import iconCircle from "@ktibow/iconset-material-symbols/circle-outline";
  import Icon from "$lib/misc/_icon.svelte";
  import Arrows from "./_arrows.svelte";
  import InternalCard from "./_card.svelte";
  import ListItem from "$lib/containers/ListItem.svelte";
  import ListItemButton from "$lib/containers/ListItemButton.svelte";
  import ListItemLabel from "$lib/containers/ListItemLabel.svelte";
  import Checkbox from "$lib/forms/Checkbox.svelte";
  import Divider from "$lib/utils/Divider.svelte";
  import type { DocProps } from "./+page.svelte";
  import ListItemLeadingIcon from "$lib/containers/list-item/ListItemLeadingIcon.svelte";

  let lines: "1" | "2" | "3" = $state("1");
  let type: "div" | "button" | "label" = $state("div");
  const headline = "Hello";
  let supporting = $derived(
    lines === "1"
      ? undefined
      : lines == "2"
        ? "Welcome to ZomboCom!"
        : "Welcome to ZomboCom! Anything is possible at ZomboCom! You can do anything at ZomboCom!"
  );

  let ListComponent = $derived(type == "div" ? ListItem : type == "button" ? ListItemButton : ListItemLabel);


  let { showCode }: DocProps = $props();

  const minimalDemo = `${"<"}div>
  ${"<"}ListItem headline="Hello" />
  ${"<"}ListItem headline="Hello" />
${"<"}/div>`;
  const relevantLinks = [
    {
      title: "ListItem.sv",
      link: "https://github.com/KTibow/m3-svelte/blob/main/src/lib/containers/ListItem.svelte"
    },
    {
      title: "ListItemButton.sv",
      link: "https://github.com/KTibow/m3-svelte/blob/main/src/lib/containers/ListItemButton.svelte"
    },
    {
      title: "ListItemLabel.sv",
      link: "https://github.com/KTibow/m3-svelte/blob/main/src/lib/containers/ListItemLabel.svelte"
    }
  ];
</script>

<InternalCard title="List" showCode={() => showCode({ name: "List", minimalDemo, relevantLinks })}>

  <label>
    <Arrows list={["1", "2", "3"]} bind:value={lines} />
    {lines}
    {lines === "1" ? "line" : "lines"}
  </label>
  <label>
    <Arrows list={["div", "button", "label"]} bind:value={type} />
    {"<" + type + ">"}
  </label>
  {#snippet demo()}
    {#snippet leading()}
      {#if type === "label"}
        <div class="box-wrapper">
          <Checkbox><input type="checkbox" /></Checkbox>
        </div>
      {:else}
        <Icon icon={iconCircle} />
      {/if}
    {/snippet}
    <ListComponent
      {headline}
      {supporting}
      lines={lines}
    >
      {#snippet leading()}
        {#if type === "label"}
          <div class="box-wrapper">
            <Checkbox><input type="checkbox" /></Checkbox>
          </div>
        {:else}
          <ListItemLeadingIcon icon={iconCircle} />
        {/if}
      {/snippet}
      <!--<svelte:fragment slot="leading">{@render leading()}</svelte:fragment>-->
    </ListComponent>
    <Divider />
    <ListComponent
      {headline}
      {supporting}
      lines={lines}
    >
      {#snippet leading()}
        {#if type === "label"}
          <div class="box-wrapper">
            <Checkbox><input type="checkbox" /></Checkbox>
          </div>
        {:else}
          <ListItemLeadingIcon icon={iconCircle} />
        {/if}
      {/snippet}
      <!--<svelte:fragment slot="leading">{@render leading()}</svelte:fragment>-->
    </ListComponent>
  {/snippet}

  <style>
      .demo {
          display: flex;
          flex-direction: column;
      }

      .box-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 1.5rem;
          height: 1.5rem;
      }
  </style>
</InternalCard>
