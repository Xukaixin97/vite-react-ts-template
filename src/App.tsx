import type { FC } from 'react'
import { useRoutes } from 'react-router-dom'
import { routeConfig } from './routes'

const App: FC = () => {
  const [num] = useState(1)

  return (
    <div>
      {num}
      {useRoutes(routeConfig)}
    </div>
  )
}

export default App
