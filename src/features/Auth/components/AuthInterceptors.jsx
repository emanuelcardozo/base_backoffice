/* eslint-disable no-param-reassign */
import axios from 'axios'
import useAuth from '../hooks/useAuth.js'

const AuthInterceptors = ({ children }) => {
  const { logout } = useAuth()

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        logout(false)
      }

      return Promise.reject(error)
    }
  )

  return children
}

export default AuthInterceptors
