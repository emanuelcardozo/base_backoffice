import { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Skeleton, TableCell, TableRow } from '@mui/material'

function SkeletonRow({ columnsQuantity }) {
  const cells = useMemo(() => {
    const cellList = []

    for (let i = 0; i < columnsQuantity; i++) {
      cellList.push(
        <TableCell key={i}>
          <Skeleton />
        </TableCell>
      )
    }

    return cellList
  }, [columnsQuantity])

  return <TableRow hover>{cells}</TableRow>
}

SkeletonRow.propTypes = {
  columnsQuantity: PropTypes.number.isRequired,
}

export default SkeletonRow
