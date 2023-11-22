import { useEffect, useState } from 'react'
import usePaginatedFetch from 'hooks/usePaginatedFetch'
import config from 'config'
import { AmigoFromAPI } from '../transformers'
import { useTranslation } from 'react-i18next'
import { useSnackbar } from 'notistack'
import RetryButtonSnackbar from 'components/RetryButtonSnackbar'

export default function useFetchAmigos(filters) {
  const { t } = useTranslation()
  const { closeSnackbar, enqueueSnackbar } = useSnackbar()
  const [Amigos, setAmigos] = useState(null)
  const { doFetch, response, paginator, loading, error, retry } = usePaginatedFetch({
    url: `${config.api.msAmigos.baseUrl}/Amigos`,
    filters,
  })

  useEffect(() => {
    if (!response) return

    const Amigos = response.data.map((Amigo) => AmigoFromAPI(Amigo, t))

    setAmigos(Amigos)
  }, [response, t])

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

  return { Amigos, paginator, loading, error, refresh: retry }
}
