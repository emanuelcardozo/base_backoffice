import * as Yup from 'yup'

const LocalSchema = Yup.object({
  name: Yup.string().required('validations:required'),
})

export default LocalSchema
