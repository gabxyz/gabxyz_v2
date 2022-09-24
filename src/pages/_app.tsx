import Base from 'layouts/Base'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
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
