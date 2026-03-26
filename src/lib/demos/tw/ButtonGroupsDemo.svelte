<script lang="ts">
  import Switch from "$lib/forms/Switch.svelte";
  import Slider from "$lib/forms/Slider.svelte";
  import Arrows from "../../../routes/_arrows.svelte";
  import InternalCard from "../../../routes/_card.svelte";
  import ConnectedButtons from "$lib/tw/buttons/ButtonGroups.svelte";
  import { Button } from "$lib/tw";
  import type { ButtonVariant, ButtonSize } from "$lib/tw/buttons/Button.svelte";

  let variant: ButtonVariant = $state("filled");
  let multiselect = $state(true);
  const sizes = ["xs", "s", "m", "l", "xl"] as const satisfies ButtonSize[];
  const sizeLabels = ["Extra small", "Small", "Medium", "Large", "Extra large"] as const;
  let sizeIndex = $state(1);

  let {
    showCode,
  }: {
    showCode: (
      name: string,
      minimalDemoHtml: string,
      relevantLinks: { title: string; link: string }[],
    ) => void;
  } = $props();

  const minimalDemoHtml = `\x3Cspan style="color:light-dark(#1F2328,#E6EDF3)">&#x3C;\x3C/span>\x3Cspan style="color:light-dark(#116329,#7EE787)">ConnectedButtons\x3C/span>\x3Cspan style="color:light-dark(#1F2328,#E6EDF3)">>\x3C/span>
\x3Cspan style="color:light-dark(#1F2328,#E6EDF3)">  &#x3C;\x3C/span>\x3Cspan style="color:light-dark(#116329,#7EE787)">Button\x3C/span>\x3Cspan style="color:light-dark(#1F2328,#E6EDF3)">>&#x3C;\x3C/span>\x3Cspan style="color:light-dark(#116329,#7EE787)">input\x3C/span>\x3Cspan style="color:light-dark(#0550AE,#79C0FF)"> type\x3C/span>\x3Cspan style="color:light-dark(#1F2328,#E6EDF3)">=\x3C/span>\x3Cspan style="color:light-dark(#0A3069,#A5D6FF)">"checkbox"\x3C/span>\x3Cspan style="color:light-dark(#CF222E,#FF7B72)"> bind\x3C/span>\x3Cspan style="color:light-dark(#1F2328,#E6EDF3)">:\x3C/span>\x3Cspan style="color:light-dark(#953800,#FFA657)">checked\x3C/span>\x3Cspan style="color:light-dark(#1F2328,#E6EDF3)">=\x3C/span>\x3Cspan style="color:light-dark(#CF222E,#FF7B72)">{\x3C/span>\x3Cspan style="color:light-dark(#1F2328,#E6EDF3)">itemA\x3C/span>\x3Cspan style="color:light-dark(#CF222E,#FF7B72)">}\x3C/span>\x3Cspan style="color:light-dark(#1F2328,#E6EDF3)"> />A&#x3C;/\x3C/span>\x3Cspan style="color:light-dark(#116329,#7EE787)">Button\x3C/span>\x3Cspan style="color:light-dark(#1F2328,#E6EDF3)">>\x3C/span>
\x3Cspan style="color:light-dark(#1F2328,#E6EDF3)">  &#x3C;\x3C/span>\x3Cspan style="color:light-dark(#116329,#7EE787)">Button\x3C/span>\x3Cspan style="color:light-dark(#1F2328,#E6EDF3)">>&#x3C;\x3C/span>\x3Cspan style="color:light-dark(#116329,#7EE787)">input\x3C/span>\x3Cspan style="color:light-dark(#0550AE,#79C0FF)"> type\x3C/span>\x3Cspan style="color:light-dark(#1F2328,#E6EDF3)">=\x3C/span>\x3Cspan style="color:light-dark(#0A3069,#A5D6FF)">"checkbox"\x3C/span>\x3Cspan style="color:light-dark(#CF222E,#FF7B72)"> bind\x3C/span>\x3Cspan style="color:light-dark(#1F2328,#E6EDF3)">:\x3C/span>\x3Cspan style="color:light-dark(#953800,#FFA657)">checked\x3C/span>\x3Cspan style="color:light-dark(#1F2328,#E6EDF3)">=\x3C/span>\x3Cspan style="color:light-dark(#CF222E,#FF7B72)">{\x3C/span>\x3Cspan style="color:light-dark(#1F2328,#E6EDF3)">itemB\x3C/span>\x3Cspan style="color:light-dark(#CF222E,#FF7B72)">}\x3C/span>\x3Cspan style="color:light-dark(#1F2328,#E6EDF3)"> />B&#x3C;/\x3C/span>\x3Cspan style="color:light-dark(#116329,#7EE787)">Button\x3C/span>\x3Cspan style="color:light-dark(#1F2328,#E6EDF3)">>\x3C/span>
\x3Cspan style="color:light-dark(#1F2328,#E6EDF3)">&#x3C;/\x3C/span>\x3Cspan style="color:light-dark(#116329,#7EE787)">ConnectedButtons\x3C/span>\x3Cspan style="color:light-dark(#1F2328,#E6EDF3)">>\x3C/span>`;
  const relevantLinks: { title: string; link: string }[] = [
    {
      title: "ButtonGroups.svelte",
      link: "https://github.com/KTibow/m3-svelte/blob/main/src/lib/buttons/ConnectedButtons.svelte",
    },
  ];
</script>

<InternalCard
  title="Connected buttons"
  showCode={() => showCode("Connected buttons", minimalDemoHtml, relevantLinks)}
>
  <label>
    <Arrows list={["filled", "tonal"]} bind:value={variant} />
    {variant![0].toUpperCase() + variant!.slice(1)}
  </label>
  <label>
    <Switch bind:checked={multiselect} />
    {multiselect ? "Multi-select" : "Single-select"}
  </label>
  <Slider bind:value={sizeIndex} min={0} max={4} step={1} stops format={(n) => sizeLabels[n]} />
  {#snippet demo()}
    {@const size = sizes[sizeIndex]}
    <ConnectedButtons>
      <Button {variant} {size} shape="square" label>
        <input type={multiselect ? "checkbox" : "radio"} checked name="connectedbuttons" />Alpha
      </Button>
      <Button {variant} {size} shape="square" label>
        <input type={multiselect ? "checkbox" : "radio"} name="connectedbuttons" />Beta
      </Button>
      <Button {variant} {size} shape="square" label>
        <input type={multiselect ? "checkbox" : "radio"} name="connectedbuttons" />A
      </Button>
    </ConnectedButtons>
  {/snippet}
</InternalCard>
