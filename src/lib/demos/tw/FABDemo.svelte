<script lang="ts">
  import iconCircle from "@ktibow/iconset-material-symbols/circle-outline";
  import Arrows from "/src/routes/_arrowsnew.svelte";
  import InternalCard from "/src/routes/_card.svelte";
  import Slider from "$lib/forms/Slider.svelte";
  import FAB from "$lib/tw/buttons/FAB.svelte";
  import type { FABSize, FABColor } from "$lib/tw/buttons/FAB.svelte";

  let { showCode }: {
    showCode: (
      name: string,
      minimalDemoHtml: string,
      relevantLinks: { title: string; link: string }[],
    ) => void;
  } = $props();

  let color: NonNullable<FABColor> = $state("primary-container");
  const sizes = ["normal", "medium", "large"] as const satisfies NonNullable<FABSize>[];
  let sizeIndex = $state(0);
  let iconTextSetup: "icon" | "both" | "text" = $state("icon");

  const minimalDemoHtml = `&lt;FAB color="primary-container" size="normal" icon={iconCircle} onclick={() => alert("!")} /&gt;`;

  const relevantLinks = [
    {
      title: "FAB.svelte",
      link: "https://github.com/ibnu-ja/m3-svelte-tw/blob/feat/buttons/src/lib/tw/buttons/FAB.svelte",
    },
  ];
</script>

<InternalCard title="FAB" showCode={() => showCode("FAB", minimalDemoHtml, relevantLinks)}>
  <Arrows
    list={["primary-container", "secondary-container", "tertiary-container", "primary", "secondary", "tertiary"]}
    bind:value={color}
    label="Color"
  >
    {color[0].toUpperCase() + color.slice(1).replace("-", " ")}
  </Arrows>

  <Slider
    bind:value={sizeIndex}
    min={0}
    max={2}
    step={1}
    stops
    format={(n) => sizes[n][0].toUpperCase() + sizes[n].slice(1)}
  />

  <Arrows list={["icon", "both", "text"]} bind:value={iconTextSetup} label="Setup">
    {iconTextSetup == "icon" ? "Icon only" : iconTextSetup == "both" ? "Icon and text" : "Text only"}
  </Arrows>

  {#snippet demo()}
    {@const size = sizes[sizeIndex]}
    <div>
      <FAB
        {color}
        {size}
        {...iconTextSetup === "icon"
          ? { icon: iconCircle }
          : iconTextSetup === "both"
            ? { icon: iconCircle, text: "Hello" }
            : { text: "Hello" }}
        onclick={() => {}}
      />
    </div>
  {/snippet}
</InternalCard>
