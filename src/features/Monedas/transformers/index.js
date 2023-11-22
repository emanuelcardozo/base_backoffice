import moment from 'moment'

const MonedaFromAPI = (data, t) => {
  const { id, name, active = true, createdAt } = data

  return {
    id,
    name,
    active: t(active ? 'Yes' : 'No'),
    hidden: !active,
    createdAt: createdAt ? t('_toDate', { val: moment(createdAt) }) : '-',
  }
}

const editionMonedaFromAPI = (data) => {
  const { name = '', active = true } = data

  return { name, active }
}

export { MonedaFromAPI, editionMonedaFromAPI }
