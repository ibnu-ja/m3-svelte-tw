<script lang="ts">
  import iconCircle from "@ktibow/iconset-material-symbols/circle-outline";
  import Arrows from "./_arrows.svelte";
  import InternalCard from "./_card.svelte";
  import Checkbox from "$lib/forms/Checkbox.svelte";
  import type { DocProps } from "./+page.svelte";
  import { Divider, List, ListItem, ListItemContent, ListItemIcon, ListItemText } from "$lib";

  let lines: "1" | "2" | "3" = $state("1");
  let type: "div" | "button" | "label" | "a" = $state("div");
  const headline = "Hello";
  const supporting = "Welcome to ZomboCom! Anything is possible at ZomboCom! You can do anything at ZomboCom!";

  //let ListComponent = $derived(type == "div" ? ListItem : type == "button" ? ListItemButton : ListItemLabel);

  let { showCode }: DocProps = $props();

  const minimalDemo = `${"<"}div>
  ${"<"}ListItem headline="Hello" />
  ${"<"}ListItem headline="Hello" />
${"<"}/div>`;
  const relevantLinks = [
    {
      title: "ListItem.sv",
      link: "https://github.com/KTibow/m3-svelte/blob/main/src/lib/containers/ListItem.svelte",
    },
    {
      title: "ListItemButton.sv",
      link: "https://github.com/KTibow/m3-svelte/blob/main/src/lib/containers/ListItemButton.svelte",
    },
    {
      title: "ListItemLabel.sv",
      link: "https://github.com/KTibow/m3-svelte/blob/main/src/lib/containers/ListItemLabel.svelte",
    },
  ];

  let clampClass = $derived.by(() => {
    if (lines === "2") return "line-clamp-1";
    if (lines === "3") return "line-clamp-2";
    return undefined;
  });
</script>

<InternalCard title="List" showCode={() => showCode({ name: "List", minimalDemo, relevantLinks })}>
  <label>
    <Arrows list={["1", "2", "3"]} bind:value={lines} />
    {lines}
    {lines === "1" ? "line" : "lines"}
  </label>
  <label>
    <Arrows list={["div", "button", "label", "a"]} bind:value={type} />
    {"<" + type + ">"}
  </label>
  {#snippet demo()}
    <List>
      <ListItem as={type} href={type === "a" ? "/" : undefined} {lines}>
        {#snippet leading()}
          {#if type === "label"}
            <div class="flex items-center justify-center shrink-0 w-6 h-6">
              <Checkbox><input type="checkbox" /></Checkbox>
            </div>
          {:else}
            <ListItemIcon icon={iconCircle} />
          {/if}
        {/snippet}
        <ListItemContent>
          <ListItemText type="headline">{headline}</ListItemText>
          <!--TODO user still handle line-clamp class.-->
          {#if clampClass}
            <ListItemText type="supporting" class={clampClass}>{supporting}</ListItemText>
          {/if}
        </ListItemContent>
      </ListItem>
      <Divider />
      <ListItem as={type} href={type === "a" ? "/" : undefined} {lines}>
        {#snippet leading()}
          {#if type === "label"}
            <div class="flex items-center justify-center shrink-0 w-6 h-6">
              <Checkbox><input type="checkbox" /></Checkbox>
            </div>
          {:else}
            <ListItemIcon icon={iconCircle} />
          {/if}
        {/snippet}
        <ListItemContent>
          <ListItemText type="headline">{headline}</ListItemText>
          <!--TODO user still handle line-clamp class.-->
          {#if clampClass}
            <ListItemText type="supporting" class={clampClass}>{supporting}</ListItemText>
          {/if}
        </ListItemContent>
      </ListItem>
    </List>
  {/snippet}
</InternalCard>
