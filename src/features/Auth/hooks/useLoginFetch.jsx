import { useEffect } from 'react'
import config from 'config'
import { useTranslation } from 'react-i18next'
import { useSnackbar } from 'notistack'
import RetryButtonSnackbar from 'components/RetryButtonSnackbar'
import useFetch from 'src/hooks/useFetch.js'
import Session from '../models/Session.js'

export default function useLoginFetch() {
  const { t } = useTranslation()
  const { closeSnackbar, enqueueSnackbar } = useSnackbar()
  const { doFetch, error, loading } = useFetch(`${config.api.msAuth.baseUrl}/login`, {
    method: 'POST',
  })

  useEffect(() => {
    if (!error) return

    enqueueSnackbar(error.message, {
      preventDuplicate: true,
      variant: 'error',
      autoHideDuration: 2000,
      maxSnack: 1,
      action: (
        <RetryButtonSnackbar
          onClick={() => {
            doFetch()
            closeSnackbar()
          }}
          label={t('retry')}
        />
      ),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, t])

  const doLogin = async (email, password) => {
    try {
      // const { data } = await doFetch({
      //   data: {
      //     email,
      //     password,
      //     platform: config.api.platform,
      //   },
      // })
      const data = {
        token: '12345678',
        user: {
          email,
          password,
        },
      }

      return Session.fromAPI(data)
    } catch (err) {
      throw new Error(err)
    }
  }

  return { doLogin, loading, error }
}
