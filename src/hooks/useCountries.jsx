import { useEffect, useState } from 'react'
import getCountriesMapper from '../mapper/getCountries'
import getAllCountry from '../services/getAllCountry'

export default function useCountries() {
  const [countries, setCountries] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    try {
      setLoading(true)
      setError(false)
      getAllCountry().then(({ data }) => {
        const { countries } = getCountriesMapper({ data })
        setCountries(countries)
        setLoading(false)
      })
    } catch (err) {
      console.log(err)
      setLoading(false)
      setError(err)
    }
  }, [])
  return {
    countries,
    isLoading,
    error,
  }
}
