import moment from 'moment'

const SkillFromAPI = (data, t) => {
  const { id, name, active = true, createdAt } = data

  return {
    id,
    name,
    active: t(active ? 'Yes' : 'No'),
    hidden: !active,
    createdAt: createdAt ? t('_toDate', { val: moment(createdAt) }) : '-',
  }
}

const editionSkillFromAPI = (data) => {
  const { name = '', active = true } = data

  return { name, active }
}

export { SkillFromAPI, editionSkillFromAPI }
