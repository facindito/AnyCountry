import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import { CountriesContextProvider } from './context/CountriesContext'
import Details from './pages/Details'
import Home from './pages/home'

function App() {
  return (
    <CountriesContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='country/:name' element={<Details />} />
        </Route>
      </Routes>
    </CountriesContextProvider>
  )
}

export default App
