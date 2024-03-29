import react from '@vitejs/plugin-react'
import type { PluginOption } from 'vite'
import { configAutoImportPlugin } from './autoImport'
import { configStyleImportPlugin } from './styleImport'

import { configChecker } from './checker'

export function createVitePlugins() {
  // export function createVitePlugins(_viteEnv: ViteEnv, _isBuild: boolean) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    react(),
  ]

  // vite-plugin-style-import
  vitePlugins.push(configStyleImportPlugin())

  // unplugin-auto-import
  vitePlugins.push(configAutoImportPlugin())

  vitePlugins.push(configChecker())

  return vitePlugins
}
