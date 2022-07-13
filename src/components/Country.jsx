import { Link } from 'react-router-dom'
export default function Country({ name, flags, population }) {
  // const numberFormat = new Intl.NumberFormat('en-US')

  return (
    <Link
      className='overflow-hidden rounded-lg bg-slate-300 flex flex-col cursor-pointer border-2 border-transparent hover:border-yellow hover:shadow hover:shadow-yellow '
      to={`/country/${name.common}`}
    >
      <div className='flex justify-center py-8 px-4'>
        <img className='max-h-32 ' src={flags.svg} alt={name.common} />
      </div>
      <div className='p-6 self-start '>
        <h1 className='text-2xl font-bold mb-4 '>{name.common}</h1>
      </div>
    </Link>
  )
}
