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
    msHolas: {
      baseUrl: import.meta.env.VITE_MS_HOLAS_API_URL,
    },
    msPokemones: {
      baseUrl: import.meta.env.VITE_MS_POKEMONES_API_URL,
    },
    msRpuebas33: {
      baseUrl: import.meta.env.VITE_MS_RPUEBAS33_API_URL,
    },
    msPruebas: {
      baseUrl: import.meta.env.VITE_MS_PRUEBAS_API_URL,
    },
  },
}

export default config
