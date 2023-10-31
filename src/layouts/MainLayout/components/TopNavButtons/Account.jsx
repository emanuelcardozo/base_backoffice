import { AccountPopover } from '../AccountPopover'
import { Avatar } from '@mui/material'
import { usePopover } from 'src/hooks/use-popover'

function Account() {
  const accountPopover = usePopover()

  return (
    <>
      <Avatar
        onClick={accountPopover.handleOpen}
        ref={accountPopover.anchorRef}
        sx={{
          cursor: 'pointer',
          height: 40,
          width: 40,
        }}
        src="/assets/avatars/avatar-anika-visser.png"
      />
      <AccountPopover
        anchorEl={accountPopover.anchorRef.current}
        open={accountPopover.open}
        onClose={accountPopover.handleClose}
      />
    </>
  )
}

Account.propTypes = {}

export default Account
