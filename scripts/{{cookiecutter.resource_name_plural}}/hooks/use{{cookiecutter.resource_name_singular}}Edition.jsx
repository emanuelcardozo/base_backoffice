import { useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSnackbar } from 'notistack'
import { useNavigate } from 'react-router-dom'
import useFetch from 'hooks/useFetch'

import config from 'config'

import RetryButtonSnackbar from 'components/RetryButtonSnackbar'
import { {{cookiecutter.resource_name_singular|lower}}ToAPI } from '../transformers/index.js'

export default function use{{cookiecutter.resource_name_singular}}Edition(id) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { response, doFetch, loading, error } = useFetch(
    `${config.api.ms{{cookiecutter.resource_name_plural}}.baseUrl}/{{cookiecutter.resource_name_plural|lower}}/${id}`,
    {
      method: 'PATCH',
    }
  )
  const { closeSnackbar, enqueueSnackbar } = useSnackbar()

  const onSubmit = useCallback(
    (data) => {
      doFetch({ data: {{cookiecutter.resource_name_singular|lower}}ToAPI(data) })
    },
    [doFetch]
  )

  useEffect(() => {
    if (!response) return

    navigate('/{{cookiecutter.resource_name_plural|lower}}')

    const message = t('editedSuccessfully', {
      name: response.data.name,
      type: t('features:{{cookiecutter.resource_name_plural}}:singular'),
    })

    enqueueSnackbar(message)
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

  return { onSubmit, loading }
}
