import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Sujets() {
  const router = useRouter();

  useEffect(() => {
    router.push("/forums");
  });

  return "";
}
