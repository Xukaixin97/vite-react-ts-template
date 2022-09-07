import type { FC } from 'react'

interface IProps {}
const Home: FC<IProps> = () => {
  const name = useUrlSearchParams<string>('name')
  return (

    <div>
      <div>Hello {name}</div>
    </div>
  )
}

export default Home
