import { lazy } from 'react'
import Loadable from 'components/Loadable'

const {{cookiecutter.resource_name}}List = Loadable(lazy(() => import('./screens/{{cookiecutter.resource_name}}List.jsx')))
const {{cookiecutter.resource_name_singular}}Detail = Loadable(lazy(() => import('./screens/{{cookiecutter.resource_name_singular}}Detail')))
const {{cookiecutter.resource_name_singular}}Creation = Loadable(lazy(() => import('./screens/{{cookiecutter.resource_name_singular}}Creation')))
const {{cookiecutter.resource_name_singular}}Edition = Loadable(lazy(() => import('./screens/{{cookiecutter.resource_name_singular}}Edition.jsx')))

const {{cookiecutter.resource_name}}Routes = [
  {
    path: '{{cookiecutter.resource_name}}',
    element: <{{cookiecutter.resource_name}}List />,
  },
  {
    path: '{{cookiecutter.resource_name}}/create',
    element: <{{cookiecutter.resource_name_singular}}Creation />,
  },
  {
    path: '{{cookiecutter.resource_name}}/:id',
    element: <{{cookiecutter.resource_name_singular}}Detail />,
  },
  {
    path: '{{cookiecutter.resource_name}}/:id/edit',
    element: <{{cookiecutter.resource_name_singular}}Edition />,
  },
]

export default {{cookiecutter.resource_name}}Routes
