import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { demosPlugin } from "./vite-plugin-demos";
import { llmsTxtPlugin } from "./vite-plugin-llms-txt";
import { shikiPlugin } from "./vite-plugin-shiki";
import { tokenShaker } from "vite-plugin-token-shaker";
import { functionsMixins } from "vite-plugin-functions-mixins";
import extractorSvelte from "@unocss/extractor-svelte";
import UnoCSS from "unocss/vite";

export default defineConfig({
  optimizeDeps: {
    exclude: ["bits-ui"],
  },
  plugins: [
    UnoCSS({
      extractors: [extractorSvelte()],
    }),
    sveltekit(),
    demosPlugin(),
    llmsTxtPlugin(),
    shikiPlugin(),
    tokenShaker(),
    functionsMixins(),
  ],
});
