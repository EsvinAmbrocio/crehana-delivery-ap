import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/crehana-delivery-app/',
  plugins: [vue()],
  test: {
    environment: 'happy-dom'
  }
})
