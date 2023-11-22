import { lazy } from 'react'
import Loadable from 'components/Loadable'

const HijosList = Loadable(lazy(() => import('./screens/HijosList.jsx')))
const HijoDetail = Loadable(lazy(() => import('./screens/HijoDetail')))
const HijoCreation = Loadable(lazy(() => import('./screens/HijoCreation')))
const HijoEdition = Loadable(lazy(() => import('./screens/HijoEdition.jsx')))

const HijosRoutes = [
  {
    path: 'Hijos',
    element: <HijosList />,
  },
  {
    path: 'Hijos/create',
    element: <HijoCreation />,
  },
  {
    path: 'Hijos/:id',
    element: <HijoDetail />,
  },
  {
    path: 'Hijos/:id/edit',
    element: <HijoEdition />,
  },
]

export default HijosRoutes
