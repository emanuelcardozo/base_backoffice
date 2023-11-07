import { useEffect, useState } from 'react'
import usePaginatedFetch from 'hooks/usePaginatedFetch'
import config from 'config'
import { {{cookiecutter.resource_name_singular}}FromAPI } from '../transformers'
import { useTranslation } from 'react-i18next'
import { useSnackbar } from 'notistack'
import RetryButtonSnackbar from 'components/RetryButtonSnackbar'

export default function useFetch{{cookiecutter.resource_name}}(filters) {
  const { t } = useTranslation()
  const { closeSnackbar, enqueueSnackbar } = useSnackbar()
  const [{{cookiecutter.resource_name}}, set{{cookiecutter.resource_name}}] = useState(null)
  const { doFetch, response, paginator, loading, error, retry } = usePaginatedFetch({
    url: `${config.api.ms{{cookiecutter.resource_name}}.baseUrl}/{{cookiecutter.resource_name}}`,
    filters,
  })

  useEffect(() => {
    if (!response) return

    const {{cookiecutter.resource_name}} = response.data.map(({{cookiecutter.resource_name_singular}}) => {{cookiecutter.resource_name_singular}}FromAPI({{cookiecutter.resource_name_singular}}, t))

    set{{cookiecutter.resource_name}}({{cookiecutter.resource_name}})
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

  return { {{cookiecutter.resource_name}}, paginator, loading, error, refresh: retry }
}
