import PropTypes from 'prop-types'
import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from './AuthContext.js'
import useLoginFetch from '../hooks/useLoginFetch'
// import useLogoutFetch from '../hooks/useLogoutFetch'
import useBrowserSession from 'features/Auth/hooks/useBrowserSession'
import useSessionUserFetch from '../hooks/useSessionUserFetch'
import AuthInterceptors from '../components/AuthInterceptors'
import { DASHBOARD } from 'utils/constants.js'

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const { activeSession, persistSession, clearSession } = useBrowserSession()
  const { doLogin } = useLoginFetch()
  // const { doLogout } = useLogoutFetch()
  const [session, setSession] = useState(null)
  const { getSessionUser, isLoadingSessionUser } = useSessionUserFetch()
  const [isLoading, setIsLoading] = useState(true)
  const initialized = useRef(false)
  const navigate = useNavigate()

  const updateUser = (session, authUser) => {
    if (session) {
      session.updateUser(authUser)
      persistSession(session)
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initSession = (session) => {
    if (session) {
      persistSession(session)
      setIsAuthenticated(true)
      setSession(session)

      if (!session.user.isFull) {
        getSessionUser().then((user) => {
          updateUser(session, user)
        })
      }
    }
  }

  const initialize = async () => {
    if (initialized.current) return
    initialized.current = true
    initSession(activeSession())
    setIsLoading(false)
  }

  const login = useCallback(
    async (email, password) => {
      try {
        const session = await doLogin(email, password)

        if (session) {
          initSession(session)
          navigate(DASHBOARD)
        }
      } catch (err) {
        return Promise.reject(err)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [doLogin, navigate]
  )

  const logout = useCallback(
    async (doRevokeToken = true) => {
      try {
        // if (doRevokeToken) {
        //   await doLogout()
        // }

        console.log('logout', doRevokeToken)

        setSession(null)
        clearSession()
        setIsAuthenticated(false)
        navigate('/auth/login')

        return Promise.resolve()
      } catch (e) {
        return Promise.reject(e)
      }
    },
    [/*doLogout,*/ navigate, clearSession]
  )

  useEffect(() => {
    initialize()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    // Using the provider so that ANY component in our application can
    // use the values that we are sending.
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading: isLoading || isLoadingSessionUser,
        session,
        setIsAuthenticated,
        login,
        initSession,
        logout,
      }}
    >
      <AuthInterceptors>{children}</AuthInterceptors>
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.elementType, PropTypes.object]).isRequired,
}

export default AuthProvider
