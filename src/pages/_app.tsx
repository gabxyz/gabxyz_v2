import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { darkTheme, globalStyles } from 'stitches.config'

function App({ Component, pageProps }: AppProps) {
  globalStyles()
  return (
    <ThemeProvider
      attribute="class"
      value={{ light: 'light-theme', dark: darkTheme.className }}
      disableTransitionOnChange
    >
      <Head>
        <title>Gabxyz</title>
        <meta name="description" content="Personal portfolio project" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
