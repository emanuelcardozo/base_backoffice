import PropTypes from 'prop-types'
import { Link } from '@mui/material'

function RetryButtonSnackbar({ onClick, label }) {
  return (
    <Link component="button" variant="body2" sx={{ mx: 2 }} color="neutral.100" onClick={onClick}>
      {label}
    </Link>
  )
}

RetryButtonSnackbar.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
}

export default RetryButtonSnackbar
