import * as Yup from 'yup'
import { useTranslation } from 'react-i18next'

const ResetPasswordFormSchema = () => {
  const { t } = useTranslation('features', { keyPrefix: 'Auth' })
  return Yup.object({
    email: Yup.string()
      .email(t('fields.email.validationEmail'))
      .max(255)
      .required(t('fields.email.validationRequired')),
  })
}

export default ResetPasswordFormSchema
