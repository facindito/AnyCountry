import React, { useState } from 'react'

const Context = React.createContext({})

export function CountriesContextProvider({ children }) {
  const [countries, setCountries] = useState([])
  const [keyword, setKeyword] = useState('')

  return (
    <Context.Provider value={{ countries, setCountries, keyword, setKeyword }}>
      {children}
    </Context.Provider>
  )
}

export default Context
