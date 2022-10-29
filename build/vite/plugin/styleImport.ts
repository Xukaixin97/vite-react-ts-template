/**
 *  Introduces component library styles on demand.
 * https://github.com/anncwb/vite-plugin-style-import
 */
import { AntdResolve, createStyleImportPlugin } from 'vite-plugin-style-import'

export function configStyleImportPlugin() {
  // 按需加载组件样式
  const styleImportPlugin
    = createStyleImportPlugin({
      resolves: [
        AntdResolve(),
      ],
    })
  return styleImportPlugin
}
