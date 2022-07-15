import { Routes, Route } from 'react-router-dom'
import InfoCountry from './components/InfoCountry'
import { CountriesContextProvider } from './context/CountriesContext'
import Home from './pages/home'

function App() {
  return (
    <CountriesContextProvider>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='country/:name' element={<InfoCountry />} />
      </Routes>
    </CountriesContextProvider>
  )
}

export default App
