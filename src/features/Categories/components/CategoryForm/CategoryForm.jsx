import { useCallback, useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import CardFormBlock from 'components/CardFormBlock/CardFormBlock'
import { useFormik } from 'formik'
import { Stack, Button } from '@mui/material'
import { LoadingButton } from '@mui/lab'

import TextField from '@mui/material/TextField'

import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'

import CategorySchema from 'features/Categories/schema/CategorySchema'

const EMPTY_CATEGORY = {
  id: null,

  name: '',

  active: null,
}

function CategoryForm({ onCancel, onSubmit, initialValues, mode, isLoading, isSubmitting }) {
  const { t, i18n } = useTranslation(['features'], { keyPrefix: 'Categories.form' })

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
    validationSchema: CategorySchema,
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
      onClear: () => setFieldValue(name, EMPTY_CATEGORY[name]),
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
          <TextField fullWidth type="number" label={t('id')} {...getFieldProps('id')} />

          <TextField fullWidth label={t('name')} {...getFieldProps('name')} />

          <FormControlLabel
            control={
              <Switch
                onChange={(e, checked) => setFieldValue('active', checked)}
                color="primary"
                checked={values.active}
              />
            }
            label={t('active')}
          />
        </CardFormBlock>
        <Stack
          direction={{ xs: 'column-reverse', sm: 'row' }}
          spacing={3}
          justifyContent="flex-end"
        >
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

CategoryForm.defaultProps = {
  initialValues: EMPTY_CATEGORY,
  mode: 'create',
  isLoading: false,
  isSubmitting: false,
}

CategoryForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  mode: PropTypes.string,
  isLoading: PropTypes.bool,
  isSubmitting: PropTypes.bool,
}

export default CategoryForm
