import { useCallback, useEffect, useState } from 'react'
import { useFormik } from 'formik'
import LoadingButton from '@mui/lab/LoadingButton'
import { Box, Link, Stack, TextField, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom'
import useResetPassword from '../hooks/useResetPassword'
import useAuth from '../hooks/useAuth'
import DigitCodeInput from 'components/DigitCodeInput'
import useBrowserSession from '../hooks/useBrowserSession.jsx'
import { PATHS } from '../routes.jsx'
import ResetPasswordFormSchema from '../schema/ResetPasswordFormSchema.js'
import PasswordTextField from 'components/PasswordTextField'

const CONFIRMATION_CODE_LENGTH = 6

const ResetPassword = () => {
  const { t } = useTranslation('features', { keyPrefix: 'Auth' })
  const [isLoading, setIsLoading] = useState(false)
  const browserRecoveryPasswordSession = useBrowserSession('recoveryPassword')
  const recoveryPasswordSession = browserRecoveryPasswordSession.activeSession()
  const { doConfirmCode, doResetPassword } = useResetPassword()
  const navigate = useNavigate()
  const { initSession } = useAuth()
  const [searchParams, setSearchParams] = useSearchParams()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const params = {
    email: searchParams.get('email') ? decodeURI(searchParams.get('email')) : null,
    code: searchParams.get('code'),
  }
  const disabledCode = params.code?.length === CONFIRMATION_CODE_LENGTH && recoveryPasswordSession

  const confirmCode = useCallback(
    async (email, code) => {
      try {
        const session = await doConfirmCode(email, code)
        params.code = code
        setSearchParams(params)
        browserRecoveryPasswordSession.persistSession(session)

        return Promise.resolve(session)
      } catch (e) {
        return Promise.reject(e)
      }
    },
    [browserRecoveryPasswordSession, doConfirmCode, params, setSearchParams]
  )

  const formik = useFormik({
    initialValues: {
      email: decodeURI(params.email),
      code: params.code,
      password: '',
      passwordConfirm: '',
      submit: null,
    },
    validationSchema: ResetPasswordFormSchema(CONFIRMATION_CODE_LENGTH),
    onSubmit: async (values, helpers) => {
      try {
        setIsLoading(true)
        const { email, code, password, passwordConfirm } = values

        // if code already confirmed use that session, else confirm the code and create a recoveryPasswordSession
        const session = recoveryPasswordSession || (await confirmCode(email, code))

        await doResetPassword(session, email, password, passwordConfirm)

        browserRecoveryPasswordSession.clearSession()
        initSession(session)
      } catch (err) {
        helpers.setStatus({ success: false })
        helpers.setErrors({ submit: err })
        helpers.setSubmitting(false)
      } finally {
        setIsLoading(false)
      }
    },
  })

  useEffect(() => {
    if (!params.email) {
      navigate(`/auth/${PATHS.FORGOT_PASSWORD}`)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.email, navigate])

  return (
    <>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: '100px',
            width: '100%',
          }}
        >
          <div>
            <Stack spacing={1} sx={{ mb: 3 }}>
              <Typography variant="h4">{t('resetPassword')}</Typography>
            </Stack>
            <form noValidate onSubmit={formik.handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  error={!!(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label={t('fields.email.label')}
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="email"
                  value={formik.values.email}
                  disabled
                />
                <DigitCodeInput
                  label={t('fields.code.label')}
                  codeLength={CONFIRMATION_CODE_LENGTH}
                  defaultValue={params.code}
                  disabled={disabledCode}
                  error={formik.errors.code}
                  handleChange={(code) => formik.setFieldValue('code', code)}
                />
                <PasswordTextField
                  error={!!(formik.touched.password && formik.errors.password)}
                  fullWidth
                  helperText={formik.touched.password && formik.errors.password}
                  label={t('fields.password.label')}
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  disabled={isLoading}
                />
                <PasswordTextField
                  error={!!(formik.touched.passwordConfirm && formik.errors.passwordConfirm)}
                  fullWidth
                  helperText={formik.touched.passwordConfirm && formik.errors.passwordConfirm}
                  label={t('fields.passwordConfirm.label')}
                  name="passwordConfirm"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.passwordConfirm}
                  disabled={isLoading}
                />
              </Stack>
              {formik.errors.submit && (
                <Typography
                  color="error"
                  sx={{ mt: 3, flex: '1 1 auto', justifyContent: 'center', display: 'flex' }}
                  variant="body2"
                >
                  {formik.errors.submit}
                </Typography>
              )}
              <LoadingButton
                fullWidth
                size="large"
                sx={{ mt: 3 }}
                type="submit"
                variant="contained"
                loading={isLoading}
                loadingIndicator={t('buttons.continueLoading')}
              >
                {t('buttons.continue')}
              </LoadingButton>
              <Typography
                variant="subtitle2"
                sx={{ mt: 3, flex: '1 1 auto', justifyContent: 'center', display: 'flex' }}
              >
                <Link
                  color="primary.main"
                  component={NavLink}
                  to={`/auth/${PATHS.FORGOT_PASSWORD}?email=${encodeURIComponent(params.email)}`}
                  underline="hover"
                >
                  {t('buttons.didYouNotReceiveTheCode')}
                </Link>
              </Typography>
            </form>
          </div>
        </Box>
      </Box>
    </>
  )
}

export default ResetPassword
