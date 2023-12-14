import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import ArrowLeftIcon from '@heroicons/react/24/solid/ArrowLeftIcon'
import { IconButton, SvgIcon, Tooltip } from '@mui/material'

function SectionBackButton({ label, to }) {
  const navigate = useNavigate()
  return (
    <IconButton key={label} aria-label="hide" onClick={() => navigate(to)}>
      <Tooltip title={label} arrow>
        <SvgIcon fontSize="small">
          <ArrowLeftIcon />
        </SvgIcon>
      </Tooltip>
    </IconButton>
  )
}

SectionBackButton.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default SectionBackButton
