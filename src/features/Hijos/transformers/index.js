import moment from 'moment'

const HijoFromAPI = (data, t) => {
  const { id, name, active = true, createdAt } = data

  return {
    id,
    name,
    active: t(active ? 'Yes' : 'No'),
    hidden: !active,
    createdAt: createdAt ? t('_toDate', { val: moment(createdAt) }) : '-',
  }
}

const editionHijoFromAPI = (data) => {
  const { name = '', active = true } = data

  return { name, active }
}

export { HijoFromAPI, editionHijoFromAPI }
