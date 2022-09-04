import style from './App.module.less'
import { MyButton } from './components'
import './index.css'
function App() {
  return (
    <div>
      <div className="text-3xl" >
        123123
      </div>
      <MyButton />
      <div className={style.logo}>123</div>

    </div>

  )
}

export default App
