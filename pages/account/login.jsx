import { signIn, getProviders, getSession } from 'next-auth/react'
import styles from '../../../styles/signin.module.css'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Signin = ({ providers, session }) => {
  const route = useRouter()
  function accountPage() {
    if (process.browser) {
      route.push("./")
    }
  }
  const router = useRouter();
  const { error } = router.query;
  function handleError() {
    // this shows messages when there is an error in the "error" query parameter
    if (error === "OAuthCallback") {
      return (
        "Try signing in with a different provider. (ex. GitHub instead of Discord)"
      )
    } else if (error === "OAuthSignin") {
      return (
        "Error in constructing an authorization URL"
      )
    } if (error === "OAuthCreateAccount") {
      return "Could not create OAuth provider user in the database"
    } else if (error === "Callback") {
      return "Error"
    } if (error === "OAuthAccountNotLinked") {
      return "This email is already in use."
    } else if (error === "EmailSignin") {
      return "Could not send a verification token to that email."
    } if (error === "CredentialsSignin") {
      return "Error"
    } else if (error === "Default") {
      return "You have encountered an error, but we do not know what caused it."
    } if (error === "undefined" || error === undefined || error === "") {
      return ""
    } else if (error) {
      return ""
    }
  }
  return (
    <>
      <Head>
        <title>log in</title>
        <meta name="theme-color" content="#27272a" />
      </Head>
      {!session && (
        <div style={{ overflow: 'hidden', position: 'relative' }}>
          <div className={styles.wrapper} />
          <div className={styles.content}>
            <div className={styles.cardWrapper}>
              <small className="text-sm"></small>
              <h1 className="text-5xl">Login</h1>
              <div className={styles.cardContent}>
                {error && (
                  <>
                    <div className="text-black">
                      <p>{"" + handleError() + " (" + error + ")"}</p>
                    </div>
                    <br />
                  </>
                )}
                {providers &&
                  Object.values(providers).map(provider => (
                    <div key={provider.name} style={{ marginBottom: 0 }}>
                      <button onClick={() => signIn(provider.id, { callbackUrl: router.query.callbackUrl })} >
                        Sign in/register using{' '} {provider.name}
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
        </div>
      )
      }
      {/* go to login page if there is an existing session */}
      {session?.user && (
        <div style={{ overflow: 'hidden', position: 'relative' }}>
          <div className={styles.wrapper} />
          <div className={styles.content}>
            <div className={styles.cardWrapper}>
              {accountPage()}
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
        </div>
      )}

    </>
  )
}

export default Signin;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  const session = await getSession(context);
  return {
    props: {
      providers,
      session
    },
  }
}