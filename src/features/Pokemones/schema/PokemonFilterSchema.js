import * as Yup from 'yup'

const PokemonFilterSchema = Yup.object({
  name: Yup.string(),
  active: Yup.string(),
})

export default PokemonFilterSchema
