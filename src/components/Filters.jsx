export default function Filters({ changeFilters }) {
  const handleChange = e => {
    e.preventDefault()
    changeFilters(e.target.value)
  }

  return (
    <div className='container mx-auto py-6'>
      <select
        name='continents'
        id='continents'
        className='p-2 bg-slate-300 rounded-lg text-gray border-2 border-transparent focus:border-yellow'
        onChange={handleChange}
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
  )
}
