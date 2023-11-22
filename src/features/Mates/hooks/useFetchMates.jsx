import { useEffect, useState } from 'react'
import usePaginatedFetch from 'hooks/usePaginatedFetch'
import config from 'config'
import { MateFromAPI } from '../transformers'
import { useTranslation } from 'react-i18next'
import { useSnackbar } from 'notistack'
import RetryButtonSnackbar from 'components/RetryButtonSnackbar'

export default function useFetchMates(filters) {
  const { t } = useTranslation()
  const { closeSnackbar, enqueueSnackbar } = useSnackbar()
  const [Mates, setMates] = useState(null)
  const { doFetch, response, paginator, loading, error, retry } = usePaginatedFetch({
    url: `${config.api.msMates.baseUrl}/Mates`,
    filters,
  })

  useEffect(() => {
    if (!response) return

    const Mates = response.data.map((Mate) => MateFromAPI(Mate, t))

    setMates(Mates)
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

  return { Mates, paginator, loading, error, refresh: retry }
}
