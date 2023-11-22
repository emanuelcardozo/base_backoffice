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
    // add more microservices here
    msHijos: {
      baseUrl: import.meta.env.VITE_MS_HIJOS_API_URL,
    },
    msPokemones: {
      baseUrl: import.meta.env.VITE_MS_POKEMONES_API_URL,
    },
  },
}

export default config
