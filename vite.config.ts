import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    port: 3000, // Client app will run on http://localhost:3000
    proxy: {
      // Proxy API requests to the backend
      // Any request to /api will be forwarded to http://localhost:8000/api
      '/api': {
        target: 'http://localhost:8000', // the backend server URL
        changeOrigin: true,
      },
    },
  },
})
