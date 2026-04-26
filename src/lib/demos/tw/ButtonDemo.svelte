<script lang="ts">
  import Switch from "$lib/forms/Switch.svelte";
  import Slider from "$lib/forms/Slider.svelte";
  import Arrows from "../../../routes/_arrowsnew.svelte";
  import InternalCard from "../../../routes/_card.svelte";
  import { Button, type ButtonVariant, type ButtonSize, type ButtonIconType  } from "$lib/tw";

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
  let square = $state(false);
  let iconType: NonNullable<ButtonIconType> = $state("none");
  const sizes = ["xs", "s", "m", "l", "xl"] as const satisfies NonNullable<ButtonSize>[];
  const sizeLabels = ["Extra small", "Small", "Medium", "Large", "Extra large"] as const;
  let sizeIndex = $state(1);
  let enabled = $state(true);

  const minimalDemoHtml =
    '&lt;Button variant="filled" size="s" shape="round" onclick={() =&gt; alert("!")}>' +
    "Hello" +
    "&lt;/Button>";
  const relevantLinks: { title: string; link: string }[] = [
    {
      title: "Button.svelte",
      link: "https://github.com/KTibow/m3-svelte/blob/main/src/lib/tw/buttons/Button.svelte",
    },
  ];
</script>

<InternalCard title="Button" showCode={() => showCode("Button", minimalDemoHtml, relevantLinks)}>
  <Arrows list={["elevated", "filled", "tonal", "outlined", "text"]} bind:value={variant} initialIndex={1} label="Variant">
    {variant[0].toUpperCase() + variant.slice(1)}
  </Arrows>
  <label>
    <Switch bind:checked={square} />
    {square ? "Square" : "Round"}
  </label>

  <Arrows list={["none", "left", "full"]} bind:value={iconType} initialIndex={0} label="Icon">
    {iconType[0].toUpperCase() + iconType.slice(1)}
  </Arrows>
  <Slider bind:value={sizeIndex} min={0} max={4} step={1} stops format={(n) => sizeLabels[n]} />
  <label>
    <Switch bind:checked={enabled} />
    {enabled ? "Enabled" : "Disabled"}
  </label>
  {#snippet demo()}
    <div>
      <Button
        {variant}
        shape={square ? "square" : "round"}
        {iconType}
        size={sizes[sizeIndex]}
        onclick={() => {}}
        disabled={!enabled}
      >
        {#if iconType == "full"}
          <svg viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
          </svg>
        {:else if iconType == "left"}
          <svg viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
          </svg>
        {/if}
        {#if iconType != "full"}Hello{/if}
      </Button>
    </div>
  {/snippet}
</InternalCard>
