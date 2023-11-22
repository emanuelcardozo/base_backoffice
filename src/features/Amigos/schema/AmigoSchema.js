import * as Yup from 'yup'

const AmigoSchema = Yup.object({
  name: Yup.string().required('validations:required'),
})

export default AmigoSchema
