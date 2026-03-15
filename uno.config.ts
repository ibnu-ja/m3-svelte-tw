import { defineConfig, presetWind4, type StaticRule } from "unocss";
import m3SveltePreset from "./src/lib/etc/unocss-preset";
import { colors } from "./src/lib/etc/colors";

const colorNames = colors.map((c) => c.name.replaceAll("_", "-"));

const easings = ["-fast-spatial", "-spatial", "-slow-spatial", "-fast", "", "-slow"];
const fontClasses = [
  "display-large",
  "display-medium",
  "display-small",
  "headline-large",
  "headline-medium",
  "headline-small",
  "title-large",
  "title-medium",
  "title-small",
  "label-large",
  "label-medium",
  "label-small",
  "body-large",
  "body-medium",
  "body-small",
];

const shadows = ["1", "2", "3", "4", "5"];

export default defineConfig({
  presets: [presetWind4(), m3SveltePreset()],
  rules: [
    // Color utilities (bg, text, outline)
    ...colorNames.map((name) => [
      `bg-${name}`,
      { "background-color": `var(--m3c-${name})` },
    ] as StaticRule),
    ...colorNames.map((name) => [
      `text-${name}`,
      { color: `var(--m3c-${name})` },
    ] as StaticRule),
    ...colorNames.map((name) => [
      `outline-${name}`,
      { "outline-color": `var(--m3c-${name})` },
    ] as StaticRule),
    
    // Shadow utilities
    ...shadows.map((s) => [
      `shadow-${s}`,
      { "box-shadow": `var(--m3-elevation-${s})` },
    ] as StaticRule),
    
    // Transition utilities
    ...easings.map((e) => [
      `transition${e}`,
      {
        "transition-timing-function": `var(--m3-timing-function${e})`,
        "transition-duration": `var(--m3-duration${e})`,
      },
    ] as StaticRule),
    
    // Font utilities
    ...fontClasses.map((c) => [
      `font-${c}`,
      {
        "font-family": "var(--m3-font)",
        "font-size": `var(--m3-font-size-${c})`,
        "line-height": `var(--m3-line-height-${c})`,
        "font-weight": `var(--m3-font-weight-${c})`,
        "letter-spacing": `var(--m3-letter-spacing-${c})`,
      },
    ] as StaticRule),
  ],
});
