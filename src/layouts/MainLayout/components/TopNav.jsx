import PropTypes from 'prop-types'
import { Box, Stack } from '@mui/material'
import { alpha } from '@mui/material/styles'

import Menu from './TopNavButtons/Menu'
import Language from './TopNavButtons/Language'
import Contacts from './TopNavButtons/Contacts'
import Notifications from './TopNavButtons/Notifications'
import Search from './TopNavButtons/Search'
import Account from './TopNavButtons/Account'

const SIDE_NAV_WIDTH = 280
const TOP_NAV_HEIGHT = 64

const DEFAULT_ICON_BUTTONS = {
  search: false,
  language: true,
  contacts: false,
  notifications: false,
  account: true,
}

export const TopNav = ({ onNavOpen }) => {
  return (
    <Box
      component="header"
      sx={{
        backdropFilter: 'blur(6px)',
        backgroundColor: (theme) => alpha(theme.palette.background.default, 0.8),
        position: 'sticky',
        left: {
          lg: `${SIDE_NAV_WIDTH}px`,
        },
        top: 0,
        width: {
          lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`,
        },
        zIndex: (theme) => theme.zIndex.appBar,
      }}
    >
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{
          minHeight: TOP_NAV_HEIGHT,
          px: 2,
        }}
      >
        <Stack alignItems="center" direction="row" spacing={2}>
          <Menu onNavOpen={onNavOpen} />
          {DEFAULT_ICON_BUTTONS.search && <Search />}
        </Stack>
        <Stack alignItems="center" direction="row" spacing={2}>
          {DEFAULT_ICON_BUTTONS.language && <Language />}
          {DEFAULT_ICON_BUTTONS.contacts && <Contacts />}
          {DEFAULT_ICON_BUTTONS.notifications && <Notifications />}
          {DEFAULT_ICON_BUTTONS.account && <Account />}
        </Stack>
      </Stack>
    </Box>
  )
}

TopNav.propTypes = {
  onNavOpen: PropTypes.func,
}
