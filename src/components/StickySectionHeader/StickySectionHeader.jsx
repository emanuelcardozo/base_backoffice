import PropTypes from 'prop-types'
import { Stack } from '@mui/system'
import { SIDE_NAV_WIDTH, TOP_NAV_HEIGHT } from 'layouts/MainLayout/components/TopNav'

function StickySectionHeader({ children }) {
  return (
    <Stack
      direction={{ md: 'row', xs: 'column' }}
      justifyContent="space-between"
      spacing={4}
      alignItems="flex-start"
      p={1}
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
        position: 'sticky',
        left: {
          lg: `${SIDE_NAV_WIDTH}px`,
        },
        top: TOP_NAV_HEIGHT,
        zIndex: (theme) => theme.zIndex.appBar,
      }}
    >
      {children}
    </Stack>
  )
}

StickySectionHeader.propTypes = {
  children: PropTypes.node.isRequired,
}

export default StickySectionHeader
