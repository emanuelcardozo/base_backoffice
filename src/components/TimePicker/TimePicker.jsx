import PropTypes from 'prop-types'
import { TimePicker as MUITimePicker } from '@mui/x-date-pickers/TimePicker'

function TimePicker({ error, helperText, onBlur, slotProps, ...restProps }) {
  const { textField: textFieldSlotProps, ...restSlotProps } = slotProps

  return (
    <MUITimePicker
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

TimePicker.defaultProps = {
  error: false,
  helperText: '',
  onBlur: () => {},
  slotProps: {},
}

TimePicker.propTypes = {
  error: PropTypes.bool,
  helperText: PropTypes.string,
  onBlur: PropTypes.func,
  slotProps: PropTypes.object,
}

export default TimePicker
