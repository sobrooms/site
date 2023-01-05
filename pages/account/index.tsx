import { getSession } from "next-auth/react";
import Head from 'next/head';
import Link from "next/link";
import { useRouter } from 'next/router';
export default function Acc({ session }: any) {
  const route = useRouter()
  function goLogin() {
    if (process.browser) {
      route.push("/account/login")
    }
  }
  return (
    <>
      {!session && (
        <>
          <Head>
            <title>not signed in</title>
            <meta name="theme-color" content="#27272a" />
          </Head>
          {
            console.log({
              "session": false
            })
          }
          <>
            {
              // go to login page
              goLogin()
            }
          </>
        </>
      )}
      {/* if the user is logged into an account, show the page properly*/}
      {session?.user && (
        <>
          <Head>
            <title>account info - &quot;{session.user.name}&quot;</title>
            <meta name="theme-color" content="#27272a" />
          </Head>
          {
            console.log({
              "session": true,
              "name": session.user.name,
              "email": session.user.email,
            })
          }

          <main className="text-center items-center justify-center flex flex-col space-y-12">
            <span className="flex flex-col py-40 text-center items-center justify-center">
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={session?.user.image}
                  alt={session?.user.name + ' \'s avatar'}
                  height={120}
                  width={120}
                  className="border rounded-full shadow-xl"
                />
              </>
              <br />
              <span className="animate-[wave_3s_linear_infinite] text-6xl">👋🏻</span>
              <p className="text-4xl">Hello, {session.user.name}!</p>
              {session.user.email && (
                <small>email: {session.user.email}</small>
              )
              }
              <Link
                href="/account/logout"
                className="text-3xl underline"
              ><p />Sign out</Link>
              <br /><br /><br />
              <p className="">the information about your account (ex. username) will be saved for usage on some pages</p>
            </span>
          </main>
        </>
      )}
    </>
  )
}
export const getServerSideProps = async (context: any) => {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
};