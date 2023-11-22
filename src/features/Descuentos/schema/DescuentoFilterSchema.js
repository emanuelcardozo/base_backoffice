import * as Yup from 'yup'

const DescuentoFilterSchema = Yup.object({
  name: Yup.string(),
  active: Yup.string(),
})

export default DescuentoFilterSchema
