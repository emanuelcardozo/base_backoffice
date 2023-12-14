import PropTypes from 'prop-types'
import { Container, Stack, Typography } from '@mui/material'
import SectionBackButton from 'components/SectionBackButton'
import StickySectionHeader from 'components/StickySectionHeader'

function FeatureFormLayout({ t, goBackTo, children, mode = 'create' }) {
  return (
    <Container maxWidth="xl">
      <Stack spacing={3} my={3}>
        <StickySectionHeader>
          <Stack direction="row" spacing={2} alignItems="center">
            <SectionBackButton label={t('listing.title')} to={goBackTo} />
            <Typography variant="h4">{t(`${mode}.title`)}</Typography>
          </Stack>
        </StickySectionHeader>
        {children}
      </Stack>
    </Container>
  )
}

FeatureFormLayout.propTypes = {
  t: PropTypes.func.isRequired,
  goBackTo: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  mode: PropTypes.string,
}

export default FeatureFormLayout
