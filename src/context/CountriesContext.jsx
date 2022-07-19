import React from 'react'
import useCountries from '../hooks/useCountries'
const Context = React.createContext({})

export function CountriesContextProvider({ children }) {
  const { countries, setCountries } = useCountries()

  return <Context.Provider value={{ countries, setCountries }}>{children}</Context.Provider>
}

export default Context
