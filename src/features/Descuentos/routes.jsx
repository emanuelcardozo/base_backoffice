import { lazy } from 'react'
import Loadable from 'components/Loadable'

const DescuentosList = Loadable(lazy(() => import('./screens/DescuentosList.jsx')))
const DescuentoDetail = Loadable(lazy(() => import('./screens/DescuentoDetail')))
const DescuentoCreation = Loadable(lazy(() => import('./screens/DescuentoCreation')))
const DescuentoEdition = Loadable(lazy(() => import('./screens/DescuentoEdition.jsx')))

const DescuentosRoutes = [
  {
    path: 'Descuentos',
    element: <DescuentosList />,
  },
  {
    path: 'Descuentos/create',
    element: <DescuentoCreation />,
  },
  {
    path: 'Descuentos/:id',
    element: <DescuentoDetail />,
  },
  {
    path: 'Descuentos/:id/edit',
    element: <DescuentoEdition />,
  },
]

export default DescuentosRoutes
