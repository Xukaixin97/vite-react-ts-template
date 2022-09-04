# css module
直接 `import './xxx.module.less` 可以读取其中的:global{} 内容中的属性
通过 `import style from '../xxx.module.css`  无法获得:global{} 中的属性
:global{} 中的属性不支持css module 可以改成local{}
