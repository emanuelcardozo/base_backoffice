import * as Yup from 'yup'

const Pruebas2FilterSchema = Yup.object({
  date: Yup.date().required('validations:required'),

  datetime: Yup.datetime().required('validations:required'),

  time: Yup.time().required('validations:required'),

  array: Yup.array().required('validations:required'),
})

export default Pruebas2FilterSchema
