import Head from 'next/head'
import Link from 'next/link'
const Custom404 = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>sobroo - 404 not found</title>
        <meta name="description" content="sobroom!!" />
        <meta name="theme-color" content="#5284d9" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-4xl font-bold">
          404 Page not found
        </h1>
        <p className="text-4xl">
          😭 page not found
        </p>
        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <Link
            href="/"
          >
            <div className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
              <h3 className="text-2xl font-bold">go back &larr;</h3>
              <p className="mt-4 text-xl">
                go back to main page
              </p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Custom404