// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://masemagna.netlify.app",

  vite: {
    plugins: [tailwindcss()],
  },
  output: "static",
  adapter: netlify(),
});
