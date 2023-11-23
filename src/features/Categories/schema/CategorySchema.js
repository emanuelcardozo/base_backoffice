import * as Yup from 'yup'

const CategorySchema = Yup.object({
  id: Yup.number().required('validations:required'),

  name: Yup.string().required('validations:required'),

  active: Yup.bool().required('validations:required'),
})

export default CategorySchema
