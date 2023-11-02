import * as Yup from 'yup'

const DiscountFilterSchema = Yup.object({
  name: Yup.string(),
  active: Yup.string(),
})

export default DiscountFilterSchema
