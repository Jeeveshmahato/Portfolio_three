import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Removed incorrect import of tailwind from './src/assets'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
