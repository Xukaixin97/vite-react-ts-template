// 在 d.ts 声明文件中，任何的 declare 默认就是 global 的了，所以你在 d.ts 文件中是不能出现 declare global 的。只有在模块文件中的定义，如果想要全局就使用 declare global
declare global {
  const __DEV__: boolean

  interface ViteEnv {
    VITE_PORT: number
    VITE_USE_MOCK: boolean
    VITE_USE_PWA: boolean
    VITE_PUBLIC_PATH: string
    VITE_PROXY: [string, string][]
    VITE_GLOB_APP_TITLE: string
    VITE_GLOB_APP_SHORT_NAME: string
    VITE_USE_CDN: boolean
    VITE_DROP_CONSOLE: boolean
    VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none'
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean
    VITE_LEGACY: boolean
    VITE_USE_IMAGEMIN: boolean
    VITE_GENERATE_UI: string
  }
}
export {}
