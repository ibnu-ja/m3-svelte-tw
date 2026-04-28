<script lang="ts">
  import Switch from "$lib/forms/Switch.svelte";
  import Icon from "$lib/misc/Icon.svelte";
  import Divider from "$lib/misc/Divider.svelte";
  import InternalCard from "../../../routes/_card.svelte";
  import iconInbox from "@ktibow/iconset-material-symbols/inbox-outline";
  import iconStar from "@ktibow/iconset-material-symbols/star-outline";
  import iconDelete from "@ktibow/iconset-material-symbols/delete-outline";
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

  let showOverline = $state(false);
  let showSupporting = $state(false);
  let showLeading = $state(false);
  let showTrailing = $state(false);
  let interactive = $state(false);

  const items = [
    { headline: "Inbox", overline: "Mail", supporting: "3 new messages", trailing: "10:30", icon: iconInbox },
    { headline: "Starred", overline: "Mail", supporting: "No new messages", trailing: "Yesterday", icon: iconStar },
    { headline: "Trash", overline: "Mail", supporting: "Empty", trailing: "1 week ago", icon: iconDelete },
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
  <label>
    <Switch bind:checked={showOverline} />
    {showOverline ? "Overline" : "No overline"}
  </label>
  <label>
    <Switch bind:checked={showSupporting} />
    {showSupporting ? "Supporting" : "No supporting"}
  </label>
  <label>
    <Switch bind:checked={showLeading} />
    {showLeading ? "Leading icon" : "No leading"}
  </label>
  <label>
    <Switch bind:checked={showTrailing} />
    {showTrailing ? "Trailing" : "No trailing"}
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
        <ListItem {interactive}>
          {#if showLeading}
            <ListItemLeading>
              <Icon icon={item.icon} size={24} />
            </ListItemLeading>
          {/if}
          <ListItemContent>
            {#if showOverline}
              <ListItemOverline>{item.overline}</ListItemOverline>
            {/if}
            <ListItemHeadline>{item.headline}</ListItemHeadline>
            {#if showSupporting}
              <ListItemSupporting>{item.supporting}</ListItemSupporting>
            {/if}
          </ListItemContent>
          {#if showTrailing}
            <ListItemTrailing>{item.trailing}</ListItemTrailing>
          {/if}
        </ListItem>
      {/each}
    </div>
  {/snippet}
</InternalCard>
