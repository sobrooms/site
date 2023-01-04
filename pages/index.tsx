import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>sobroo - home</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="sobroom!!" />
        <meta name="theme-color" content="#5284d9" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-4xl font-bold">
          <a 
            className="dark:text-stone-400 text-stone-300 underline underline-offset-4"
            href="https://discord.gg/ruVzdxWMUP"
          >
            sobroom
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          <code className="dark:bg-gray-500 rounded-md bg-gray-100 p-3 font-mono text-lg">
            sobroom = sob and pleadroom🥺😭
          </code>
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://discord.gg/JqUAc4T224"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">discord server &rarr;</h3>
            <p className="mt-4 text-xl">
              sobroom discord server!!!!!
            </p>
          </a>

          <a
            href="https://github.com/sobrooms"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">github page &rarr;</h3>
            <p className="mt-4 text-xl">
              sobroom github organization
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}

export default Home