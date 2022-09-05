import type { FC } from 'react'
import { Link, Outlet } from 'react-router-dom'

interface IProps {}
const Home: FC<IProps> = () => {
  return (

    <div>
      <nav className="py-4 bg-purple-300">
        <Link to="member?name=cc" >
          <div className="text-red-800">member</div>
        </Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default Home
