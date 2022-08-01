import { useContext, useEffect, useState } from 'react'
import CountriesContext from '../context/CountriesContext'
import getAllCountry from '../services/getAllCountry'

export default function useCountries() {
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const { countries, setCountries } = useContext(CountriesContext)

  useEffect(() => {
    try {
      setLoading(true)
      setError(false)
      getAllCountry().then(({ countries }) => {
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
