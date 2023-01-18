import { useRouter } from "next/router";
import type { NextPage } from "next";
const ghSobsd: NextPage = () => {
  const router = useRouter();
  if (process.browser) {
    router.push("https://github.com/sobrooms/sobseed")
  }
}