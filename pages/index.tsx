import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
const card = require("../constants/cardStyle.ts");
const st = require('../constants/styles.ts')
const Home: NextPage = () => {
  let r = (Math.random() + 1).toString(36).substring(2);
  let sobseedLnk = "./sobseed/" + r + "/";
  return (
    <div className={st.container}>
      <Head>
        <title>sobroo - home</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="sobroom!!" />
      </Head>

      <main className={st.main}>
        <h1 className={st.tags.h1.n1}>
          <a
            className={st.tags.a.n1}
            href="https://discord.gg/ruVzdxWMUP"
          >
            sobroom
          </a>
        </h1>
        <br />
        <p className={st.tags.a.n1}>
          sobroom = sob and pleadroom🥺😭
        </p>

        <div className={card.main}>
          <Link
            href="./account"
            className={card.a}
          >
            <h3 className={card.h}>account &rarr;</h3>
            <p className={card.p.n2}>
              your account stuff (BETA UNFINISHED)
            </p>
          </Link>
          <a
            href="./scf?name=discord"
            className={card.a}
          >
            <h3 className={card.h}>discord server &rarr;</h3>
            <p className={card.p.n2}>
              sobroom discord server!!!!!
            </p>
          </a>

          <a
            href="./scf?name=github"
            className={card.a}
          >
            <h3 className={card.h}>github page &rarr;</h3>
            <p className={card.p.n2}>
              sobroom github organization
            </p>
          </a>
          <a href="https://ps.rrryfoo.cf"
            className={card.a}
          >
            <h3 className={card.h}>main site &rarr;</h3>
            <p className={card.p.n2}>
              main ps site
            </p>
          </a>
          <a href="https://docs.ps.rrryfoo.cf"
            className={card.a}
          >
            <h3 className={card.h}>docs site &rarr;</h3>
            <p className={card.p.n2}>
              ps docs
            </p>
          </a>
          <Link
            href="./scf?name=begforbeta"
          >
            <div className={card.a}>
              <h3 className={card.h}>beg for beta. &rarr;</h3>
              <p className={card.p.n2}>maybe u get beta. maybe not. who knows</p>
            </div>
          </Link>
          <Link
            href={sobseedLnk}
          >
            <div className={card.a}>
              <h3 className={card.h}>SobSeedPS &rarr;</h3>
              <p className={card.p.n2}>sobroom&apos;s first ps 🥺🥺</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Home;