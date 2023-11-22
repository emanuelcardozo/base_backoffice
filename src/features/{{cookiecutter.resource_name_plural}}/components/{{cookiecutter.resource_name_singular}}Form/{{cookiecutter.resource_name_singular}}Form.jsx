import { useCallback, useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import CardFormBlock from 'components/CardFormBlock/CardFormBlock'
import { Stack, TextField, Button, capitalize } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { useFormik } from 'formik'
import {{cookiecutter.resource_name_singular}}Schema from 'features/{{cookiecutter.resource_name_plural}}/schema/{{cookiecutter.resource_name_singular}}Schema'

const direction = { xs: 'column-reverse', sm: 'row' }

const EMPTY_{{cookiecutter.resource_name_singular|upper}} = {
  {% for field in cookiecutter.__fields %}
    {% if field.type == "string" %}
      {{field.name}}: '',
    {% elif field.type == "number" %}
      {{field.name}}: 0,
    {% elif field.type == "bool" %}
      {{field.name}}: false,
    {% elif field.type == "array" %}
      {{field.name}}: [],
    {% else %}
      {{field.name}}: null,
    {% endif %}
  {% endfor %}
}

function {{cookiecutter.resource_name_singular}}Form({ onCancel, onSubmit, initialValues, mode, isLoading, isSubmitting }) {
  const { t, i18n } = useTranslation(['features'], { keyPrefix: '{{cookiecutter.resource_name_plural|capitalize}}.form' })

  const { handleChange, handleSubmit, handleBlur, setValues, setFieldValue, validateForm, touched, errors, values, isValid } =
    useFormik({
      initialValues,
      validateOnChange: false,
      validationSchema: {{cookiecutter.resource_name_singular|capitalize}}Schema,
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
      onClear: () => setFieldValue(name, EMPTY_PUBLICATION[name]),
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
          {% for field in cookiecutter.__fields %}
            <TextField fullWidth label={t('{{field.name}}')} {...getFieldProps('{{field.name}}')} />
          {% endfor %}
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

{{cookiecutter.resource_name_singular}}Form.defaultProps = {
  initialValues: EMPTY_{{cookiecutter.resource_name_singular|upper}},
  mode: 'create',
  isLoading: false,
  isSubmitting: false,
}

{{cookiecutter.resource_name_singular}}Form.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  mode: PropTypes.string,
  isLoading: PropTypes.bool,
  isSubmitting: PropTypes.boo
}

export default {{cookiecutter.resource_name_singular}}Form
