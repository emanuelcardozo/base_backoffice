import * as Yup from 'yup'

const MonedaSchema = Yup.object({
  
  tamano: Yup.number().required('validations:required'),
  
  detalle: Yup.string().required('validations:required'),
  
  existe: Yup.bool().required('validations:required'),
  
})

export default MonedaSchema
