export default function getCountryMapper({ country, borders }) {
  const { flags, capital, region, subregion, continents, population, languages, currencies } = country[0]
  const { svg } = flags

  const bordersData = borders?.map(border => {
    const { name, flags } = border
    const { common } = name
    const { svg } = flags
    return {
      name: common,
      flag: svg,
    }
  })

  return {
    flag: svg,
    capital,
    region,
    subregion,
    continents,
    population,
    languages,
    currencies,
    borders: bordersData,
  }
}
