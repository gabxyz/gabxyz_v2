import type { AppProps } from 'next/app'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gabxyz</title>
        <meta name="description" content="Personal portfolio project" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
