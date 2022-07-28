import { useState, useCallback, useContext } from 'react'
import Countries from '../components/Countries'
import Filters from '../components/Filters'
import Pagination from '../components/Pagination'
import useCountries from '../hooks/useCountries'
import CountriesContext from '../context/CountriesContext'

export default function Results() {
  const [page, setPage] = useState(1)
  const [continent, setContinent] = useState(false)
  const { keyword } = useContext(CountriesContext)
  const { countries, isLoading } = useCountries()

  const countryPerPage = 12
  const indexOfLastCountry = page * countryPerPage
  const indexOfFirstCountry = indexOfLastCountry - countryPerPage

  const filtreCountry = useCallback(() => {
    if (keyword) {
      return countries.filter(country => country.name.toUpperCase().includes(keyword.toUpperCase()))
    }
    if (continent) {
      return countries.filter(country =>
        country.continents[0].toUpperCase().includes(continent.toUpperCase())
      )
    }
    return countries.slice(indexOfFirstCountry, indexOfLastCountry)
  }, [countries, keyword, continent])

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Filters changeFilters={setContinent} />
          <Countries countries={filtreCountry()} />
          {!keyword && !continent && (
            <Pagination countries={filtreCountry().length} changePage={setPage} page={page} />
          )}
        </>
      )}
    </>
  )
}
