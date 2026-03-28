<script lang="ts">
  import iconCircle from "@ktibow/iconset-material-symbols/circle-outline";
  import iconSquare from "@ktibow/iconset-material-symbols/square-outline";
  import iconTriangle from "@ktibow/iconset-material-symbols/change-history-outline";
  import Switch from "$lib/forms/Switch.svelte";
  import Icon from "$lib/misc/Icon.svelte";
  import InternalCard from "/src/routes/_card.svelte";
  import { menuVariants, menuItemVariants } from "$lib/tw";
  import PressElement from "$lib/tw/primitive/PressElement.svelte";

  let icons = $state(false);

  const items = [
    { label: "Alpha", icon: iconCircle },
    { label: "Beta",  icon: iconSquare },
    { label: "Charlie", icon: iconTriangle, disabled: true },
  ];

  let { showCode }: {
    showCode: (
      name: string,
      minimalDemoHtml: string,
      relevantLinks: { title: string; link: string }[],
    ) => void;
  } = $props();

  const minimalDemoHtml = `<div class={menuVariants()}>
  <button class={menuItemVariants()}>Alpha</button>
</div>`;

  const relevantLinks = [
    { title: "menu/index.ts", link: "https://github.com/ibnu-ja/m3-svelte-tw/blob/main/src/lib/tw/menu/index.ts" },
  ];
</script>

<InternalCard title="Menu" showCode={() => showCode("Menu", minimalDemoHtml, relevantLinks)}>
  <label>
    <Switch bind:checked={icons} />
    {icons ? "Icons" : "No icons"}
  </label>
  {#snippet demo()}
    <div class={menuVariants()}>
      {#each items as item}
        <PressElement class={menuItemVariants()} disabled={item.disabled}>
          {#if icons}
            <span class="w-6 h-6 shrink-0 text-on-surface-variant [&>svg]:w-6 [&>svg]:h-6 [&>svg]:fill-current">
              <Icon icon={item.icon} size={24} />
            </span>
          {/if}
          {item.label}
        </PressElement>
      {/each}
    </div>
  {/snippet}
</InternalCard>
