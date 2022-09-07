import react from '@vitejs/plugin-react'
import type { PluginOption } from 'vite'
import { configAutoImportPlugin } from './autoImport'
import { configStyleImportPlugin } from './styleImport'

export function createVitePlugins() {
  // export function createVitePlugins(_viteEnv: ViteEnv, _isBuild: boolean) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    react(),
  ]

  // vite-plugin-style-import
  vitePlugins.push(configStyleImportPlugin())

  // unplugin-auto-import
  vitePlugins.push(configAutoImportPlugin())

  return vitePlugins
}
