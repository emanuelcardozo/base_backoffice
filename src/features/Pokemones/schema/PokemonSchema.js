import * as Yup from 'yup'

const PokemonSchema = Yup.object({
  
  nombre: Yup.string().required('validations:required'),
  
  edad: Yup.number().required('validations:required'),
  
  atrapado: Yup.bool().required('validations:required'),
  
})

export default PokemonSchema
