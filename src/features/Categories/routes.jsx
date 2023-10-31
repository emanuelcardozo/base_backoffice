import { lazy } from 'react'
import Loadable from 'components/Loadable'

const CategoriesList = Loadable(lazy(() => import('./screens/CategoriesList')))
const CategoryDetail = Loadable(lazy(() => import('./screens/CategoryDetail')))
const CategoryCreation = Loadable(lazy(() => import('./screens/CategoryCreation')))
const CategoryEdition = Loadable(lazy(() => import('./screens/CategoryEdition')))

const CategoriesRoutes = [
  {
    path: 'categories',
    element: <CategoriesList />,
  },
  {
    path: 'categories/create',
    element: <CategoryCreation />,
  },
  {
    path: 'categories/:id',
    element: <CategoryDetail />,
  },
  {
    path: 'categories/:id/edit',
    element: <CategoryEdition />,
  },
]

export default CategoriesRoutes
