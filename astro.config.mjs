// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://meganegirl-architecture.dev",
  integrations: [mdx(), sitemap()],
  output: "static",

  vite: {
    plugins: [tailwindcss()],
  },
});