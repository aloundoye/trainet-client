import { useRouter } from "next/router";
import { useEffect } from "react";

export default function OrganismesFormations() {
  const router = useRouter();

  useEffect(() => {
    router.push("/formateurs/organismes-formations");
  });

  return "";
}
