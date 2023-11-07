import * as Yup from 'yup'

const PokemonSchema = Yup.object({
  name: Yup.string().required('validations:required'),
})

export default PokemonSchema
