import config from 'config'
import useFetch from 'src/hooks/useFetch.js'

export default function useStartPasswordRecovery() {
  const { doFetch, error, loading } = useFetch(`${config.api.msAuth.baseUrl}/password-recovery`, {
    method: 'POST',
  })

  const startRecovery = async (email, password) => {
    try {
      const data = { email, password, platform: config.api.platform }
      await doFetch({ data })

      return Promise.resolve()
    } catch (err) {
      return Promise.reject(err)
    }
  }

  return { startRecovery, loading, error }
}
