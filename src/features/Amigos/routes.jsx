import { lazy } from 'react'
import Loadable from 'components/Loadable'

const AmigosList = Loadable(lazy(() => import('./screens/AmigosList.jsx')))
const AmigoDetail = Loadable(lazy(() => import('./screens/AmigoDetail')))
const AmigoCreation = Loadable(lazy(() => import('./screens/AmigoCreation')))
const AmigoEdition = Loadable(lazy(() => import('./screens/AmigoEdition.jsx')))

const AmigosRoutes = [
  {
    path: 'Amigos',
    element: <AmigosList />,
  },
  {
    path: 'Amigos/create',
    element: <AmigoCreation />,
  },
  {
    path: 'Amigos/:id',
    element: <AmigoDetail />,
  },
  {
    path: 'Amigos/:id/edit',
    element: <AmigoEdition />,
  },
]

export default AmigosRoutes
