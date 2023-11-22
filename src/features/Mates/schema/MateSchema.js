import * as Yup from 'yup'

const MateSchema = Yup.object({
  
  tamano: Yup.number().required('validations:required'),
  
  nombre2: Yup.string().required('validations:required'),
  
  caro: Yup.bool().required('validations:required'),
  
})

export default MateSchema
