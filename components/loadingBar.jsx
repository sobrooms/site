import { useRouter } from "next/router";
import { useEffect, useRef } from 'react';
import LoadingBar from "react-top-loading-bar";
export default function useLdb() {
  const loadingRef = useRef(null);
  const router = useRouter();
  useEffect(() => {

    const handleRouteChange = (url, { shallow }) => {

      // start the progress bar because the route is changed
      try {
        loadingRef.current.continuousStart();
      } catch (err) {

      }

    }

    const handleRouteComplete = (url, obj) => {

      // make the progress bar 100% because our route load is completed
      try {
        loadingRef.current.complete();
      } catch (err) {

      }
    }

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteComplete)

    return () => {

      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', handleRouteComplete);

      // complete the progress if component unmounted
      try {
        loadingRef.current.complete();
      } catch (err) {

      }

    }

  }, []);
  return (
    <LoadingBar color='#5d6ae3' height={4} ref={loadingRef} />
  )
}