import { useSearchParams } from 'react-router-dom'

function useUrlSearchParams<T>(key: string, isAll?: boolean) {
  const [searchParams] = useSearchParams()
  // const params = [...searchParams].map(([key, value]) => ({
  //   [key]: value,
  // }))
  // console.log('searchParams',
  //   Object.assign({}, ...params),
  // )
  const value = isAll ? searchParams.getAll(key) : searchParams.get(key)
  return value as T
}

export default useUrlSearchParams
