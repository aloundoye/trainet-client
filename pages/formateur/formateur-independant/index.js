import { useRouter } from "next/router";
import { useEffect } from "react";

export default function FormateursIndependants() {
  const router = useRouter();

  useEffect(() => {
    router.push("/formateurs/organismes-formations");
  });

  return "";
}
