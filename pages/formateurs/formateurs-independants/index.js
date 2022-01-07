import { API_URL } from "@/config/index";

export default function FormateursIndependants({ formateurs }) {
  return "Formateurs Independants";
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

  const response = await fetch(`${API_URL}/api/formateurs${query}`);
  const formateurs = await response.json();

  return { props: { formateurs }, revalidate: 1 };
}
