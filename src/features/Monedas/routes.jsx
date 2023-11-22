import { lazy } from 'react'
import Loadable from 'components/Loadable'

const MonedasList = Loadable(lazy(() => import('./screens/MonedasList.jsx')))
const MonedaDetail = Loadable(lazy(() => import('./screens/MonedaDetail')))
const MonedaCreation = Loadable(lazy(() => import('./screens/MonedaCreation')))
const MonedaEdition = Loadable(lazy(() => import('./screens/MonedaEdition.jsx')))

const MonedasRoutes = [
  {
    path: 'Monedas',
    element: <MonedasList />,
  },
  {
    path: 'Monedas/create',
    element: <MonedaCreation />,
  },
  {
    path: 'Monedas/:id',
    element: <MonedaDetail />,
  },
  {
    path: 'Monedas/:id/edit',
    element: <MonedaEdition />,
  },
]

export default MonedasRoutes
