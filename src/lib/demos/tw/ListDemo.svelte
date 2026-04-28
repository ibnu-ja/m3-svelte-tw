<script lang="ts">
  import Switch from "$lib/forms/Switch.svelte";
  import Icon from "$lib/misc/Icon.svelte";
  import Divider from "$lib/misc/Divider.svelte";
  import Arrows from "../../../routes/_arrowsnew.svelte";
  import InternalCard from "../../../routes/_card.svelte";
  import iconInbox from "@ktibow/iconset-material-symbols/inbox-outline";
  import iconStar from "@ktibow/iconset-material-symbols/star-outline";
  import iconDelete from "@ktibow/iconset-material-symbols/delete-outline";
  import iconChevronRight from "@ktibow/iconset-material-symbols/chevron-right";
  import iconImage from "@ktibow/iconset-material-symbols/image-outline";
  import iconPlayCircle from "@ktibow/iconset-material-symbols/play-circle-outline";
  import {
    ListItem,
    ListItemContent,
    ListItemHeadline,
    ListItemOverline,
    ListItemSupporting,
    ListItemLeading,
    ListItemTrailing,
  } from "$lib/tw";

  let {
    showCode,
  }: {
    showCode: (
      name: string,
      minimalDemoHtml: string,
      relevantLinks: { title: string; link: string }[],
    ) => void;
  } = $props();

  let leadingType = $state("icon");
  let trailingType = $state("none");
  let showOverline = $state(false);
  let showSupporting = $state(false);
  let interactive = $state(false);
  let selectedIdx = $state<number | null>(null);

  $effect(() => {
    if (!interactive) selectedIdx = null;
  });

  const items = [
    {
      headline: "Inbox",
      overline: "Mail",
      supporting: "3 new messages waiting",
      trailing: "10:30",
      icon: iconInbox,
      initial: "I",
    },
    {
      headline: "Starred",
      overline: "Favourites",
      supporting: "No new messages since last week",
      trailing: "Yesterday",
      icon: iconStar,
      initial: "S",
    },
    {
      headline: "Trash",
      overline: "System",
      supporting: "Lorem ipsum dolor sit amet consectetur adipiscing",
      trailing: "1 week ago",
      icon: iconDelete,
      initial: "T",
    },
  ];

  const minimalDemoHtml =
    "&lt;ListItem&gt;\n" +
    "  &lt;ListItemContent&gt;\n" +
    "    &lt;ListItemHeadline&gt;Inbox&lt;/ListItemHeadline&gt;\n" +
    "  &lt;/ListItemContent&gt;\n" +
    "&lt;/ListItem&gt;";

  const relevantLinks = [
    {
      title: "list/index.ts",
      link: "https://github.com/ibnu-ja/m3-svelte-tw/blob/feat/lists/src/lib/tw/list/index.ts",
    },
  ];
</script>

<InternalCard title="List" showCode={() => showCode("List", minimalDemoHtml, relevantLinks)}>
  <Arrows
    list={["none", "icon", "avatar", "image", "video"]}
    bind:value={leadingType}
    initialIndex={1}
    label="Leading"
  >
    {leadingType[0].toUpperCase() + leadingType.slice(1)}
  </Arrows>
  <Arrows
    list={["none", "text", "icon"]}
    bind:value={trailingType}
    initialIndex={0}
    label="Trailing"
  >
    {trailingType[0].toUpperCase() + trailingType.slice(1)}
  </Arrows>
  <label>
    <Switch bind:checked={showOverline} />
    {showOverline ? "Overline" : "No overline"}
  </label>
  <label>
    <Switch bind:checked={showSupporting} />
    {showSupporting ? "Supporting" : "No supporting"}
  </label>
  <label>
    <Switch bind:checked={interactive} />
    {interactive ? "Interactive" : "Static"}
  </label>

  {#snippet demo()}
    <div class="w-full">
      {#each items as item, i}
        {#if i > 0}
          <Divider />
        {/if}
        <ListItem
          {interactive}
          selected={interactive && selectedIdx === i}
          onclick={interactive ? () => { selectedIdx = selectedIdx === i ? null : i; } : undefined}
        >
          {#if leadingType !== "none"}
            <ListItemLeading>
              {#if leadingType === "icon"}
                <Icon icon={item.icon} size={24} />
              {:else if leadingType === "avatar"}
                <div
                  class="size-10 rounded-full bg-primary-container text-on-primary-container font-title-medium flex items-center justify-center"
                >
                  {item.initial}
                </div>
              {:else if leadingType === "image"}
                <div
                  class="w-d-14 h-d-14 bg-secondary-container text-on-secondary-container flex items-center justify-center overflow-hidden"
                >
                  <Icon icon={iconImage} size={24} />
                </div>
              {:else if leadingType === "video"}
                <div
                  class="w-[100px] h-d-14 rounded-sm bg-secondary-container text-on-secondary-container flex items-center justify-center overflow-hidden"
                >
                  <Icon icon={iconPlayCircle} size={24} />
                </div>
              {/if}
            </ListItemLeading>
          {/if}
          <ListItemContent>
            {#if showOverline}
              <ListItemOverline>{item.overline}</ListItemOverline>
            {/if}
            <ListItemHeadline>{item.headline}</ListItemHeadline>
            {#if showSupporting}
              <ListItemSupporting title={item.supporting}>{item.supporting}</ListItemSupporting>
            {/if}
          </ListItemContent>
          {#if trailingType !== "none"}
            <ListItemTrailing>
              {#if trailingType === "text"}
                {item.trailing}
              {:else if trailingType === "icon"}
                <Icon icon={iconChevronRight} size={24} />
              {/if}
            </ListItemTrailing>
          {/if}
        </ListItem>
      {/each}
    </div>
  {/snippet}
</InternalCard>
