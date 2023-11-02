import { lazy } from 'react'
import Loadable from 'components/Loadable'

const CategoriesList = Loadable(lazy(() => import('./screens/{{cookiecutter.featureName}}List')))
const CategoryDetail = Loadable(lazy(() => import('./screens/{{cookiecutter.featureName}}Detail')))
const CategoryCreation = Loadable(
  lazy(() => import('./screens/{{cookiecutter.featureName}}Creation'))
)
const CategoryEdition = Loadable(
  lazy(() => import('./screens/{{cookiecutter.featureName}}Edition'))
)

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
