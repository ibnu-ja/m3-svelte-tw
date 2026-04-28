<script lang="ts">
  import Switch from "$lib/forms/Switch.svelte";
  import Checkbox from "$lib/forms/Checkbox.svelte";
  import RadioAnim1 from "$lib/forms/RadioAnim1.svelte";
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
  import iconDragIndicator from "@ktibow/iconset-material-symbols/drag-indicator";
  import iconWifi from "@ktibow/iconset-material-symbols/wifi";
  import iconBluetooth from "@ktibow/iconset-material-symbols/bluetooth";
  import iconNotifications from "@ktibow/iconset-material-symbols/notifications-outline";
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

  // ── Main demo ──
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

  // ── Draggable ──
  let draggableItems = $state([
    { headline: "Design system tokens", supporting: "Colors, typography, spacing" },
    { headline: "Component library", supporting: "Buttons, inputs, navigation" },
    { headline: "Documentation site", supporting: "Usage guides and examples" },
    { headline: "Unit tests", supporting: "Coverage for core components" },
  ]);
  let dragFromIdx = $state<number | null>(null);
  let dragOverIdx = $state<number | null>(null);

  function handleDragStart(i: number) {
    dragFromIdx = i;
  }
  function handleDragOver(e: DragEvent, i: number) {
    e.preventDefault();
    dragOverIdx = i;
  }
  function handleDrop(toIdx: number) {
    if (dragFromIdx === null) return;
    if (dragFromIdx !== toIdx) {
      const arr = [...draggableItems];
      const [moved] = arr.splice(dragFromIdx, 1);
      arr.splice(toIdx, 0, moved);
      draggableItems = arr;
    }
    dragFromIdx = null;
    dragOverIdx = null;
  }
  function handleDragEnd() {
    dragFromIdx = null;
    dragOverIdx = null;
  }

  // ── Actions ──
  let actionType = $state("checkbox");
  let checkedItems = $state([false, false, false]);
  let switchItems = $state([true, false, true]);
  let radioSelected = $state<number | null>(null);

  const actionItems = [
    { headline: "Wi-Fi", supporting: "Connected to Home-5G", icon: iconWifi },
    { headline: "Bluetooth", supporting: "On – 3 devices connected", icon: iconBluetooth },
    { headline: "Notifications", supporting: "All apps allowed", icon: iconNotifications },
  ];

  const relevantLinks = [
    {
      title: "list/index.ts",
      link: "https://github.com/ibnu-ja/m3-svelte-tw/blob/feat/lists/src/lib/tw/list/index.ts",
    },
  ];

  const minimalDemoHtml =
    "&lt;ListItem&gt;\n" +
    "  &lt;ListItemContent&gt;\n" +
    "    &lt;ListItemHeadline&gt;Inbox&lt;/ListItemHeadline&gt;\n" +
    "  &lt;/ListItemContent&gt;\n" +
    "&lt;/ListItem&gt;";

  const draggableHtml =
    "&lt;ListItem draggable={true} ondragstart={...} ondragover={...} ondrop={...}&gt;\n" +
    "  &lt;ListItemLeading&gt;\n" +
    "    &lt;span class=\"cursor-grab\"&gt;\n" +
    "      &lt;Icon icon={iconDragIndicator} size={24} /&gt;\n" +
    "    &lt;/span&gt;\n" +
    "  &lt;/ListItemLeading&gt;\n" +
    "  &lt;ListItemContent&gt;...&lt;/ListItemContent&gt;\n" +
    "&lt;/ListItem&gt;";

  const actionsHtml =
    "&lt;!-- Checkbox (select multiple) --&gt;\n" +
    "&lt;ListItem interactive onclick={() =&gt; checkedItems[i] = !checkedItems[i]}&gt;\n" +
    "  &lt;ListItemContent&gt;...&lt;/ListItemContent&gt;\n" +
    "  &lt;ListItemTrailing&gt;\n" +
    "    &lt;label&gt;&lt;Checkbox&gt;&lt;input type=\"checkbox\" /&gt;&lt;/Checkbox&gt;&lt;/label&gt;\n" +
    "  &lt;/ListItemTrailing&gt;\n" +
    "&lt;/ListItem&gt;";
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

<!-- Draggable -->
<InternalCard
  title="List — Draggable"
  showCode={() => showCode("List — Draggable", draggableHtml, relevantLinks)}
>
  {#snippet demo()}
    <div class="w-full">
      {#each draggableItems as item, i}
        {#if i > 0}
          <Divider />
        {/if}
        <ListItem
          class={[
            dragFromIdx === i ? "opacity-40" : "",
            dragOverIdx === i && dragFromIdx !== null && dragFromIdx !== i
              ? "bg-translucent-primary-8"
              : "",
          ]
            .filter(Boolean)
            .join(" ")}
          draggable={true}
          ondragstart={() => handleDragStart(i)}
          ondragover={(e: DragEvent) => handleDragOver(e, i)}
          ondrop={() => handleDrop(i)}
          ondragend={handleDragEnd}
        >
          <ListItemLeading>
            <span class="cursor-grab text-on-surface-variant">
              <Icon icon={iconDragIndicator} size={24} />
            </span>
          </ListItemLeading>
          <ListItemContent>
            <ListItemHeadline>{item.headline}</ListItemHeadline>
            <ListItemSupporting>{item.supporting}</ListItemSupporting>
          </ListItemContent>
        </ListItem>
      {/each}
    </div>
  {/snippet}
</InternalCard>

<!-- Actions -->
<InternalCard
  title="List — Actions"
  showCode={() => showCode("List — Actions", actionsHtml, relevantLinks)}
>
  <Arrows
    list={["checkbox", "switch", "radio"]}
    bind:value={actionType}
    initialIndex={0}
    label="Control"
  >
    {actionType[0].toUpperCase() + actionType.slice(1)}
  </Arrows>

  {#snippet demo()}
    <div class="w-full">
      {#each actionItems as item, i}
        {#if i > 0}
          <Divider />
        {/if}
        <ListItem
          interactive
          selected={actionType === "checkbox"
            ? checkedItems[i]
            : actionType === "switch"
              ? switchItems[i]
              : radioSelected === i}
          onclick={() => {
            if (actionType === "checkbox") checkedItems[i] = !checkedItems[i];
            else if (actionType === "switch") switchItems[i] = !switchItems[i];
            else radioSelected = i;
          }}
        >
          <ListItemLeading>
            <Icon icon={item.icon} size={24} />
          </ListItemLeading>
          <ListItemContent>
            <ListItemHeadline>{item.headline}</ListItemHeadline>
            <ListItemSupporting>{item.supporting}</ListItemSupporting>
          </ListItemContent>
          <ListItemTrailing>
            <!-- pointer-events-none: row click drives all interaction -->
            <span class="pointer-events-none">
              {#if actionType === "checkbox"}
                <label>
                  <Checkbox>
                    <input type="checkbox" checked={checkedItems[i]} tabindex="-1" />
                  </Checkbox>
                </label>
              {:else if actionType === "switch"}
                <Switch checked={switchItems[i]} />
              {:else if actionType === "radio"}
                <label>
                  <RadioAnim1>
                    <input
                      type="radio"
                      name="list-actions-radio"
                      checked={radioSelected === i}
                      tabindex="-1"
                    />
                  </RadioAnim1>
                </label>
              {/if}
            </span>
          </ListItemTrailing>
        </ListItem>
      {/each}
    </div>
  {/snippet}
</InternalCard>
