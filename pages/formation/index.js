import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Formation() {
  const router = useRouter();

  useEffect(() => {
    router.push("/formations");
  });

  return "";
}
