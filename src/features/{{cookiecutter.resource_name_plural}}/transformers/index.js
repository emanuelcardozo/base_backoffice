import moment from 'moment'

const {{cookiecutter.resource_name_singular}}FromAPI = (data, t) => {
  const { id, name, active = true, createdAt } = data

  return {
    id,
    name,
    active: t(active ? 'Yes' : 'No'),
    hidden: !active,
    createdAt: createdAt ? t('_toDate', { val: moment(createdAt) }) : '-',
  }
}

const edition{{cookiecutter.resource_name_singular}}FromAPI = (data) => {
  const { name = '', active = true } = data

  return { name, active }
}

export { {{cookiecutter.resource_name_singular}}FromAPI, edition{{cookiecutter.resource_name_singular}}FromAPI }
