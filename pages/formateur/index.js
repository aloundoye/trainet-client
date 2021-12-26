import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Formateur() {
  const router = useRouter();

  useEffect(() => {
    router.push("/formateurs");
  });

  return "";
}
