import * as Yup from 'yup'

const PokemonSchema = Yup.object({
  name: Yup.string().required('validations:required'),

  id: Yup.number().required('validations:required'),

  skills: Yup.array().required('validations:required'),
})

export default PokemonSchema
