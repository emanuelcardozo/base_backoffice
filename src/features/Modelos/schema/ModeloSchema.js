import * as Yup from 'yup'

const ModeloSchema = Yup.object({
  
  id: Yup.number().required('validations:required'),
  
  nombre: Yup.string().required('validations:required'),
  
  fecha: Yup.date().required('validations:required'),
  
})

export default ModeloSchema
