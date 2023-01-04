import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="dark:bg-gray-800 bg-zinc-100 dark:text-[#FFFFFF]">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
