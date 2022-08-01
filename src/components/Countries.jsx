import Country from './Country'

export default function Countries({ countries }) {
  return (
    <section className='w-full grid gap-8 pt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-6'>
      {countries.map(({ name, flag, population }) => {
        return <Country key={name} name={name} flag={flag} population={population} />
      })}
    </section>
  )
}
