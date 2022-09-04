import type { FC } from 'react'
import style from './index.module.less'
interface IProps {}

const MyButton: FC<IProps> = () => {
  return <button className={style.btn}>click me</button>
}

export default MyButton
