import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const generateScopedName = '[local]___[hash:base64:5]'

// https://vitejs.dev/config/
export default defineConfig(
  () => {
    return {
      plugins: [react()],
      css: {
        modules: {
          localsConvention: 'camelCase',
          generateScopedName,
        },
      },
    }
  },
)
