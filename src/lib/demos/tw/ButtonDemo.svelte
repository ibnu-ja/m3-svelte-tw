<script lang="ts">
    import iconCircle from "@ktibow/iconset-material-symbols/circle-outline";
    import iconSquare from "@ktibow/iconset-material-symbols/square-outline";
    import iconTriangle from "@ktibow/iconset-material-symbols/change-history-outline";
    import Switch from "$lib/forms/Switch.svelte";
    import Icon from "$lib/misc/Icon.svelte";
    import Slider from "$lib/forms/Slider.svelte";
    import Arrows from "../../../routes/_arrows.svelte";
    import InternalCard from "../../../routes/_card.svelte";
    import Button from "$lib/buttons/Button.svelte";
    let variant: "elevated" | "filled" | "tonal" | "outlined" | "text" = $state("filled");
    let action: "click" | "link" | "toggle" = $state("click");
    let square = $state(false);
    let iconType: "none" | "left" | "full" = $state("none");
    const sizes = ["xs", "s", "m", "l", "xl"] as const;
    const sizeLabels = ["Extra small", "Small", "Medium", "Large", "Extra large"] as const;
    let sizeIndex = $state(1);
    let enabled = $state(true);

    let { showCode }: { showCode: (
            name: string,
            minimalDemoHtml: string,
            relevantLinks: { title: string; link: string }[],
        ) => void } = $props();

    const minimalDemoHtml = `\x3Cspan style="color:light-dark(#1F2328,#E6EDF3)">&#x3C;\x3C/span>\x3Cspan style="color:light-dark(#116329,#7EE787)">Button\x3C/span>\x3Cspan style="color:light-dark(#0550AE,#79C0FF)"> variant\x3C/span>\x3Cspan style="color:light-dark(#1F2328,#E6EDF3)">=\x3C/span>\x3Cspan style="color:light-dark(#0A3069,#A5D6FF)">"elevated"\x3C/span>\x3Cspan style="color:light-dark(#0550AE,#79C0FF)"> onclick\x3C/span>\x3Cspan style="color:light-dark(#1F2328,#E6EDF3)">=\x3C/span>\x3Cspan style="color:light-dark(#CF222E,#FF7B72)">{\x3C/span>\x3Cspan style="color:light-dark(#1F2328,#E6EDF3)">() \x3C/span>\x3Cspan style="color:light-dark(#CF222E,#FF7B72)">=>\x3C/span>\x3Cspan style="color:light-dark(#8250DF,#D2A8FF)"> alert\x3C/span>\x3Cspan style="color:light-dark(#1F2328,#E6EDF3)">(\x3C/span>\x3Cspan style="color:light-dark(#0A3069,#A5D6FF)">"!"\x3C/span>\x3Cspan style="color:light-dark(#1F2328,#E6EDF3)">)\x3C/span>\x3Cspan style="color:light-dark(#CF222E,#FF7B72)">}\x3C/span>\x3Cspan style="color:light-dark(#1F2328,#E6EDF3)">>Hello&#x3C;/\x3C/span>\x3Cspan style="color:light-dark(#116329,#7EE787)">Button\x3C/span>\x3Cspan style="color:light-dark(#1F2328,#E6EDF3)">>\x3C/span>`;
    const relevantLinks: { title: string; link: string }[] = [{"title":"Button.svelte","link":"https://github.com/KTibow/m3-svelte/blob/main/src/lib/buttons/Button.svelte"}];
</script>

<InternalCard title="Button" showCode={() => showCode("Button", minimalDemoHtml, relevantLinks)}>
    <label>
        <Arrows
                list={["elevated", "filled", "tonal", "outlined", "text"]}
                bind:value={variant}
                initialIndex={1}
        />
        {variant[0].toUpperCase() + variant.slice(1)}
    </label>
    <label>
        <Arrows list={["click", "link", "toggle"]} bind:value={action} />
        {action[0].toUpperCase() + action.slice(1)}
    </label>
    <label>
        <Switch bind:checked={square} />
        {square ? "Square" : "Round"}
    </label>
    <label>
        <Arrows list={["none", "left", "full"]} bind:value={iconType} />
        {iconType == "none" ? "No icon" : iconType == "left" ? "Left icon" : "Icon"}
    </label>
    <Slider bind:value={sizeIndex} min={0} max={4} step={1} stops format={(n) => sizeLabels[n]} />
    <label>
        <Switch bind:checked={enabled} />
        {enabled ? "Enabled" : "Disabled"}
    </label>
    {#snippet demo()}
        <div>
            <Button
                    {variant}
                    {square}
                    size={sizes[sizeIndex]}
                    {...{
                        click: { onclick: () => {}, disabled: !enabled },
                        link: { href: "https://example.com" },
                        toggle: { label: true },
                    }[action]}
                    {iconType}
            >
                {#if action == "toggle"}
                    <input type="checkbox" disabled={!enabled} />
                {/if}
                {#if iconType == "none"}
                    Hello
                {:else if iconType == "left"}
                    <Icon icon={iconCircle} /> Hello
                {:else}
                    <Icon icon={iconCircle} />
                {/if}
            </Button>
        </div>
    {/snippet}

    <style>
        #button-input {
            position: absolute;
            opacity: 0;
            pointer-events: none;
        }
    </style>
</InternalCard>
