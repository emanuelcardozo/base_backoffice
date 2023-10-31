import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import useAuth from 'features/Auth/hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const AuthPreLoaders = (props) => {
  const { children } = props
  const { isAuthenticated, session, isLoading } = useAuth()
  const { user } = session || {}
  const ignore = useRef(false)
  const navigate = useNavigate()

  useEffect(() => {
    // Prevent from calling twice in development mode with React.StrictMode enabled
    if (ignore.current) {
      return
    }

    ignore.current = true

    if (!isLoading && !isAuthenticated) {
      navigate('/auth/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, user, isLoading])

  if (isLoading || !isAuthenticated) {
    return null
  }

  return children
}

AuthPreLoaders.propTypes = {
  children: PropTypes.node,
}

export default AuthPreLoaders
