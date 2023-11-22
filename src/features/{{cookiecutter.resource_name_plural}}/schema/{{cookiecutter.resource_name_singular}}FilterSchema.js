import * as Yup from 'yup'

const {{cookiecutter.resource_name_singular}}FilterSchema = Yup.object({
  name: Yup.string(),
  active: Yup.string(),
})

export default {{cookiecutter.resource_name_singular}}FilterSchema
