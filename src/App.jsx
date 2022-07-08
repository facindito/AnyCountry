import { useState, useCallback } from 'react'
import Countries from './components/Countries'
import useCountries from './hooks/useCountries'

function App() {
  const [value, setValue] = useState('')

  const { countries, loading } = useCountries()

  const handleChange = e => {
    setValue(e.target.value)
  }

  const filtreCountry = useCallback(() => {
    const showCountries = countries
    if (value.trim() !== '') {
      return showCountries.filter(country => country.name.common.toUpperCase().includes(value.toUpperCase()))
    }
    return showCountries
  }, [countries, value])

  return (
    <div className='min-h-screen bg-gray-600 text-white overflow-hidden'>
      <div className='p-4 m-4'>
        <input
          value={value || ''}
          type='text'
          placeholder='Search...'
          className='rounded p-2 text-black'
          onChange={handleChange}
        />
      </div>
      {loading ? <h1>Loading...</h1> : <Countries countries={filtreCountry()} />}
    </div>
  )
}

export default App
