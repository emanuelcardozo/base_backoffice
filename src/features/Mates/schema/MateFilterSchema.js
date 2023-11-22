import * as Yup from 'yup'

const MateFilterSchema = Yup.object({
  name: Yup.string(),
  active: Yup.string(),
})

export default MateFilterSchema
