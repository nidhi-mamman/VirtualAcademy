import { defineConfig } from 'vite'  // Make sure this import exists
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    hmr: true  // Explicitly enable HMR
  },
  build: {
    assetsDir: 'assets'
  }
})