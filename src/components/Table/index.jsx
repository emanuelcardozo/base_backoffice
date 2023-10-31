import PropTypes from 'prop-types'
import {
  Box,
  Table as MuiTable,
  Stack,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import Scrollbar from '../Scrollbar'
import SkeletonRow from './components/SkeletonRow'
import img404 from 'src/assets/errors/error-404.png'
import { useTranslation } from 'react-i18next'

function Table({ columns, rows, minWidth, loading, skeletonRowsQuantity }) {
  const { t } = useTranslation()
  return (
    <Scrollbar>
      <Box sx={{ minWidth }}>
        <MuiTable>
          <TableHead>
            <TableRow>
              {columns.map(({ header, fieldName }) => (
                <TableCell key={fieldName}>
                  <>{header}</>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {loading || rows === null ? (
              <>
                {Array.from({ length: skeletonRowsQuantity }, (_, i) => (
                  <SkeletonRow key={i} columnsQuantity={columns.length} />
                ))}
              </>
            ) : rows.length === 0 ? (
              <TableRow>
                <TableCell colSpan={skeletonRowsQuantity}>
                  <Stack m={3} spacing={3} sx={{ alignItems: { sm: 'center' } }}>
                    <img
                      alt="no results"
                      src={img404}
                      style={{
                        width: 120,
                      }}
                    />
                    <Typography color="text.secondary">{t('noResults')}</Typography>
                  </Stack>
                </TableCell>
              </TableRow>
            ) : (
              rows.map((row) => {
                const isSelected = Boolean(row['$isSelected'])

                return (
                  <TableRow key={row.id} selected={isSelected} hover>
                    {columns.map(({ fieldName, cellStyles }) => (
                      <TableCell key={`${row.id}_${fieldName}`} sx={cellStyles}>
                        <>{row[fieldName]}</>
                      </TableCell>
                    ))}
                  </TableRow>
                )
              })
            )}
          </TableBody>
        </MuiTable>
      </Box>
    </Scrollbar>
  )
}

Table.defaultProps = {
  rows: null,
  loading: true,
  minWidth: 800,
  skeletonRowsQuantity: 10,
}

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]),
      fieldName: PropTypes.string,
      cellStyles: PropTypes.object,
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
  loading: PropTypes.bool,
  minWidth: PropTypes.number,
  skeletonRowsQuantity: PropTypes.number,
}

export default Table
