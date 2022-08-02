import { useReducer } from 'react'

const ACTIONS = {
  CHANGE_KEYWORD: 'change_keyword',
  CHANGE_REGION: 'change_region',
  CHANGE_PAGE: 'change_page',
  CHARGE_COUNTRIES: 'charge_countries',
}

const ACTIONS_REDUCERS = {
  [ACTIONS.CHANGE_KEYWORD]: (state, action) => ({
    ...state,
    keyword: action.payload,
    page: 1,
  }),
  [ACTIONS.CHANGE_FILTER]: (state, action) => ({
    ...state,
    region: action.payload,
    page: 1,
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
  const [{ keyword, region, page }, dispatch] = useReducer(reducer, {
    keyword: '',
    region: '',
    page: 1,
  })

  return {
    changeKeyword: ({ keyword }) => dispatch({ type: ACTIONS.CHANGE_KEYWORD, payload: keyword }),
    changeRegion: ({ region }) => dispatch({ type: ACTIONS.CHANGE_FILTER, payload: region }),
    changePage: ({ page }) => dispatch({ type: ACTIONS.CHANGE_PAGE, payload: page }),
    keyword,
    region,
    page,
  }
}
