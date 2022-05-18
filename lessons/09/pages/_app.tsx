import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { SWRConfig, SWRConfiguration } from 'swr';
import fetcher from '../util/fetch'

const swrConfig: SWRConfiguration = { fetcher }

function MyApp({ Component, pageProps }: AppProps) {

  const isServer = typeof window === undefined
  
  React.useEffect(() => {
    console.log('log')
    console.log(isServer)
  }, [isServer])

  return (
    <SWRConfig value={swrConfig}>
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default MyApp
