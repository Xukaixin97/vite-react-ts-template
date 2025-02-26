import type { FC } from 'react'

interface IProps { }

const Home: FC<IProps> = () => {
  const now = dayjs().format('YYYY/MM')

  return (
    <div>
      <nav className="py-4 bg-purple-300">
        <div>{now}</div>
      </nav>
    </div>
  )
}

export default Home
