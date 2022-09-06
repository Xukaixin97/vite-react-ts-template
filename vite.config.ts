import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import { AntdResolve, createStyleImportPlugin } from 'vite-plugin-style-import'

const generateScopedName = '[local]___[hash:base64:5]'

// https://vitejs.dev/config/
export default defineConfig(
  ({ mode }) => {
    return {
      define: {
        __DEV__: mode === 'development',
      },
      plugins: [
        react(),
        AutoImport(
          {
            imports: [
              'react',
            ],
            dts: 'src/auto-imports.d.ts',
            dirs: [
              'src/hooks',
            ],
          },
        ),
        // 按需加载组件样式
        createStyleImportPlugin({
          resolves: [
            AntdResolve(),
          ],
        }),
      ],
      css: {
        modules: {
          localsConvention: 'camelCase',
          generateScopedName,
        },
        // https://stackoverflow.com/questions/72854489/vite-and-antd-error-vitecss-inline-javascript-is-not-enabled-is-it-set-in
        preprocessorOptions: {
          less: {
            javascriptEnabled: true,
          },
        },
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src'),
          // 兼容 css-loader 加载path alias格式 https://github.com/webpack-contrib/css-loader#url
          // background-image: url('~@/views/Home/assets/open_guide1_bg.png');
          // '~@': path.resolve(__dirname, 'src'),
        },
      },
      esbuild: {
        // pure: VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : [],
        pure: ['console.log', 'debugger'],
      },
      // 上下两种方法都可以
      // build: {
      //   // https://vitejs.dev/config/build-options.html#build-minify
      //   minify: 'terser',
      //   // https://terser.org/docs/api-reference#parse-options
      //   terserOptions: {
      //     compress: {
      //       drop_console: true,
      //     },
      //   },
      // },
    }
  },
)
