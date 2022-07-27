export default function getCountryMapper({ data }) {
  const {
    flags,
    capital,
    region,
    subregion,
    continents,
    population,
    languages,
    currencies,
    borders,
  } = data[0]
  const { svg } = flags
  return {
    flag: svg,
    capital,
    region,
    subregion,
    continents,
    population,
    languages,
    currencies,
    borders,
  }
}
