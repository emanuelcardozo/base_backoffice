import * as Yup from 'yup'

const {{cookiecutter.resource_name_singular}}Schema = Yup.object({
  name: Yup.string().required('validations:required'),
})

export default {{cookiecutter.resource_name_singular}}Schema
