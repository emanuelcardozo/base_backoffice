import BellIcon from '@heroicons/react/24/solid/BellIcon'
import { Badge, IconButton, SvgIcon, Tooltip } from '@mui/material'

function Notifications() {
  return (
    <Tooltip title="Notifications">
      <IconButton>
        <Badge badgeContent={4} color="success" variant="dot">
          <SvgIcon fontSize="small">
            <BellIcon />
          </SvgIcon>
        </Badge>
      </IconButton>
    </Tooltip>
  )
}

Notifications.propTypes = {}

export default Notifications
