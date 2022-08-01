import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='backdrop-blur-sm bg-slate-300/30 sticky top-0'>
      <div className='container mx-auto px-6 py-4'>
        <div className='flex gap-2 items-center justify-center mb-4 sm:mb-0'>
          <strong className='text-3xl'>Any</strong>
          <Link to={'/'}>
            <img src='./img/world.svg' alt='World' className='w-8' />
          </Link>
          <strong className='text-3xl'>Country</strong>
        </div>
      </div>
    </header>
  )
}
