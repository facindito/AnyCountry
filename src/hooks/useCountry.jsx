import { useEffect, useState } from 'react'
import getCountry from '../services/getCountry'

export default function useCountry({ name }) {
  const [country, setCountry] = useState()
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    try {
      setLoading(true)
      setError(false)
      getCountry({ name }).then(({ data }) => {
        setCountry(data)
        setLoading(false)
      })
    } catch (err) {
      console.log(err)
      setLoading(false)
      setError(err)
    }
  }, [name])

  return {
    country,
    isLoading,
    error,
  }
}
