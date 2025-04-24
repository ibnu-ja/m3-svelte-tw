<!--<svelte:options customElement="my-stepper" />-->

<script lang="ts">
  import type { ComponentProps } from "svelte";
  import iconCircle from "@ktibow/iconset-material-symbols/circle-outline";
  import Icon from "$lib/misc/_icon.svelte";
  import Arrows from "./_arrows.svelte";
  import InternalCard from "./_card.svelte";
  import Button from "$lib/buttons/Button.svelte";
  import type { DocData } from "./+page.svelte";

  let { showCode }: { showCode: (docData: DocData) => void } = $props();

  const minimalDemo = `${"<"}Button type="elevated" on:click={() => alert("!")}>Hello${"<"}/Button>`;
  const relevantLinks = [{
    "title": "Button.sv",
    "link": "https://github.com/KTibow/m3-svelte/blob/main/src/lib/buttons/Button.svelte"
  }, {
    "title": "ButtonLink.sv",
    "link": "https://github.com/KTibow/m3-svelte/blob/main/src/lib/buttons/ButtonLink.svelte"
  }];

  let variant: ComponentProps<typeof Button>["variant"] = $state("elevated");
  let size: ComponentProps<typeof Button>["size"] = $state();
  let disabled: ComponentProps<typeof Button>["disabled"] = $state();

  const availableVariant = ["elevated", "filled", "tonal", "outlined", "text"];


</script>

<InternalCard eventDispatcher={() => {showCode({ name: "Button", minimalDemo, relevantLinks })}} title="Button">
  {#if variant != null}
    <label>
      <Arrows list={availableVariant} bind:value={variant} />
      {variant[0].toUpperCase() + variant.slice(1)}
    </label>
  {/if}
  <!--<label>-->
  <!--  <Arrows list={["none", "left", "full"]} bind:value={iconType} />-->
  <!--  {iconType == "none" ? "No icon" : iconType == "left" ? "Left icon" : "Icon"}-->
  <!--</label>-->
  <!--<label>-->
  <!--  <Switch bind:checked={enabled} />-->
  <!--  {enabled ? "Enabled" : "Disabled"}-->
  <!--</label>-->
  <!--<label>-->
  <!--  <Switch bind:checked={link} />-->
  <!--  {link ? "Link" : "Button"}-->
  <!--</label>-->
  {#snippet demo()}
    <Button {size} {variant} {disabled}>
      {#if size === "icon-left"}
        <Icon icon={iconCircle} />
        Hello
      {:else if size === "icon-full"}
        <Icon icon={iconCircle} />
      {:else}
        Hello
      {/if}
    </Button>
  {/snippet}
</InternalCard>
