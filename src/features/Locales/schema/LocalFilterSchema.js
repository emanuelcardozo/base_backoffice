import * as Yup from 'yup'

const LocalFilterSchema = Yup.object({
  name: Yup.string(),
  active: Yup.string(),
})

export default LocalFilterSchema
