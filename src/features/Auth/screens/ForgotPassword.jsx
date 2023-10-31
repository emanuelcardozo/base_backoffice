import { useState } from 'react'
import { useFormik } from 'formik'
import LoadingButton from '@mui/lab/LoadingButton'
import { Box, Stack, TextField, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import useStartPasswordRecovery from '../hooks/useStartPasswordRecovery'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { PATHS } from '../routes.jsx'
import ForgotPasswordFormSchema from '../schema/ForgotPasswordFormSchema'

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const { startRecovery } = useStartPasswordRecovery()
  const { t } = useTranslation('features', { keyPrefix: 'Auth' })
  const [searchParams] = useSearchParams()
  const params = {
    email: searchParams.get('email') ? decodeURI(searchParams.get('email')) : null,
  }
  const formik = useFormik({
    initialValues: {
      email: params.email,
      submit: null,
    },
    validationSchema: ForgotPasswordFormSchema(),
    onSubmit: async (values, helpers) => {
      try {
        setIsLoading(true)
        const { email } = values
        await startRecovery(email)

        navigate(`/auth/${PATHS.RESET_PASSWORD}?email=${encodeURIComponent(email)}`)
      } catch (err) {
        helpers.setStatus({ success: false })
        helpers.setErrors({ submit: err })
        helpers.setSubmitting(false)
      } finally {
        setIsLoading(false)
      }
    },
  })

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
              <Typography variant="h4">{t('forgotPassword')}</Typography>
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
                loadingIndicator={t('buttons.sendCodeToEmail')}
              >
                {t('buttons.sendCodeToEmail')}
              </LoadingButton>
            </form>
          </div>
        </Box>
      </Box>
    </>
  )
}

export default ForgotPassword
