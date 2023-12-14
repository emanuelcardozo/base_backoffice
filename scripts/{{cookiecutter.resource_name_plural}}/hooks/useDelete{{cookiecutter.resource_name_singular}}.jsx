import { useEffect, useCallback } from 'react'
import config from 'config'
import { useTranslation } from 'react-i18next'
import { useSnackbar } from 'notistack'
import RetryButtonSnackbar from 'components/RetryButtonSnackbar'
import useFetch from 'hooks/useFetch'

export default function useDelete{{cookiecutter.resource_name_singular}}() {
  const { t } = useTranslation()
  const { closeSnackbar, enqueueSnackbar } = useSnackbar()
  const { doFetch, response, loading, error, retry } = useFetch(null)

  const onRemove = useCallback(
    (id) => {
      doFetch({ url: `${config.api.ms{{cookiecutter.resource_name_plural}}.baseUrl}/{{cookiecutter.resource_name_plural|lower}}/${id}`, method: 'DELETE' })
    },
    [doFetch]
  )

  useEffect(() => {
    if (!response) return

    enqueueSnackbar(t('deletedSuccessfully'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response, t])

  useEffect(() => {
    if (!error) return

    enqueueSnackbar(error.message, {
      ...config.snackbarError,
      action: (
        <RetryButtonSnackbar
          onClick={() => {
            closeSnackbar()
          }}
          label={t('close')}
        />
      ),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, t])

  return { onRemove, loading, error, refresh: retry }
}
