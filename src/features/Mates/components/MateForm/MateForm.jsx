import { useCallback, useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import CardFormBlock from 'components/CardFormBlock/CardFormBlock'
import { Stack, TextField, Button } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { useFormik } from 'formik'
import MateSchema from 'features/Mates/schema/MateSchema'

const direction = { xs: 'column-reverse', sm: 'row' }

const EMPTY_MATE = {
  color: '',

  lindo: false,

  id: 0,
}

function MateForm({ onCancel, onSubmit, initialValues, mode, isLoading, isSubmitting }) {
  const { t, i18n } = useTranslation(['features'], { keyPrefix: 'Mates.form' })

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    setValues,
    setFieldValue,
    validateForm,
    touched,
    errors,
    values,
    isValid,
  } = useFormik({
    initialValues,
    validateOnChange: false,
    validationSchema: MateSchema,
    onSubmit,
  })

  useEffect(() => {
    setValues(initialValues)
    validateForm(initialValues)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValues])

  const getFieldProps = useCallback(
    (name) => ({
      name,
      value: values[name],
      error: !!(touched[name] && errors[name]),
      helperText: touched[name] && i18n.t(errors[name]),
      onBlur: handleBlur,
      onChange: handleChange,
      onClear: () => setFieldValue(name, EMPTY_MATE[name]),
    }),
    [touched, errors, handleBlur, handleChange, values, i18n]
  )

  const canSave = useMemo(() => {
    if (mode === 'edit') return isValid

    return isValid && Object.keys(touched).length
  }, [isValid, touched, mode])

  const styles = { opacity: isLoading ? 0.5 : 1 }

  return (
    <form noValidate onSubmit={handleSubmit}>
      <Stack spacing={3} sx={styles}>
        <CardFormBlock title={t('details')}>
          <TextField fullWidth label={t('color')} {...getFieldProps('color')} />

          <TextField fullWidth label={t('lindo')} {...getFieldProps('lindo')} />

          <TextField fullWidth label={t('id')} {...getFieldProps('id')} />
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

MateForm.defaultProps = {
  initialValues: EMPTY_MATE,
  mode: 'create',
  isLoading: false,
  isSubmitting: false,
}

MateForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  mode: PropTypes.string,
  isLoading: PropTypes.bool,
  isSubmitting: PropTypes.boo,
}

export default MateForm
