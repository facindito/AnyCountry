import { API_URL } from './settings'
export default async function getCountry({ name }) {
  const response = await fetch(`${API_URL}/name/${name}`)
  const data = await response.json()
  return { data }
}
