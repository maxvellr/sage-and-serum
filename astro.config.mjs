import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://sageandserumskin.com',
  base: '/',
  vite: {
    plugins: [tailwindcss()],
  },
})