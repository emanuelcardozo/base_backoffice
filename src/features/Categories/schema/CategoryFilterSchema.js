import * as Yup from 'yup'

const CategoryFilterSchema = Yup.object({
  id: Yup.number().nullable(),

  name: Yup.string().nullable(),

  active: Yup.bool().nullable(),
})

export default CategoryFilterSchema
