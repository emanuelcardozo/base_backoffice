import * as Yup from 'yup'

const HolaSchema = Yup.object({
  date: Yup.date().required('validations:required'),

  time: Yup.date().required('validations:required'),

  datetime: Yup.date().required('validations:required'),

  array: Yup.array().required('validations:required'),
})

export default HolaSchema
