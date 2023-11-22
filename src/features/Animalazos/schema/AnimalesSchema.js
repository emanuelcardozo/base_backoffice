import * as Yup from 'yup'

const AnimalesSchema = Yup.object({
  nombre: Yup.string().required('validations:required'),

  edad: Yup.number().required('validations:required'),

  macho: Yup.bool().required('validations:required'),
})

export default AnimalesSchema
