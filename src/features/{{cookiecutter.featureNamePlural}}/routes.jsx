import { lazy } from 'react'
import Loadable from 'components/Loadable'

const {{cookiecutter.featureNamePlural}}List = Loadable(lazy(() => import('./screens/{{cookiecutter.featureName}}List')))
const {{cookiecutter.featureName}}Detail = Loadable(lazy(() => import('./screens/{{cookiecutter.featureName}}Detail')))
const {{cookiecutter.featureName}}Creation = Loadable(
  lazy(() => import('./screens/{{cookiecutter.featureName}}Creation'))
)
const {{cookiecutter.featureName}}Edition = Loadable(
  lazy(() => import('./screens/{{cookiecutter.featureName}}Edition'))
)
``
const {{cookiecutter.featureNamePlural}}Routes = [
  {
    path: '{{cookiecutter.featureNamePlural}}',
    element: <{{cookiecutter.featureNamePlural}}List />,
  },
  {
    path: '{{cookiecutter.featureNamePlural}}/create',
    element: <{{cookiecutter.featureName}}Creation />,
  },
  {
    path: '{{cookiecutter.featureNamePlural}}/:id',
    element: <{{cookiecutter.featureName}}Detail />,
  },
  {
    path: '{{cookiecutter.featureNamePlural}}/:id/edit',
    element: <{{cookiecutter.featureName}}Edition />,
  },
]

export default {{cookiecutter.featureNamePlural}}Routes
