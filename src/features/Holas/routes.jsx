import { lazy } from 'react'
import Loadable from 'components/Loadable'

const HolasList = Loadable(lazy(() => import('./screens/HolasList.jsx')))
const HolaDetail = Loadable(lazy(() => import('./screens/HolaDetail')))
const HolaCreation = Loadable(lazy(() => import('./screens/HolaCreation')))
const HolaEdition = Loadable(lazy(() => import('./screens/HolaEdition.jsx')))

const HolasRoutes = [
  {
    path: 'Holas',
    element: <HolasList />,
  },
  {
    path: 'Holas/create',
    element: <HolaCreation />,
  },
  {
    path: 'Holas/:id',
    element: <HolaDetail />,
  },
  {
    path: 'Holas/:id/edit',
    element: <HolaEdition />,
  },
]

export default HolasRoutes
