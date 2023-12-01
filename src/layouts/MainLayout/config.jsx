import TagIcon from '@heroicons/react/24/solid/TagIcon'
import UserIcon from '@heroicons/react/24/solid/UserIcon'
import { SvgIcon } from '@mui/material'

export const itemsGroupAdminUser = [
  {
    title: 'admin',
    path: '/administrators',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    ),
  },
]

export const itemsGroupCommonUser = [
  // SCRIPT: automatic generated menu items will be placed here
  {
    title: 'Categories',
    path: '/categories',
    icon: (
      <SvgIcon fontSize="small">
        <TagIcon />
      </SvgIcon>
    ),
  },
]
