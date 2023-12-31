import { Suspense } from 'react'

// project imports
import Loader from './Loader'

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

function Loadable(Component) {
  return function wrapper(props) {
    return (
      <Suspense fallback={<Loader />}>
        <Component {...props} />
      </Suspense>
    )
  }
}

export default Loadable
