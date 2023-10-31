import { useMemo } from 'react'
import PropTypes from 'prop-types'
import Table from 'components/Table'
import { Checkbox } from '@mui/material'
import { useSelection } from '../../hooks/useSelection'

function MultiSelectTable({
  rows,
  columns,
  as: Component,
  onSelectOne,
  onDeselectOne,
  onSelectAll,
  onDeselectAll,
  ...restTableProps
}) {
  const rowsIds = useMemo(() => rows?.map((row) => row.id), [rows])
  const { selected = [], ...rowsSelection } = useSelection(rowsIds || [])

  const onHeaderCheckboxChange = (event) => {
    if (event.target.checked) {
      rowsSelection.handleSelectAll(onSelectAll)
    } else {
      rowsSelection.handleDeselectAll(onDeselectAll)
    }
  }

  const onRowCheckboxChange = (rowId) => (event) => {
    if (event.target.checked) {
      rowsSelection.handleSelectOne(rowId, onSelectOne)
    } else {
      rowsSelection.handleDeselectOne(rowId, onDeselectOne)
    }
  }

  const columnsWithCheckbox = useMemo(() => {
    const selectedSome = selected.length > 0 && selected.length < rows.length
    const selectedAll = rows?.length > 0 && selected.length === rows?.length

    return [
      {
        header: (
          <Checkbox
            checked={selectedAll}
            indeterminate={selectedSome}
            onChange={onHeaderCheckboxChange}
          />
        ),
        fieldName: '$checkbox',
      },
      ...columns,
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, rows, columns])

  const rowsWithCheckbox = useMemo(() => {
    if (!rows) return null

    return rows.map((row) => {
      const isSelected = selected.includes(row.id)

      return {
        $checkbox: <Checkbox checked={isSelected} onChange={onRowCheckboxChange(row.id)} />,
        $isSelected: isSelected,
        ...row,
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, rows])

  return <Component columns={columnsWithCheckbox} rows={rowsWithCheckbox} {...restTableProps} />
}

MultiSelectTable.defaultProps = {
  as: Table,
  rows: null,
}

MultiSelectTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]),
      fieldName: PropTypes.string,
    })
  ).isRequired,
  rows: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.bool,
        PropTypes.element,
        PropTypes.node,
      ])
    )
  ),
  as: PropTypes.elementType,
  onSelectOne: PropTypes.func.isRequired,
  onDeselectOne: PropTypes.func.isRequired,
  onSelectAll: PropTypes.func.isRequired,
  onDeselectAll: PropTypes.func.isRequired,
}

export default MultiSelectTable
