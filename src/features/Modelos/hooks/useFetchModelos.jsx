import { useEffect, useState } from 'react'
import usePaginatedFetch from 'hooks/usePaginatedFetch'
import config from 'config'
import { ModeloFromAPI } from '../transformers'
import { useTranslation } from 'react-i18next'
import { useSnackbar } from 'notistack'
import RetryButtonSnackbar from 'components/RetryButtonSnackbar'

export default function useFetchModelos(filters) {
  const { t } = useTranslation()
  const { closeSnackbar, enqueueSnackbar } = useSnackbar()
  const [Modelos, setModelos] = useState(null)
  const { doFetch, response, paginator, loading, error, retry } = usePaginatedFetch({
    url: `${config.api.msModelos.baseUrl}/Modelos`,
    filters,
  })

  useEffect(() => {
    if (!response) return

    const Modelos = response.data.map((Modelo) => ModeloFromAPI(Modelo, t))

    setModelos(Modelos)
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

  return { Modelos, paginator, loading, error, refresh: retry }
}
