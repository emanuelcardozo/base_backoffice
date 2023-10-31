import PropTypes from 'prop-types'
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon'
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon'
import PlusIcon from '@heroicons/react/24/solid/PlusIcon'
import FilterIcon from '@heroicons/react/24/outline/FunnelIcon'
import { Button, Fab, Hidden, Stack, SvgIcon, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

function SectionHeader({
  title,
  showAddButton,
  onClickAddButton,
  showImport,
  onClickImport,
  showExport,
  onClickExport,
  onClickFilterButton,
  filtersCount,
}) {
  const { t } = useTranslation('common')

  return (
    <Stack direction="row" justifyContent="space-between" spacing={4}>
      <Stack spacing={1}>
        <Typography variant="h4">{title}</Typography>
        <Stack alignItems="center" direction="row" spacing={1}>
          {showImport && (
            <Button
              color="inherit"
              startIcon={
                <SvgIcon fontSize="small">
                  <ArrowUpOnSquareIcon />
                </SvgIcon>
              }
              onClick={onClickImport}
            >
              {t('import')}
            </Button>
          )}
          {showExport && (
            <Button
              color="inherit"
              startIcon={
                <SvgIcon fontSize="small">
                  <ArrowDownOnSquareIcon />
                </SvgIcon>
              }
              onClick={onClickExport}
            >
              {t('export')}
            </Button>
          )}
        </Stack>
      </Stack>
      <Stack direction="row" spacing={2}>
        {onClickFilterButton && (
          <Button
            startIcon={
              <SvgIcon fontSize="small">
                <FilterIcon />
              </SvgIcon>
            }
            variant="text"
            onClick={onClickFilterButton}
          >
            {t('filters', { count: filtersCount })}
          </Button>
        )}
        {showAddButton && (
          <>
            <Hidden smDown>
              <Button
                startIcon={
                  <SvgIcon fontSize="small">
                    <PlusIcon />
                  </SvgIcon>
                }
                variant="contained"
                onClick={onClickAddButton}
              >
                {t('new')}
              </Button>
            </Hidden>
            <Hidden smUp>
              <Fab
                color="primary"
                aria-label="add"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
                onClick={onClickAddButton}
              >
                <SvgIcon fontSize="medium">
                  <PlusIcon />
                </SvgIcon>
              </Fab>
            </Hidden>
          </>
        )}
      </Stack>
    </Stack>
  )
}

SectionHeader.defaultProps = {
  showAddButton: false,
  showImport: false,
  showExport: false,
  onClickAddButton: () => null,
  onClickImport: () => null,
  onClickExport: () => null,
  onClickFilterButton: null,
  filtersCount: 0,
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  showAddButton: PropTypes.bool,
  showExport: PropTypes.bool,
  showImport: PropTypes.bool,
  onClickAddButton: PropTypes.func,
  onClickImport: PropTypes.func,
  onClickExport: PropTypes.func,
  onClickFilterButton: PropTypes.func,
  filtersCount: PropTypes.number,
}

export default SectionHeader
