import { lazy } from 'react'

// project imports
import Loadable from 'components/Loadable'

// eslint-disable-next-line react-refresh/only-export-components
export const PATHS = {
  LOGIN: 'login',
  FORGOT_PASSWORD: 'forgot-password',
  RESET_PASSWORD: 'reset-password',
}

// auth routing
const Login = Loadable(lazy(() => import('./screens/SignIn.jsx')))
const ForgotPassword = Loadable(lazy(() => import('./screens/ForgotPassword.jsx')))
const ResetPassword = Loadable(lazy(() => import('./screens/ResetPassword.jsx')))

// const ForgotPassword = () => (<div>Forgot Password</div>);

const AuthRoutes = [
  { path: PATHS.LOGIN, element: <Login /> },
  { path: PATHS.FORGOT_PASSWORD, element: <ForgotPassword /> },
  { path: PATHS.RESET_PASSWORD, element: <ResetPassword /> },
]

export default AuthRoutes
