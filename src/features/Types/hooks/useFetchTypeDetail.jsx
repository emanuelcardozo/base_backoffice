import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSnackbar } from 'notistack'
import useFetch from 'hooks/useFetch'
import config from 'config'
import RetryButtonSnackbar from 'components/RetryButtonSnackbar'
import { TypeFromAPI } from '../transformers'

export default function useFetchTypeDetail(id) {
  const [Type, setType] = useState()
  const { t } = useTranslation('common')
  const { response, doFetch, loading, error } = useFetch(
    `${config.api.msTypes.baseUrl}/Types/${id}`
  )
  const { closeSnackbar, enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    doFetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!response) return

    setType(TypeFromAPI(response.data, t))
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

  return { Type, loading, error }
}
