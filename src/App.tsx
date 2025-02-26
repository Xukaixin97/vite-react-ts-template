import type { FC } from 'react'
import { useRoutes } from 'react-router-dom'
import { routeConfig } from './routes'

const App: FC = () => {
  return (
    <div>
      {useRoutes(routeConfig)}
    </div>
  )
}

export default App
