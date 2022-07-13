import { API_URL } from './settings'

export default async function getAllCountry() {
  const response = await fetch(`${API_URL}/all`)
  const result = await response.json()
  const data = result.filter(country => country.name.common !== 'Afghanistan')
  return { data }
}
