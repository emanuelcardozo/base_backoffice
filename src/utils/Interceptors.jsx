/* eslint-disable no-param-reassign */
import axios from 'axios'
import useBrowserSession from 'features/Auth/hooks/useBrowserSession.jsx'
import { useTranslation } from 'react-i18next'

const LANG_MAP = {
  es: 'es-PY',
  en: 'en-US',
}

const Interceptors = ({ children }) => {
  const { activeSession } = useBrowserSession()
  const { i18n } = useTranslation()

  axios.interceptors.request.use(
    (config) => {
      const session = activeSession()

      if (!config.headers.Authorization) {
        if (session) {
          config.headers.Authorization = `Bearer ${session.accessToken}`
        } else {
          config.headers.Authorization = undefined
        }
      }

      if (!config.headers['Content-Type']) {
        config.headers['Content-Type'] = 'application/json'
      }

      if (!config.headers['Accept-Language']) {
        config.headers['Accept-Language'] = LANG_MAP[i18n.language]
      }

      return config
    },
    (error) => Promise.reject(error)
  )

  return children
}

export default Interceptors
