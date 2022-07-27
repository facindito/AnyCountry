import InfoCountry from '../components/InfoCountry'
import { Link } from 'react-router-dom'
export default function Details() {
  return (
    <div className='container mx-auto p-6'>
      <Link
        className='flex items-center gap-2 p-4 max-w-[10rem] bg-slate-300 rounded-lg border-2 border-transparent hover:border-yellow'
        to={'/'}
      >
        <img src='../img/arrowBack.svg' alt='arrowBack' className='w-6 h-6' />
        <strong>go back</strong>
      </Link>
      <InfoCountry />
    </div>
  )
}
