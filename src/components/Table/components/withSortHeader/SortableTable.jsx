import { useCallback, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import Table from 'components/Table'
import SortCell from '../SortCell'

function SortableTable({ columns, as: Component, onSort, ...restTableProps }) {
  const [order, setOrder] = useState(null)
  const [orderBy, setOrderBy] = useState(null)

  const handleClickSort = useCallback(
    (fieldName) => {
      const newOrder = orderBy === fieldName && order === 'desc' ? 'asc' : 'desc'

      setOrderBy(fieldName)
      setOrder(newOrder)
      onSort(fieldName, newOrder)
    },
    [orderBy, order, onSort]
  )

  const sortableColumns = useMemo(() => {
    return columns.map(({ header, fieldName, sortable }) => {
      if (!sortable) return { header, fieldName }

      const active = orderBy === fieldName

      return {
        fieldName,
        header: (
          <SortCell
            key={header}
            header={header}
            active={active}
            direction={active ? order : 'desc'}
            onClick={() => handleClickSort(fieldName)}
            order={order}
          />
        ),
      }
    })
  }, [columns, order, orderBy, handleClickSort])

  return <Component columns={sortableColumns} {...restTableProps} />
}

SortableTable.defaultProps = {
  as: Table,
  onSort: null,
}

SortableTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]),
      fieldName: PropTypes.string,
      sortable: PropTypes.bool,
    })
  ).isRequired,
  as: PropTypes.elementType,
  onSort: PropTypes.func,
}

export default SortableTable
