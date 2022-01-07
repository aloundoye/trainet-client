import { API_URL } from "@/config/index";

export default function OrganismesFormations({ ecoles }) {
  return "Organismes Formations";
}

export async function getStaticProps() {
  const qs = require("qs");
  const query = qs.stringify(
    {
      populate: "image",
    },
    {
      encodeValuesOnly: true,
    }
  );

  const response = await fetch(`${API_URL}/api/ecoles${query}`);
  const ecoles = await response.json();

  return { props: { ecoles }, revalidate: 1 };
}
