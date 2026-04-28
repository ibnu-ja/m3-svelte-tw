import { defineConfig, presetWind4, type StaticRule, toEscapedSelector as e } from "unocss";
import m3SveltePreset from "./src/lib/etc/unocss-preset";
import { colors } from "./src/lib/etc/colors";

const colorNames = colors.map((c) => c.name.replaceAll("_", "-"));

const easings = ["-fast-spatial", "-spatial", "-slow-spatial", "-fast", "", "-slow"];

const shadows = ["1", "2", "3", "4", "5"];

// Surface container variants that may not be in colorNames (use raw CSS var directly)
const surfaceContainerExtras = [
  "surface-dim",
  "surface-bright",
  "surface-container-lowest",
  "surface-container-high",
  "surface-container-highest",
];

export default defineConfig({
  presets: [presetWind4(), m3SveltePreset()],
  rules: [
    // Color utilities (bg, text, outline, border)
    ...colorNames.map(
      (name) => [`bg-${name}`, { "background-color": `var(--m3c-${name})` }] as StaticRule,
    ),
    ...colorNames.map((name) => [`text-${name}`, { color: `var(--m3c-${name})` }] as StaticRule),
    ...colorNames.map(
      (name) => [`outline-${name}`, { "outline-color": `var(--m3c-${name})` }] as StaticRule,
    ),
    ...colorNames.map(
      (name) => [`border-${name}`, { "border-color": `var(--m3c-${name})` }] as StaticRule,
    ),

    // Surface container extras (ensure bg- utilities exist regardless of colorNames)
    ...surfaceContainerExtras.map(
      (name) => [`bg-${name}`, { "background-color": `var(--m3c-${name})` }] as StaticRule,
    ),

    // Shadow utilities
    ...shadows.map(
      (s) => [`shadow-${s}`, { "box-shadow": `var(--m3-elevation-${s})` }] as StaticRule,
    ),

    // Transition utilities
    ...easings.map((e) => {
      const name = e === "" ? "standard" : e.replace(/^-/, "");
      return [
        [`ease-m3-${name}`, { "transition-timing-function": `var(--m3-timing-function${e})` }] as StaticRule,
        [`duration-m3-${name}`, { "transition-duration": `var(--m3-duration${e})` }] as StaticRule,
        [
          `transition-m3-${name}`,
          {
            "transition-timing-function": `var(--m3-timing-function${e})`,
            "transition-duration": `var(--m3-duration${e})`,
          },
        ] as StaticRule,
      ];
    }).flat(),

    // Font utilities - fully controlled rule using @apply from src/lib/etc/styles.css
    [
      /^font-(display-large|display-medium|display-small|headline-large|headline-medium|headline-small|title-large|title-medium|title-small|label-large|label-medium|label-small|body-large|body-medium|body-small)$/,
      ([, name], { rawSelector }) => {
        const selector = e(rawSelector);
        return `${selector} {
  @apply --m3-${name};
}`;
      },
    ],

    // Translucent color utilities - use --translucent() function
    [
      /^bg-translucent-([a-z-]+)-(\d+)$/,
      ([, color, opacity]) => {
        const opacityValue = Number(opacity) / 100;
        return {
          "background-color": `--translucent(var(--m3c-${color}), ${opacityValue})`,
        };
      },
    ],
    [
      /^text-translucent-([a-z-]+)-(\d+)$/,
      ([, color, opacity]) => {
        const opacityValue = Number(opacity) / 100;
        return {
          color: `--translucent(var(--m3c-${color}), ${opacityValue})`,
        };
      },
    ],
    [
      /^outline-translucent-([a-z-]+)-(\d+)$/,
      ([, color, opacity]) => {
        const opacityValue = Number(opacity) / 100;
        return {
          "outline-color": `--translucent(var(--m3c-${color}), ${opacityValue})`,
        };
      },
    ],
    [
      /^w-d-(\d+(?:\.\d+)?|\[.+])$/,
      ([, size]) => ({
        width: size.startsWith("[") ? size.slice(1, -1) : `calc(${size} * 0.25rem)`,
      }),
    ],
    [
      /^h-d-(\d+(?:\.\d+)?|\[.+])$/,
      ([, size]) => ({
        height: size.startsWith("[") ? size.slice(1, -1) : `calc(${size} * 0.25rem)`,
      }),
    ],
  ],
});
