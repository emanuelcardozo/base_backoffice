import moment from 'moment'

const PokemonFromAPI = (data, t) => {
  const { id, name, active = true, createdAt } = data

  return {
    id,
    name,
    active: t(active ? 'Yes' : 'No'),
    hidden: !active,
    createdAt: createdAt ? t('_toDate', { val: moment(createdAt) }) : '-',
  }
}

const editionPokemonFromAPI = (data) => {
  const { name = '', active = true } = data

  return { name, active }
}

export { PokemonFromAPI, editionPokemonFromAPI }
