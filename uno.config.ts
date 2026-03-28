import { defineConfig, presetWind4, type StaticRule, toEscapedSelector as e } from "unocss";
import m3SveltePreset from "./src/lib/etc/unocss-preset";
import { colors } from "./src/lib/etc/colors";

const colorNames = colors.map((c) => c.name.replaceAll("_", "-"));

const easings = ["-fast-spatial", "-spatial", "-slow-spatial", "-fast", "", "-slow"];

const shadows = ["1", "2", "3", "4", "5"];

export default defineConfig({
  presets: [presetWind4(), m3SveltePreset()],
  rules: [
    // Color utilities (bg, text, outline)
    ...colorNames.map(
      (name) => [`bg-${name}`, { "background-color": `var(--m3c-${name})` }] as StaticRule,
    ),
    ...colorNames.map((name) => [`text-${name}`, { color: `var(--m3c-${name})` }] as StaticRule),
    ...colorNames.map(
      (name) => [`outline-${name}`, { "outline-color": `var(--m3c-${name})` }] as StaticRule,
    ),

    // Shadow utilities
    ...shadows.map(
      (s) => [`shadow-${s}`, { "box-shadow": `var(--m3-elevation-${s})` }] as StaticRule,
    ),

    // Transition utilities
    ...easings.map(
      (e) =>
        [
          `transition${e}`,
          {
            "transition-timing-function": `var(--m3-timing-function${e})`,
            "transition-duration": `var(--m3-duration${e})`,
          },
        ] as StaticRule,
    ),

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
      /^translucent-([a-z-]+)-(\d+)$/,
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
      /^w-d-(.+)$/,
      ([, size]) => ({
        width: `calc(${size} + (var(--density) * 0.25rem))`,
      }),
    ],
    [
      /^h-d-(.+)$/,
      ([, size]) => ({
        height: `calc(${size} + (var(--density) * 0.25rem))`,
      }),
    ],
  ],
});
