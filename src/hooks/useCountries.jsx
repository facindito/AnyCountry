import { useEffect, useState } from 'react'
import useFilterCountries from '../reducer/useFilterCountries'
import getAllCountry from '../services/getAllCountry'

export default function useCountries() {
  const [countries, setCountries] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const { chargeCountries, countriesFilters, changeKeyword, keyword, changeFilters, changePage, filters, page } =
    useFilterCountries()

  useEffect(() => {
    try {
      setLoading(true)
      setError(false)
      getAllCountry().then(({ data }) => {
        const countries = data.sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
        setCountries(countries)
        chargeCountries({ countries })
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
    countriesFilters,
    keyword,
    filters,
    page,
    changeKeyword,
    changeFilters,
    changePage,
  }
}
