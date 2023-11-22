import { lazy } from 'react'
import Loadable from 'components/Loadable'

const ModelosList = Loadable(lazy(() => import('./screens/ModelosList.jsx')))
const ModeloDetail = Loadable(lazy(() => import('./screens/ModeloDetail')))
const ModeloCreation = Loadable(lazy(() => import('./screens/ModeloCreation')))
const ModeloEdition = Loadable(lazy(() => import('./screens/ModeloEdition.jsx')))

const ModelosRoutes = [
  {
    path: 'Modelos',
    element: <ModelosList />,
  },
  {
    path: 'Modelos/create',
    element: <ModeloCreation />,
  },
  {
    path: 'Modelos/:id',
    element: <ModeloDetail />,
  },
  {
    path: 'Modelos/:id/edit',
    element: <ModeloEdition />,
  },
]

export default ModelosRoutes
