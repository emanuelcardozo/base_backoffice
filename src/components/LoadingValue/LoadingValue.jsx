import PropTypes from 'prop-types'
import { Skeleton } from '@mui/material'

function LoadingValue({ loading, value, width, ...skeletonProps }) {
  if (loading) return <Skeleton width={width} {...skeletonProps} />

  return value || '-'
}

LoadingValue.defaultProps = {
  value: null,
  loading: true,
  width: 200,
}

LoadingValue.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.elementType]),
  loading: PropTypes.bool,
  width: PropTypes.number,
}

export default LoadingValue
