import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
const card = require("../constants/cardStyle.ts");
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
            className="dark:text-stone-400 text-stone-900 underline underline-offset-4"
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

        <div className={card.main}>
          <Link
            href="./account"
            className={card.a}
          >
            <h3 className={card.h}>account &rarr;</h3>
            <p className={card.p}>
              your account stuff (BETA UNFINISHED)
            </p>
          </Link>
          <a
            href="./scf?name=discord"
            className={card.a}
          >
            <h3 className={card.h}>discord server &rarr;</h3>
            <p className={card.p}>
              sobroom discord server!!!!!
            </p>
          </a>

          <a
            href="./scf?name=github"
            className={card.a}
          >
            <h3 className={card.h}>github page &rarr;</h3>
            <p className={card.p}>
              sobroom github organization
            </p>
          </a>
          <a href="https://ps.rrryfoo.cf"
            className={card.a}
          >
            <h3 className={card.h}>main site &rarr;</h3>
            <p className={card.p}>
              main ps site
            </p>
          </a>
          <a href="https://docs.ps.rrryfoo.cf"
            className={card.a}
          >
            <h3 className={card.h}>docs site &rarr;</h3>
            <p className={card.p}>
              ps docs
            </p>
          </a>
          <Link
            href="./scf?name=begforbeta"
          >
            <div className={card.a}>
              <h3 className={card.h}>beg for beta. &rarr;</h3>
              <p className={card.p}>maybe u get beta. maybe not. who knows</p>
            </div>
          </Link>
        </div>
      </main >
    </div >
  )
}

export default Home;