export default function getCountriesMapper({ data }) {
  const countries = data.map(country => {
    const { name, flags, population, cca3, continents } = country
    const { common } = name
    const { svg } = flags
    return {
      name: common,
      flag: svg,
      population,
      cca3,
      continents,
    }
  })
  countries.sort((a, b) => (a.name > b.name ? 1 : -1))
  return {
    countries,
  }
}
