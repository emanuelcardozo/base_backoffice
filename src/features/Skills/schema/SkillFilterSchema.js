import * as Yup from 'yup'

const SkillFilterSchema = Yup.object({
  name: Yup.string(),
  active: Yup.string(),
})

export default SkillFilterSchema
