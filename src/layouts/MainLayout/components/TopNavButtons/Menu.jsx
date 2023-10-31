import PropTypes from 'prop-types'
import Bars3Icon from '@heroicons/react/24/solid/Bars3Icon'
import { IconButton, SvgIcon, useMediaQuery } from '@mui/material'

function Menu({ onNavOpen }) {
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'))

  if (lgUp) return null

  return (
    <IconButton onClick={onNavOpen}>
      <SvgIcon fontSize="small">
        <Bars3Icon />
      </SvgIcon>
    </IconButton>
  )
}

Menu.propTypes = {
  onNavOpen: PropTypes.func.isRequired,
}

export default Menu
