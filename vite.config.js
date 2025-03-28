import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Car-Rental",

  server: {
    proxy: {
      '/boxicons': {
        target: 'https://unpkg.com/boxicons@2.1.4/svg/regular',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/boxicons/, '')
      }
    }
  }
})
