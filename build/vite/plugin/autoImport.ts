// https://github.com/antfu/unplugin-auto-import
import AutoImport from 'unplugin-auto-import/vite'

export function configAutoImportPlugin() {
  const autoImportPlugin = AutoImport(
    {
      imports: [
        'react',
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/hooks',
      ],
    },
  )
  return autoImportPlugin
}
