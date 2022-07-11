import { Link } from 'react-router-dom'
export default function Country({ name, flags, population }) {
  const numberFormat = new Intl.NumberFormat('en-US')

  return (
    <Link
      className='rounded-lg bg-slate-500 flex flex-col cursor-pointer border-2 border-transparent hover:border-blue-400 hover:shadow-md hover:shadow-blue-400 '
      to={`/country/${name.common}`}
    >
      <div className='p-4 self-center overflow-hidden'>
        <img className='h-32' src={flags.svg} alt={name.common} />
      </div>
      <div className='p-6 self-start'>
        <h1 className='text-xl font-bold mb-4'>{name.common}</h1>
        <span>
          <strong>Population: </strong>
          {numberFormat.format(population)}
        </span>
      </div>
    </Link>
  )
}
