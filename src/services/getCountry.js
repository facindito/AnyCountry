import getCountryMapper from '../mapper/getCountry'
import { API_URL } from './settings'

const fromCountryResponse = async country => {
  const { borders } = country[0]
  if (!borders) return
  const response = await fetch(`${API_URL}/alpha?codes=${borders.join(',')}`)
  return await response.json()
}

export default async function getCountry({ name }) {
  const response = await fetch(`${API_URL}/name/${name}`)
  const country = await response.json()
  const borders = await fromCountryResponse(country)
  const data = getCountryMapper({ country, borders })
  return { data }
}
