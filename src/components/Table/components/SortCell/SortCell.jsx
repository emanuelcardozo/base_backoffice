import PropTypes from 'prop-types'
import { TableSortLabel } from '@mui/material'
import { Box } from '@mui/system'
import { visuallyHidden } from '@mui/utils'

function SortCell({ active, direction, onClick, header, order }) {
  return (
    <TableSortLabel active={active} direction={direction} onClick={onClick}>
      {header}
      {active ? (
        <Box component="span" sx={visuallyHidden}>
          {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
        </Box>
      ) : null}
    </TableSortLabel>
  )
}

SortCell.defaultProps = {
  active: false,
  order: 'desc',
  direction: null,
}

SortCell.propTypes = {
  header: PropTypes.elementType.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool,
  order: PropTypes.oneOf(['asc', 'desc']),
  direction: PropTypes.oneOf(['asc', 'desc']),
}

export default SortCell
