import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://maxvellr.github.io',
  base: '/sage-and-serum',
  vite: {
    plugins: [tailwindcss()],
  },
})