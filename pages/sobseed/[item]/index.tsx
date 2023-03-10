import { useRouter } from 'next/router';
import Link from 'next/link';
import { getSession } from 'next-auth/react';
const card = require('../../../constants/cardStyle.ts');
const s = require('../../../constants/styles.ts');
import Head from 'next/head'
export default function SobseedInd() {
  const router = useRouter();
  const item = router.query.item as string;
  const r = (Math.random() + 1).toString(36).substring(2);
  let releasePage = r + "/rel";
  if (item)
    return (
      <>
        <div className={s.container}>
          <Head>
            <title>sobroo - SobseedPS</title>
            <link rel="icon" href="/favicon.png" />
            <meta name="description" content="SobseedPS - sobroom's anime game private server 🥺🥺" />
            <meta name="theme-color" content="#27272a" />
          </Head>
          <main className={s.tags.main}>
            <h1 className={s.tags.h1.n1}>
              <a
                className={s.tags.a.n1}
                href="https://github.com/sobrooms/sobseed"
              >
                SobseedPS
              </a>
            </h1>
            <br />
            <p className={s.tags.a.n1}>
              SobseedPS is sobroom&apos;s own private server for an anime game
            </p>
            <div className={card.main}>
              <Link
                href={releasePage}
                className={card.a}
              >
                <h3 className={card.h}>releases &rarr;</h3>
                <p className={card.p.n2}>
                  builds of SobseedPS 😭
                </p>
                <p className={card.p.n2}>
                  Sobseed is actually &quot;WindSeed&quot; but replaced with &quot;Sob&quot; (thx lyuu for the idea)
                </p>
              </Link>
            </div>
          </main>
        </div>
      </>
    );
  else if (!item)
    return (
      <h1>interaction not found</h1>
    );
}
export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  return {
    props: {
      session
    },
  }
};