<script lang="ts">
  import { ToggleGroup } from "bits-ui";
  import Switch from "$lib/forms/Switch.svelte";
  import Slider from "$lib/forms/Slider.svelte";
  import Arrows from "../../../routes/_arrows.svelte";
  import InternalCard from "../../../routes/_card.svelte";
  import { Button, buttonGroupVariants } from "$lib/tw";
  import type { ButtonVariant, ButtonSize } from "$lib/tw/buttons/Button.svelte";

  let {
    showCode,
  }: {
    showCode: (
      name: string,
      minimalDemoHtml: string,
      relevantLinks: { title: string; link: string }[],
    ) => void;
  } = $props();

  let variant: NonNullable<ButtonVariant> = $state("filled");
  const sizes = ["xs", "s", "m", "l", "xl"] as const satisfies NonNullable<ButtonSize>[];
  const sizeLabels = ["Extra small", "Small", "Medium", "Large", "Extra large"] as const;
  let sizeIndex = $state(1);
  let multiselect = $state(true);
  let groupDisabled = $state(false);
  let rovingFocus = $state(true);
  let itemCDisabled = $state(false);
  let mandatory = $state(false);
  let multiValue = $state<string[]>(["alpha"]);
  let singleValue = $state("alpha");

  const relevantLinks: { title: string; link: string }[] = [
    {
      title: "ButtonGroup.svelte",
      link: "https://github.com/KTibow/m3-svelte/blob/main/src/lib/tw/buttons/ButtonGroup.svelte",
    },
  ];
  const minimalDemoHtml =
    '<ToggleGroup.Root type="multiple" class={buttonGroupVariants()} bind:value={selected}>...' +
    "</ToggleGroup.Root>";
</script>

<InternalCard
  title="Connected buttons"
  showCode={() => showCode("Connected buttons", minimalDemoHtml, relevantLinks)}
>
  <label>
    <Arrows list={["filled", "tonal"]} bind:value={variant} />
    {variant[0].toUpperCase() + variant.slice(1)}
  </label>
  <label>
    <Switch bind:checked={multiselect}/>
    {multiselect ? "Multi-select" : "Single-select"}
  </label>
  {#if !multiselect}
    <label>
      <Switch bind:checked={mandatory}/>
      Mandatory: {mandatory ? "on" : "off"}
    </label>
  {/if}
  <label>
    <Switch bind:checked={rovingFocus}/>
    Roving focus: {rovingFocus ? "on" : "off"}
  </label>
  <label>
    <Switch bind:checked={groupDisabled}/>
    Group: {groupDisabled ? "disabled" : "enabled"}
  </label>
  <label>
    <Switch bind:checked={itemCDisabled}/>
    Item "A": {itemCDisabled ? "disabled" : "enabled"}
  </label>
  <Slider bind:value={sizeIndex} min={0} max={4} step={1} stops format={(n) => sizeLabels[n]}/>

  {#snippet demo()}
    {@const size = sizes[sizeIndex]}
    {@const items = [
      {label: "Alpha", value: "alpha", disabled: false},
      {label: "Beta", value: "beta", disabled: false},
      {label: "A", value: "a", disabled: itemCDisabled},
    ]}

    {#if multiselect}
      <ToggleGroup.Root
        type="multiple"
        bind:value={multiValue}
        disabled={groupDisabled}
        {rovingFocus}
        class={buttonGroupVariants()}
      >
        {#each items as item}
          <ToggleGroup.Item value={item.value} disabled={item.disabled}>
            {#snippet child({props: toggleProps})}
              <Button {variant} {size} shape="square" {...toggleProps}>
                {item.label}
              </Button>
            {/snippet}
          </ToggleGroup.Item>
        {/each}
      </ToggleGroup.Root>
      <p class="text-body-small text-on-surface-variant">
        Selected: {multiValue.join(", ") || "none"}
      </p>
    {:else}
      <ToggleGroup.Root
        type="single"
        bind:value={
          () => { return singleValue },
          (v) => { singleValue = (!mandatory || v !== "") ? v : singleValue; }
        }
        disabled={groupDisabled}
        {rovingFocus}
        class={buttonGroupVariants()}
      >
        {#each items as item}
          <ToggleGroup.Item value={item.value} disabled={item.disabled}>
            {#snippet child({props: toggleProps})}
              <Button {variant} {size} shape="square" {...toggleProps}>
                {item.label}
              </Button>
            {/snippet}
          </ToggleGroup.Item>
        {/each}
      </ToggleGroup.Root>
      <p class="text-body-small text-on-surface-variant">
        Selected: {singleValue || "none"}
      </p>
    {/if}
  {/snippet}
</InternalCard>
