export default function Countries({ countries }) {
  return (
    <div className='border-2 p-4 m-4'>
      <ul className='flex flex-col gap-4'>
        {countries.map(({ name, flags }) => {
          return (
            <li key={name.common} className='flex items-center gap-4'>
              <div className='w-12'>
                <img className='w-full object-cover' src={flags.svg} alt={name.common} />
              </div>
              <span>{name.common}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
