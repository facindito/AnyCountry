import { Routes, Route } from 'react-router-dom'
import { CountriesContextProvider } from './context/CountriesContext'
import Details from './pages/Details'
import Home from './pages/home'

function App() {
  return (
    <CountriesContextProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='country/:name' element={<Details />} />
      </Routes>
    </CountriesContextProvider>
  )
}

export default App
