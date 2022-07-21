import { useContext } from 'react'
import Header from '../components/Header'
import Countries from '../components/Countries'
import Pagination from '../components/Pagination'
import Filters from '../components/Filters'
import CountriesContext from '../context/CountriesContext'

export default function Home() {
  const { countries, isLoading, countriesFilters, changeKeyword, keyword, changeFilters, changePage, filters, page } =
    useContext(CountriesContext)

  return (
    <div className='relative'>
      <Header keyword={keyword} changeKeyword={changeKeyword} />
      <main className='container mx-auto p-6'>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <Filters changeFilters={changeFilters} />
            <Countries countries={countriesFilters} />
            {keyword === '' && filters === '' && (
              <Pagination countries={countries.length} changePage={changePage} page={page} />
            )}
          </>
        )}
      </main>
    </div>
  )
}
