import TagIcon from '@heroicons/react/24/solid/TagIcon'
import UserIcon from '@heroicons/react/24/solid/UserIcon'
import { SvgIcon } from '@mui/material'

export const itemsGroupAdminUser = [
  {
    title: 'categories',
    path: '/categories',
    icon: (
      <SvgIcon fontSize="small">
        <TagIcon />
      </SvgIcon>
    ),
  },
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
  {
    title: 'categories',
    path: '/categories',
    icon: (
      <SvgIcon fontSize="small">
        <TagIcon />
      </SvgIcon>
    ),
  },
  {
    title: 'Types',
    path: '/types',
    icon: (
      <SvgIcon fontSize="small">
        <TagIcon />
      </SvgIcon>
    ),
  },
  {
    title: 'Skills',
    path: '/skills',
    icon: (
      <SvgIcon fontSize="small">
        <TagIcon />
      </SvgIcon>
    ),
  },
  {
    title: 'Pokemones',
    path: '/pokemones',
    icon: (
      <SvgIcon fontSize="small">
        <TagIcon />
      </SvgIcon>
    ),
  },
]
