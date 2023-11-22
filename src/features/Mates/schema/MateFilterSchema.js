import * as Yup from 'yup'

const MateFilterSchema = Yup.object({
  color: Yup.string().required('validations:required'),

  lindo: Yup.bool().required('validations:required'),

  id: Yup.number().required('validations:required'),
})

export default MateFilterSchema
