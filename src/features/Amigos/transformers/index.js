import moment from 'moment'

const AmigoFromAPI = (data, t) => {
  const { id, name, active = true, createdAt } = data

  return {
    id,
    name,
    active: t(active ? 'Yes' : 'No'),
    hidden: !active,
    createdAt: createdAt ? t('_toDate', { val: moment(createdAt) }) : '-',
  }
}

const editionAmigoFromAPI = (data) => {
  const { name = '', active = true } = data

  return { name, active }
}

export { AmigoFromAPI, editionAmigoFromAPI }
