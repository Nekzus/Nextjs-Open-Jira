import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { darkThem, lightThem } from '../themes'
import { UIProvider } from '../context/ui'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
    <ThemeProvider theme={darkThem}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
    </UIProvider>
  )
}

export default MyApp
