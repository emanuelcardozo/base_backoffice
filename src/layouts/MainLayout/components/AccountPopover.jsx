import { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Box, Divider, MenuItem, MenuList, Popover, Typography } from '@mui/material'
import useAuth from 'features/Auth/hooks/useAuth'
import { useTranslation } from 'react-i18next'

export const AccountPopover = (props) => {
  const { session } = useAuth()
  const { user } = session || {}
  const { anchorEl, onClose, open } = props
  const auth = useAuth()
  const { t } = useTranslation('accountPopover')

  const handleSignOut = useCallback(() => {
    onClose?.()
    auth.logout()
  }, [onClose, auth])

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom',
      }}
      onClose={onClose}
      open={open}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2,
        }}
      >
        <Typography variant="overline">{t('account')}</Typography>
        <Typography color="text.secondary" variant="body2">
          {user.email}
        </Typography>
      </Box>
      <Divider />
      <MenuList
        disablePadding
        dense
        sx={{
          p: '8px',
          '& > *': {
            borderRadius: 1,
          },
        }}
      >
        <MenuItem onClick={handleSignOut}>{t('signOut')}</MenuItem>
      </MenuList>
    </Popover>
  )
}

AccountPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
}
