import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { useCallback } from 'react'
import { useFormik } from 'formik'
import CategoryFilterSchema from 'features/Categories/schema/CategoryFilterSchema'
import Filters from 'components/Filters/index.js'

import TextField from '@mui/material/TextField'

import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'

const EMPTY_CATEGORY_FILTERS = {
  id: null,

  name: '',

  active: null,
}

const CategoryFilters = ({ open, onCancel, onApply, initialFilters }) => {
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

  return (
    <Filters open={open} onCancel={onCancel} onApply={handleSubmit} onClear={handleClear}>
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
    </Filters>
  )
}

CategoryFilters.defaultProps = {
  initialFilters: EMPTY_CATEGORY_FILTERS,
}

CategoryFilters.propTypes = {
  open: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
  initialFilters: PropTypes.object.isRequired,
}

export default CategoryFilters
