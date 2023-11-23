import { useCallback, useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import CardFormBlock from 'components/CardFormBlock/CardFormBlock'
import { useFormik } from 'formik'
import { Stack, Button } from '@mui/material'
import { LoadingButton } from '@mui/lab'

import DatePicker from 'components/DatePicker'

import TimePicker from 'components/TimePicker'

import DateTimePicker from 'components/DateTimePicker'

import Autocomplete from 'components/Autocomplete'

import HolaSchema from 'features/Holas/schema/HolaSchema'

const DEFAULT_DIRECTION = { xs: 'column-reverse', sm: 'row' }
const DEFAULT_SLOTPROPS = { textField: { fullWidth: true } }

const EMPTY_HOLA = {
  date: null,

  time: null,

  datetime: null,

  array: [],
}

function HolaForm({ onCancel, onSubmit, initialValues, mode, isLoading, isSubmitting }) {
  const { t, i18n } = useTranslation(['features'], { keyPrefix: 'Holas.form' })

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
    validationSchema: HolaSchema,
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
      onClear: () => setFieldValue(name, EMPTY_HOLA[name]),
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
          <DatePicker
            label={t('date')}
            slotProps={DEFAULT_SLOTPROPS}
            {...getFieldProps('date')}
            onChange={(date) => setFieldValue('date', date)}
          />

          <TimePicker
            label={t('time')}
            slotProps={DEFAULT_SLOTPROPS}
            {...getFieldProps('time')}
            onChange={(date) => setFieldValue('time', date)}
          />

          <DateTimePicker
            label={t('datetime')}
            slotProps={DEFAULT_SLOTPROPS}
            {...getFieldProps('datetime')}
            onChange={(date) => setFieldValue('datetime', date)}
          />

          <Autocomplete
            label={t('array')}
            resourceName="array"
            {...getFieldProps('array')}
            onChange={(e, value) => {
              setFieldValue('array', value)
            }}
            multiple
            limitTags={2}
          />
        </CardFormBlock>
        <Stack direction={DEFAULT_DIRECTION} spacing={3} justifyContent="flex-end">
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

HolaForm.defaultProps = {
  initialValues: EMPTY_HOLA,
  mode: 'create',
  isLoading: false,
  isSubmitting: false,
}

HolaForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  mode: PropTypes.string,
  isLoading: PropTypes.bool,
  isSubmitting: PropTypes.bool,
}

export default HolaForm
