import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import ArrowLeftIcon from '@heroicons/react/24/solid/ArrowLeftIcon'
import { Stack, Typography, Link, SvgIcon } from '@mui/material'

function SectionBackButton({ label, to }) {
  return (
    <Stack sx={{ my: 3 }} spacing={4} direction="column">
      <Link color="text.primary" component={NavLink} to={to} underline="hover">
        <Stack spacing={1} direction="row" alignItems="center">
          <SvgIcon fontSize="small">
            <ArrowLeftIcon />
          </SvgIcon>
          <Typography variant="subtitle2">{label}</Typography>
        </Stack>
      </Link>
    </Stack>
  )
}

SectionBackButton.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default SectionBackButton
