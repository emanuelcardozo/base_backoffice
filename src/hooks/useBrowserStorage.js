export default function useBrowserStorage(storageIdentifier) {
  const persist = (data) => {
    window.localStorage.setItem(storageIdentifier, JSON.stringify(data))
  }

  const clear = () => {
    window.localStorage.removeItem(storageIdentifier)
  }

  const get = () => {
    const value = window.localStorage.getItem(storageIdentifier)

    if (value) {
      return JSON.parse(value)
    }

    return null
  }

  return { persist, get, clear }
}
