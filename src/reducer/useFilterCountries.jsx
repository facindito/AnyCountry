import { useReducer } from 'react'
const countryPerPage = 12

const ACTIONS = {
  CHANGE_KEYWORD: 'change_keyword',
  CHANGE_FILTER: 'change_filter',
  CHANGE_PAGE: 'change_page',
  CHARGE_COUNTRIES: 'charge_countries',
}

const ACTIONS_REDUCERS = {
  [ACTIONS.CHANGE_KEYWORD]: (state, action) => ({
    ...state,
    keyword: action.payload,
    countriesFilters:
      action.payload.trim() !== ''
        ? state.countries.filter(country => country.name.common.toUpperCase().includes(action.payload.toUpperCase()))
        : state.countries.slice(0, countryPerPage),
  }),
  [ACTIONS.CHANGE_FILTER]: (state, action) => ({
    ...state,
    filters: action.payload,
    countriesFilters:
      action.payload.trim() !== ''
        ? state.countries.filter(country => country.continents[0].toUpperCase().includes(action.payload.toUpperCase()))
        : state.countries.slice(0, countryPerPage),
  }),
  [ACTIONS.CHANGE_PAGE]: (state, action) => ({
    ...state,
    page: action.payload,
    countriesFilters: state.countries.slice(
      action.payload * countryPerPage - countryPerPage,
      action.payload * countryPerPage
    ),
  }),
  [ACTIONS.CHARGE_COUNTRIES]: (state, action) => ({
    ...state,
    countries: action.payload,
    countriesFilters: action.payload.slice(0, countryPerPage),
  }),
}

const reducer = (state, action) => {
  const actionReducer = ACTIONS_REDUCERS[action.type]
  return actionReducer ? actionReducer(state, action) : state
}

export default function useFilterCountries() {
  // const { countries } = useContext(CountriesContext)

  const [{ keyword, filters, page, countriesFilters }, dispatch] = useReducer(reducer, {
    keyword: '',
    filters: '',
    page: 1,
    countries: [],
    countriesFilters: [],
  })

  console.log(countriesFilters)
  return {
    changeKeyword: ({ keyword }) => dispatch({ type: ACTIONS.CHANGE_KEYWORD, payload: keyword }),
    changeFilters: ({ filters }) => dispatch({ type: ACTIONS.CHANGE_FILTER, payload: filters }),
    changePage: ({ page }) => dispatch({ type: ACTIONS.CHANGE_PAGE, payload: page }),
    chargeCountries: ({ countries }) => dispatch({ type: ACTIONS.CHARGE_COUNTRIES, payload: countries }),
    keyword,
    filters,
    page,
    countriesFilters,
  }
}
