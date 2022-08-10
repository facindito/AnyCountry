export default function Footer() {
  return (
    <div className='flex items-center justify-center gap-2 bg-slate-300 dark:bg-gray-light  dark:text-white p-2'>
      <a href='https://github.com/facindito/AnyCountry' target='_blank' className='w-6 h-6' rel='noreferrer'>
        <img src='../img/github.svg' alt='github' />
      </a>
      <span className='font-bold'> by Facundo T.</span>
    </div>
  )
}
