import { useEffect, useState } from 'react'
import getAllCountry from './services/getAllCountry'
function App() {
  const [countries, setCountries] = useState()

  useEffect(() => {
    getAllCountry().then(({ data }) => {
      setCountries(data)
    })
  }, [])

  console.log(countries)
  return (
    <div className='min-h-screen bg-gray-600 text-white overflow-hidden'>
      {countries && (
        <div className='border-2 p-4 m-4'>
          <ul className='flex flex-col gap-4'>
            {countries.map(({ name, flags }) => {
              return (
                <li key={name.common} className='flex items-center gap-4'>
                  <div className='w-16'>
                    <img src={flags.svg} alt={name.common} />
                  </div>
                  <span>{name.common}</span>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default App
