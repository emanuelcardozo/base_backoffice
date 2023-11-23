import { lazy } from 'react'
import Loadable from 'components/Loadable'

const CategoriesList = Loadable(lazy(() => import('./screens/CategoriesList.jsx')))
const CategoryDetail = Loadable(lazy(() => import('./screens/CategoryDetail')))
const CategoryCreation = Loadable(lazy(() => import('./screens/CategoryCreation')))
const CategoryEdition = Loadable(lazy(() => import('./screens/CategoryEdition.jsx')))

const CategoriesRoutes = [
  {
    path: 'Categories',
    element: <CategoriesList />,
  },
  {
    path: 'Categories/create',
    element: <CategoryCreation />,
  },
  {
    path: 'Categories/:id',
    element: <CategoryDetail />,
  },
  {
    path: 'Categories/:id/edit',
    element: <CategoryEdition />,
  },
]

export default CategoriesRoutes
