import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { build } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  commonjsOptions: {
    esmExternals: true,
  },
  
  
})
