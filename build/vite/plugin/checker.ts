// https://vite-plugin-checker.netlify.app/introduction/getting-started.html
import { checker } from 'vite-plugin-checker'

export function configChecker() {
  return checker({
    typescript: true,
    // eslint: {
    //   lintCommand: 'eslint "./src/**/*.{ts,tsx}"', // for example, lint .ts & .tsx
    // },
  })
}
