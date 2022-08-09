import Countries from '../components/Countries'
import NavBar from '../components/NavBar'
import Pagination from '../components/Pagination'
import useCountries from '../hooks/useCountries'
import useFilterCountries from '../reducer/useFilterCountries'

export default function Home() {
  const { keyword, region, page, changeKeyword, changeRegion, changePage } = useFilterCountries()
  const { countries, isLoading } = useCountries({ region, keyword })

  return (
    <>
      {isLoading ? (
        <div className='container mx-auto'>
          <h1>Loading...</h1>
        </div>
      ) : (
        <>
          <NavBar changeRegion={changeRegion} keyword={keyword} changeKeyword={changeKeyword} />
          <Countries countries={countries} page={page} />
          <Pagination countries={countries.length} changePage={changePage} page={page} />
        </>
      )}
    </>
  )
}
