import { useRouter } from "next/router";
function useGh() {
  const router = useRouter();
  if (process.browser) {
    router.push("https://github.com/sobrooms/sobseed")
  }
}
export default useGh