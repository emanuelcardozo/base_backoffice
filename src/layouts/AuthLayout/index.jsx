import { useEffect } from 'react'
import { Box, Typography, Unstable_Grid2 as Grid, Link } from '@mui/material'
import { Outlet } from 'react-router-dom'
import useAuth from 'features/Auth/hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { Logo } from 'components/logo.jsx'
import { useTranslation } from 'react-i18next'
import { DASHBOARD } from 'utils/constants'
import Language from '../MainLayout/components/TopNavButtons/Language.jsx'

const AuthLayout = () => {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const { t } = useTranslation('authLayout')

  useEffect(() => {
    if (isAuthenticated) {
      navigate(DASHBOARD)
    }
  }, [isAuthenticated, navigate])

  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        flex: '1 1 auto',
      }}
    >
      <Grid container sx={{ flex: '1 1 auto' }}>
        <Grid
          xs={12}
          lg={6}
          sx={{
            backgroundColor: 'background.paper',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
          }}
        >
          <Box
            component="header"
            sx={{
              left: 0,
              display: 'flex',
              justifyContent: 'space-between',
              p: 3,
              position: 'fixed',
              top: 0,
              width: '100%',
            }}
          >
            <Box
              component={Link}
              href="/"
              sx={{
                display: 'inline-flex',
                height: 32,
                width: 32,
              }}
            >
              <Logo width={32} height={40} />
            </Box>
            <Language />
          </Box>
          <Outlet />
        </Grid>
        <Grid
          xs={12}
          lg={6}
          sx={{
            alignItems: 'center',
            background: 'radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            '& img': {
              maxWidth: '100%',
            },
          }}
        >
          <Box sx={{ p: 3 }}>
            <Typography
              align="center"
              color="inherit"
              sx={{
                fontSize: '24px',
                lineHeight: '32px',
                mb: 1,
              }}
              variant="h1"
            >
              {t('welcome')}{' '}
              <Box component="a" sx={{ color: '#15B79E' }} target="_blank">
                {t('projectName')}
              </Box>
            </Typography>
            <Typography align="center" sx={{ mb: 3 }} variant="subtitle1">
              {t('description')}
            </Typography>
            {/* <img width={50} alt="" src={logo} style={{ display: 'block', margin: 'auto' }} /> */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AuthLayout
