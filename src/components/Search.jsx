export default function Search({ value, setValue }) {
  const handleChange = e => {
    setValue(e.target.value)
  }

  return (
    <div className='p-4 m-4'>
      <input
        value={value || ''}
        type='text'
        placeholder='Search...'
        className='rounded p-2 text-black'
        onChange={handleChange}
      />
    </div>
  )
}
