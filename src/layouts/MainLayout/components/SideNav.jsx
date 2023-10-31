import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Box, Divider, Drawer, Stack, Typography, useMediaQuery } from '@mui/material'
import { useLocation } from 'react-router-dom'
import Scrollbar from 'components/Scrollbar'
import { itemsGroupAdminUser, itemsGroupCommonUser } from '../config'
import { SideNavItem } from './SideNavItem'
import { useTranslation } from 'react-i18next'
import { Logo } from 'components/logo.jsx'
import useAuth from 'features/Auth/hooks/useAuth'

export const SideNav = (props) => {
  const { open, onClose } = props
  const { t } = useTranslation('menu')
  const location = useLocation()
  const { pathname } = location
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'))
  const { session } = useAuth()
  const { user } = session || {}
  const { isAdmin } = user

  const content = (
    <Scrollbar
      sx={{
        height: '100%',
        '& .simplebar-content': {
          height: '100%',
        },
        '& .simplebar-scrollbar:before': {
          background: 'neutral.400',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box
            component={NavLink}
            href="/"
            sx={{
              display: 'inline-flex',
              height: 32,
              width: 32,
            }}
          >
            <Logo width={32} height={40} />
          </Box>
        </Box>
        <Divider sx={{ borderColor: 'neutral.700' }} />
        <Box
          component="nav"
          sx={{
            px: 2,
            py: 3,
          }}
        >
          <Typography color="neutral.100" variant="subtitle2">
            {t('operations')}
          </Typography>
          <Stack
            component="ul"
            spacing={0.5}
            sx={{
              listStyle: 'none',
              p: 0,
              m: 0,
            }}
          >
            {!isAdmin &&
              itemsGroupCommonUser.map((item) => {
                const active = item.path ? pathname === item.path : false

                return (
                  <SideNavItem
                    active={active}
                    disabled={item.disabled}
                    external={item.external}
                    icon={item.icon}
                    key={item.title}
                    path={item.path}
                    title={t(item.title)}
                  />
                )
              })}
          </Stack>
        </Box>
        {isAdmin && (
          <>
            <Divider sx={{ borderColor: 'neutral.700' }} />
            <Box
              sx={{
                px: 2,
                py: 3,
              }}
            >
              <Typography color="neutral.100" variant="subtitle2">
                {t('system')}
              </Typography>
              <Stack
                component="ul"
                spacing={0.5}
                sx={{
                  listStyle: 'none',
                  p: 0,
                  m: 0,
                }}
              >
                {itemsGroupAdminUser.map((item) => {
                  const active = item.path ? pathname === item.path : false

                  return (
                    <SideNavItem
                      active={active}
                      disabled={item.disabled}
                      external={item.external}
                      icon={item.icon}
                      key={item.title}
                      path={item.path}
                      title={t(item.title)}
                    />
                  )
                })}
              </Stack>
            </Box>
          </>
        )}
      </Box>
    </Scrollbar>
  )

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.800',
            color: 'common.white',
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    )
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.800',
          color: 'common.white',
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  )
}

SideNav.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
}
