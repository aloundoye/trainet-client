import { API_URL } from "@/config/index";

export default function Formation({ formation }) {
  console.log(formation);

  return "Formation";
}

export async function getStaticPaths() {
  const response = await fetch(`${API_URL}/api/formations`);
  const formations = await response.json();

  const paths = formations.data.map((formation) => ({
    params: { slug: formation.attributes.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params: { slug } }) {
  const qs = require("qs");
  const query = qs.stringify(
    {
      filters: {
        slug: { $eq: slug },
      },
      populate: "image",
    },
    {
      encodeValuesOnly: true,
    }
  );

  const response = await fetch(`${API_URL}/api/formations?${query}`);
  const formation = await response.json();

  return {
    props: {
      formation: formation.data[0].attributes,
    },
    revalidate: 1,
  };
}
