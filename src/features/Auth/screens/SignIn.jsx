import { useState } from 'react'
import { useFormik } from 'formik'
import LoadingButton from '@mui/lab/LoadingButton'
import { Box, Link, Stack, TextField, Typography } from '@mui/material'
import useAuth from 'features/Auth/hooks/useAuth'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { PATHS } from '../routes.jsx'
import SignInFormSchema from '../schema/SignInFormSchema'
import PasswordTextField from 'components/PasswordTextField/index.js'

const Page = () => {
  const [isLoading, setIsLoading] = useState(false)
  const auth = useAuth()
  const { t } = useTranslation('features', { keyPrefix: 'Auth' })
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      submit: null,
    },
    validationSchema: SignInFormSchema(),
    onSubmit: async (values, helpers) => {
      try {
        setIsLoading(true)
        await auth.login(values.email, values.password)
      } catch (err) {
        helpers.setStatus({ success: false })
        helpers.setErrors({ submit: err.message })
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
              <Typography variant="h4">{t('signIn')}</Typography>
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
                  to={`/auth/${PATHS.FORGOT_PASSWORD}`}
                  underline="hover"
                >
                  {t('buttons.forgotPassword')}
                </Link>
              </Typography>
            </form>
          </div>
        </Box>
      </Box>
    </>
  )
}

export default Page
