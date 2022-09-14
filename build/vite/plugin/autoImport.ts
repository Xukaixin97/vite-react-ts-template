// https://github.com/antfu/unplugin-auto-import
import AutoImport from 'unplugin-auto-import/vite'

export const configAutoImportPlugin = () => AutoImport(
  {
    imports: [
      'react',
      'ahooks',
      'react-router-dom',
      {
        moment: [['default', 'moment']],
      },
    ],
    dts: 'src/auto-imports.d.ts',
    dirs: [
      'src/hooks',
    ],
  },
)
