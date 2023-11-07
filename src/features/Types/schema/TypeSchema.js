import * as Yup from 'yup'

const TypeSchema = Yup.object({
  name: Yup.string().required('validations:required'),
})

export default TypeSchema
