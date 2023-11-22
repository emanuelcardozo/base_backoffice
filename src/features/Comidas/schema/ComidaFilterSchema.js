import * as Yup from 'yup'

const ComidaFilterSchema = Yup.object({
  nombre: Yup.number().required('validations:required'),

  fecha: Yup.date().required('validations:required'),

  dia: Yup.string().required('validations:required'),
})

export default ComidaFilterSchema
