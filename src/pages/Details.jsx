import InfoCountry from '../components/InfoCountry'
import { useNavigate } from 'react-router-dom'
export default function Details() {
  const navigate = useNavigate()
  return (
    <div className='container mx-auto p-6'>
      <button
        className='flex items-center gap-2 p-4 bg-slate-300 rounded-lg border-2 border-transparent hover:border-yellow '
        onClick={() => navigate(-1)}
      >
        <img src='../img/arrowBack.svg' alt='arrowBack' className='w-6 h-6' />
        <strong>go back</strong>
      </button>
      <InfoCountry />
    </div>
  )
}
