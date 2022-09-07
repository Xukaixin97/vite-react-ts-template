// https://reactrouter.com/en/v6.3.0/getting-started/tutorial
import { type RouteObject } from 'react-router-dom'
import Home from '@/views/Home'
import Member from '@/views/Member'

export const routeConfig: RouteObject[] = [{
  path: '/',
  element: <Home/>,
  children: [
    {
      path: 'member',
      element: <Member/>,
    },
  ],
}]

