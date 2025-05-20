import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";

/** @type {import("@sveltejs/kit").Config} */
const config = {
  extensions: [".svelte", ".svx", ".md"],
  kit: {
    adapter: adapter(),
    paths: {
      relative: false,
    },
    prerender: {
      handleHttpError: "warn",
    },
  },
  preprocess: [vitePreprocess(), mdsvex({ extensions: [".svx", ".md"] })],
};

export default config;
