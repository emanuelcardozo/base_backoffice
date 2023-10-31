import { CacheProvider } from '@emotion/react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { enUS, esES } from '@mui/material/locale'
import { SnackbarProvider } from 'notistack'
import AuthProvider from 'features/Auth/contexts/AuthProvider'
import AuthConsumer from 'features/Auth/contexts/AuthConsumer'
import { createTheme } from 'src/theme'
import { createEmotionCache } from 'src/utils/create-emotion-cache'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import 'simplebar-react/dist/simplebar.min.css'
import Routes from 'routes'
import { useTranslation } from 'react-i18next'
import config from 'src/config'
import ErrorPage from 'features/Errors/ErrorPage'
import { ConfirmProvider } from 'material-ui-confirm'
import { es, enUS as en } from 'date-fns/locale'
import Interceptors from 'src/utils/Interceptors'

const SplashScreen = () => null
const themeLangMap = {
  es: esES,
  en: enUS,
}

const LOCALE_MAP = { es, en }

const App = () => {
  const emotionCache = createEmotionCache()
  const { i18n } = useTranslation()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const themeLang = themeLangMap[i18n.language]
  const theme = createTheme(themeLang)

  return (
    <BrowserRouter>
      <CacheProvider value={emotionCache}>
        <Interceptors>
          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            adapterLocale={LOCALE_MAP[i18n.language]}
          >
            <AuthProvider>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <SnackbarProvider maxSnack={config.snackbar.maxSnack}>
                  <ErrorBoundary fallback={<ErrorPage status="500" reloadDocument />}>
                    <ConfirmProvider>
                      <AuthConsumer>
                        {(auth) => (auth.isLoading ? <SplashScreen /> : <Routes />)}
                      </AuthConsumer>
                    </ConfirmProvider>
                  </ErrorBoundary>
                </SnackbarProvider>
              </ThemeProvider>
            </AuthProvider>
          </LocalizationProvider>
        </Interceptors>
      </CacheProvider>
    </BrowserRouter>
  )
}

export default App
