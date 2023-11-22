import { lazy } from 'react'
import Loadable from 'components/Loadable'

const JauriaList = Loadable(lazy(() => import('./screens/JauriaList.jsx')))
const PerroDetail = Loadable(lazy(() => import('./screens/PerroDetail')))
const PerroCreation = Loadable(lazy(() => import('./screens/PerroCreation')))
const PerroEdition = Loadable(lazy(() => import('./screens/PerroEdition.jsx')))

const JauriaRoutes = [
  {
    path: 'Jauria',
    element: <JauriaList />,
  },
  {
    path: 'Jauria/create',
    element: <PerroCreation />,
  },
  {
    path: 'Jauria/:id',
    element: <PerroDetail />,
  },
  {
    path: 'Jauria/:id/edit',
    element: <PerroEdition />,
  },
]

export default JauriaRoutes
