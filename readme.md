# CSS module
直接 `import './xxx.module.less` 可以读取其中的:global{} 内容中的属性
通过 `import style from '../xxx.module.css`  无法获得:global{} 中的属性
:global{} 中的属性不支持css module 可以改成local{}

- [ ] 怎么在运行里打印出错误的eslint 和 typescript error
- [ ] stylelint
- [ ] test react-test-library
- [ ] mock maybe try "axios-mock-adapter"
- [ ] prettier 因为主观上只想用eslint，不是很想装, 但其他文件要用到 所以formate默认用了eslint，且prettier.enable=true

