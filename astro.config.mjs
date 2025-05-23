// @ts-nocheck
import { defineConfig, fontProviders } from "astro/config"

import tailwindcss from "@tailwindcss/vite"

import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Geist",
        cssVariable: "--font-geist",
        weights: ["100 900"],
        styles: ["normal"],
        subsets: ["latin"],
      },
      {
        provider: fontProviders.google(),
        name: "Geist Mono",
        cssVariable: "--font-geist-mono",
        weights: ["100 900"],
        styles: ["normal"],
        subsets: ["latin"],
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://fivepsalms.com",
  integrations: [sitemap()],
})
