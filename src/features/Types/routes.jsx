import { lazy } from 'react'
import Loadable from 'components/Loadable'

const TypesList = Loadable(lazy(() => import('./screens/TypesList.jsx')))
const TypeDetail = Loadable(lazy(() => import('./screens/TypeDetail')))
const TypeCreation = Loadable(lazy(() => import('./screens/TypeCreation')))
const TypeEdition = Loadable(lazy(() => import('./screens/TypeEdition.jsx')))

const TypesRoutes = [
  {
    path: 'Types',
    element: <TypesList />,
  },
  {
    path: 'Types/create',
    element: <TypeCreation />,
  },
  {
    path: 'Types/:id',
    element: <TypeDetail />,
  },
  {
    path: 'Types/:id/edit',
    element: <TypeEdition />,
  },
]

export default TypesRoutes
