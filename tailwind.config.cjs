/** @type {import('tailwindcss').Config} */
// https://tailwindcss.com/docs/configuration#core-plugins

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}
