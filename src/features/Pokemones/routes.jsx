import { lazy } from 'react'
import Loadable from 'components/Loadable'

const PokemonesList = Loadable(lazy(() => import('./screens/PokemonesList.jsx')))
const PokemonDetail = Loadable(lazy(() => import('./screens/PokemonDetail')))
const PokemonCreation = Loadable(lazy(() => import('./screens/PokemonCreation')))
const PokemonEdition = Loadable(lazy(() => import('./screens/PokemonEdition.jsx')))

const PokemonesRoutes = [
  {
    path: 'Pokemones',
    element: <PokemonesList />,
  },
  {
    path: 'Pokemones/create',
    element: <PokemonCreation />,
  },
  {
    path: 'Pokemones/:id',
    element: <PokemonDetail />,
  },
  {
    path: 'Pokemones/:id/edit',
    element: <PokemonEdition />,
  },
]

export default PokemonesRoutes
