import { Link, useParams } from 'react-router-dom'
import useCountry from '../hooks/useCountry'
import Skeleton from './Skeleton'

export default function InfoCountry() {
  const { name } = useParams()
  const { country, isLoading } = useCountry({ name })

  return (
    <>
      {isLoading ? (
        <div className='py-6'>
          <Skeleton />
        </div>
      ) : (
        <div className='py-6 dark:text-white'>
          <div className='bg-slate-300 dark:bg-gray-light overflow-hidden rounded-lg flex flex-col items-center lg:flex-row'>
            <div className='p-8'>
              <img className='max-h-[25rem] w-full' src={country.flag} alt={name} />
            </div>
            <div className='p-8 w-full md:w-auto'>
              <h1 className='font-bold text-4xl mb-4'>{name}</h1>
              <div className='flex flex-col items-start sm:flex-row sm:gap-8'>
                <div>
                  {country.capital && (
                    <p>
                      <strong>Capital: </strong>
                      {country.capital}
                    </p>
                  )}
                  {country.region && (
                    <p>
                      <strong>Region: </strong>
                      {country.region}
                    </p>
                  )}
                  {country.subregion && (
                    <p>
                      <strong>Sub Region: </strong>
                      {country.subregion}
                    </p>
                  )}
                  {country.continents && (
                    <p>
                      <strong>Continents: </strong>
                      {country.continents.map(continent => continent)}
                    </p>
                  )}
                </div>
                <div>
                  {country.population && (
                    <p>
                      <strong>Population: </strong>
                      {country.population}
                    </p>
                  )}
                  {country.languages && (
                    <p>
                      <strong>Languages: </strong>
                      {Object.values(country.languages)
                        .map(lang => lang)
                        .join(', ')}
                    </p>
                  )}
                  {country.currencies && (
                    <p>
                      <strong>Currency: </strong>
                      {Object.values(country.currencies)
                        .map(currency => currency.name)
                        .join(', ')}
                    </p>
                  )}
                </div>
              </div>
              {country.borders && (
                <div className='mt-4'>
                  <strong>Border Countries: </strong>
                  <div className='flex flex-wrap gap-4 mt-4'>
                    {country.borders.map(border => {
                      return (
                        <Link
                          key={border.name}
                          to={`/country/${border.name}`}
                          className='bg-white bg-opacity-50 dark:bg-gray p-2 rounded-lg flex items-center gap-2 border-2 border-transparent hover:border-yellow '
                        >
                          <img src={border.flag} alt={border.name} className='w-6' />
                          <span>{border.name}</span>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
