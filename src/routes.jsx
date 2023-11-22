import { useRoutes } from 'react-router-dom'

import MainLayout from 'layouts/MainLayout'
import AuthLayout from 'layouts/AuthLayout'

// routes
import MatesRoutes from 'features/mates/routes'
import MonedasRoutes from 'features/monedas/routes'
import ModelosRoutes from 'features/modelos/routes'
import DescuentosRoutes from 'features/descuentos/routes'
import AmigosRoutes from 'features/amigos/routes'
import CategoryRoutes from 'features/Categories/routes'
import PokemonRoutes from 'features/Pokemones/routes'
import TypeRoutes from 'features/Types/routes'
import SkillRoutes from 'features/Skills/routes.jsx'
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
    ...CategoryRoutes,
    ...PokemonRoutes,
    ...TypeRoutes,
    ...SkillRoutes,
    // add yours features route here
  ...MatesRoutes,
    ...MonedasRoutes,
    ...ModelosRoutes,
    ...DescuentosRoutes,
    ...AmigosRoutes,
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
