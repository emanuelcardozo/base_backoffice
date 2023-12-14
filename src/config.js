const config = {
  snackbar: {
    maxSnack: 5,
    autoHideDuration: 5000,
    preventDuplicate: false,
    variant: 'success',
  },
  snackbarError: {
    preventDuplicate: true,
    variant: 'error',
    maxSnack: 1,
  },
  api: {
    platform: 'Backoffice',
    baseUrl: import.meta.env.VITE_API_URL,
    msAuth: {
      baseUrl: import.meta.env.VITE_MS_AUTH_API_URL,
    },
    // SCRIPT: automatic generated ms url will be placed here
  },
}

export default config
