import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { EntriesProvider } from '../context/entries'
import { UIProvider } from '../context/ui'
import { darkThem, lightThem } from '../themes'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EntriesProvider>
    <UIProvider>
    <ThemeProvider theme={darkThem}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
    </UIProvider>
    </EntriesProvider>
  )
}

export default MyApp
