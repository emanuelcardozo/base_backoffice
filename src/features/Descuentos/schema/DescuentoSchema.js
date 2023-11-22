import * as Yup from 'yup'

const DescuentoSchema = Yup.object({
  name: Yup.string().required('validations:required'),
})

export default DescuentoSchema
