import * as Yup from 'yup'

const CategorySchema = Yup.object({
  name: Yup.string().required('validations:required'),
})

export default CategorySchema
