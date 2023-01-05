import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout'
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router'
function application({ Component, pageProps }: AppProps) {
  const router = useRouter();
  // page transition
  const variants = {
    initial: {
      y: 500,
      opacity: 1
    },
    animate: {
      y: 0,
      opacity: 1
    },
    exit: {
      opacity: 0,
    }
  }
  return (
    <>
      <Layout>
        <Head>
          <link rel="icon" href="/favicon.png" />
          <meta name="viewport" content="width=device-width, height=100vh, initial-scale=0.6" />
          <meta name="theme-color" content="#5284d9" />
        </Head>
        <div className="dark:bg-gray-800 bg-zinc-300 dark:text-[#FFFFFF]">
          <AnimatePresence>
            <motion.div
              key={router.route}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                y: { duration: 0.7 },
                opacity: { duration: 0.3 },
              }}
              variants={variants}>
              <br />
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </div>
      </Layout>
    </>
  )
}

export default application
