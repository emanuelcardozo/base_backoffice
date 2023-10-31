import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon'
import { IconButton, SvgIcon, Tooltip } from '@mui/material'

function Search() {
  return (
    <Tooltip title="Search">
      <IconButton>
        <SvgIcon fontSize="small">
          <MagnifyingGlassIcon />
        </SvgIcon>
      </IconButton>
    </Tooltip>
  )
}

Search.propTypes = {}

export default Search
