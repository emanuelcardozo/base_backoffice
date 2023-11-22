import { lazy } from 'react'
import Loadable from 'components/Loadable'

const MatesList = Loadable(lazy(() => import('./screens/MatesList.jsx')))
const MateDetail = Loadable(lazy(() => import('./screens/MateDetail')))
const MateCreation = Loadable(lazy(() => import('./screens/MateCreation')))
const MateEdition = Loadable(lazy(() => import('./screens/MateEdition.jsx')))

const MatesRoutes = [
  {
    path: 'Mates',
    element: <MatesList />,
  },
  {
    path: 'Mates/create',
    element: <MateCreation />,
  },
  {
    path: 'Mates/:id',
    element: <MateDetail />,
  },
  {
    path: 'Mates/:id/edit',
    element: <MateEdition />,
  },
]

export default MatesRoutes
