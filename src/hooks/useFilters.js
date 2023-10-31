import { useCallback, useMemo, useState } from 'react'
import _ from 'lodash'

export default function useFilters() {
  const [isOpenFilters, setIsOpenFilters] = useState(false)
  const [filters, setFilters] = useState({})

  const onCancel = useCallback(() => setIsOpenFilters(false), [])
  const openFilters = useCallback(() => setIsOpenFilters(true), [])
  const onApply = useCallback((filters) => {
    const filledFilters = _.omitBy(filters, (value) => {
      return (
        (_.isArray(value) && _.isEmpty(value)) ||
        (_.isString(value) && _.isEmpty(_.trim(value))) ||
        value === null ||
        value === undefined
      )
    })
    setFilters(filledFilters)
    setIsOpenFilters(false)
  }, [])

  const count = useMemo(() => Object.keys(filters).length, [filters])

  return { isOpenFilters, openFilters, onCancel, onApply, count, filters }
}
