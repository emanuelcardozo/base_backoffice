import PropTypes from 'prop-types'
import { DateTimePicker as MUIDateTimePicker } from '@mui/x-date-pickers/DateTimePicker'

function DateTimePicker({ error, helperText, onBlur, slotProps, ...restProps }) {
  const { textField: textFieldSlotProps, ...restSlotProps } = slotProps

  return (
    <MUIDateTimePicker
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

DateTimePicker.defaultProps = {
  error: false,
  helperText: '',
  onBlur: () => {},
  slotProps: {},
}

DateTimePicker.propTypes = {
  error: PropTypes.bool,
  helperText: PropTypes.string,
  onBlur: PropTypes.func,
  slotProps: PropTypes.object,
}

export default DateTimePicker
