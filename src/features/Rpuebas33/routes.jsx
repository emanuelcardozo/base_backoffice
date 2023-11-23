import { lazy } from 'react'
import Loadable from 'components/Loadable'

const Rpuebas33List = Loadable(lazy(() => import('./screens/Rpuebas33List.jsx')))
const Pruebas2Detail = Loadable(lazy(() => import('./screens/Pruebas2Detail')))
const Pruebas2Creation = Loadable(lazy(() => import('./screens/Pruebas2Creation')))
const Pruebas2Edition = Loadable(lazy(() => import('./screens/Pruebas2Edition.jsx')))

const Rpuebas33Routes = [
  {
    path: 'Rpuebas33',
    element: <Rpuebas33List />,
  },
  {
    path: 'Rpuebas33/create',
    element: <Pruebas2Creation />,
  },
  {
    path: 'Rpuebas33/:id',
    element: <Pruebas2Detail />,
  },
  {
    path: 'Rpuebas33/:id/edit',
    element: <Pruebas2Edition />,
  },
]

export default Rpuebas33Routes
