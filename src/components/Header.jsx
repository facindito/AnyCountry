import { Link } from 'react-router-dom'

export default function Header({ darkMode, setDarkMode }) {
  const handleClick = () => {
    setDarkMode(!darkMode)
  }
  return (
    <header className='backdrop-blur-sm bg-white/80 dark:bg-gray dark:text-white shadow-[0_2px_5px_0px_rgba(0,0,0,0.1)] sticky top-0 '>
      <div className='w-full px-6 py-4'>
        <div className='flex items-center justify-between'>
          <div className='flex gap-2 items-center mb-4 sm:mb-0'>
            <strong className='text-3xl'>Any</strong>
            <Link to={'/'}>
              <img src='./img/world.svg' alt='World' className='w-8' />
            </Link>
            <strong className='text-3xl'>Country</strong>
          </div>
          <button className='w-6 h-6' onClick={handleClick}>
            {darkMode ? (
              <img src='../img/light-mode.svg' alt='light-mode' />
            ) : (
              <img src='../img/dark-mode.svg' alt='dark-mode' />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
