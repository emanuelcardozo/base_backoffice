import * as Yup from 'yup'

const SkillSchema = Yup.object({
  name: Yup.string().required('validations:required'),
})

export default SkillSchema
