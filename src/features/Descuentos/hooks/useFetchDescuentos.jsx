import { useEffect, useState } from 'react'
import usePaginatedFetch from 'hooks/usePaginatedFetch'
import config from 'config'
import { DescuentoFromAPI } from '../transformers'
import { useTranslation } from 'react-i18next'
import { useSnackbar } from 'notistack'
import RetryButtonSnackbar from 'components/RetryButtonSnackbar'

export default function useFetchDescuentos(filters) {
  const { t } = useTranslation()
  const { closeSnackbar, enqueueSnackbar } = useSnackbar()
  const [Descuentos, setDescuentos] = useState(null)
  const { doFetch, response, paginator, loading, error, retry } = usePaginatedFetch({
    url: `${config.api.msDescuentos.baseUrl}/Descuentos`,
    filters,
  })

  useEffect(() => {
    if (!response) return

    const Descuentos = response.data.map((Descuento) => DescuentoFromAPI(Descuento, t))

    setDescuentos(Descuentos)
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

  return { Descuentos, paginator, loading, error, refresh: retry }
}
