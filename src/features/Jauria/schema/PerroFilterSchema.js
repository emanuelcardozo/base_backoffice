import * as Yup from 'yup'

const PerroFilterSchema = Yup.object({
  nombre: Yup.string().required('validations:required'),

  fecha: Yup.date().required('validations:required'),

  id: Yup.number().required('validations:required'),

  lindo: Yup.bool().required('validations:required'),

  gustos: Yup.array().required('validations:required'),
})

export default PerroFilterSchema
