import PropTypes from 'prop-types'
import { TextField } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useCallback } from 'react'
import { useFormik } from 'formik'
import HijoFilterSchema from 'features/Hijos/schema/HijoFilterSchema'
import Filters from 'components/Filters/index.js'
import { useMemo } from 'react'
import entitiesToOptions from 'utils/entityToOptions.js'
import Select from 'components/Select'

const emptyValue = { name: t('all'), value: null }

const HijoFilters = ({ open, onCancel, onApply, initialFilters }) => {
  const { t } = useTranslation('features', { keyPrefix: 'Hijos.filters' })

  const { handleChange, values, setValues, handleSubmit, setFieldValue } = useFormik({
    initialValues: initialFilters,
    validationSchema: HijoFilterSchema,
    onSubmit: (data) => onApply(data),
  })

  const handleClear = useCallback(() => setValues(initialFilters), [initialFilters, setValues])

  const getFieldProps = useCallback(
    (name) => ({
      name,
      value: values[name],
      onChange: handleChange,
      onClear: () => setFieldValue(name, initialFilters[name]),
    }),
    [handleChange, values]
  )

  const ACTIVE_OPTIONS = useMemo(
    () => [
      { id: true, name: t('common:Yes') },
      { id: false, name: t('common:No') },
    ],
    [t]
  )

  return (
    <Filters open={open} onCancel={onCancel} onApply={handleSubmit} onClear={handleClear}>
      <TextField label={t('name')} fullWidth {...getFieldProps('name')} />
      <Select
        label={t('active')}
        options={entitiesToOptions(ACTIVE_OPTIONS)}
        fullWidth
        emptyValue={emptyValue}
        {...getFieldProps('active')}
      />
    </Filters>
  )
}

HijoFilters.defaultProps = {
  initialFilters: {
    name: '',
    active: '',
  },
}

HijoFilters.propTypes = {
  open: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
  initialFilters: PropTypes.object.isRequired,
}

export default HijoFilters
