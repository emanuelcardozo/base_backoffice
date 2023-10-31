import PropTypes from 'prop-types'
import { Avatar, Stack, Typography } from '@mui/material'
import LoadingValue from 'components/LoadingValue/LoadingValue'

function DetailSectionHeader({ title, subtitle, avatarURL, loading }) {
  return (
    <Stack
      direction={{ md: 'row', xs: 'column' }}
      justifyContent="space-between"
      spacing={4}
      alignItems="flex-start"
    >
      <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
        <Avatar
          src={avatarURL}
          sx={{
            height: 64,
            width: 64,
          }}
        />
        <Stack direction="column" spacing={1}>
          <Typography variant="h4">
            <LoadingValue loading={loading} value={title} />
          </Typography>
          <Typography variant="subtitle2">
            <LoadingValue loading={loading} value={subtitle} />
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}

DetailSectionHeader.defaultProps = {
  title: '',
  subtitle: '',
  avatarURL: '',
  loading: false,
}

DetailSectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  avatarURL: PropTypes.string,
  loading: PropTypes.bool,
}

export default DetailSectionHeader
