import moment from 'moment'

const categoryFromAPI = (data, t) => {
  const { id, name, active = true, createdAt } = data

  return {
    id,
    name,
    active: t(active ? 'Yes' : 'No'),
    hidden: !active,
    createdAt: createdAt ? t('_toDate', { val: moment(createdAt) }) : '-',
  }
}

const editionCategoryFromAPI = (data) => {
  const { name = '', active = true } = data

  return { name, active }
}

export { categoryFromAPI, editionCategoryFromAPI }
