import * as Yup from 'yup'

const PokemonSchema = Yup.object({
  date: Yup.date().required('validations:required'),

  time: Yup.time().required('validations:required'),

  datetime: Yup.datetime().required('validations:required'),

  array: Yup.array().required('validations:required'),
})

export default PokemonSchema
