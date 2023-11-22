import * as Yup from 'yup'

const ModeloFilterSchema = Yup.object({
  name: Yup.string(),
  active: Yup.string(),
})

export default ModeloFilterSchema
