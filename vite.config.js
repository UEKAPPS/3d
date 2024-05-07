import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/3d/",
  build: {
    chunkSizeWarningLimit: 1500,
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
  plugins: [react(
    {include: "**/*.(js|jsx)",} // Include
  )],
})
