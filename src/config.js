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
    // add more microservices here
  },
}

export default config
