import { Link } from 'react-router-dom'

export default function Header({ keyword, changeKeyword }) {
  const handleChange = e => {
    changeKeyword({ keyword: e.target.value })
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

        <div className=''>
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
