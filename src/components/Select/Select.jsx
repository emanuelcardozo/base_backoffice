import PropTypes from 'prop-types'
import { IconButton, MenuItem, SvgIcon, TextField } from '@mui/material'
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon'

const getValue = (value, emptyValue, multiple) => {
  if (multiple && emptyValue && value.includes(emptyValue.value)) {
    if (value[value.length - 1] === emptyValue.value) {
      return [emptyValue.value]
    } else {
      return value.filter((option) => option !== emptyValue.value)
    }
  }

  return value
}

function Select({ value, onChange, options, label, multiple, emptyValue, onClear, ...restProps }) {
  const inputValue = getValue(value, emptyValue, multiple)
  // this allow false values
  const canClear =
    (Array.isArray(inputValue)
      ? inputValue.length > 0
      : inputValue !== undefined && inputValue !== null && inputValue !== '') && onClear
  return (
    <TextField
      label={label}
      onChange={onChange}
      select
      SelectProps={{
        multiple,
        value: inputValue,
        endAdornment: canClear && (
          <IconButton onClick={onClear}>
            <SvgIcon fontSize="small" sx={{ mr: 1 }}>
              <XMarkIcon />
            </SvgIcon>
          </IconButton>
        ),
      }}
      {...restProps}
    >
      {options.map(({ name, value: opValue }) => (
        <MenuItem key={`${name}_${opValue}`} value={opValue}>
          {name}
        </MenuItem>
      ))}
    </TextField>
  )
}

Select.defaultProps = {
  multiple: false,
  value: '',
  emptyValue: null,
  onClear: null,
}

Select.propTypes = {
  multiple: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.bool,
        PropTypes.object,
      ]),
    })
  ).isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func,
  emptyValue: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
    name: PropTypes.string,
  }),
}

export default Select
