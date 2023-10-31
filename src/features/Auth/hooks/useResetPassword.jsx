import config from 'config'
import useFetch from 'src/hooks/useFetch.js'
import Session from '../models/Session.js'

export default function useResetPassword() {
  const { doFetch: doConfirmCodeFetch } = useFetch(
    `${config.api.msAuth.baseUrl}/password-recovery/confirm-code`,
    {
      method: 'POST',
    }
  )
  const { doFetch: doResetPasswordFetch } = useFetch(`${config.api.msAuth.baseUrl}/me`, {
    method: 'PATCH',
  })

  const doConfirmCode = async (email, code) => {
    try {
      const data = { email, code, platform: config.api.platform }
      const response = await doConfirmCodeFetch({ data })

      const session = Session.fromAPI(response.data)
      return Promise.resolve(session)
    } catch (err) {
      return Promise.reject(err)
    }
  }

  const doResetPassword = async (session, email, password, passwordConfirm) => {
    try {
      const data = { email, password, passwordConfirm }
      await doResetPasswordFetch({
        data,
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      })

      return Promise.resolve(session)
    } catch (err) {
      return Promise.reject(err)
    }
  }

  return { doConfirmCode, doResetPassword }
}
