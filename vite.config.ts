import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/ss-studio-website/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        services: resolve(__dirname, 'services.html'),
        portfolio: resolve(__dirname, 'portfolio.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
})
