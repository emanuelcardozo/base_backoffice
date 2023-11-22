import { lazy } from 'react'
import Loadable from 'components/Loadable'

const CompusList = Loadable(lazy(() => import('./screens/CompusList.jsx')))
const CompuDetail = Loadable(lazy(() => import('./screens/CompuDetail')))
const CompuCreation = Loadable(lazy(() => import('./screens/CompuCreation')))
const CompuEdition = Loadable(lazy(() => import('./screens/CompuEdition.jsx')))

const CompusRoutes = [
  {
    path: 'Compus',
    element: <CompusList />,
  },
  {
    path: 'Compus/create',
    element: <CompuCreation />,
  },
  {
    path: 'Compus/:id',
    element: <CompuDetail />,
  },
  {
    path: 'Compus/:id/edit',
    element: <CompuEdition />,
  },
]

export default CompusRoutes
