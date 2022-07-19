import { useState, useCallback, useContext } from 'react'
import Header from '../components/Header'
import Countries from '../components/Countries'
import Pagination from '../components/Pagination'
import Filters from '../components/Filters'
import CountriesContext from '../context/CountriesContext'
import Skeleton from '../components/Skeleton'

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const [filters, setFilters] = useState('')
  const [page, setPage] = useState(1)

  const { countries, isLoading } = useContext(CountriesContext)

  // const
  const countryPerPage = 12
  const indexOfLastCountry = page * countryPerPage
  const indexOfFirstCountry = indexOfLastCountry - countryPerPage

  const filtreCountry = useCallback(() => {
    if (keyword.trim() !== '') {
      return countries.filter(country => country.name.common.toUpperCase().includes(keyword.toUpperCase()))
    }
    if (filters.trim() !== '') {
      return countries.filter(country => country.continents[0].toUpperCase().includes(filters.toUpperCase()))
    }
    return countries.slice(indexOfFirstCountry, indexOfLastCountry)
  }, [countries, keyword, page, filters])

  return (
    <div className='relative'>
      <Header keyword={keyword} setKeyword={setKeyword} />
      <main className='container mx-auto p-6'>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <Filters setFilter={setFilters} />
            <Countries countries={filtreCountry()} />
            {!keyword && !filters && (
              <Pagination countries={countries.length} itemPerPage={countryPerPage} setPage={setPage} page={page} />
            )}
          </>
        )}
      </main>
    </div>
  )
}
