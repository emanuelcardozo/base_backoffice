import * as Yup from 'yup'
import { useTranslation } from 'react-i18next'

const ResetPasswordFormSchema = (CONFIRMATION_CODE_LENGTH) => {
  const { t } = useTranslation('features', { keyPrefix: 'Auth' })

  return Yup.object({
    email: Yup.string()
      .email(t('fields.email.validationEmail'))
      .max(255)
      .required(t('fields.email.validationRequired')),
    code: Yup.string()
      .max(
        CONFIRMATION_CODE_LENGTH,
        t('fields.code.validationLength', { length: CONFIRMATION_CODE_LENGTH })
      )
      .min(
        CONFIRMATION_CODE_LENGTH,
        t('fields.code.validationLength', { length: CONFIRMATION_CODE_LENGTH })
      )
      .required(t('fields.code.validationRequired')),
    password: Yup.string().required(t('fields.password.validationRequired')),
    passwordConfirm: Yup.string()
      .required(t('fields.password.validationRequired'))
      .oneOf([Yup.ref('password'), null], t('fields.password.validationMatch')),
  })
}

export default ResetPasswordFormSchema
