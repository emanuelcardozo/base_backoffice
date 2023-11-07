import { lazy } from 'react'
import Loadable from 'components/Loadable'

const SkillsList = Loadable(lazy(() => import('./screens/SkillsList.jsx')))
const SkillDetail = Loadable(lazy(() => import('./screens/SkillDetail')))
const SkillCreation = Loadable(lazy(() => import('./screens/SkillCreation')))
const SkillEdition = Loadable(lazy(() => import('./screens/SkillEdition.jsx')))

const SkillsRoutes = [
  {
    path: 'Skills',
    element: <SkillsList />,
  },
  {
    path: 'Skills/create',
    element: <SkillCreation />,
  },
  {
    path: 'Skills/:id',
    element: <SkillDetail />,
  },
  {
    path: 'Skills/:id/edit',
    element: <SkillEdition />,
  },
]

export default SkillsRoutes
