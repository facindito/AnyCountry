import Header from '../components/Header'
import Results from './Results'

export default function Home() {
  return (
    <>
      <Header />
      <main className='container mx-auto p-6'>
        <Results />
      </main>
    </>
  )
}
