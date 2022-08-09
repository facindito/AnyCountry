import { Link } from 'react-router-dom'
export default function Country({ name, flag }) {
  // const numberFormat = new Intl.NumberFormat('en-US')

  return (
    <Link
      className='overflow-hidden rounded-lg bg-slate-300 dark:bg-gray-light w-full flex flex-col justify-center items-center cursor-pointer border-2 border-transparent hover:border-yellow hover:shadow hover:shadow-yellow '
      to={`/country/${name}`}
    >
      <div className='p-4'>
        <img className='max-h-32 w-full' src={flag} alt={name} />
      </div>
      <div className='p-4'>
        <h1 className='text-2xl font-bold dark:text-white'>{name}</h1>
      </div>
    </Link>
  )
}
