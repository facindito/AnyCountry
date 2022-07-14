import { useState, useCallback } from 'react'
import useCountries from '../hooks/useCountries'
import Search from '../components/Search'
import Countries from '../components/Countries'
import Pagination from '../components/Pagination'

export default function Home() {
  const [value, setValue] = useState('')
  const [page, setPage] = useState(1)
  const { countries, isLoading } = useCountries()
  console.log(page)
  const countryPerPage = 12
  const indexOfLastCountry = page * countryPerPage
  const indexOfFirstCountry = indexOfLastCountry - countryPerPage

  const filtreCountry = useCallback(() => {
    const showCountries = countries
    if (value.trim() !== '') {
      return showCountries.filter(country => country.name.common.toUpperCase().includes(value.toUpperCase()))
    }
    return showCountries
  }, [countries, value, page])

  return (
    <div className='container mx-auto px-6'>
      <Search value={value} setValue={setValue} />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Pagination countries={filtreCountry().length} itemPerPage={countryPerPage} setPage={setPage} page={page} />
          <Countries countries={filtreCountry().slice(indexOfFirstCountry, indexOfLastCountry)} />
        </>
      )}
    </div>
  )
}
// import { useQuery } from 'react-query'
// import getAllCountry from '../services/getAllCountry'
// const { data: countries, isLoading } = useQuery(['Countries'], getAllCountry)
