import getCountriesMapper from '../mapper/getCountries'
import { API_URL } from './settings'

export default async function getAllCountry() {
  const response = await fetch(`${API_URL}/all`)
  const result = await response.json()
  const data = await result.filter(country => country.name.common !== 'Afghanistan')
  const { countries } = getCountriesMapper({ data })
  return { countries }
}
