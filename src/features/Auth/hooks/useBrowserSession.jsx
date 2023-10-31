import Session from '../models/Session.js'
import useBrowserStorage from 'hooks/useBrowserStorage.js'

export default function useBrowserSession(identifierKey = 'session') {
  const browserStorage = useBrowserStorage(identifierKey)

  const hasActiveSession = () => {
    return !!browserStorage.get()
  }

  const activeSession = () => {
    if (hasActiveSession()) {
      return Session.fromBrowser(browserStorage.get())
    }

    return null
  }

  const persistSession = (session) => {
    browserStorage.persist(session.asJson)
  }

  const clearSession = () => {
    browserStorage.clear()
  }

  return { activeSession, hasActiveSession, persistSession, clearSession }
}
