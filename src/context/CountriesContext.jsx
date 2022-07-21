import React from 'react'

import useCountries from '../hooks/useCountries'
const Context = React.createContext({})

export function CountriesContextProvider({ children }) {
  const { countries, isLoading } = useCountries()

  return <Context.Provider value={{ countries, isLoading }}>{children}</Context.Provider>
}

export default Context
