import { useEffect } from 'react'
import config from 'config'
import { useTranslation } from 'react-i18next'
import { useSnackbar } from 'notistack'
import RetryButtonSnackbar from 'components/RetryButtonSnackbar'
import useFetch from 'src/hooks/useFetch.js'
import AuthUser from '../models/AuthUser'

export default function useSessionUserFetch() {
  const { t } = useTranslation()
  const { closeSnackbar, enqueueSnackbar } = useSnackbar()
  const { doFetch, error, loading } = useFetch(`${config.api.msAuth.baseUrl}/me`, {
    method: 'GET',
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

  const getSessionUser = async () => {
    try {
      const { data } = await doFetch()
      const user = AuthUser.fromAPI(data)

      return Promise.resolve(user)
    } catch (err) {
      return Promise.reject(err)
    }
  }

  return { getSessionUser, isLoadingSessionUser: loading, error }
}
