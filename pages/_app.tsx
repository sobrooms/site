import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, height=100vh, initial-scale=0.6"/>
      </Head>
      <div className="dark:bg-gray-800 bg-zinc-100 dark:text-[#FFFFFF]">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
