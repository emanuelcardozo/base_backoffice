import { lazy } from 'react'
import Loadable from 'components/Loadable'

const AnimalazosList = Loadable(lazy(() => import('./screens/AnimalazosList.jsx')))
const AnimalesDetail = Loadable(lazy(() => import('./screens/AnimalesDetail')))
const AnimalesCreation = Loadable(lazy(() => import('./screens/AnimalesCreation')))
const AnimalesEdition = Loadable(lazy(() => import('./screens/AnimalesEdition.jsx')))

const AnimalazosRoutes = [
  {
    path: 'Animalazos',
    element: <AnimalazosList />,
  },
  {
    path: 'Animalazos/create',
    element: <AnimalesCreation />,
  },
  {
    path: 'Animalazos/:id',
    element: <AnimalesDetail />,
  },
  {
    path: 'Animalazos/:id/edit',
    element: <AnimalesEdition />,
  },
]

export default AnimalazosRoutes
