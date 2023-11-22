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
    msAnimalazos: {
      baseUrl: import.meta.env.VITE_MS_SKILLS_API_URL,
    },
    msPokemones: {
      baseUrl: import.meta.env.VITE_MS_POKEMONES_API_URL,
    },
    // add more microservices here
    msJauria: {
      baseUrl: import.meta.env.VITE_MS_JAURIA_API_URL,
    },
    msMates: {
      baseUrl: import.meta.env.VITE_MS_MATES_API_URL,
    },
    msCompus: {
      baseUrl: import.meta.env.VITE_MS_COMPUS_API_URL,
    },
    msComidas: {
      baseUrl: import.meta.env.VITE_MS_COMIDAS_API_URL,
    },
  },
}

export default config
