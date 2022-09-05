import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const generateScopedName = '[local]___[hash:base64:5]'

// https://vitejs.dev/config/
export default defineConfig(
  () => {
    return {
      base: './',
      plugins: [react()],
      css: {
        modules: {
          localsConvention: 'camelCase',
          generateScopedName,
        },
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src'),
          // 兼容 css-loader 加载path alias格式 https://github.com/webpack-contrib/css-loader#url
          // background-image: url('~@/views/Home/assets/open_guide1_bg.png');
          '~@': path.resolve(__dirname, 'src'),
        },
      },
      build: {
        // https://vitejs.dev/config/build-options.html#build-minify
        minify: 'terser',
        // https://terser.org/docs/api-reference#parse-options
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      },
    }
  },
)
