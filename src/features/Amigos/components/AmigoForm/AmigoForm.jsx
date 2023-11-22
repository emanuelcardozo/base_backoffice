import { useCallback, useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import CardFormBlock from 'components/CardFormBlock/CardFormBlock'
import { Stack, TextField, Button } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { useFormik } from 'formik'
import CategorySchema from 'features/Amigos/schema/CategorySchema'

const direction = { xs: 'column-reverse', sm: 'row' }
function AmigoForm({ onCancel, onSubmit, initialValues, isSubmitting }) {
  const { t, i18n } = useTranslation(['features'], { keyPrefix: 'Categories.form' })

  useEffect(() => {
    setValues(initialValues)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValues])

  const { handleChange, handleSubmit, handleBlur, setValues, touched, errors, values, isValid } =
    useFormik({
      initialValues,
      validateOnChange: false,
      validationSchema: CategorySchema,
      onSubmit,
    })

  const getFieldProps = useCallback(
    (name) => ({
      name,
      value: values[name],
      error: !!(touched[name] && errors[name]),
      helperText: touched[name] && i18n.t(errors[name]),
      onBlur: handleBlur,
      onChange: handleChange,
    }),
    [touched, errors, handleBlur, handleChange, values, i18n]
  )

  const canSave = useMemo(() => isValid && Object.keys(touched).length, [isValid, touched])

  return (
    <form noValidate onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <CardFormBlock title={t('details')}>
          <TextField fullWidth label={t('name')} {...getFieldProps('name')} />
        </CardFormBlock>
        <Stack direction={direction} spacing={3} justifyContent="flex-end">
          <Button size="large" variant="text" onClick={onCancel}>
            {t('cancel')}
          </Button>
          <LoadingButton
            size="large"
            type="submit"
            onClick={() => {
              values.active = false
            }}
            variant="outlined"
            loading={values.active === false && isSubmitting}
            disabled={!canSave}
          >
            {t('saveAndNoActivate')}
          </LoadingButton>
          <LoadingButton
            size="large"
            type="submit"
            onClick={() => {
              values.active = true
            }}
            variant="contained"
            loading={values.active === true && isSubmitting}
            disabled={!canSave}
          >
            {t('saveAndActivate')}
          </LoadingButton>
        </Stack>
      </Stack>
    </form>
  )
}

AmigoForm.defaultProps = {
  initialValues: {
    name: '',
    active: false,
  },
  isSubmitting: false,
}

AmigoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  isSubmitting: PropTypes.bool,
}

export default AmigoForm
