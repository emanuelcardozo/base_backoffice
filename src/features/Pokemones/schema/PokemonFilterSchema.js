import * as Yup from 'yup'

const PokemonFilterSchema = Yup.object({
  name: Yup.string().required('validations:required'),

  id: Yup.number().required('validations:required'),

  skills: Yup.array().required('validations:required'),
})

export default PokemonFilterSchema
