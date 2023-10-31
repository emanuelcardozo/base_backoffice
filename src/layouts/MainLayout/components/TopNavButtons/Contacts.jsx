import UsersIcon from '@heroicons/react/24/solid/UsersIcon'
import { IconButton, SvgIcon, Tooltip } from '@mui/material'

function Contacts() {
  return (
    <Tooltip title="Contacts">
      <IconButton>
        <SvgIcon fontSize="small">
          <UsersIcon />
        </SvgIcon>
      </IconButton>
    </Tooltip>
  )
}

Contacts.propTypes = {}

export default Contacts
