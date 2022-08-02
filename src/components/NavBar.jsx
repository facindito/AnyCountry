import React from 'react'

export default function NavBar({ changeRegion, keyword, changeKeyword }) {
  const handleChangeKeyword = e => {
    changeKeyword({ keyword: e.target.value })
  }

  const handleChangeContinent = e => {
    e.preventDefault()
    changeRegion({ region: e.target.value })
  }
  return (
    <div className='container mx-auto py-6'>
      <div className='flex flex-col gap-4 md:flex-row md:justify-between'>
        <input
          value={keyword || ''}
          type='text'
          placeholder='Search...'
          className='py-2 pl-2 rounded text-black border-2 border-slate-400'
          onChange={handleChangeKeyword}
        />

        <select
          name='region'
          id='region'
          className='p-2 bg-slate-300 rounded-lg text-gray border-2 border-transparent focus:border-yellow'
          onChange={handleChangeContinent}
          defaultValue=''
        >
          <option value=''>Choose a Continent</option>
          <option value='South America'>South America</option>
          <option value='North America'>North America</option>
          <option value='Asia'>Asia</option>
          <option value='Europe'>Europe</option>
          <option value='Africa'>Africa</option>
          <option value='Oceania'>Oceania</option>
        </select>
      </div>
    </div>
  )
}
