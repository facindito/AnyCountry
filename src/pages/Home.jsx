import { useState, useCallback } from 'react'
import { useQuery } from 'react-query'
import Search from '../components/Search'
import Countries from '../components/Countries'
// import useCountries from './hooks/useCountries'
import getAllCountry from '../services/getAllCountry'

export default function Home() {
  const [value, setValue] = useState('')

  const { data: countries, isLoading } = useQuery(['Countries'], getAllCountry)

  const filtreCountry = useCallback(() => {
    const showCountries = countries.data
    if (value.trim() !== '') {
      return showCountries.filter(country =>
        country.name.common.toUpperCase().includes(value.toUpperCase())
      )
    }
    return showCountries
  }, [countries, value])
  return (
    <div className='container mx-auto px-6'>
      <Search value={value} setValue={setValue} />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Countries countries={filtreCountry()} />
      )}
    </div>
  )
}
