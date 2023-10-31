import PropTypes from 'prop-types'
import Table from 'components/Table'
import { TablePagination } from '@mui/material'

function PaginatedTable({
  page,
  onPageChange,
  perPage,
  onRowsPerPageChange,
  rowsPerPageOptions,
  count,
  as: Component,
  ...tableProps
}) {
  return (
    <>
      <Component {...tableProps} />
      <TablePagination
        component="div"
        count={count}
        page={page}
        onPageChange={(e, value) => onPageChange(value)}
        rowsPerPage={perPage}
        onRowsPerPageChange={(e) => onRowsPerPageChange(e.target.value)}
        rowsPerPageOptions={rowsPerPageOptions}
      />
    </>
  )
}

PaginatedTable.defaultProps = {
  as: Table,
  count: 0,
  rowsPerPageOptions: [5, 10, 15],
}

PaginatedTable.propTypes = {
  as: PropTypes.elementType,
  count: PropTypes.number,
  page: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  perPage: PropTypes.number.isRequired,
  onRowsPerPageChange: PropTypes.func.isRequired,
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
}

export default PaginatedTable
