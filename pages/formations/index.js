import Showcase from "@/components/UI/Showcase";
import styles from "@/styles/pages/Formations.module.css";
import Container from "@/components/UI/Container";
import { API_URL } from "@/config/index";

export default function Formations({ formations }) {
  console.log(formations);

  return (
    <div className={styles.formation}>
      <Showcase></Showcase>
      {formations.data.length === 0 && <h3>No events to show</h3>}
      <Container>
        Phasellus at nulla nec dui commodo ultricies at sit amet est. Nulla
        vitae rhoncus libero. Nam convallis mollis nulla. Phasellus efficitur
        aliquam elit id vestibulum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nullam facilisis quam elementum nisl consequat, non
        dictum lacus dictum. In sodales dolor sed libero suscipit, non laoreet
        sapien laoreet. Sed sollicitudin magna eu bibendum tempor. Aenean at dui
        et lorem cursus maximus ac quis nibh. Cras a sem justo. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Cras vulputate, lorem a ullamcorper pharetra, risus sapien
        scelerisque eros, eu tempor sem arcu vitae turpis. Etiam elementum
        feugiat viverra. Nunc sit amet erat nulla. Morbi bibendum nisi cursus
        dui faucibus, in molestie mi imperdiet. Aenean quis nulla eget turpis
        vestibulum facilisis. Quisque vehicula mi et metus venenatis tristique.
        Vivamus tempus purus ut varius venenatis. Integer at faucibus lectus.
        Quisque a egestas neque, eget rutrum felis. Sed malesuada porttitor
        justo at blandit. Quisque efficitur, urna vel blandit porttitor, nibh
        dolor scelerisque metus, in pellentesque nisl ligula a sem. Aenean
        condimentum ex at dignissim placerat. Vivamus euismod augue eget laoreet
        mattis. Mauris congue elit nec lectus semper molestie. Integer id tortor
        lectus. Suspendisse potenti. Morbi tellus augue, consectetur vitae ante
        vel, scelerisque malesuada nisl. Sed tempor convallis ullamcorper. Cras
        sapien augue, tristique ut ipsum sed, sagittis laoreet dui. Vivamus
        tellus leo, vulputate a lacinia sed, auctor at urna. Duis euismod
        consectetur varius. Sed ullamcorper quis odio lacinia facilisis. Proin
        lacinia, nisi vel pulvinar maximus, nisi justo porttitor dolor,
        condimentum dictum orci magna ac magna. Mauris egestas metus in massa
        tempus, ac lobortis ligula aliquam. Praesent suscipit pretium pharetra.
        Ut tempus feugiat enim. Aenean non purus odio. Proin vehicula aliquam
        maximus. In ut metus mattis, semper ante nec, tempor libero. Donec
        venenatis sodales ex quis molestie. Cras non blandit nibh, eget
        ultricies arcu. Donec pharetra odio tincidunt ex accumsan, id tristique
        ex accumsan. Fusce maximus est a gravida tincidunt. Suspendisse lorem
        urna, scelerisque sed dui sed, finibus consequat lorem. Donec nec turpis
        et massa aliquam vulputate. Mauris pretium, ipsum ac ullamcorper
        pulvinar, orci lorem finibus neque, nec eleifend purus risus tempor
        eros. Quisque luctus libero at metus rhoncus auctor. Nunc pretium
        eleifend quam ut posuere.
      </Container>
    </div>
  );
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

  const response = await fetch(`${API_URL}/api/formations?${query}`);
  const formations = await response.json();

  return {
    props: { formations },
    revalidate: 1,
  };
}
