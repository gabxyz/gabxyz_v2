import Head from 'next/head'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import * as Tooltip from '@radix-ui/react-tooltip'
import Base from 'layouts/Base'
import 'styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <Tooltip.Provider delayDuration={150}>
        <Head>
          <title>Gabxyz</title>
          <meta name="description" content="Personal portfolio project" />
        </Head>
        <Base>
          <Component {...pageProps} />
        </Base>
      </Tooltip.Provider>
    </ThemeProvider>
  )
}

export default App
