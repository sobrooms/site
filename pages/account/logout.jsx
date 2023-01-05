import { signOut, getCsrfToken, getProviders, getSession } from 'next-auth/react'
import styles from '../../styles/signin.module.css'
import Head from 'next/head'
import { useRouter } from 'next/router'
const Signout = ({ csrfToken, providers, session }) => {
  const route = useRouter();
  function loginPage() {
    if (process.browser) {
      route.push("../account/login")
    }
  }
  function doAction() {
    console.log(
      {
        "logout": "iprg",
        "before_sign": session.user.name + " " + session.user.email
      }
    )
    return signOut();
  }
  return (

    <>
      <Head>
        <title>Log out</title>
        <meta name="theme-color" content="#27272a" />
      </Head>
      {!session && (
        <>
          <div className="text-center justify-center items-center py-40">
            <h1 className="text-5xl">Please wait...</h1>
          </div>
          {loginPage()}
        </>
      )
      }
      {session?.user && (
        <div style={{ overflow: 'hidden', position: 'relative' }}>
          <div className={styles.wrapper} />
          <div className={styles.content}>
            <div className={styles.cardWrapper}>
              <h1 className="text-3xl">Are you sure you would like to sign out of your account &quot;{session.user.name}&quot;?</h1>
              <div className={styles.cardContent}>
                <input name='csrfToken' type='hidden' defaultValue={csrfToken} />

                <button onClick={() => doAction()}>
                  Log out of {session.user.name}
                </button>
              </div>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
        </div>
      )}
      )
    </>
  )
}

export default Signout

export async function getServerSideProps(context) {
  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);
  const session = await getSession(context);
  return {
    props: {
      providers,
      csrfToken,
      session
    },
  }
}