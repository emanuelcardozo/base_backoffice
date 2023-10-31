import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import ArrowLeftIcon from '@heroicons/react/24/solid/ArrowLeftIcon'
import { Box, Button, Container, SvgIcon, Typography } from '@mui/material'
import img401 from 'src/assets/errors/error-401.png'
import img404 from 'src/assets/errors/error-404.png'
import img500 from 'src/assets/errors/error-500.png'
import { DASHBOARD } from 'utils/constants.js'

const IMAGE_MAP = {
  401: img401,
  404: img404,
  500: img500,
}

function ErrorPage({ status, reloadDocument }) {
  const { t } = useTranslation('errors', { keyPrefix: status })
  const img = IMAGE_MAP[status]

  return (
    <Box
      component="main"
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexGrow: 1,
        minHeight: '100vh',
        my: 2,
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              mb: 3,
              textAlign: 'center',
            }}
          >
            <img
              alt="Under development"
              src={img}
              style={{
                display: 'inline-block',
                maxWidth: '100%',
                width: 400,
              }}
            />
          </Box>
          <Typography align="center" sx={{ mb: 3 }} variant="h3">
            {t('title')}
          </Typography>
          <Typography align="center" color="text.secondary" variant="body1">
            {t('description')}
          </Typography>
          <Button
            component={Link}
            to={DASHBOARD}
            reloadDocument={reloadDocument}
            startIcon={
              <SvgIcon fontSize="small">
                <ArrowLeftIcon />
              </SvgIcon>
            }
            sx={{ mt: 3 }}
            variant="contained"
          >
            {t('goBackButton')}
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

ErrorPage.defaultProps = {
  reloadDocument: false,
}

ErrorPage.propTypes = {
  status: PropTypes.string.isRequired,
  reloadDocument: PropTypes.bool,
}

export default ErrorPage
