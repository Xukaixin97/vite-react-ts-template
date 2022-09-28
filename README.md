# CSS module
直接 `import './xxx.module.less` 可以读取其中的:global{} 内容中的属性
通过 `import style from '../xxx.module.css`  无法获得:global{} 中的属性
:global{} 中的属性不支持css module 可以改成local{}

- [X] 怎么在运行里打印出错误的eslint 和 typescript error     // add vite-plugin-checker
- [X] stylelint
- [X] prettier 因为主观上只想用eslint，不是很想装
- [ ] test react-test-library
- [ ] mock maybe try "axios-mock-adapter"

