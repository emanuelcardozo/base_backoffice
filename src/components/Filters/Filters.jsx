import PropTypes from 'prop-types'
import { Stack, Drawer, Typography, SvgIcon, Button } from '@mui/material'
import TrashIcon from '@heroicons/react/24/outline/TrashIcon'
import { useTranslation } from 'react-i18next'

const Filters = ({ open, onCancel, onApply, onClear, children }) => {
  const { t, i18n } = useTranslation('common', { keyPrefix: 'filters' })

  return (
    <Drawer
      PaperProps={{
        elevation: 16,
        sx: {
          p: 3,
          width: {
            xs: 300,
            md: 380,
          },
        },
      }}
      anchor="right"
      open={open}
      onClose={onCancel}
    >
      <form noValidate onSubmit={onApply}>
        <Stack spacing={5}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={3}>
            <Typography variant="h5">{t('title')}</Typography>
            <Button
              onClick={onClear}
              startIcon={
                <SvgIcon fontSize="small" sx={{ mr: 1 }}>
                  <TrashIcon />
                </SvgIcon>
              }
            >
              {t('clear')}
            </Button>
          </Stack>
          <Stack spacing={3}>
            {children}
            <Stack spacing={1} direction="row" justifyContent="flex-end">
              <Button variant="outlined" fullWidth onClick={onCancel}>
                {i18n.t('cancel')}
              </Button>
              <Button type="submit" variant="contained" fullWidth>
                {i18n.t('apply')}
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </form>
    </Drawer>
  )
}

Filters.propTypes = {
  open: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]).isRequired,
}

export default Filters
