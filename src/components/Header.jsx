import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CountriesContext from '../context/CountriesContext'

function Header() {
  const { keyword, setKeyword } = useContext(CountriesContext)
  const handleChange = e => {
    setKeyword(e.target.value)
  }
  return (
    <header className='backdrop-blur-sm bg-slate-300/30 sticky top-0 p-4'>
      <div className='container mx-auto sm:flex sm:justify-between'>
        <div className='flex gap-2 items-center justify-center mb-4 sm:mb-0'>
          <strong className='text-3xl'>Any</strong>
          <Link to={'/'}>
            <img src='./img/world.svg' alt='World' className='w-8' />
          </Link>
          <strong className='text-3xl'>Country</strong>
        </div>

        <div>
          <input
            value={keyword || ''}
            type='text'
            placeholder='Search...'
            className='max-w-60 w-full py-2 pl-2 rounded text-black border-2 border-slate-400'
            onChange={handleChange}
          />
        </div>
      </div>
    </header>
  )
}

export default React.memo(Header)
