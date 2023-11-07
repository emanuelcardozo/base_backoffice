import * as Yup from 'yup'

const TypeFilterSchema = Yup.object({
  name: Yup.string(),
  active: Yup.string(),
})

export default TypeFilterSchema
