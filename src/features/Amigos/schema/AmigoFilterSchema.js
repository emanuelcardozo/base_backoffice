import * as Yup from 'yup'

const AmigoFilterSchema = Yup.object({
  name: Yup.string(),
  active: Yup.string(),
})

export default AmigoFilterSchema
