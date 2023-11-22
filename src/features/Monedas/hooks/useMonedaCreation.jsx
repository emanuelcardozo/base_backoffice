import { useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSnackbar } from 'notistack'
import useFetch from 'hooks/useFetch'
import config from 'config'
import RetryButtonSnackbar from 'components/RetryButtonSnackbar'
import { useNavigate } from 'react-router-dom'

export default function useMonedaCreation() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { response, doFetch, loading, error } = useFetch(
    `${config.api.msMonedas.baseUrl}/Monedas`,
    {
      method: 'POST',
    }
  )
  const { closeSnackbar, enqueueSnackbar } = useSnackbar()

  const onSubmit = useCallback(
    (data) => {
      doFetch({ data })
    },
    [doFetch]
  )

  useEffect(() => {
    if (!response) return

    navigate('/Monedas')

    const message = t('createdSuccessfully', {
      name: response.data.name,
      type: t('features:Monedas:singular'),
    })

    enqueueSnackbar(message, {
      preventDuplicate: false,
      variant: 'success',
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  return { onSubmit, loading }
}
