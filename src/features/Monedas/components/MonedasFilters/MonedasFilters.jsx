import PropTypes from 'prop-types'
import { TextField } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useCallback } from 'react'
import { useFormik } from 'formik'
import CategoryFilterSchema from 'features/Monedas/schema/CategoryFilterSchema'
import Filters from 'components/Filters/index.js'
import { useMemo } from 'react'
import entitiesToOptions from 'utils/entityToOptions.js'
import Select from 'components/Select'

const emptyValue = { name: t('all'), value: null }

const MonedaFilters = ({ open, onCancel, onApply, initialFilters }) => {
  const { t } = useTranslation('features', { keyPrefix: 'Categories.filters' })

  const { handleChange, values, setValues, handleSubmit, setFieldValue } = useFormik({
    initialValues: initialFilters,
    validationSchema: CategoryFilterSchema,
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

MonedaFilters.defaultProps = {
  initialFilters: {
    name: '',
    active: '',
  },
}

MonedaFilters.propTypes = {
  open: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
  initialFilters: PropTypes.object.isRequired,
}

export default MonedaFilters
