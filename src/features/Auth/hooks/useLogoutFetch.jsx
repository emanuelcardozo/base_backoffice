import { useEffect } from 'react'
import config from 'config'
import { useTranslation } from 'react-i18next'
import { useSnackbar } from 'notistack'
import RetryButtonSnackbar from 'components/RetryButtonSnackbar'
import useFetch from 'src/hooks/useFetch.js'

export default function useLoginFetch() {
  const { t } = useTranslation()
  const { closeSnackbar, enqueueSnackbar } = useSnackbar()
  const { doFetch, error, loading } = useFetch(`${config.api.msAuth.baseUrl}/me/logout`, {
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

  const doLogout = async () => {
    try {
      await doFetch()

      return Promise.resolve()
    } catch (err) {
      return Promise.reject(err)
    }
  }

  return { doLogout, loading, error }
}
