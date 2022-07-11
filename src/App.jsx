import { Routes, Route } from 'react-router-dom'
import InfoCountry from './components/InfoCountry'
import Home from './pages/home'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='country/:name' element={<InfoCountry />} />
    </Routes>
  )
}

export default App
