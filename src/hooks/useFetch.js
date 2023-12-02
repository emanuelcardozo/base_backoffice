import { useState, useCallback, useEffect } from 'react'
import axios from 'axios'
import i18next from 'i18next'
import qs from 'qs'
import { debounce } from '@mui/material'

const convertNullableValuesToEmptyStringWhenMultipartRequest = (requestConfig) => {
  if (
    requestConfig?.data &&
    requestConfig.headers &&
    requestConfig?.headers['Content-Type'] === 'multipart/form-data'
  ) {
    Object.keys(requestConfig.data).map((key) => {
      if (requestConfig.data[key] === null || requestConfig.data[key] === undefined) {
        requestConfig.data[key] = ''
      }
    })
  }

  return requestConfig
}

const useFetch = (url, config = {}, debounceWait = 100) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [lastFetchParams, setLastFetchParams] = useState(null)
  const [response, setResponse] = useState(undefined)
  const { pollingInterval } = config

  /** This function returns a promise for chain function purposes. TODO: Evaluate a refactor. */
  const doFetch = useCallback(
    async (params = {}, options = {}) => {
      const { isPollingFetch } = options

      setLoading(!isPollingFetch)
      setError(null)
      setResponse(null)
      setLastFetchParams(params)
      const requestConfig = convertNullableValuesToEmptyStringWhenMultipartRequest({
        url,
        ...config,
        ...params,
        // Netcore recibe los arrays como key=val1&key=val2&key=val3 y no como key[]=val1&key[]=val2&key[]=val3
        paramsSerializer: (params) => {
          return qs.stringify(params, { arrayFormat: 'repeat' })
        },
      })

      try {
        const response = await axios.request(requestConfig)

        setResponse(response.data)
        setLoading(false)
        return Promise.resolve(response.data)
      } catch (err) {
        setError({
          message: err?.response?.data?.error?.message || i18next.t('common:genericError'),
        })
        setLoading(false)
        return Promise.reject(err?.response?.data?.error?.message)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [url, JSON.stringify(config)]
  )

  const doThrottledFetch = useCallback(
    async (params = {}) => {
      debounce(doFetch ? doFetch(params) : null, debounceWait)
    },
    [doFetch, debounceWait]
  )
  const retry = useCallback(
    (options = {}) => {
      doFetch(lastFetchParams, options)
    },
    [lastFetchParams, doFetch]
  )

  useEffect(() => {
    if (!pollingInterval) return

    const pollingTimer = setInterval(() => {
      retry({ isPollingFetch: true })
    }, pollingInterval)

    return () => {
      if (!pollingInterval) return
      clearInterval(pollingTimer)
    }
  }, [retry, pollingInterval])

  return { doFetch, doThrottledFetch, response, loading, error, retry }
}

export default useFetch
