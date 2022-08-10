import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import Details from './pages/Details'
import Home from './pages/home'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='country/:name' element={<Details />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
