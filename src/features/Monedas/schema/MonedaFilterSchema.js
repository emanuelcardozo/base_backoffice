import * as Yup from 'yup'

const MonedaFilterSchema = Yup.object({
  name: Yup.string(),
  active: Yup.string(),
})

export default MonedaFilterSchema
