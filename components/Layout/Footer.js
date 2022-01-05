import Container from "@/components/UI/Container";
import styles from "@/styles/components/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  library.add(fab);

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.flex_container}>
          <section className={styles.infos}>
            <Image src="/images/logo-trainet.png" width="212px" height="55px" />

            <p>
              TRAINET, le portail de la formation professionnelle continue en
              Afrique
            </p>
            <a href="tel:+221338242538">+221 33 824 25 38</a>
            <a href="mailto:contact@trainet.net">
              <span>@</span>contact@trainet.net
            </a>
            <a href="/">www.trainet.net</a>
          </section>

          <section className={styles.column_section}>
            <div className={styles.nous_suivre}>
              <a href="https://www.facebook.com/" target="_blank">
                <FontAwesomeIcon icon={["fab", "facebook-f"]} />
              </a>
              <a href="https://twitter.com/" target="_blank">
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </a>
              <a href="https://www.linkedin.com/" target="_blank">
                <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <FontAwesomeIcon icon={["fab", "youtube"]} />
              </a>
            </div>
            <div className={styles.column}>
              <h3>Vous voulez améliorer vos compétences ?</h3>
              <Link href="/formations">
                <a>
                  <span>&raquo;</span> Découvrir les formations
                </a>
              </Link>
              <Link href="/formations">
                <a>
                  <span>&raquo;</span> Inscrivez-vous aux formations
                </a>
              </Link>
              <Link href="/formateurs/formateurs-independants">
                <a>
                  <span>&raquo;</span> Recrutez des formateurs indépendants
                </a>
              </Link>
              <Link href="/forums">
                <a>
                  <span>&raquo;</span> Posez vos questions sur le forum
                </a>
              </Link>
              <Link href="/formateurs">
                <a>
                  <span>&raquo;</span> Echangez avec les experts et pro.
                </a>
              </Link>
            </div>
          </section>

          <section className={styles.column_section}>
            <div className={styles.search_container}>
              <span>@</span>
              <input type="text" name="search" placeholder="Adresse Email" />
              <button type="submit" className={styles.search_button}>
                Je m'abonne à la Newsletter
              </button>
            </div>

            <div className={styles.row}>
              <div className={styles.column}>
                <h3>Vous êtes un organisme de formation ?</h3>
                <Link href="/formations">
                  <a>
                    <span>&raquo;</span> Inscrire votre organisme
                  </a>
                </Link>
                <Link href="/formations">
                  <a>
                    <span>&raquo;</span> Publiez vos formations
                  </a>
                </Link>
                <Link href="/formateurs/formateurs-independants">
                  <a>
                    <span>&raquo;</span> Suivez et répondez aux candidatures
                  </a>
                </Link>
                <Link href="/forums">
                  <a>
                    <span>&raquo;</span> Contrôlez les statistiques de votre
                    offre
                  </a>
                </Link>
                <Link href="/formateurs">
                  <a>
                    <span>&raquo;</span> Recrutez des formateurs indépendants
                  </a>
                </Link>
              </div>

              <div className={styles.column}>
                <h3>Vous êtes un formateur indépendant ?</h3>
                <Link href="/formations">
                  <a>
                    <span>&raquo;</span> Inscrivez-vous comme formateur
                  </a>
                </Link>
                <Link href="/formations">
                  <a>
                    <span>&raquo;</span> Publiez votre profil et vos formations
                  </a>
                </Link>
                <Link href="/formateurs/formateurs-independants">
                  <a>
                    <span>&raquo;</span> Consultez et répondez aux propositions
                  </a>
                </Link>
                <Link href="/forums">
                  <a>
                    <span>&raquo;</span> Réalisez les missions
                  </a>
                </Link>
                <Link href="/formateurs">
                  <a>
                    <span>&raquo;</span> Faîtes-vous payer vos honoraires
                  </a>
                </Link>
              </div>
            </div>
          </section>
        </div>

        <div className={styles.bottomline}>
          <div className={styles.copyright}>
            <p>
              Copyright © 2015 - {new Date().getFullYear()}{" "}
              <strong>MARKESA</strong> Sarl. Tous droits réservés
            </p>
          </div>
          <div className={styles.jolof}>
            <p>
              Plateforme développée par <strong>Jolof Digital</strong>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
