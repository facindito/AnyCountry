import Country from './Country'

export default function Countries({ countries }) {
  return (
    <section className='grid justify-center w-full gap-8 pt-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {countries.map(({ name, flags, population }) => {
        return (
          <Country
            key={name.common}
            name={name}
            flags={flags}
            population={population}
          />
        )
      })}
    </section>
  )
}
