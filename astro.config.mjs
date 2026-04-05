import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://maxvellr.github.io',
  base: '/sage-and-serum',
})