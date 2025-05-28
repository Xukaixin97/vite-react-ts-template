module.exports = {
  plugins: {
    'tailwindcss': {},
    'autoprefixer': {},
    'postcss-px-to-viewport': {
      unitToConvert: 'px',
      viewportWidth: 608, // 设计稿宽度
      viewportHeight: 608, // 设计稿高度（将作为主要参考值）
      unitPrecision: 5,
      viewportUnit: 'vh', // 保持 vh
      fontViewportUnit: 'vh', // 字体单位也改为 vh 以保持一致
      selectorBlackList: [], // 不转换的选择器
      minPixelValue: 1,
      mediaQuery: false,
    },
  },
}
