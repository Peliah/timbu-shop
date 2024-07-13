import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    cors: false,
    proxy: {
      "/api": {
        target: "https://api.timbu.cloud",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  preview: {
    proxy: {
      "/api": {
        target: 'https://api.timbu.cloud',
        changeOrigin: true,
        secure: false,
        rewrite: (p) => p.replace(/^\/api/, ""),
      },
    },
    cors: false,
  },
})
