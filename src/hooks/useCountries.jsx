import { useEffect, useState } from 'react'
import getAllCountry from '../services/getAllCountry'

export default function useCountries({ keyword, region } = { keyword: null, region: null }) {
  const [filterCountries, setFilterContries] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [countries, setCountries] = useState([])

  useEffect(() => {
    try {
      setLoading(true)
      setError(false)
      getAllCountry().then(({ countries }) => {
        setCountries(countries)
        setFilterContries(countries)
        setLoading(false)
      })
    } catch (err) {
      console.log(err)
      setLoading(false)
      setError(err)
    }
  }, [])

  useEffect(() => {
    setFilterContries(countries.filter(country => country.continents[0].toLowerCase().includes(region.toLowerCase())))
  }, [region])

  useEffect(() => {
    setFilterContries(countries.filter(country => country.name.toLowerCase().includes(keyword.toLowerCase())))
  }, [keyword])

  return {
    countries: filterCountries,
    isLoading,
    error,
  }
}
