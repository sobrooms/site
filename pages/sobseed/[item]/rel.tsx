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
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
          <title>sobroo - sobseed/releases</title>
          <link rel="icon" href="/favicon.png" />
          <meta name="description" content="SobseedPS - Releases" />
          <meta name="theme-color" content="#27272a" />
        </Head>

        <main className={st.main}>
          <br /><br />
          <h1 className={st.tags.h1.n1}>
            <a
              className={st.tags.a.n1}
              href="https://discord.gg/ruVzdxWMUP"
            >
              Latest version of SobseedPS
            </a><br />
            ----------------------------------
          </h1>
          <div className={card.main}>
          <Link
              href="../../SobSeed/builds/sobseed_v2.1.1.jar"
              className={card.a}
            >
              <h3 className={card.h}>SobseedPS v2.1.1 &rarr;</h3>
              <p className={card.p}>
                Fourth build
              </p>
              <p className={card.p}>
                fix windy command and add /sob command :pleading_face:
              </p>
            </Link>
          </div>
          <br /><br />
          <h1 className="text-4xl font-bold">
            ----------------------------------<br />
            Other versions of SobseedPS<br />
            ----------------------------------
          </h1>
          <div className={card.main}>
            <Link
              href="../../SobSeed/builds/sobseed_v1.0.jar"
              className={card.a}
            >
              <h3 className={card.h}>SobseedPS v1.0 &rarr;</h3>
              <p className={card.p}>
                SobseedPS&apos;s first build. v1.0 should only work on 3.3 or below (can be higher version depending on resources, when i say this i meant 3.3.50)
              </p>
              <p className={card.p}>
                First release, so no changelog is gonna be put here...
              </p>
            </Link>
            <p className="opacity-0">----</p>
            <Link
              href="../../SobSeed/builds/sobseed_v2.0.jar"
              className={card.a}
            >
              <h3 className={card.h}>SobseedPS v2.0 &rarr;</h3>
              <p className={card.p.n1}>
                SobseedPS&apos;s second build. v2.0 still only works on 3.3
              </p>
              <p className={card.p.n1}>
                Change default ConfigContainer (the script that creates a config.json file if there isn’t any, which is located at: &quot;src/main/java/emu/grasscutter/config&quot;). Also, change EN-US.json translation
              </p>
            </Link>
            <Link
              href="../../SobSeed/builds/sobseed_v2.1.jar"
              className={card.a}
            >
              <h3 className={card.h}>SobseedPS v2.1 &rarr;</h3>
              <p className={card.p}>
                Third build!!
              </p>
              <p className={card.p}>
                Add /windy command, add windy path config to ConfigContainer
              </p>
            </Link>
          </div>
          <br /><br />
        </main>
      </div>
    )
}