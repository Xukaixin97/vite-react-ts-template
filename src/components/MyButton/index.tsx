import type { FC } from 'react'
import style from './index.module.less'
interface IProps {}

const getName = (name: string) => {
  return name
}
const MyButton: FC<IProps> = () => {
  getName(1)
  return <button className={style.btn}>click me</button>
}

export default MyButton
