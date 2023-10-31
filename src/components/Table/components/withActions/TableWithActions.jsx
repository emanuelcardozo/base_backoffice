import { useMemo } from 'react'
import PropTypes from 'prop-types'
import Table from 'components/Table'
import { IconButton, SvgIcon, Tooltip } from '@mui/material'
import { useTranslation } from 'react-i18next'

function TableWithActions({ rows, columns, as: Component, actions, ...restTableProps }) {
  const { t } = useTranslation('common')
  const columnsWithActions = useMemo(() => {
    return [
      ...columns,
      {
        header: t('actions'),
        fieldName: '$actions',
        cellStyles: { whiteSpace: 'nowrap' },
      },
    ]
  }, [columns, t])

  const rowsWithActions = useMemo(() => {
    if (!rows) return null

    return rows.map((row) => {
      return {
        ...row,
        $actions: (
          <>
            {actions.map(
              ({ label, icon: Icon, onClick, visible = () => true }) =>
                visible(row) && (
                  <IconButton key={label} aria-label="hide" onClick={() => onClick(row)}>
                    <Tooltip title={label}>
                      <SvgIcon fontSize="small">
                        <Icon />
                      </SvgIcon>
                    </Tooltip>
                  </IconButton>
                )
            )}
          </>
        ),
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows, actions])

  return <Component columns={columnsWithActions} rows={rowsWithActions} {...restTableProps} />
}

TableWithActions.defaultProps = {
  as: Table,
  rows: null,
  actions: [],
}

TableWithActions.propTypes = {
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
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      icon: PropTypes.elementType,
      onClick: PropTypes.func,
    })
  ),
}

export default TableWithActions
