<script lang="ts">
  import iconCircle from "@ktibow/iconset-material-symbols/circle-outline";
  import iconSquare from "@ktibow/iconset-material-symbols/square-outline";
  import iconTriangle from "@ktibow/iconset-material-symbols/change-history-outline";
  import Icon from "$lib/misc/Icon.svelte";
  import Arrows from "/src/routes/_arrows.svelte";
  import InternalCard from "/src/routes/_card.svelte";
  import { SplitButton, menuVariants, menuItemVariants } from "$lib/tw";
  import type { ButtonVariant, ButtonSize, SplitButtonProps } from "$lib/tw";

  let variant: NonNullable<ButtonVariant> = $state("filled");
  let size: NonNullable<ButtonSize> = $state("s");
  let side: NonNullable<SplitButtonProps["side"]> = $state("bottom");
  let align: NonNullable<SplitButtonProps["align"]> = $state("start");
  let iconType: "none" | "left" | "full" = $state("none");

  let { showCode }: {
    showCode: (
      name: string,
      minimalDemoHtml: string,
      relevantLinks: { title: string; link: string }[],
    ) => void;
  } = $props();

  const minimalDemoHtml = `<SplitButton variant="filled" onclick={() => {}}>
  Hello
  {#snippet menu()}
    <div class={menuVariants()}>
      <button class={menuItemVariants()}>Alpha</button>
    </div>
  {/snippet}
</SplitButton>`;

  const relevantLinks = [
    {
      title: "SplitButton.svelte",
      link: "https://github.com/ibnu-ja/m3-svelte-tw/blob/main/src/lib/tw/buttons/SplitButton.svelte",
    },
  ];

  const items = [
    { label: "Alpha", icon: iconCircle },
    { label: "Beta", icon: iconSquare },
    { label: "Charlie", icon: iconTriangle },
  ];
</script>

<InternalCard title="Split button" showCode={() => showCode("Split button", minimalDemoHtml, relevantLinks)}>
  <label>
    <Arrows list={["filled", "tonal", "elevated", "outlined"]} bind:value={variant} initialIndex={0} />
    {variant[0].toUpperCase() + variant.slice(1)}
  </label>
  <label>
    <Arrows list={["s", "xs", "m", "l", "xl"]} bind:value={size} />
    Size: {size}
  </label>
  <label>
    <Arrows list={["bottom", "top"]} bind:value={side} />
    Side: {side}
  </label>
  <label>
    <Arrows list={["start", "center", "end"]} bind:value={align} />
    Align: {align}
  </label>
  <label>
    <Arrows list={["none", "left", "full"]} bind:value={iconType} />
    {iconType === "none" ? "No icon" : iconType === "left" ? "Left icon" : "Icon"}
  </label>

  {#snippet demo()}
    <div>
      <SplitButton {variant} {size} {side} {align} onclick={() => {}}>
        {#if iconType === "none"}
          Hello
        {:else if iconType === "left"}
          <Icon icon={iconCircle} /> Hello
        {:else}
          <Icon icon={iconCircle} />
        {/if}
        {#snippet menu()}
          <div class={menuVariants()}>
            {#each items as item}
              <button class={menuItemVariants()}>
              <span class="w-6 h-6 shrink-0 text-on-surface-variant [&>svg]:w-6 [&>svg]:h-6 [&>svg]:fill-current">
                <Icon icon={item.icon} size={24} />
              </span>
                {item.label}
              </button>
            {/each}
          </div>
        {/snippet}
      </SplitButton>
    </div>
  {/snippet}
</InternalCard>
