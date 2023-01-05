import NavBar from './navbar';
import LoadingBar from './loadingBar'
export default function Layout({ children }) {
  return (
    <>
      <LoadingBar />
      <NavBar />
      <main>{children}</main>
    </>
  )
}