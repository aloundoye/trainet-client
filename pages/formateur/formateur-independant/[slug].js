import { API_URL } from "@/config/index";
export default function FormateurIndependant() {
  return "FormateurIndependant";
}

export async function getStaticPaths() {
  const response = await fetch(`${API_URL}/api/formateurs`);
  const formateurs = await response.json();

  const paths = formateurs.data.map((formateur) => ({
    params: { id: formateur.id },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params: { id } }) {
  const qs = require("qs");
  const query = qs.stringify(
    {
      populate: "image",
    },
    {
      encodeValuesOnly: true,
    }
  );

  const response = await fetch(`${API_URL}/api/formateurs/${id}`);
  const formateur = response.json();

  return { props: { formateur: formateur.data[0].attributes }, revalidate: 1 };
}
