import { lazy } from 'react'
import Loadable from 'components/Loadable'

const LocalesList = Loadable(lazy(() => import('./screens/LocalesList.jsx')))
const LocalDetail = Loadable(lazy(() => import('./screens/LocalDetail')))
const LocalCreation = Loadable(lazy(() => import('./screens/LocalCreation')))
const LocalEdition = Loadable(lazy(() => import('./screens/LocalEdition.jsx')))

const LocalesRoutes = [
  {
    path: 'Locales',
    element: <LocalesList />,
  },
  {
    path: 'Locales/create',
    element: <LocalCreation />,
  },
  {
    path: 'Locales/:id',
    element: <LocalDetail />,
  },
  {
    path: 'Locales/:id/edit',
    element: <LocalEdition />,
  },
]

export default LocalesRoutes
