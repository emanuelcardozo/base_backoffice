import { useCallback, useEffect, useState } from 'react'

export const useSelection = (items = []) => {
  const [selected, setSelected] = useState([])

  useEffect(() => {
    setSelected([])
  }, [])

  const handleSelectAll = useCallback(
    (callback) => {
      const updatedState = [...items]
      setSelected(updatedState)

      callback?.(updatedState)
    },
    [items]
  )

  const handleSelectOne = useCallback((item, callback) => {
    setSelected((prevState) => {
      const updatedState = [...prevState, item]
      callback?.(updatedState)

      return updatedState
    })
  }, [])

  const handleDeselectAll = useCallback((callback) => {
    setSelected([])
    callback?.([])
  }, [])

  const handleDeselectOne = useCallback((item, callback) => {
    setSelected((prevState) => {
      const updatedState = prevState.filter((_item) => _item !== item)
      callback?.(updatedState)

      return updatedState
    })
  }, [])

  return {
    handleDeselectAll,
    handleDeselectOne,
    handleSelectAll,
    handleSelectOne,
    selected,
  }
}
