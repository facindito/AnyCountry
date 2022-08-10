import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className='w-full min-h-screen p-6 dark:bg-gray-dark '>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
