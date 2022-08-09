import InfoCountry from '../components/InfoCountry'
import { useNavigate } from 'react-router-dom'
export default function Details() {
  const navigate = useNavigate()
  return (
    <>
      <a
        className='flex items-center gap-2 p-4 max-w-[10rem] bg-slate-300 dark:bg-gray-light dark:text-white rounded-lg border-2 border-transparent hover:border-yellow'
        onClick={() => navigate(-1)}
      >
        <img src='../img/arrowBack.svg' alt='arrowBack' className='w-6 h-6 ' />
        <strong>go back</strong>
      </a>
      <InfoCountry />
    </>
  )
}
