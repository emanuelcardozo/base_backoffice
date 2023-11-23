import { useRoutes } from 'react-router-dom'

import MainLayout from 'layouts/MainLayout'
import AuthLayout from 'layouts/AuthLayout'

// routes
import ErrorRoutes from 'features/Errors/routes'

import AuthRoutes from './features/Auth/routes'
import AuthPreLoaders from './features/Auth/components/AuthPreLoaders'

// ==============================|| ROUTING RENDER ||============================== //
const MainRoutes = {
  path: '/',
  element: (
    <AuthPreLoaders>
      <MainLayout />
    </AuthPreLoaders>
  ),
  children: [
    // add yours features route here
  ],
}

const PublicRoutes = {
  path: '/auth',
  element: <AuthLayout />,
  children: AuthRoutes,
}

export default function Routes() {
  return useRoutes([MainRoutes, ...ErrorRoutes, PublicRoutes])
}
