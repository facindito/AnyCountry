import { API_URL } from './settings'

export default async function getAllCountry() {
  const response = await fetch(`${API_URL}`)
  const data = await response.json()
  return { data }
}
