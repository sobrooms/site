import { useRouter } from 'next/router';
import Link from 'next/link';
const card = require('../../../constants/cardStyle.ts');
const st = require('../../../constants/styles.ts');
import Head from 'next/head';
export default function SobseedRel() {
  const router = useRouter();
  const item = router.query.item as string;
  const r = (Math.random() + 1).toString(36).substring(2);
  if (item)
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
            SobseedPS
          </a>
        </h1>
        <br />
        <p className={st.tags.a.n1}>
          <code className="dark:bg-gray-500 rounded-md bg-gray-100 p-3 font-mono text-lg">
            Sobseed is actually &quot;WindSeed&quot; but replaced with &quot;Sob&quot; (thx lyuu for the idea)
          </code>
        </p>

        <div className={card.main}>
          <Link
            href="../../SobSeed/builds/sobseed_v1.0.jar"
            className={card.a}
          >
            <h3 className={card.h}>SobseedPS v1.0 &rarr;</h3>
            <p className={card.p}>
              SobseedPS&apos;s first build. v1.0 should only work on 3.3 or below (can be higher version depending on resources)
            </p>
            <p className={card.p}>
              First release, so no changelog is gonna be put here...
            </p>
          </Link>
          <Link
            href="../../SobSeed/builds/sobseed_v2.0.jar"
            className={card.a}
          >
            <h3 className={card.h}>SobseedPS v2.0 &rarr;</h3>
            <p className={card.p}>
              SobseedPS&apos;s second build. v2.0 still only works on 3.3 or below.
            </p>
            <p className={card.p}>
              Change default ConfigContainer (the script that creates a config.json file if there isn’t any, which is located at: &quot;src/main/java/emu/grasscutter/config&quot;). Also, change EN-US.json translation
            </p>
          </Link>
        </div>
      </main>
    </div>
  )
}