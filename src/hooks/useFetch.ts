import { useEffect, useState } from "react"

export type Post = {
    userId: number
    id: number
    title: string
    body: string
}
    
type UseFetchProps = {
    url: string;
    limit?: number;
}

export function useFetch({url, limit = 1}: UseFetchProps) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<Post[] | null>(null)
  const [errors, setErrors] = useState<Error | null>(null)

  useEffect(() => {
    async function fetchData() {
        try {
        const response = await fetch(`${url}?_limit=${limit}&_delay=2000`)
        const json = await response.json()
        setData(json)
      } catch (error) {
        setErrors(error as Error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { loading, data, errors }
}