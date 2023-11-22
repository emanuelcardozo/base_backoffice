import moment from 'moment'

const MateFromAPI = (data, t) => {
  const { id, name, active = true, createdAt } = data

  return {
    id,
    name,
    active: t(active ? 'Yes' : 'No'),
    hidden: !active,
    createdAt: createdAt ? t('_toDate', { val: moment(createdAt) }) : '-',
  }
}

const editionMateFromAPI = (data) => {
  const { name = '', active = true } = data

  return { name, active }
}

export { MateFromAPI, editionMateFromAPI }
