import PropTypes from 'prop-types'
import { DatePicker as MUIDatePicker } from '@mui/x-date-pickers/DatePicker'

function DatePicker({ error, helperText, onBlur, slotProps, ...restProps }) {
  const { textField: textFieldSlotProps, ...restSlotProps } = slotProps

  return (
    <MUIDatePicker
      slotProps={{
        textField: {
          name: restProps.name,
          error,
          helperText,
          onBlur,
          ...textFieldSlotProps,
        },
        ...restSlotProps,
      }}
      {...restProps}
    />
  )
}

DatePicker.defaultProps = {
  error: false,
  helperText: '',
  onBlur: () => {},
  slotProps: {},
}

DatePicker.propTypes = {
  error: PropTypes.bool,
  helperText: PropTypes.string,
  onBlur: PropTypes.func,
  slotProps: PropTypes.object,
}

export default DatePicker
