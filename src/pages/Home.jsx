import { useState, useCallback } from 'react'
import useCountries from '../hooks/useCountries'
import Header from '../components/Header'
import Countries from '../components/Countries'
import Pagination from '../components/Pagination'
import Filters from '../components/Filters'

export default function Home() {
  const [value, setValue] = useState('')
  const [filter, setFilter] = useState('')
  const [page, setPage] = useState(1)

  const { countries, isLoading } = useCountries()

  const countryPerPage = 12
  const indexOfLastCountry = page * countryPerPage
  const indexOfFirstCountry = indexOfLastCountry - countryPerPage

  const filtreCountry = useCallback(() => {
    if (value.trim() !== '') {
      return countries.filter(country => country.name.common.toUpperCase().includes(value.toUpperCase()))
    }
    if (filter.trim() !== '') {
      return countries.filter(country => country.continents[0].toUpperCase().includes(filter.toUpperCase()))
    }
    return countries.slice(indexOfFirstCountry, indexOfLastCountry)
  }, [countries, value, page, filter])

  return (
    <div className='relative'>
      <Header value={value} setValue={setValue} />
      <main className='container mx-auto p-6'>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <Filters setFilter={setFilter} />
            <Countries countries={filtreCountry()} />
            {!value && !filter && (
              <Pagination countries={countries.length} itemPerPage={countryPerPage} setPage={setPage} page={page} />
            )}
          </>
        )}
      </main>
    </div>
  )
}
