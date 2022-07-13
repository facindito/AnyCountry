import { useState, useCallback } from 'react'
// import { useQuery } from 'react-query'
// import getAllCountry from '../services/getAllCountry'
import useCountries from '../hooks/useCountries'
import Search from '../components/Search'
import Countries from '../components/Countries'

export default function Home() {
  const [value, setValue] = useState('')
  // const { data: countries, isLoading } = useQuery(['Countries'], getAllCountry)
  const { countries, isLoading } = useCountries()

  const filtreCountry = useCallback(() => {
    const showCountries = countries
    if (value.trim() !== '') {
      return showCountries.filter(country => country.name.common.toUpperCase().includes(value.toUpperCase()))
    }
    return showCountries
  }, [countries, value])
  return (
    <div className='container mx-auto px-6'>
      <Search value={value} setValue={setValue} />
      {isLoading ? <h1>Loading...</h1> : <Countries countries={filtreCountry()} />}
    </div>
  )
}
