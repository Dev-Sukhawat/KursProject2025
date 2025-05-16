import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '',
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    proxy: {
      '/api': { // Proxy requests starting with /api
        target: 'http://localhost:3000', // The default port JSON Server runs on
        changeOrigin: true, // For proper handling of the 'Host' header
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove the /api prefix when forwarding
      },
    },
  },
})
