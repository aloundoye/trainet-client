import { API_URL } from "@/config.index";

export default function OrganismeFormation({ecole}) {
  console.log(ecole);
  return "OrganismeFormation";
}

export async function getStaticPaths() {
  const response = await fetch(`${API_URL}/api/ecoles`);
  const ecoles = await response.json();

  const paths = ecoles.data.map((ecole) => ({
    params: { slug: ecole.attributes.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params: { slug } }) {
  const qs = require("qs");
  const query = qs.stringify(
    {
      filter: { slug: { $eq: slug } },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const response = await fetch(`${API_URL}/api/ecoles${query}`);
  const ecole = await response.json();

  return { props: { ecole: ecole.data[0].attributes }, revalidate: 1 };
}
