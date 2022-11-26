import Head from 'next/head'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import Base from 'layouts/Base'
import 'styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <Head>
        <title>Gabxyz</title>
        <meta name="description" content="Personal portfolio project" />
      </Head>
      <Base>
        <Component {...pageProps} />
      </Base>
    </ThemeProvider>
  )
}

export default App
