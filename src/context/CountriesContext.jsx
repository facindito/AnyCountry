import React from 'react'
import useCountries from '../hooks/useCountries'
const Context = React.createContext({})

export function CountriesContextProvider({ children }) {
  const { countries, isLoading, countriesFilters, changeKeyword, keyword, changeFilters, changePage, filters, page } =
    useCountries()

  return (
    <Context.Provider
      value={{
        countries,
        isLoading,
        countriesFilters,
        changeKeyword,
        keyword,
        changeFilters,
        changePage,
        filters,
        page,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context
