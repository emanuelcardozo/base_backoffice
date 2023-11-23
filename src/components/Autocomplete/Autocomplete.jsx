import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField'
import { Autocomplete as MUIAutocomplete, debounce } from '@mui/material'
import useGetOptions from 'hooks/useGetOptions'
import { useState } from 'react'

function Autocomplete({
  name,
  resourceName,
  filterName,
  label,
  multiple,
  extraFilters,
  error,
  helperText,
  onBlur,
  ...restProps
}) {
  const [inputValue, setInputValue] = useState('')
  const allOptions = useGetOptions([resourceName], { [filterName]: inputValue, ...extraFilters })
  const options = allOptions?.[`${resourceName}Options`] || []

  return (
    <MUIAutocomplete
      options={options}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <TextField
          {...params}
          name={name}
          label={label}
          helperText={helperText}
          error={error}
          onBlur={onBlur}
        />
      )}
      onInputChange={debounce((event, newInputValue) => {
        setInputValue(newInputValue)
      }, 500)}
      disablePortal
      autoComplete
      isOptionEqualToValue={(option, value) => option.value === value.value}
      multiple={multiple}
      {...restProps}
    />
  )
}

Autocomplete.defaultProps = {
  multiple: false,
  filterName: 'name',
  extraFilters: {},
  error: false,
  helperText: '',
  onBlur: () => {},
}

Autocomplete.propTypes = {
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  inputValue: PropTypes.string,
  filterName: PropTypes.string,
  onInputChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  resourceName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  multiple: PropTypes.bool,
  extraFilters: PropTypes.object,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  onBlur: PropTypes.func,
}

export default Autocomplete
