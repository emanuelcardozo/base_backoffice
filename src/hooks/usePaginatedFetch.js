import { useState, useEffect } from 'react'
import useFetch from './useFetch'

const usePaginatedFetch = ({ initialPerPage = 10, initialPage = 0, url, filters, config }) => {
  const [perPage, setPerPage] = useState(initialPerPage)
  const [page, setPage] = useState(initialPage)

  const paginatedConfig = {
    ...config,
    params: { ...filters, limit: perPage, page: page + 1 },
  }
  const {
    doThrottledFetch: doFetch,
    retry,
    response,
    loading,
    error,
  } = useFetch(url, paginatedConfig)

  useEffect(() => {
    setPage(initialPage)
  }, [initialPage, filters, perPage])

  useEffect(() => {
    if (doFetch) {
      doFetch()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doFetch])

  return {
    doFetch,
    retry,
    response,
    paginator: {
      total: response?.pagination?.count || 0,
      page: response?.pagination?.currentPage - 1 || page,
      setPage,
      perPage: response?.pagination?.perPage || initialPerPage,
      setPerPage,
    },
    loading,
    error,
  }
}

export default usePaginatedFetch
