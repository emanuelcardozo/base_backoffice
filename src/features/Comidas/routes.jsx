import { lazy } from 'react'
import Loadable from 'components/Loadable'

const ComidasList = Loadable(lazy(() => import('./screens/ComidasList.jsx')))
const ComidaDetail = Loadable(lazy(() => import('./screens/ComidaDetail')))
const ComidaCreation = Loadable(lazy(() => import('./screens/ComidaCreation')))
const ComidaEdition = Loadable(lazy(() => import('./screens/ComidaEdition.jsx')))

const ComidasRoutes = [
  {
    path: 'Comidas',
    element: <ComidasList />,
  },
  {
    path: 'Comidas/create',
    element: <ComidaCreation />,
  },
  {
    path: 'Comidas/:id',
    element: <ComidaDetail />,
  },
  {
    path: 'Comidas/:id/edit',
    element: <ComidaEdition />,
  },
]

export default ComidasRoutes
