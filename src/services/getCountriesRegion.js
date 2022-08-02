import getCountriesMapper from '../mapper/getCountries'
import { API_URL } from './settings'

export default async function getCountriesRegion({ region }) {
  const response = await fetch(`${API_URL}/region/${region}`)
  const data = await response.json()
  const { countries } = getCountriesMapper({ data })
  return {
    countries,
  }
}
