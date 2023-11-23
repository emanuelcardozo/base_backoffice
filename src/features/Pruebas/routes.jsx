import { lazy } from 'react'
import Loadable from 'components/Loadable'

const PruebasList = Loadable(lazy(() => import('./screens/PruebasList.jsx')))
const PruebaDetail = Loadable(lazy(() => import('./screens/PruebaDetail')))
const PruebaCreation = Loadable(lazy(() => import('./screens/PruebaCreation')))
const PruebaEdition = Loadable(lazy(() => import('./screens/PruebaEdition.jsx')))

const PruebasRoutes = [
  {
    path: 'Pruebas',
    element: <PruebasList />,
  },
  {
    path: 'Pruebas/create',
    element: <PruebaCreation />,
  },
  {
    path: 'Pruebas/:id',
    element: <PruebaDetail />,
  },
  {
    path: 'Pruebas/:id/edit',
    element: <PruebaEdition />,
  },
]

export default PruebasRoutes
