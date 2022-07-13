import React, { useState } from 'react'
const Context = React.createContext({})

export function CountriesContextProvider({ children }) {
  const [countries, setCountries] = useState([])
  return <Context.Provider value={{ countries, setCountries }}>{children}</Context.Provider>
}

export default Context
