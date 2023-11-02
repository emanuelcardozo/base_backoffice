const config = {
  snackbar: {
    maxSnack: 5,
  },
  api: {
    platform: 'Backoffice',
    baseUrl: import.meta.env.VITE_API_URL,
    msAuth: {
      baseUrl: import.meta.env.VITE_MS_AUTH_API_URL,
    },
    msCategories: {
      baseUrl: import.meta.env.VITE_MS_CATEGORIES_API_URL,
    },
    msTypes: {
      baseUrl: import.meta.env.VITE_MS_TYPES_API_URL,
    },
  },
}

export default config
