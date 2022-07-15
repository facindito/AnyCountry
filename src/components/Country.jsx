import { Link } from 'react-router-dom'
export default function Country({ name, flags }) {
  // const numberFormat = new Intl.NumberFormat('en-US')

  return (
    <Link
      className='overflow-hidden rounded-lg bg-slate-300 flex flex-col justify-center items-center cursor-pointer border-2 border-transparent hover:border-yellow hover:shadow hover:shadow-yellow '
      to={`/country/${name.common}`}
    >
      <div className='p-4'>
        <img className='max-h-32 w-full' src={flags.svg} alt={name.common} />
      </div>
      <div className='p-4'>
        <h1 className='text-2xl font-bold'>{name.common}</h1>
      </div>
    </Link>
  )
}
