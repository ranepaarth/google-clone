import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // define: {
  //   __VALUE__: `"${process.env.VALUE}"` // wrapping in "" since it's a string
  // },
  plugins: [react()],
})
