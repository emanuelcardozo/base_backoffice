import * as Yup from 'yup'

const CompuSchema = Yup.object({
  nombre: Yup.string().required('validations:required'),

  marca: Yup.string().required('validations:required'),

  id: Yup.number().required('validations:required'),

  linda: Yup.bool().required('validations:required'),
})

export default CompuSchema
