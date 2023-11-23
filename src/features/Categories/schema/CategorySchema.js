import * as Yup from 'yup'

const CategorySchema = Yup.object({
  id: Yup.number().nullable().required('validations:required'),

  name: Yup.string().nullable().required('validations:required'),

  active: Yup.bool().nullable().required('validations:required'),
})

export default CategorySchema
