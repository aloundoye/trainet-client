import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Questions() {
  const router = useRouter();

  useEffect(() => {
    router.push("/forums");
  });

  return "";
}
