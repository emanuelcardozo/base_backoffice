import * as Yup from 'yup'

const PruebaSchema = Yup.object({
  string: Yup.string().required('validations:required'),

  date: Yup.date().required('validations:required'),

  time: Yup.time().required('validations:required'),

  datetime: Yup.datetime().required('validations:required'),

  array: Yup.array().required('validations:required'),

  number: Yup.number().required('validations:required'),
})

export default PruebaSchema
