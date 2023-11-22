import * as Yup from 'yup'

const {{cookiecutter.resource_name_singular}}FilterSchema = Yup.object({
  {% for field in cookiecutter.__fields %}
  {{field.name}}: Yup.{{field.type}}().required('validations:required'),
  {% endfor %}
})

export default {{cookiecutter.resource_name_singular}}FilterSchema
