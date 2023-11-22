import * as Yup from 'yup'

const HijoFilterSchema = Yup.object({
  nombre: Yup.string().required('validations:required'),

  edad: Yup.number().required('validations:required'),

  fecha_nacimiento: Yup.date().required('validations:required'),
})

export default HijoFilterSchema
