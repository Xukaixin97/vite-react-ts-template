// https://github.com/antfu/unplugin-auto-import
import AutoImport from 'unplugin-auto-import/vite'

export const configAutoImportPlugin = () => AutoImport(
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
