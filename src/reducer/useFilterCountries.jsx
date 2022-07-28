import { useReducer } from 'react'

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
  }),
  [ACTIONS.CHANGE_FILTER]: (state, action) => ({
    ...state,
    filters: action.payload,
  }),
  [ACTIONS.CHANGE_PAGE]: (state, action) => ({
    ...state,
    page: action.payload,
  }),
}

const reducer = (state, action) => {
  const actionReducer = ACTIONS_REDUCERS[action.type]
  return actionReducer ? actionReducer(state, action) : state
}

export default function useFilterCountries() {
  const [{ keyword, filters, page }, dispatch] = useReducer(reducer, {
    keyword: '',
    filters: '',
    page: 1,
  })

  return {
    changeKeyword: ({ keyword }) => dispatch({ type: ACTIONS.CHANGE_KEYWORD, payload: keyword }),
    changeFilters: ({ filters }) => dispatch({ type: ACTIONS.CHANGE_FILTER, payload: filters }),
    changePage: ({ page }) => dispatch({ type: ACTIONS.CHANGE_PAGE, payload: page }),
    keyword,
    filters,
    page,
  }
}
