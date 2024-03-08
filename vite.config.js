import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    enviroment:'happy-dom'
  },
  resolve: {
    alias: {
      '@headlessui/react': '@headlessui/react/dist',
    },
  },
})
