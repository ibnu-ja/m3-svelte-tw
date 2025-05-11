<script lang="ts">
  import Arrows from "./_arrows.svelte";
  import InternalCard from "./_card.svelte";
  import type { DocProps } from "./+page.svelte";
  import {
    Checkbox,
    List,
    ListItem,
    ListItemContent,
    ListItemIcon,
    ListItemLeadingImage,
    type ListItemLeadingImageVariants,
    ListItemText
  } from "$lib";
  import iconAccountCircle from "@ktibow/iconset-material-symbols/account-circle";
  import iconCircle from "@ktibow/iconset-material-symbols/circle-outline";

  let lines: "1" | "2" | "3" = $state("1");
  let type: "div" | "button" | "label" | "a" = $state("div");
  const headline = "Hello";
  const supporting =
    "Welcome to ZomboCom! Anything is possible at ZomboCom! You can do anything at ZomboCom! You can do anything at ZomboCom!";

  //let ListComponent = $derived(type == "div" ? ListItem : type == "button" ? ListItemButton : ListItemLabel);

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

  let leadingType: "avatar" | "image" | "thumbnail" | "icon" | "no leading" = $state("no leading");
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
  <label>
    <Arrows list={["avatar", "image", "thumbnail", "icon" ,"no leading"]} bind:value={leadingType} />
    {leadingType}
  </label>
  {#snippet demo()}
    <List>
      {#each Array(2) as _}
        <ListItem as={type} href={type === "a" ? "/" : undefined} {lines}>
          {#snippet leading()}
            {#if leadingType === "icon"}
              <ListItemIcon icon={iconAccountCircle} />
            {:else if leadingType !== "no leading"}
              <ListItemLeadingImage
                type={leadingType}
                src="https://ui-avatars.com/api/?background=0D8ABC&color=fff&size=128"
              />
            {/if}
          {/snippet}
          <ListItemContent>
            <ListItemText type="headline">{headline}</ListItemText>
            <!--TODO user still handle line-clamp class.-->
            {#if lines === "2" || lines === "3"}
              <ListItemText type="supporting">{supporting}</ListItemText>
            {/if}
          </ListItemContent>
          {#snippet trailing()}
            {#if type === "label"}
              <div class="flex items-center justify-center shrink-0 w-6 h-6">
                <Checkbox><input type="checkbox" /></Checkbox>
              </div>
            {:else}
              <ListItemIcon icon={iconCircle} />
            {/if}
          {/snippet}
        </ListItem>
      {/each}
    </List>
  {/snippet}
</InternalCard>
