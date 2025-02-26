// https://github.com/antfu/unplugin-auto-import
import AutoImport from 'unplugin-auto-import/vite'

export function configAutoImportPlugin() {
  return AutoImport(
    {
      imports: [
        'react',
        'ahooks',
        'react-router-dom',
        {
          moment: [['default', 'dayjs']],
        },
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/hooks',
      ],
    },
  )
}
