import Countries from '../components/Countries'
import NavBar from '../components/NavBar'
import Pagination from '../components/Pagination'
import useCountries from '../hooks/useCountries'
import useFilterCountries from '../reducer/useFilterCountries'
import { Helmet } from 'react-helmet'

export default function Home() {
  const { keyword, region, page, changeKeyword, changeRegion, changePage } = useFilterCountries()
  const { countries, isLoading } = useCountries({ region, keyword })

  return (
    <>
      {isLoading ? (
        <div className='container mx-auto'>
          <Helmet>
            <title>Loading...</title>
          </Helmet>
          <h1>Loading...</h1>
        </div>
      ) : (
        <>
          <Helmet>
            <link rel='shortcut icon' href='../img/world.svg' type='image/x-icon' />
            <title>Any Country</title>
          </Helmet>
          <NavBar changeRegion={changeRegion} keyword={keyword} changeKeyword={changeKeyword} />
          <Countries countries={countries} page={page} />
          {countries.length > 12 && <Pagination countries={countries.length} changePage={changePage} page={page} />}
        </>
      )}
    </>
  )
}
